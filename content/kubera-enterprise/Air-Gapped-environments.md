---
title: Setting up Kubera in Air Gap Environments
shortTitle: Air Gap Quickstart
#intro: 'You can use {% data variables.product.prodname_desktop %} to create and manage a Git repository without using the command line.'
redirect_from:
  - /kubera-enterprise/Air-Gapped-environments
versions:
  free-pro-team: '*'
---
Here users will find the instructions on deploying Kubera Enterprise in a multi-node air-gapped or offline target machine that has no external Internet connectivity.

The steps in this document walk you through the process of installing Kubera Enterprise and its required images into an air-gapped environment.


# Pre-requisites:



*   An internal local image registry. We will push all the required images to this registry and pull images from here. We have used the Harbor registry , users can use any registry available.
*   Images those should be available or pushed to local registry
    *   mayadataio/kubera-core-server:ci
    *   mayadataio/kubera-core-ui:ci
    *   mayadataio/kubera-auth:ci
    *   bitnami/mongodb:4.4.1-debian-10-r13
    *   k8s.gcr.io/ingress-nginx/controller:v0.40.2
    *   jettech/kube-webhook-certgen:v1.3.0
    *   k8s.gcr.io/defaultbackend-amd64
    *   mayadataio/kubera-litmus-webui:ci
    *   mayadataio/kubera-litmus-server:ci
    *   mayadataio/kubera-propel-server:latest
    *   mayadataio/kubera-propel-webapp:latest
*   A default storage class should be available on the target cluster. We you are going to use OpenEBS storageclass then you have to make sure that all the required images for OPenEBS are available on the local registry. To mark a storage class as default storage class use the following command.

```kubectl patch storageclass <storage class name> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'```


*   Helm should be installed on the target cluster. Here we are using helm version 3.


# Steps To Install Kubera Enterprise:



*   Download and copy the kubera-charts zip file to the target cluster. You can download the zip file to some device having internet connection and then copy it to the target cluster.
*   To download the the zip file visit [https://github.com/mayadata-io/kubera-charts](https://github.com/mayadata-io/kubera-charts) and refer the screenshot below.

    
<br><br>
<a href="/assets/images/Airgap1.png" target="_blank"><img class="image-with-border" src="/assets/images/Airgap1.png"></a>
<br><br>

*   Now extract the zip file.
*   Now go to the kubera-enterprise using below commands

```cd kubera-charts/kubera-enterprise```


*   Now edit the values.yaml and update your docker registry values with your local registry values. An example of the updated values the yaml:

<pre style="color:#9966ff">
platform: Default
imagePullSecret: ""
domain: ""
basepath: ""
chaospath: "chaos"
propelpath: "propel"
scheme: "http"
image:
   registry: 10.56.100.100
   organization: mayadataio
   tag: ci
mongodb:
   auth:
       rootPassword: password
   global:
       imagePullSecrets: []
       storageClass: ""
   image:
       registry: 10.56.100.100
       repository: mayadataio/mongodb
       tag: 4.4.1-debian-10-r13
ingress-nginx:
   imagePullSecrets: []
   controller:
       kind: DaemonSet
       image:
           repository: 10.56.100.100/mayadataio/ingress-nginx-controller
           tag: v0.40.2
       service:
           type: LoadBalancer
           #type: NodePort
           #nodePorts:
               #http: 30080
               #https: 30443
       admissionWebhooks:
           patch:
               enabled: true
               image:
                   repository: 10.56.100.100/mayadataio/kube-webhook-certgen
                   tag: v1.3.0
   defaultBackend:
       enabled: false
       image:
           repository: 10.56.100.100/mayadataio/defaultbackend-amd64
           tag: "1.5"
</pre> 


*   While retagging the images and pushing images to local registry the digest of the images will change. We have to update the the digest of the ingress-nginx-controller image in the sub chart for ingress-nginx-controller.
*   To find the digest of the retagged image use below command:

```docker inspect --format='{{range $sha := .RepoDigests}}{{$sha}}{{"\n"}}{{end}}' $img_name```



Example:


<pre style="color:#9966ff">
root@airgap-m:~# docker inspect --format='{{range $sha := .RepoDigests}}{{$sha}}{{"\n"}}{{end}}' 10.56.100.100/mayadataio/ingress-nginx-controller:v0.40.2
10.56.100.100/mayadataio/ingress-nginx-controller@sha256:0100c173327bbb124c76ea1511dade4cec718234c23f8e7a41f27ad03f361431
</pre> 




*   Now we have to update the digest value for  ingress-nginx-controller. Follow the below steps.

```cd charts/ingress-nginx```


*   Now edit the values.yaml and update the digest value obtained from previous command.

Example:


<pre style="color:#9966ff">
## nginx configuration
## Ref: https://github.com/kubernetes/ingress-nginx/blob/master/controllers/nginx/configuration.md
##
controller:
  image:
    repository: k8s.gcr.io/ingress-nginx/controller
    tag: "v0.40.2"
    digest: sha256:0100c173327bbb124c76ea1511dade4cec718234c23f8e7a41f27ad03f361431
    pullPolicy: IfNotPresent
    # www-data -> uid 101
    runAsUser: 101
    allowPrivilegeEscalation: true
</pre>




*   Now we have to **install Kubera Enterprise**.Use the below commands to install. You can update the values of **release name>** and **namespace>** as per your requirement. User has to make sure the is present on the target cluster. If not then first create the namespace using below command.

``` kubectl create ns <namespace name>```



Example:


<pre style="color:#9966ff">
root@airgap-m:~/kubera-charts/kubera-enterprise# kubectl create ns kubera
namespace/kubera created
</pre>




*   Now **install Kubera Enterprise** using below command.

```helm install <release-name> <namespace> .```



Example:


<pre style="color:#9966ff">
root@airgap-m:~/kubera-charts/kubera-enterprise# helm install kubera -n kubera .
NAME: kubera
LAST DEPLOYED: Wed Dec 16 14:57:45 2020
NAMESPACE: kubera
STATUS: deployed
REVISION: 1
TEST SUITE: None
</pre>




*   Verify all the pods are running using below command.

<pre style="color:#9966ff">
root@airgap-m:~/kubera-charts/kubera-enterprise# kubectl get pods -n kubera
NAME                                    READY   STATUS    RESTARTS   AGE
kubera-core-server-69648d4698-jrclh     2/2     Running   2          106m
kubera-core-ui-df47b7dc5-thbm4          1/1     Running   0          106m
kubera-ingress-nginx-controller-6cznz   1/1     Running   0          106m
kubera-ingress-nginx-controller-jmktg   1/1     Running   0          106m
kubera-ingress-nginx-controller-r9czx   1/1     Running   0          106m
kubera-mongodb-0                        1/1     Running   0          106m
</pre>


*   Now you can access Kubera Enterprise UI using the NodePort service of ingress-nginx-controller.

<pre style="color:#9966ff">
root@airgap-m:~/kubera-charts/kubera-enterprise# kubectl get svc -n kubera
NAME                                        TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
kubera-core-server                          ClusterIP      10.103.1.73      <none>        9002/TCP,9003/TCP            4m3s
kubera-core-ui                              ClusterIP      10.107.29.136    <none>        9091/TCP                     4m3s
kubera-ingress-nginx-controller             LoadBalancer   10.97.16.224     <pending>     80:31855/TCP,443:30307/TCP   4m3s
kubera-ingress-nginx-controller-admission   ClusterIP      10.107.232.239   <none>        443/TCP                      4m3s
kubera-mongodb                              ClusterIP      10.107.93.241    <none>        27017/TCP                    4m3s
</pre>

<br><br>
<a href="/assets/images/Airgap2.png" target="_blank"><img class="image-with-border" src="/assets/images/Airgap2.png"></a>
<br><br>



The default credentials are

Username: admin 

Password: kubera
