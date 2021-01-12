---
title: Uninstalling 
#shortTitle: Configuring Git
#intro: 'If you don''t already have Git installed, you must configure it before using GitHub Desktop.'
redirect_from:
  - /kubera-enterprise/Uninstalling
versions:
  free-pro-team: '*'
---

Follow the steps below to carry out graceful uninstallation of Kubera.
To get the release name, execute:
<pre>
helm ls --namespace &lt;namespace&gt;</pre>
Sample Output:
<pre style="color:#9966ff">
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION
kubera-core     kubera          1               2020-12-14 21:25:53.803089961 +0530 IST deployed        kubera-enterprise-0.0.1 0.0.1  
</pre><br>
<br>
<blockquote>
In this document, we are assuming all the Kubera components(Kubera, Propel and Chaos) have been deployed in <b>Kubera</b> namespace.
</blockquote>
To uninstall Kubera, execute the following command:

<pre>helm uninstall &lt;realease name&gt; -n kubera</pre>
Next, you need to cleanup the resources that were created as part Kubera Chaos or Kubera Propel setup.
<ul>
<br>
<li>Delete all the PVCs that were created. You can check the status of PVC using the following command
<pre>kubectl get pvc -n kubera</pre>
</li>
<li>
Delete the deployments created in the namespace where Kubera, Kubera Chaos and Kubera Propel are deployed.
 <pre>kubectl get deploy -n kubera</pre>
</li>
<li>Next, delete the associated stateful sets. To get a list of these, execute:
<pre>kubectl get sts -n kubera</pre></li>
<li>Delete the jobs created, to get the list of jobs, execute:
<pre>kubectl get jobs -n kubera</pre></li>
<li>Delete the ingress created. To get this list of ingress, execute:
<pre>kubectl get ing -n kubera</pre></li>
<li>Next, delete the created services. To get the list of services, execute:
<pre>kubectl get svc -n kubera</pre></li>
For setups having Kubera Propel deployed, verify no assosicated daemonsets, Mayastor pools or Mayastor nodes exist. To verify, execute:
<pre>kubectl get ds -n kubera
kubectl get msp -n kubera
kubectl get msn -n kubera</pre>
</ul>



