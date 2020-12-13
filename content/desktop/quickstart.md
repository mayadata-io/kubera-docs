---
title: Quickstart 
#intro: Setup KuberaEnterprise on kubernetes
versions:
  free-pro-team: '*'
---
### Quickstart
This guide serves as a concise documentation on how to install Kubera using <b>helm chart</b> with default values, onto the Kubernetes cluster. 
### Installing Helm v3
To get started, ensure you have Helm v3 (v3.0.2 or above) installed. <u><a href="https://helm.sh/docs/intro/install/" target="_blank">Click here</a></u> to know the detailed steps for installation. 
<br><br>
### Installing Kubera
In order to install Kubera, you need to add the repository to your helm’s configuration. To add the repository, execute:
<pre>helm repo add kubera <a href="https://charts.mayadata.io/">https://charts.mayadata.io/</a></pre>
<br><br>
Execute the below mentioned command to install Kubera with default values, 
 
<pre>helm install kubera kubera/kubera-enterprise</pre>
<br>
Sample Output:
<br>
<pre>
NAME: kubera
LAST DEPLOYED: Sun Dec 13 20:50:20 2020
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
</pre>  
This deploys kubera in default namespace. 
<br><br>
To install kubera with custom configuration, get the <b>values.yaml</b> to your local repo, and edit it as per your requirment. To get values.yaml, execute:
<pre>
wget https://charts.mayadata.io/values.yaml
</pre> 
 Edit/add the required fields. Next, to install Kubera using the custom configuration, execute:
<pre>helm install kubera kubera/kubera-enterprise  -f values.yaml</pre> 
<br><br>
Verify the status of the pods.:
<pre>
kubectl get pods -n &lt; kubera_namespace &gt;
</pre>
Sample Output:
<pre>
NAME                                               READY   STATUS    RESTARTS   AGE
kubera-core-server-55d5bcd6d5-gqg7b                2/2     Running   3          24m
kubera-core-ui-86b5d4fbc6-tbb62                    1/1     Running   0          24m
kubera-ingress-nginx-controller-5969799668-s74bn   1/1     Running   0          24m
kubera-mongodb-0                                   1/1     Running   0          24m
</pre>
<b>Note</b>: 
<ul><li>For default configurations, Kubera is deployed in default namespace.</li>
<li>Installation process can take upto few minutes, as it requires allocation of resources, starting of services etc.</li></ul>
<br><br>

Initial default Kubera credentials are as follows:
<br>Username- admin<br>
Password- Kubera
