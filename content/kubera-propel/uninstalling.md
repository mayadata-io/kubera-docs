---
title: Uninstalling
#shortTitle: Configuring Git
#intro: 'If you don''t already have Git installed, you must configure it before using GitHub Desktop.'
redirect_from:
  - /kubera-propel/Uninstalling
versions:
  free-pro-team: '*'
---

## Disconnecting cluster

To disconnect the cluster, click on <b>Manage clusters</b> under <b>Clusters</b> menu on the left sidebar. Select the cluster that needs to be disconnected and click on the red disconnect button next to it.
 
<a href="/assets/images/KuberaPropel/DisconnectCluster.png" target="_blank"><img class="image-with-border" src="/assets/images/KuberaPropel/DisconnectCluster.png"></a><br>

<blockquote>
Disconnecting the cluster from UI does not delete any associated resources. Deletion of resources have to be carried out manually.
</blockquote>

## Uninstalling Kubera Propel

Use the below mentioned steps to uninstall Propel. In case your setup has Mayastor deployed, you will have to remove the associated components for Propel as well as Mayastor.  

### Clean-up of Propel components from the setup 


<blockquote>
In this document, we are assuming all the Kubera Propel components have been deployed in <b>kubera</b> namespace.
</blockquote>

<ul>
<li>Delete the Propel agent subscriber deployment. Execute:
<pre>kubectl get deploy -n kubera</pre>

Sample Output:
<pre style="color:#9966ff">
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
propel-agent-subscriber   1/1     1            1           7h27m
</pre>
To delete the above agent subscriber deployment, execute:
<pre>kubectl delete deploy propel-agent-subscriber</pre>
</li>
<li>
Next, delete the Propel agent controller.
<pre>kubectl get sts -n kubera</pre>
Sample Output:
<pre style="color:#9966ff">
NAME                      READY   AGE
propel-agent-controller   1/1     7h32m
</pre>
To delete the above agent controller, execute:
<pre>kubectl delete sts propel-agent-controller</pre>
</li>
<li>Once all the resources have been successfully deleted, you can now delete the <b>kubera</b> namespace.
<pre>kubectl delete namespace kubera</pre></li>
</ul>

###  Clean up of Mayastor components from the setup

To remove Mayastor components from your setup, follow the below-mentioned steps.
<ul>
<li>Delete all the Mayastor pools present in the <b>mayastor</b> namespace.
<pre>kubectl get msp -n mayastor</pre>
Sample Output:
<pre style="color:#9966ff">
NAME          NODE                                                STATE    AGE
msp-ibscs-0   ip-192-168-10-46.ap-southeast-1.compute.internal    online   8h
msp-ibscs-1   ip-192-168-43-52.ap-southeast-1.compute.internal    online   8h
msp-ibscs-2   ip-192-168-73-222.ap-southeast-1.compute.internal   online   8h
</pre>
To delete, execute:
<pre>kubectl delete msp --all -n mayastor</pre></li>
</li>
<li>Next, delete all the deployments and daemonsets.
<pre>kubectl get ds -n mayastor</pre>
Sample Output:
<pre style="color:#9966ff">
NAME           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                                                                                                                                                             AGE
mayastor       3         3         3       3            3           kubernetes.io/arch=amd64,openebs.io/engine=mayastor,propel.kubera.mayadata.io/cluster-id=95d95dc2-f5da-4151-8c9f-5519175f346a,propel.kubera.mayadata.io/is-storage=true   8h
mayastor-csi   3         3         3       3            3           kubernetes.io/arch=amd64,propel.kubera.mayadata.io/cluster-id=95d95dc2-f5da-4151-8c9f-5519175f346a,propel.kubera.mayadata.io/is-app=true                                  8h
</pre>
<br>
<pre>
kubectl get deploy -n mayastor
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME   READY   UP-TO-DATE   AVAILABLE   AGE
moac   1/1     1            1           8h
nats   1/1     1            1           8h
</pre>
To delete the deployments, execute:
<pre>kubectl delete deploy --all -n mayastor</pre>
</li>
<li>Delete recipe, if any in the <b>kubera</b> namespace.
<pre>kubectl get rcp -n kubera</pre>
Sample Output:
<pre style="color:#9966ff">
NAMESPACE   NAME                       AGE     TIMETAKEN   STATUS      REASON
kubera      default-mayastor-install   7h30m   4.398s      Completed   
</pre>
To delete the recipe, execute:
<pre>kubectl delete rcp default-mayastor-install -n kubera</pre>
</li>
<li>
Next, you need to delete the config maps that were created. To list the config map, execute:
<pre>kubectl get cm -n mayastor</pre>
Sample Output:
<pre style="color:#9966ff">
NAMESPACE         NAME                                 DATA   AGE
mayastor          kube-root-ca.crt                     1      8h
</pre>
To delete,
<pre>kubectl delete cm kube-root-ca.crt -n mayastor</pre>
</li>
<li>Once all the resources have been successfully deleted, you can now delete the <b>mayastor</b> namespace.
<pre>kubectl delete namespace mayastor</pre></li>
</ul>