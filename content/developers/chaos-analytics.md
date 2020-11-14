---
title: Chaos Analytics

intro: ''
redirect_from:
  - /developers/chaos-analytics
versions:
  free-pro-team: '*'
---
Click on “Analytics” present on the left sidebar to view an interactive graphical visualization of your chaos experiments over time with the related resilience metrics. These analytics can be segregated and viewed as Litmus dashboard, Kubernetes dashboards, data sources or you can view the gist of overall analytics for the portal on the Overview screen.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/AnalyticsOverview.png" width="800"></center>
<br>
<br>
<p style="color:white;font-size:20px;">Litmus Dashboard:</p>
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/LitmusDashboard.png"></center>
<br>
<br>
The Litmus dashboard displays a list of workflows and their details. To get detailed analytics for a particular workflow click on “See analytics” corresponding to the workflow name.
This screen contains a graphical representation of executed tests, detailed information about each of these tests, their results,  points and the execution date and the overall resilience score.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/WorkflowUnderground.png"></center>
<br>
<br>
You can also compare the resilience score of multiple workflows by selecting the workflows from Litmus Dashboard under Analytics section and then clicking on the “compare workflows” button.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/WorkflowComparision.png"></center>
<br>
<br>
<p style="color:white;font-size:20px;">Kubernetes Dashboard:</p>
It displays all the available dashboards  and other related information such as agent name, data source, dashboard type etc. To view the analytics associated with each of these dashboards, click on  the three dots corresponding to dashboard name and select “See Analytics”.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/KubernetesDashboardSeeAnalytics.png"></center>
<br>
<br>
This displays the Chaos and memory usage metrics for the selected dashboard.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/KubernetesDashboardAnalytics.png" width="800"></center>
<br>
<br>
<p style="color:white;font-size:20px;">Adding a new dashboard:</p>
To add a new dashboard, click on “Add a new Dashboard”, this displays a list of data sources that can be selected for the dashboard for real time monitoring.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/SelectADashboard.png"></center>
<br>
<br>
Next, you need to configure the new dashboard. Specify the details, select the data source, type and agent name. Once done, save these configurational settings and a new dashboard will be generated.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/NewDashboardGenerated.png"></center>
<br>
<br>
<p style="color:white;font-size:20px;">Data Sources:</p>
Kubera chaos gives you the ability to view analytics based on data sources as well. For the current Kubera version we support analytics from Prometheus, other data sources are in roadmap. This screen displays the available data sources, its status and other related information.
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/DataSource.png"></center>
<br>
<br>
 To add a new data source click on “Add a Data Source” and select the data source from the available list displayed on the screen.
 <br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/DataSourceList.png"></center>
<br>
<br>
Next, you need to configure the new data source. Specify the source information, end points, Authentication details. You can choose to have no authentication, by selecting “No Auth” checkbox
 <br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/ConfigureNewDataSource.png"></center>
<br>
<br>
Once all the details are filled in click on “Save”. A new data source will now be connected to your portal. 
<br>
<br><center><img class="image-with-border" src="/assets/images/developer/Analytics/DataSourceAdded.png"></center>
<br>
<br>

