---
title: Creating new chaos workflows
shortTitle: Chaos Workflows
intro: ''
redirect_from:
  - /kubera-chaos/creating-new-chaos-workflows
versions:
  free-pro-team: '*'
---
<br>
<b>Scheduling workflow:</b><br><br>

Click on <b>workflows</b> icon present on the left side bar, you will be directed to the Workflows dashboard. You can browse through available workflows, schedules and templates from this dashboard. To deploy a new flow click on <b>Schedule a workflow</b> button on the right top corner.
<br>
You will get a list of available agents. You can select the target Kuberentes cluster from the list to run the workflow. 
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/ScheduleAWorkflow.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/ChoosetargetNew.png"></a></center>
<br>
<br>

Next, select a workflow from the list of predefined workflows or create your own customised workflow. 
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/SelectWorkflow.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/SelectWorkflow.png"></a></center>
<br>
<br>
The next screen displays the auto-generated YAML for the selected workflow. In case, you need to edit any field(s), you can edit this YAML. The edited YAML will be verified. The chaos can only be injected to the agent, if the status of the YAML is <b>Correct</b>.
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/YAML.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/YAML.png" width="800"></a></center>
<br>
<br>
Clicking on next, the screen displays weights of each experiment in the workflow, you can adjust these points as per your requirement. 
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/WeightsOfExperimentsNew.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/WeightsOfExperimentsNew.png"></a></center>
<br>
<br>

You are not all set to schedule your first Chaos workflow. Clicking on next, you will get an option to set a time for the workflow to trigger. Kuber Chaos also gives you the ability to schedule workflows at recurring intervals. 
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/ScheduleWorkflowTime.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/ScheduleWorkflowTime.png"></a></center>
<br>
<br>
The next screen displays the summary of the workflow. In case, you want to edit a part of a workflow you can still go back to the section from the edit tab and update the required. If everything looks as expected, click on <b>Commit</b>.  
<br>
<br><center><a href="/assets/images/developer/create-new-workflows/Complete.png" target="_blank"><img class="image-with-border" src="/assets/images/developer/create-new-workflows/Complete.png"></a></center>
<br>
<br>
