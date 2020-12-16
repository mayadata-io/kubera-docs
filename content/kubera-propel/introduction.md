---
title: Kubera Propel - Introduction & Overview
shortTitle: Overview
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.'
redirect_from:
  - /kubera-propel/introduction
versions:
  free-pro-team: '*'
---

Kubera Propel is a component of  [OpenEBS](https://openebs.io/) and is actively developed and maintained by [MayaData](https://mayadata.io/), as part of the Kubera platform for data agility. Kubera Propel is based upon the CNCF project OpenEBS. OpenEBS Mayastor is open source Container Attached Storage - a pattern that includes the use of Kubernetes itself as a control plane for storage in order to deliver per workload storage. Teams and workloads that have different needs can use OpenEBS in different ways - and can remain loosely coupled; this is extremely different from traditional shared everything storage.  Kubera Propel is perhaps best known due to multiple benchmarks in the Fall of 2020  indicating that it is extremely performant, highly available with low overhead abstraction and appears to be the lowest latency widely deployed storage software available for Kubernetes.  



### OpenEBS Mayastor and Kubera Propel

Kubera Propel  is based on the OpenEBS Mayastor and primarily includes the Enterprise support from MayaData to the users of Mayastor. Maystor with its CAS architecture provides a scalable and highly performing cloud native storage to the stateful applications on Kubernetes. Kubera propel includes Mayastor and adds a complete solution to manage Mayastor across multiple Kubernetes clusters in a multicloud environment. 



### Kubera Propel Agent

A Kubera agent connects a given Kubernetes cluster to a given Kubera module. In case of Kubera Propel, the Kubera Propel Agent connects a Kubernetes cluster to a user's Kubera Propel project.

Users on Kubera have their own projects for Kubera Propel. Each user has one Propel workspace or project. User deploys Kubera Propel agent on a Kubernetes cluster to connect it to Kubera Propel portal. Once an agent is deployed and connected, user can start configuring the Kubernetes nodes as storage nodes, add storge pools and create storage classes that will be used by application developers.



### Configuring your storage

A user on Kubera Propel can connect unlimited number of Kubernetes clusters to Propel portal. Propel provides an intuitive user interface to guide the users through the configuration of storage nodes, tuning them for optimal performance, choosing disk for storage pool creation and finally creating storage classes on them. 

The storage nodes, pools and storage classes can be edited for day2 operations through Propel.

### FIO tests

Storage performance tuning is hard. Propel provides an easy interface to run FIO tests against the storage classes and records the results along with the system configuration at the time of the test. Users can fine tune the system configuration, run the FIO tests and compare the results and get to the required fine tuning.



To get started with Kubera Propel, see the [quickstart](getting-started-with-kubera-propel) article.