---
title: Storage Configuration
shortTitle: Storage Configuration
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/configure-storage-nodes
versions:
  free-pro-team: '*'
---
### Configuring Nodes, Pools and Storage Classes

To configure your storage on this Kubernetes cluster, click on <b>Configure Storage on this Kubernetes cluster</b> card present on the right side of your screen.
<br><br>
<a href="/assets/images/KuberaPropel/PropelHomePage.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/PropelHomePage.png"></a>
<br><br>
* Kubera Propel gives the option to segregate storage and application nodes.

* Select the Nodes button which will help you in configuring your Storage Nodes and Application nodes.

* Select the nodes based on the performance and the hardware specifications.

* Kubernetes clusters allow you to label nodes. These labels can be used as a selection criteria and can be selected from Kubera Propel UI.


For configuring storage nodes, click on Configure Storage on Nodes and the Nodes will be auto-detected. Select all the Nodes and click on <b>Next</b>
<blockquote>
Each of these node details card display the state of the node. A node is identified as good/normal/bad based on available CPU, memory and HugePage configurations.
</blockquote>
<br><br>
<a href="/assets/images/KuberaPropel/SelectStorageNodes.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/SelectStorageNodes.png"></a>
<br><br>



* After the selection of storage nodes, you can configure the resources. Set the limits for Mayastor daemonset. Configure the CPU, memory and Huge Pages as per requirement. To dedicate the CPU only for Mayastor, check mark the box under CPU configuration card as shown in the figure.
<br><br>
<a href="/assets/images/KuberaPropel/ConfigureResources.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/ConfigureResources.png"></a>
<br><br>
* Next, configure the application nodes.

* Select the nodes with NVMe installed.

* Click on <b>Select All</b>, if you want to configure all the available nodes as Application Nodes.
<br><br>
<a href="/assets/images/KuberaPropel/SelectApplicationNodes.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/SelectApplicationNodes.png"></a>
<br><br>
The next page will list all the selected storage and application nodes with their resource limits: "HugePages, CPU, and Memory". Click on <b>Next</b>

Verify all the nodes selected for Storage and Application and click on <b>Apply</b>.
<br><br>
<a href="/assets/images/KuberaPropel/VerifyAndApply.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/VerifyAndApply.png"></a>
<br><br>
<br><br>
<a href="/assets/images/propel12.png" target="_blank"><img class="image-with-border" src="/assets/images/propel12.png"></a>
<br><br>

Verify the status of the pods. You should be able to see propel pods in running state.
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


next, verify the status of the pods in Mayastor namespace.
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
* Next, create Storage Pools and select the Storage Nodes to form the Pools.

* Either you click on “Select All” to form the Storage Pool with every Storage Node or you can manually select each Storage Node.

* Disk information can be obtained by selecting the individual disk attached to the Storage Node.

* Selecting  the Storage Node will display details such as “Disk Name”, “Size”, “Disk type” etc.

* You also have the flexibility  to select the disks connected with storage nodes depending upon your requirements as to- the disk type and file type supported.
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

* While creating the Storage Class, you can select the number of replicas required from the drop-down menu.

* The protocol can be selected as well from the same tab in the drop-down menu.

* The specific filesystem can be selected as well from the drop-down menu like “XFS”

* Click on the “Create Storage Classes” button after selecting all the options on the storage class screen.

* If everything is correct, the required Storage Class will be seen in the creation stage which will be visible on the screen.

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
<br><br>
<a href="/assets/images/propel16.png" target="_blank"><img class="image-with-border" src="/assets/images/propel16.png"></a>
<br><br>
This Storage Class can be used to <a href="/en/free-pro-team@latest/kubera-propel/deploying-a-sample-application" target="_blank">provision application(s)</a>.
