---
title: Troubleshooting 
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/troubleshooting
versions:
  free-pro-team: '*'
---

Please make sure that the disks attached to the nodes are nvme disks only.
You need to check the disks on each nodes connected to your cluster.
<pre>
lsblk
</pre>
Sample Output:
<pre style="color:#9966ff">
NAME          MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
nvme0n1       259:0    0  100G  0 disk 
├─nvme0n1p1   259:1    0  100G  0 part /
└─nvme0n1p128 259:2    0    1M  0 part 
nvme1n1       259:3    0   50G  0 disk 
</pre>

