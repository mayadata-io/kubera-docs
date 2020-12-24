---
title: Getting started with Kubera 
shortTitle: QuickStart
#intro: Setup KuberaEnterprise on kubernetes
versions:
  free-pro-team: '*'
---
Kubera Enterprise is a software that helps with the running of Kubernetes as a data plane. Kubera is installed on any Kubernetes using helm. Typical steps involved in setting up Kubera in your environment will include the following steps.

- Check pre-requisites such as helm and default storage classes in your Kubernetes cluster
- Install Kubera using helm
- Configure Kubera for secure https, onboard users
- Launch and configure Kubera modules - Propel and Chaos

### Prerequisites

Before you install using Kubera helm chart, make sure the following pre-requisites are met.

- Kubernetes version 1.12.0 or above with RBAC enabled.
- Availability of  2 vCPU and 4GB memory for all of the Kubera components.
- Default storage class is configured on your Kuberenetes
### Installing Helm v3
To get started, ensure you have Helm v3 (v3.0.2 or above) installed. <u><a href="https://helm.sh/docs/intro/install/" target="_blank">Click here</a></u> to know the detailed steps for installation. 
<br><br>

---

*Note*: If you are installing Kubera in air gap environement, see the  [air gap quickstart](Air-Gapped-environments)

---



### Installing Kubera
In order to install Kubera, you need to add the repository to your helm's configuration. To add the repository, execute:
<pre>helm repo add kubera <a href="https://charts.mayadata.io/">https://charts.mayadata.io/</a></pre>

In this document, we will be deploying the Kubera components in kubera namespace.
To create a new namespace, execute:
<pre>kubectl create ns kubera</pre>

Next, execute the below mentioned command to install Kubera with default values, 
or to install with domain and https "[Click here](/kubera-enterprise/installation-with-tls)".

<pre>helm install kubera kubera/kubera-enterprise -n kubera</pre>
<br>
Sample Output:
<br>
<pre style="color:#9966ff">
NAME: kubera
LAST DEPLOYED: Sun Dec 13 20:50:20 2020
NAMESPACE: kubera
STATUS: deployed
REVISION: 1
TEST SUITE: None
</pre>   
<br><br>
To install kubera with custom configuration, get the <b><u><a href="https://github.com/mayadata-io/kubera-charts/blob/master/kubera-enterprise/values.yaml" target="_blank">values.yaml</a></u></b> to your local repo, and edit it as per your requirment.	<br>
 Edit/add the required fields. Next, to install Kubera using the custom configuration, execute:
<pre>helm install kubera kubera/kubera-enterprise  -f values.yaml -n kubera</pre> 
<br>
Verify the status of the pods.:
<pre>
kubectl get pods -n kubera
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                                               READY   STATUS    RESTARTS   AGE
kubera-core-server-55d5bcd6d5-gqg7b                2/2     Running   3          24m
kubera-core-ui-86b5d4fbc6-tbb62                    1/1     Running   0          24m
kubera-ingress-nginx-controller-5969799668-s74bn   1/1     Running   0          24m
kubera-mongodb-0                                   1/1     Running   0          24m
</pre>
<b>Note</b>: 

<ul>
<li>Installation process can take upto few minutes, as it requires allocation of resources, starting of services etc.</li></ul>
<br>

### Accessing Kubera

<br>

Kubera runs a management end point through a service called `Kubera-ingress-nginx=controller`. Access Kubera from your browser using the **External_clusterIP:port** combination. 


To get the port number, execute:

<pre>
kubectl get svc -n kubera
</pre>


*Sample Output:*

<pre style="color:#9966ff">
NAME                                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
kubera-core-server                          ClusterIP   10.100.87.127    none         9002/TCP,9003/TCP            13h
kubera-core-ui                              ClusterIP   10.100.206.16    none         9091/TCP                     13h
<b>kubera-ingress-nginx-controller             NodePort    10.100.31.67     none         80:30080/TCP,443:30443/TCP   13h</b>
kubera-ingress-nginx-controller-admission   ClusterIP   10.100.83.160    none         443/TCP                      13h
kubera-mongodb                              ClusterIP   10.100.127.128   none         27017/TCP                    13h
kubernetes                                  ClusterIP   10.100.0.1       none         443/TCP                      2d13h
</pre>
The IP address and port should be taken from the service <b>kubera-ingress-nginx-controller</b> .
<br> <br>



http://&lt;clusterIP&gt;:&lt;port&gt; gives you the login screen. Use the following default credentials to start and change the username and password. 

<blockquote>
Initial default Kubera credentials are as follows:
<br>Username- admin<br>
Password- kubera
</blockquote>



<br>
<a href="/assets/images/kubera-login.png" target="_blank"><img class="image-with-border" src="/assets/images/kubera-login.png"></a>
<br>



After changing the default credentials, your Kubera Enterprise is ready for basic use. As next steps, see

- Configuring [HTTPS for Kubera Enterprise](installation-with-tls)
- Configuring [GitHub social authentication](ghauth)
- Onboarding [users](User-management)

