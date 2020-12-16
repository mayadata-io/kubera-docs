---
title: Kubera Chaos - Introduction & Overview
shortTitle: Overview
intro: ''
redirect_from:
  - /kubera-chaos/overview
versions:
  free-pro-team: '*'
---

Kubera Chaos is a module of Kubera Enterprise product. Kubera Chaos is based on the popular open source chaos engineering project LitmusChaos.  LitmusChaos project was founded by MayaData and has been donated to CNCF in 2020. LitmusChaos has been growing rapidly with a vibrant community of users and contributors. 

MayaData continues to contribute heavily into LitmusChaos. LitmusChaos users looking for enterprise support can use Kubera Chaos. MayaData upstreams all the changes made to Kubera Chaos as part of the enterprise users support requirements. 

### LitmusChaos vs Kubera Chaos

The core functionality of LitmusChaos, user experience and APIs remains same in Kubera Chaos. Kubera Chaos provides enterprise support, integration with GitOps, enterprise authentication modules, enterprise CI tools such as spinnaker, Jenkins X, GitLab and GitHub actions. 

Litmus community users will have the same experience while using and managing Kubera Chaos. The declarative YAML content of a chaos workflow remains same between Kubera Chaos and Litmus. 

<br>

<img alt="Kubera Chaos vs Litmus" style="width:800px;" src="/assets/images/kuberachaos-litmus.png">
<br>

<br>



### Kubera Chaos Agent

Kubera Chaos module is part of Kubera Enterprise which can serve the chaos engineering needs of a given team or some times the entire enterprise. Kubera Chaos can act as a central chaos engineering portal for various teams owning or operating different Kubernetes clusters or namespaces in a multicloud environment. 

A Kubera agent connects a given Kubernetes cluster or namespace to a given Kubera module. In case of Kubera Chaos, the Kubera Chaos Agent connects a Kubernetes cluster to a user's Kubera Chaos project. 

Users are Kubera have their own projects on Kubera Chaos. Each user has one Chaos workspace or project. User deploys Kubera chaos agent on a Kubernetes cluster or a namespaces to connect it to Kubera Chaos. Once an agent is deployed and connected, user can schedule chaos workflows through that agent to run them on the given cluster or on the given namespace(s). 



### Developer experience

Teams can collaborate on the chaos experiments that are hosted at a private GitHub repository. My Hubs feature of Kubera Chaos allows private chaos hubs to be maintained at a per project level. A developer can create and maintain a new chaos repository, connect it to Kubera Chaos, construct new chaos workflows using the experiments in this new hub and run them on Kubernetes resource targets. 

<br>

<img alt="Kubera Chaos developer experience" style="width:800px;" src="/assets/images/kuberachaos-dev.png">
<br>



### Getting started

After installing Kubera Enterprise, the module is Kubera Chaos is launched by the admin. All the users on Kubera will have their own Kubera Chaos workspace and they can start their Kubernetes chaos engineering efforts and collaborate with their team members from that portal.

See Kubera Chaos [Getting Started](getting-started-with-kubera-chaos) article.



