---
title: Adding new Kubernetes clusters to Propel
shortTitle: Storage Configuration
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/adding-new-kubernetes-cluster-to-propel
versions:
  free-pro-team: '*'
---

Adding new Kubernetes clusters to Propel
To add your Kubernetes cluster to the Kubera Propel:

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

* To set it up, select your newly added cluster and click on - Manage Clusters. 

<a href="/assets/images/propel5.png" target="_blank"><img class="image-with-border" src="/assets/images/propel5.png"></a>
<br><br>


* Kubera Propel gives the option to segregate storage and application nodes.

* Select the Nodes button which will help you in configuring your Storage Nodes and Application nodes.

* You can select the nodes which you want based on the performance and the hardware specifications of that node.

* Nodes can be labelled as well in the kubernetes cluster and the same can be used in the Kubera Propel UI as the selection criteria. Suppose if you want to select a particular  labelled node or group of nodes, the same can be selected from propel UI.

* Once the correct storage nodes have been selected as per requirement, click on "Next".
<br><br>
<a href="/assets/images/propel6.png" target="_blank"><img class="image-with-border" src="/assets/images/propel6.png"></a>
<br><br>

* After the selection of storage nodes, you can configure similarly the application nodes.

* Select the nodes with iscsi client installed. 

* You can also get the iscsi client installed from the Propel UI if required or you want to select a new application node which doesn’t have the iscsi client already installed.

* Click on "Select All", if you consider using all the nodes as Storage Nodes.

<br><br>
<a href="/assets/images/propel7.png" target="_blank"><img class="image-with-border" src="/assets/images/propel7.png"></a>
<br><br>

<br><br>
<a href="/assets/images/propel8.png" target="_blank"><img class="image-with-border" src="/assets/images/propel8.png"></a>
<br><br>


* Verify and apply if all the storage Nodes and application nodes have been selected. Similarly, we have to configure Pools, Storage Class.
<br><br>

<a href="/assets/images/propel9.png" target="_blank"><img class="image-with-border" src="/assets/images/propel9.png"></a>
<br><br>

* Create storage pools and select the Storage nodes to form the Pools.

* Either you click on “Select All” to form the storage pool with every storage node or you can select the storage node as per choice.

* Disk information can be obtained by selecting the individual disk attached to Storage Node.

* Selecting  the storage node will give details like “Disk Name” “Size” “Disk type” etc.

* You also get the flexibility  to select the disks connected with storage nodes as per requirement depending on the disk type and file type supported.


<a href="/assets/images/propel10.png" target="_blank"><img class="image-with-border" src="/assets/images/propel10.png"></a>


* Create Storage Classes by clicking on “Add Storage Class”

<a href="/assets/images/propel11.png" target="_blank"><img class="image-with-border" src="/assets/images/propel11.png"></a>

* While creating the storage class, you can select the number of replicas required from the drop down menu.

* Protocol can be selected as well from the same tab in the drop down menu. Iscsi was the required protocol so you can select that.

* Specific filesystem can be selected as well from the drop down menu like “xfs”

* Click on the “Create Storage Classes” button after selecting all the options in the storage class screen.

* If everything is correct, the required storage class will be seen in the creation stage which will be visible on the screen.

<a href="/assets/images/propel13.png" target="_blank"><img class="image-with-border" src="/assets/images/propel13.png"></a>

* You can skip the “Storage test” - ‘Create a Test’ button if you do not wish to perform the storage test.

* Finally the next screen below would give you the details of total number of Storage Nodes , Storage Classes , total number of volumes etc.

<br><br>
<a href="/assets/images/propelnew.png" target="_blank"><img class="image-with-border" src="/assets/images/propelnew.png"></a>
<br><br>
