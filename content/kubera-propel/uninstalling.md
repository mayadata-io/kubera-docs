---
title: Uninstalling
#shortTitle: Configuring Git
#intro: 'If you don''t already have Git installed, you must configure it before using GitHub Desktop.'
redirect_from:
  - /kubera-propel/Uninstalling
versions:
  free-pro-team: '*'
---

Follow the steps below to carry out graceful uninstallation of Kubera Propel.
<blockquote>
In this document, we are assuming all the Kubera Propel components have been deployed in <b>propel</b> namespace.
</blockquote>

<ul>
<li>Delete all the PVCs that were created. To check the status of PVCs, execute:
<pre>kubectl get pvc -n propel</pre></li>
<li>Next, delete the associated stateful sets. To get a list of these, execute:
<pre>kubectl get sts -n propel</pre>
Sample output:
<pre style="color:#9966ff">
NAME                      READY   AGE
propel-agent-controller   1/1     6d18h
</pre></li>
<li>Delete the jobs created, to get the list of jobs, execute:
<pre>kubectl get jobs -n propel</pre>
Sample Output:
<pre style="color:#9966ff">
NAME         COMPLETIONS   DURATION   AGE
firsttest    1/1           23s        6d17h
test-10101   1/1           17s        4d20h
test2        1/1           24s        6d17h
</pre>
</li>
<li>Delete the ingress created. To get this list of ingress, execute:
<pre>kubectl get ing -n propel</pre>
Sample output:
<pre style="color:#9966ff">
NAME                    CLASS    HOSTS   ADDRESS        PORTS   AGE
kubera-propel-ingress   <none>   *       10.105.161.8   80      6d18h
</pre>
</li>
<li>Next, delete the created services. To get the list of services, execute:
<pre>kubectl get svc -n propel</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                      TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)                         AGE
propel-agent-subscriber   NodePort   10.109.167.220   <none>        9004:31257/TCP                  6d18h
propel-server             NodePort   10.100.219.47    <none>        9002:31000/TCP,9003:31784/TCP   6d18h
propel-webapp             NodePort   10.106.98.223    <none>        9091:31002/TCP                  6d18h
</pre></li>
<li>Verify no associated daemon sets exist. To get the list of ds, execute:
<pre>kubectl get ds -n mayastor</pre>
Sample Output:
<pre style="color:#9966ff">
NAME           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                                                                                                                                                             AGE
mayastor       1         1         0       1            0           kubernetes.io/arch=amd64,openebs.io/engine=mayastor,propel.kubera.mayadata.io/cluster-id=baf2d276-15a4-436d-aec0-c5fcd5376412,propel.kubera.mayadata.io/is-storage=true   3d20h
mayastor-csi   1         1         1       1            1           kubernetes.io/arch=amd64,propel.kubera.mayadata.io/cluster-id=baf2d276-15a4-436d-aec0-c5fcd5376412,propel.kubera.mayadata.io/is-app=true                                  3d20h
</pre>
</li>
<li>Next, verify <b>no</b> associated Mayastor pools(msp) or Mayastor nodes(msn) exist on the setup. To get the list, execute:
<pre>kubectl get msp -n propel</pre>
<pre>kubectl get msn -n propel</pre></li>
<li>Once all the above components have been cleaned up, we need to clean up the recipe resources. To get the list of them, execute:
<pre>kubectl get rcp -n propel</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                       AGE     TIMETAKEN   STATUS      REASON
default-mayastor-install   3d19h   4.398s      Completed   
recipe-firsttest           6d17h   38ms        Completed   
recipe-test-10101          4d20h   43ms        Completed   
recipe-test2               6d17h   41ms        Completed   
</pre>
</ul>
