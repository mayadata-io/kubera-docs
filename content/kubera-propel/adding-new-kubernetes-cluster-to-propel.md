---
title: Configure Storage Nodes
shortTitle: Storage Configuration
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/adding-new-kubernetes-cluster-to-propel
versions:
  free-pro-team: '*'
---

* Kubera Propel gives the option to segregate storage and application nodes.

* Select the Nodes button which will help you in configuring your Storage Nodes and Application nodes.

* You can select the nodes which you want based on the performance and the hardware specifications of that node.

* Nodes can be labelled as well in the kubernetes cluster and the same can be used in the Kubera Propel UI as the selection criteria. Suppose if you want to select a particular  labelled node or group of nodes, the same can be selected from propel UI.


For configuring storage nodes, click on Configure Storage on Nodes and the nodes will be auto detected. Select all the nodes and click on <b>Next</b>
<br><br>
<a href="/assets/images/propel8.png" target="_blank"><img class="image-with-border" src="/assets/images/propel8.png"></a>
<br><br>



* After the selection of storage nodes, you can configure similarly the application nodes.

* Select the nodes with iscsi client installed.

* You can also get the iscsi client installed from the Propel UI if required or you want to select a new application node which doesn’t have the iscsi client already installed.

* Click on "Select All", if you consider using all the nodes as Storage Nodes.

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

Verify the status of the PODS. You should be able to see propel PODS created.
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

<br><br>
* Next create storage pools and select the Storage nodes to form the Pools.

* Either you click on “Select All” to form the storage pool with every storage node or you can select the storage node as per choice.

* Disk information can be obtained by selecting the individual disk attached to Storage Node.

* Selecting  the storage node will give details like “Disk Name” “Size” “Disk type” etc.

* You also get the flexibility  to select the disks connected with storage nodes as per requirement depending on the disk type and file type supported.
<br><br>
Click on <b>Create Pools</b>
<br><br>
<a href="/assets/images/propel12.png" target="_blank"><img class="image-with-border" src="/assets/images/propel12.png"></a>
<br><br>

Select the disks and click on <b>Next</b>
<br><br>
<a href="/assets/images/propel13.png" target="_blank"><img class="image-with-border" src="/assets/images/propel13.png"></a>
<br><br>

Click on <b>Add Storage Class</b> 

* While creating the storage class, you can select the number of replicas required from the drop down menu.

* Protocol can be selected as well from the same tab in the drop down menu. Iscsi was the required protocol so you can select that.

* Specific filesystem can be selected as well from the drop down menu like “xfs”

* Click on the “Create Storage Classes” button after selecting all the options in the storage class screen.

* If everything is correct, the required storage class will be seen in the creation stage which will be visible on the screen.

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


<b>Adding new Kubernetes clusters to Propel:</b>

* Click on the "Clusters tab". Here you can either select an existing cluster or you can add a new    cluster. 
* Click on "Add new cluster" to get a new cluster added to the existing list of clusters if any.
<br><br>
<a href="/assets/images/propel2.png" target="_blank"><img class="image-with-border" src="/assets/images/propel2.png"></a>
<br><br>
<br><br>
<a href="/assets/images/propel3.png" target="_blank"><img class="image-with-border" src="/assets/images/propel3.png"></a>
<br><br>
<br><br>
* Copy and execute the lines of code visible in the Pop-Up screen on your command prompt to connect your cluster with Propel. After successfully executing the command in the kubernetes cluster command prompt, click on the tab which says: “Connect the cluster”.

* Once it is done, the newly added cluster will be visible in the “clusters” tab.

<a href="/assets/images/propel4.png" target="_blank"><img class="image-with-border" src="/assets/images/propel4.png"></a>



* Once the cluster is added, you need to set the “Storage Workflow” as the next step. 

* To set it up, select your newly added cluster and click on - <b>Manage Clusters</b>. 
