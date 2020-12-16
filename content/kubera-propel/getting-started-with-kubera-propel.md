---
title: Getting Started with Kubera Propel
shortTitle: Quickstart
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/getting-started-with-kubera-propel
versions:
  free-pro-team: '*'
---

<blockquote>
 Kubera Propel is an offering from MayaData to it’s enterprise grade customers. We offer a 15 day free trial license to all our customers.  
To know more about subscription and licensing <a href="https://kubera-docs.mayadata.io/en/free-pro-team@latest/kubera-enterprise/subscriptions">click here</a>.
</blockquote>

<br><br>
<br><br>
To get started with Kubera Propel, login to <u><a href="https://kubera-docs.mayadatastaging.io/en/free-pro-team@latest/kubera-enterprise/quickstart#accessing-kubera" target="_blank">Kubera</a></u> and click on <b>Start Kubera Propel</b>. This activates the Kubera Propel portal based on your subscription plan, or for new users starts a trial plan.
<br><br>
<a href="/assets/images/propel_main.png" target="_blank"><img class="image-with-border" src="/assets/images/propel_main.png"></a>
<br><br> 

Next, click on the navigation bar on the top left corner of your screen. This will provide you an option to switch between modules. Click on <b>Kubera propel</b> 
<br><br>

<br><br>
<a href="/assets/images/propel_license.png" target="_blank"><img class="image-with-border" src="/assets/images/propel_license.png"></a>
<br><br>
A new project will be created, for which you will be the administrator. Enter the project name and click on <b>Create a project</b>. 
<br><br>



<a href="/assets/images/propel1.png" target="_blank"><img class="image-with-border" src="/assets/images/propel1.png"></a>
<br><br>

You will now be redirected to Kubera Propel home screen.
<br><br>


<br><br>
<a href="/assets/images/propel5_new.png" target="_blank"><img class="image-with-border" src="/assets/images/propel5_new.png"></a>
<br><br>

Next, click on <b>Configure Storage on this kubernetes cluster</b>
<br><br>
<a href="/assets/images/propel6_new.png" target="_blank"><img class="image-with-border" src="/assets/images/propel6_new.png"></a>
<br><br>

Click on Configure Storage on Nodes and the nodes will be auto detected. Select all the nodes and click on <b>Next</b>
<br><br>
<a href="/assets/images/propel8.png" target="_blank"><img class="image-with-border" src="/assets/images/propel8.png"></a>
<br><br>


Next page will list all the selected storage nodes with their resource limits set like "HugePages, CPU and Memory". Click on <b>Next</b>
<br><br>
<a href="/assets/images/propel9.png" target="_blank"><img class="image-with-border" src="/assets/images/propel9.png"></a>
<br><br>

Select Application Nodes on the next scren and click on <b>Next</b>
<br><br>
<a href="/assets/images/propel10.png" target="_blank"><img class="image-with-border" src="/assets/images/propel10.png"></a>
<br><br>

Verify all the nodes selected selected for Storage and Application and click on <b>Apply</b>
<br><br>
<a href="/assets/images/propel11.png" target="_blank"><img class="image-with-border" src="/assets/images/propel11.png"></a>
<br><br>

<br><br>
<a href="/assets/images/propel12.png" target="_blank"><img class="image-with-border" src="/assets/images/propel12.png"></a>
<br><br>

Verify the status of the PODS.
<pre>
kubectl get pods
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                                               READY   STATUS    RESTARTS   AGE
kubera-core-server-7d44b9f5d5-c2qkl                2/2     Running   5          7m20s
kubera-core-ui-644564d7cf-c2vbt                    1/1     Running   0          7m20s
kubera-ingress-nginx-controller-69dff488c4-v6bs8   1/1     Running   0          7m20s
kubera-mongodb-0                                   1/1     Running   0          7m19s
propel-agent-controller-0                          1/1     Running   0          53s
propel-agent-subscriber-585df6ff5c-62tc5           1/1     Running   0          53s
propel-server-7b5cfd8467-qtzf5                     1/1     Running   0          3m5s
propel-webapp-7cdf65bcb7-7p5df                     1/1     Running   0          3m5s
</pre>


Verify the status of the PODS in mayastor namespace.
<pre>
kubectl get pods -n mayastor
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                    READY   STATUS    RESTARTS   AGE
mayastor-4f2ls          1/1     Running   0          6m35s
mayastor-csi-gjlv7      2/2     Running   0          6m36s
mayastor-csi-p968s      2/2     Running   0          6m36s
mayastor-csi-v6xvd      2/2     Running   0          6m36s
mayastor-nmxtl          1/1     Running   0          6m35s
mayastor-tszz2          1/1     Running   0          6m35s
moac-5d5649fd5c-hzmvd   3/3     Running   0          6m36s
nats-5fc4d79d66-lpgjd   1/1     Running   0          6m36s
</pre>


Click on <b>Create Pools</b>
<br><br>
<a href="/assets/images/propel12.png" target="_blank"><img class="image-with-border" src="/assets/images/propel12.png"></a>
<br><br>

Select the disks and click on <b>Next</b>
<br><br>
<a href="/assets/images/propel13.png" target="_blank"><img class="image-with-border" src="/assets/images/propel13.png"></a>
<br><br>

Click on <b>Add Storage Class</b> 
<br><br>
<a href="/assets/images/propel14.png" target="_blank"><img class="image-with-border" src="/assets/images/propel14.png"></a>
<br><br>

Click on <b>Create Storage Class</b> and select the number of replicas and the protocol as nvmf
<br><br>
<a href="/assets/images/propel15.png" target="_blank"><img class="image-with-border" src="/assets/images/propel15.png"></a>
<br><br>

Verify the status of StorageClass.
<pre>
kubectl get sc 
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                  PROVISIONER               RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
gp2 (default)         kubernetes.io/aws-ebs     Delete          WaitForFirstConsumer   false                  63m
mayastor-nvmf-209dg   io.openebs.csi-mayastor   Delete          Immediate              false                  6m13s
</pre>

This StorageClass can be used to provision applications by the user.

<br><br>
<a href="/assets/images/propel16.png" target="_blank"><img class="image-with-border" src="/assets/images/propel16.png"></a>
<br><br>
