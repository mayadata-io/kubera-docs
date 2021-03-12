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
- Configure Kubera for secure HTTPS, onboard users
- Launch and configure Kubera modules - Propel and Chaos

### Prerequisites

Before you install using the Kubera helm chart, make sure the following pre-requisites are met.

- Kubernetes version 1.12.0 or above with RBAC enabled.
- Availability of  2 vCPU and 4GB memory for all of the Kubera components.
- Default storage class is configured on your Kubernetes
### Installing Helm v3
To get started, ensure you have Helm v3 (v3.0.2 or above) installed. <u><a href="https://helm.sh/docs/intro/install/" target="_blank">Click here</a></u> to learn the detailed steps for installation. 
<br><br>

---

*Note*: If you are installing Kubera in an Air-gap environement, see the  [air-gap quickstart](Air-Gapped-environments)

---



Installing Kubera requires a storage class that can be used for volume provisioning. By default the <code>storageClassName</code> is set to <code>" "</code> which disables dynamic provisioning and utilises default storage class. To use a different storage class(needed in OnPrem setups) follow the below mentioned steps:
<br><br>
<b>Create a storage class</b>
<br><br>
A storage class, named <code>local-storage</code> needs to be created. Copy the given YAML and update <code>spec.nodeAffinity.required.nodeSelectorTerms.matchExpressions.values</code> (highlighted in red) with the node name.
<pre>
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: data-kubera-mongodb
spec:
  capacity:
    storage: 8Gi
  volumeMode: Filesystem
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  claimRef:
    name: datadir-kubera-mongodb-0
    namespace: kubera
  local:
    path: /var
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - <font color="red">worker-0</font>
</pre>   
Next, patch the storage class with the following command:
<pre>
kubectl patch storageclass local-storage -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
</pre>
<hr>

### Installing Kubera
<br>
<blockquote>
<b>NOTE:</b> Upgrades within TechPreview is <b>not</b> supported, as each version might have breaking changes. It is recommended to reinstall Kubera for upgrades.
</blockquote>
<br>
<ul>
<li>To install Kubera, you need to add the repository to your helm's configuration. To add the repository, execute:
<pre>helm repo add kubera <a href="https://charts.mayadata.io/">https://charts.mayadata.io/</a></pre>
</li>
<li>In this document, we will be deploying the Kubera components in kubera namespace.
To create a new namespace, execute:
<pre>kubectl create ns kubera</pre>
</li>
<li>Next, execute the below-mentioned command to install Kubera with default values, 
or to install with domain and HTTPS <a href="https://kubera-docs.mayadata.io/en/free-pro-team@latest/kubera-enterprise/installation-with-tls" target="_blank">Click here</a>.

<pre>helm install kubera kubera/kubera-enterprise -n kubera</pre>
<br>
Sample Output:
<br>
<pre style="color:#9966ff">
NAME: kubera
LAST DEPLOYED: Fri Feb  5 15:45:31 2021
NAMESPACE: kubera
STATUS: deployed
REVISION: 1
TEST SUITE: None
</pre>   
<center><b>OR</b></center>
<br><br>
To install Kubera with custom configuration, get the <b><u><a href="https://github.com/mayadata-io/kubera-charts/blob/master/kubera-enterprise/values.yaml" target="_blank">values.yaml</a></u></b> to your local repo, and edit it as per your requirement.	<br>
 Edit the required fields. Next, install Kubera using the custom configuration:
<pre>helm install kubera kubera/kubera-enterprise  -f values.yaml -n kubera</pre> 
</li>
<br>
<li>
Verify the status of the pods.:
<pre>
kubectl get pods -n kubera
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                                               READY   STATUS    RESTARTS   AGE
agent-gateway-server-7f846678f5-4md8p              1/1     Running   0          7m40s
agent-gateway-server-7f846678f5-56hsm              1/1     Running   0          7m40s
agent-gateway-server-7f846678f5-pgxs9              1/1     Running   0          7m40s
kubera-core-server-7c76dfff4c-jwjlj                2/2     Running   5          7m40s
kubera-core-ui-5bf7596869-nr87p                    1/1     Running   0          7m40s
kubera-ingress-nginx-controller-5969799668-hst2x   1/1     Running   0          7m40s
kubera-mongodb-0                                   1/1     Running   0          7m40s
</pre>
<br>
<blockquote>
<b>Note</b>: 
The installation process can take several minutes, as it requires provisioning resources and starting instances.
</blockquote>
<br>
</li>       
</ul>

### Accessing Kubera

<br>

Kubera runs a management endpoint through a service called `Kubera-ingress-nginx=controller`. Access Kubera from your browser using the **External_clusterIP:port** combination. 


To get the port number, execute:

<pre>
kubectl get svc -n kubera
</pre>


*Sample Output:*

<pre style="color:#9966ff">
NAME                                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
agent-gateway-server                        ClusterIP   10.100.229.127   <none>        8080/TCP,8081/TCP            8m27s
kubera-core-server                          ClusterIP   10.100.212.39    <none>        9002/TCP,9003/TCP            8m27s
kubera-core-ui                              ClusterIP   10.100.141.248   <none>        9091/TCP                     8m27s
kubera-ingress-nginx-controller             NodePort    10.100.199.21    <none>        80:30080/TCP,443:30443/TCP   8m27s
kubera-ingress-nginx-controller-admission   ClusterIP   10.100.213.88    <none>        443/TCP                      8m27s
kubera-mongodb                              ClusterIP   10.100.110.143   <none>        27017/TCP                    8m27s
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
<a href="/assets/images/LoginToKubera.png" target="_blank"><img class="image-with-border" src="/assets/images/LoginToKubera.png"></a>
<br>



After changing the default credentials, your Kubera Enterprise is ready for basic use. For the next steps, see

- Configuring [HTTPS for Kubera Enterprise](installation-with-tls)
- Configuring [GitHub social authentication](ghauth)
- Onboarding [users](User-management)

