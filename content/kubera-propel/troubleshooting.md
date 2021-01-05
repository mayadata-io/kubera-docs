---
title: Troubleshooting 
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/troubleshooting
versions:
  free-pro-team: '*'
---
<ul>
<li>
Make sure that the disks attached to the nodes are nvme disks only.
You need to check the disks on each nodes connected to your cluster. To check the disks, execute:
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
</li>
<li>
In order to reliably mount application PVs  over NVMe-oF TCP, a worker node's kernel version must be 5.3 or later.  If the nvme-tcp module is not loaded, execute the below-mentioned commands:
<pre>
sudo apt-get -qy update && sudo apt-get -qy install linux-modules-extra-5.8.0-29-generic
sudo modprobe nvme_tcp
lsmod | grep nvme_tcp
</pre>
</li>
</ul>

