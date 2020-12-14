---
title: Troubleshooting
intro: ''
redirect_from:
  - /kubera-chaos/troubleshooting
versions:
  free-pro-team: '*'
---

<ol>
<li> <b>Chaos Experiments Pod-CPU-Hog and Pod-Memory-Hog can fail </b>
  <ul> <li>Cause - The predefined workflows are executed against kube-proxy, hence there can be a case where the experiment results can go into awaited state due to low resources in the system. </li>
  <li>Resolution - Restart kube-proxy and re run the workflow. Or use namespace scoped predefined experiment.</li></ul></li>

<li> <b>Chaos Schedule delete </b>
  <ul><li>Cause - The following issues can exist
    - Workflow run will be deleted from the table (you loose the history of scheduled runs)
    - Workflow cron would not be deleted from agent cluster</li>
  <li>Resolution- Delete the schedule from agent cluster</li> </ul></li>

<li> <b>Chaos workflow logs not visible</b>
   <ul><li>Cause - As part of revert chaos, objects would be cleaned up</li>
   <li> Resolution - Comment the revert chaos section in workflow yaml</li></ul></li>
   </ol>

