---
title: Benchmarking your storage
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /admin/benchmarking-your-storage
versions:
  free-pro-team: '*'
---

Benchmarking helps us to gain an understanding about your underlying infrastructure and also co-relate and ensure if the environments have been correctly set up. Storage benchmarking has always taken precedence and importance when your environment stack has stateful applications. They are still useful for burn-in testing and it's always beneficial to perform stress tests on the system with additional loads.
Similarly using Kubera Propel, you can perform the Storage test.

To perform the storage test, you need to “Create a Storage Test” and “Run Storage Test”.

* Click on the “Create Storage Test” button for the cluster on which you need to execute the benchmarking.


<a href="/assets/images/propel14.png" target="_blank"><img class="image-with-border" src="/assets/images/propel14.png"></a>

Kubera Propel uses FIO tester against the underlying PV for performing the storage benchmarking. This FIO test analysis will help you with detecting the “Average IOPS” “Average Throughput and Latency”.

 Once you click on “Run Storage Test”, the next screen will let you create the test where you can add the “Test Name” as per your choice.

You can also select the “Storage Class” created earlier by you in this article.
Finally click on “Run a performance test”


<br><br>
<a href="/assets/images/propel15.png" target="_blank"><img class="image-with-border" src="/assets/images/propel15.png"></a>
<br><br>

You can watch the status of tests being performed on your cluster.
<br><br>

<a href="/assets/images/propel16.png" target="_blank"><img class="image-with-border" src="/assets/images/propel16.png"></a>
<br><br>

<a href="/assets/images/propel17.png" target="_blank"><img class="image-with-border" src="/assets/images/propel17.png"></a>
<br><br>


Lastly, after the FIO test gets completed, it will share the results of “Average IOPS, Throughput and Average latency if any”. You can also click on “View Report” to get the detailed view of the FIO tests performed. Historical tests can also be viewed from the same screen and the specific test can be rerun or reviewed to identify the performance calculated by FIO for that test case with “Read  and Write IOPS”, “Read and Write latency”. Export of the results can be done by clicking on “export to PDF”.


<a href="/assets/images/propel18.png" target="_blank"><img class="image-with-border" src="/assets/images/propel18.png"></a>
<br><br>
