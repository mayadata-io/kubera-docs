---
title: Deploying new Chaos agents

intro: ''
redirect_from:
  - /kubera-chaos/adding-new-clusters
versions:
  free-pro-team: '*'
---

To connect new agents to your portal, follow the below mentioned steps:
- Go to your terminal and download <b>Kuberactl</b> latest binaries. To get Kuberactl binaries execute the below-mentioned command based your OS- 
<br>
For Linux(64 bit), 
 <pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Linux_x86_64.tar.gz</pre>
 For Linux(32 bit),
<pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Linux_i386.tar.gz</pre>
 <br>
 For Darwin,
 <pre>wget http://asset.mayadata.io/kuberactl/latest/kuberactl_latest_Darwin_x86_64.tar.gz</pre>
 Next, extract the .gz file.
 <pre>tar -zxvf <b style="color:red">file_name</b></pre>
  <br>
  To verify the setup, execute:
  <pre>./kuberactl version</pre>
  Sample Output:
  <pre style="color:#9966ff">Kuberactl version:  v0.2.0</pre>
- <b>Registering an agent</b>
   To register a new chaos agent, execute:
   <pre>./kuberactl chaos agent register</pre> 
   Next, you need to enter Kubera Core details to Login to your Kubera account.
   Fields to be filled in:
   - <b>Kubera Core URL</b>: Enter the URL used to access the Kubera UI. <br>
      Example, <i>http://13.127.245.22:30080/</i> 
   - <b>Username</b>: Enter your Kubera username.
   - <b>Password</b>: Enter your Kubera password.
  <br>
<br><center><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/EnterKuberaDetails.png"></center>
<br>
  Upon successful login, there will be list of exiting projects displayed on the terminal. Select the desired project by entering the sequence number indicated against it.
  <br>
<br><center><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/ListOfProjects.png"></center>
<br>
<br>
  Next, select the installation mode. 
  In case the selected mode was <i>Cluster</i> there will a prerequisites check to verify clusterrole and clusterrolebindings. 
  <br>
<br><center><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/InstallationMode.png"></center>
<br>
  Next, enter the details of the new agent.<br>
  Fields to filled in:
  - <b>Agent Name</b>: Enter the name for the new agent.
  - <b>Agent Description</b>: Fill in details about the agent.
  - <b>Platform Name</b>: Enter the platform name on which this agent is hosted. <i>Example</i>, AWS, GCP, Rancher etc.
  - <b>Enter the namespace</b>: You can either enter an existing namespace or enter a new namespace. In cases where the namespace does not exist, Kubera creates it for you.
  - <b>Enter service account</b>: Enter a name for your service account. 
<br><center><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/AgentDetails.png"></center>
<br>
Once, all these steps are implemented you will be able to see a summary of all the entered fields. <br>After verification of these details you can proceed with registration of the agent by entering <b>Y</b>.
The process of registration might take upto few seconds.
<br><center><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/RegistrationSuccess.png"></center>
To verify, if the registration process was successful you can view the list of connected agents from the <b>Agent</b> section on your Kubera Chaos portal and ensure that the connected agent is in <i>Active State</i>. 
<br>
<br>
To view the list of all the agents connected to your portal go to the Agents section. This page displays the connected agents and their details such as their status, connection date, number of schedules, number of workflows etc. 
<br>
<br><center><a href="/assets/images/developer/adding-new-cluster/AgentDashboardNew.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/adding-new-cluster/AgentDashboardNew.png"></center>
