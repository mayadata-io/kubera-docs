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
kubera-core     kubera-core     1               2020-12-14 21:25:53.803089961 +0530 IST deployed        kubera-enterprise-0.0.1 0.0.1  
</pre>

To uninstall Kubera, execute the following command:

<pre>helm uninstall &lt;realease name&gt; -n &lt;kubera_namespace&gt;</pre>

<br>
Next, you need to cleanup the PVCs created during the process of Kubera installation. To get the list of existing PVCs, execute:
<pre>kubectl get pvc -n &lt;kubera_namespace&gt;</pre>

To delete the PVCs, execute:
<pre>kubectl delete pvc -n &lt;kubera_namepsace&gt;</pre>
<blockquote>
<b>NOTE:</b>
<ul>
<li>After deletion of PVCs ensure the corresponding PVs are also deleted.</li>
<li>For setups where the storage class was deployed manually, delete the created storage class.</li>
</ul>
</blockquote>
The above mentioned steps only clean up Kubera Enterprise resources. In case, the setup also contains Kubera Propel follow <a href="/en/free-pro-team@latest/kubera-propel/uninstalling" target="_blank">Kubera Propel uninstallation</a> section.  
