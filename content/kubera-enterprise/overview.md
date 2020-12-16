---
title: Overview and Architecture
redirect_from:
  - /kubera-enterprise/overview
versions:
  free-pro-team: '*'
---
<img alt="Kubera Enterprise" style="width:400px;" src="/assets/images/kubera-light-bg.png">
<br>

<br>

Kubera Enterprise is software that helps with the use of Kubernetes as a data plane. Kubera includes optional 24x7 support from MayaData as well as underlying open source projects. In addition, Kubera includes advanced access controls, team based collaboration, visual configuration and management, and assistance in troubleshooting and common tasks such as upgrading and uninstalling Kubera itself.

Kubera is installed using helm on any Kubernetes cluster either cloud or on premise. Kubera provides user management, teaming features required for enterprise users. Kubera comes with two modules - Kubera Propel and Kubera Chaos.

<br>

<img alt="Kubera Propel" style="width:200px;" src="/assets/images/kubera-propel-light-bg.png">
<br>

Kubera Propel is a module of Kubera Enterprise. Kubera Propel is based upon the CNCF project OpenEBS. OpenEBS Mayastor is open source Container Attached Storage - a pattern that includes the use of Kubernetes itself as a control plane for storage in order to deliver per workload storage. Teams and workloads that have different needs can use OpenEBS in different ways - and can remain loosely coupled; this is extremelydifferent from traditional shared everything storage. Kubera Propel is perhaps best known due to multiple benchmarks in the Fall of 2020 indicating that it is extremely performant and appears to be the lowest latency widely deployed storage software available for Kubernetes. 

<br>

<img alt="Kubera Chaos" style="width:200px;" src="/assets/images/kubera-chaos-light-bg.png">
<br>

Kubera Chaos is a module of Kubera Enterprise. Kubera Chaos is based upon the CNCF project Litmus Chaos. Litmus is a widely used Chaos Engineering project, consisting of an easy to extend framework for chaos engineering and a chaos hub, containing popular chaos experiments. Litmus and Kubera Chaos are often used both in CI/CD pipelines and in production environments to improve the resilience of Kubernetes environments including workloads running on Kubernetes and Kubernetes deployments themselves. 

<br>

<img alt="Kubera Portal" style="width:200px;" src="/assets/images/kubera-portal-light-bg.png">
<br>

Subscription management of Kubera Enterprise is performed via a portal hosted on <a href="https://vendor.mayadata.io" target="_blank">vendor.mayadata.io</a> called Kubera Portal. Kubera Enterprise is free for basic usage. Default installation contains a free subscription valid for 15 days. Users can register and download a non-expiring Kubera subscription on Kubera Portal. 

<br>

<br>

### Kubera Architecture

<br>
<img class="image-with-border" src="/assets/images/kubera-arch.png">
<br>

Administrator deploys Kubera Enterprise on a Kubernetes cluster using helm and configures  secure TLS. As Kubera is a Kubernetes application, it is highly scalable. The components of Kubera can be scaled up on demand. Initially administrator launches the modules Kubera Propel and Kubera Chaos as required. These modules deploy corresonding Kubera agents on the same cluster when launched. Hence by default, Kubera propel and chaos agents are deployed on the cluster where Kubera Enterprise is installed and modules are configured.

Users get their own workspace on each of Kubera modules. They are called projects. A Kubera Propel project or Kubera Chaos project is created when user starts the corresponding module on Kubera. A user can also share this project of a given module with a team. 

Users connect their own Kubernetes clusters to Kubera using Kubera Agents. Each module has it's own Kubera agent. The agents are deployed using `kuberactl` binary. 

Kubera propel agent requires the user to possess admin privileges. Once Kubera Propel agent is deployed and the agent is connected to Kubera, users can install and manage OpenEBS mayastor from their own Kubera Propel project portal. Day2 operations such as adding more storage nodes, more storage pools, storage classes can be done using Kubera Propel portal. 



Kubera Chaos agent does not always require admin privileges. A Kubera Chaos agent can be installed with cluster scope or namespace scope privileges depending the access levels of the user. Once the Kubera Chaos agent is deployed and connected to Kubera Chaos, users can create or schedule chaos workflows, connect to private chaos hubs and observe the chaos results from Chaos module portal.

Kubera Enterprise also provides the subscription management. Subscriptions are downloaded from Kubera Portal and uploaded in Kubera Enterprise's subscription section.

Kubera Enterprise is tested and supported to be deployed in an air gap environment. See [air gap quick start guide](Air-Gapped-environments) for more details.

