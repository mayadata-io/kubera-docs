---
title: Adding new cluster to Propel
shortTitle: Adding new cluster to propel
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/adding-new-kubernetes-cluster-to-propel
versions:
  free-pro-team: '*'
---


### Adding new Kubernetes clusters to Propel:

* Go to <b>Clusters tab</b> and then click on <b>Manage clusters</b>. Here you can either select an existing cluster or you can add a new  cluster. 
<br><br>
<a href="/assets/images/ManageCluster.png" target="_blank"><img class="image-with-border" src="/assets/images/ManageCluster.png"></a>
<br><br>
* Click on <b>Add cluster</b> to add a new cluster to the existing list of clusters.
<br><br>
<a href="/assets/images/propel2.png" target="_blank"><img class="image-with-border" src="/assets/images/propel2.png"></a>
<br><br>
<br><br>
<a href="/assets/images/propel3.png" target="_blank"><img class="image-with-border" src="/assets/images/propel3.png"></a>
<br><br>
<br><br>
* To connect new agents to your portal, follow the below mentioned steps:
  - Go to your terminal and download Kuberactl latest binaries. To get Kuberactl binaries execute the below-mentioned command based your OS-
For Linux(64 bit),
<pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Linux_x86_64.tar.gz
</pre>
For Linux(32 bit),
<pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Linux_i386.tar.gz
</pre>
For Darwin,
<pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Darwin_x86_64.tar.gz
</pre>
Next, extract the .gz file.
<pre>tar -zxvf file_name</pre>
To verify the setup, execute:
<pre>./kuberactl version</pre>
Sample Output:
<pre>Kuberactl version:  v0.2.0</pre>
- <b>Registering an agent</b> To register a new propel agent, execute
<pre>./kuberactl propel agent register</pre>
 Next, you need to enter Kubera Core details to Login to your Kubera account. Fields to be filled in:
  - <b>Kubera Core URL</b>: Enter the URL used to access the Kubera UI.
  Example, http://106.51.78.18:5052/
  - <b>Username</b>: Enter your Kubera username.
  - <b>Password</b>: Enter your Kubera password.
<a href="/assets/images/RegisteringAgent.png" target="_blank"><img class="image-with-border" src="/assets/images/RegisteringAgent.png"></a>
Upon successful login, there will be list of exiting projects displayed on the terminal. Select the desired project by entering the sequence number indicated against it.
<a href="/assets/images/SelectProject.png" target="_blank"><img class="image-with-border" src="/assets/images/SelectProject.png"></a><br>
Next, enter the details of the new agent.
Fields to filled in:
  - <b>Agent Name</b>: Enter the name for the new agent.
  - <b>Agent Description</b>: Fill in details about the agent.
  - <b>Platform Name</b>: Enter the platform name on which this agent is hosted. Example, AWS, GCP, Rancher etc.
  - <b>Enter the namespace</b>: You can either enter an existing namespace or enter a new namespace. In cases where the namespace does not exist, Kubera creates it for you.
 <a href="/assets/images/AgentDetails.png" target="_blank"><img class="image-with-border" src="/assets/images/AgentDetails.png"></a>
Once, all these steps are implemented you will be able to see a summary of all the entered fields.
After verification of these details you can proceed with registration of the agent by entering Y. The process of registration might take upto few seconds.
<a href="/assets/images/ClusterConnected.png" target="_blank"><img class="image-with-border" src="/assets/images/ClusterConnected.png"></a>



* For the next steps, see <a href="https://kubera-docs.mayadata.io/en/free-pro-team@latest/kubera-propel/benchmarking-your-storage">Benchmarking your storage</a> . 
