---
title: Creating new chaos workflows

intro: ''
redirect_from:
  - /developers/creating-new-chaos-workflows
versions:
  free-pro-team: '*'
---
<br>
<p style="color:white;font-size:20px;">Scheduling workflow:</p>
Click on workflows present on the left side bar, you will get a list of available agents. You can either select the target Kuberentes cluster from the list or install Litmus agents to other Kubernetes Clusters to run the workflow. 
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/Available ListOfClusters.png"></center>
<br>
<br>
Next, select a workflow from the list of predefined workflows or create your own customised workflow. 
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/Select-a-new-chaos-workflow.png"></center>
<br>
<br>
The next screen displays the auto-generated YAML for the selected workflow.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/FinaYAML.png" width="800"></center>
<br>
<br>
Clicking on next, the screen displays weights of each experiment in the workflow, you can adjust these points as per your requirement. 
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/weights.png"></center>
<br>
<br>
Once all the configuration settings for workflows are done, you can simulate the workflow run by clicking on the “Demo Launch” button. This would simulate the workflow and provide you with a suggested reliability score.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/Simulate.png"></center>
<br>
<br>
You are not all set to schedule your first Chaos workflow. Clicking on next, you will get an option to set a time for the workflow to trigger. Kuber Chaos also gives you the ability to schedule workflows at recurring intervals. 
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/SetSchedule.png"></center>
<br>
<br>
The next screen displays the summary of the workflow. In case you want to edit a part of a workflow you can still go back to the section from the edit tab and update the required. If everything looks as expected, click on Commit.  
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/create-new-workflows/WorkflowDeployed.png"></center>
<br>
<br>