---
title: Architecture
intro: ''
redirect_from:
  - /kubera-chaos/architecture
versions:
  free-pro-team: '*'
---

<center><img src="/assets/images/developer/Introduction/ArchitectureDiagram.png"></center>
<br>
<br>
Kubera-Enterprise is the umbrella product in which the modules Kubera Chaos and Kubera Propel are present. Kubera Chaos can be run from the web UI of Kubera-Enterprise.  
<br><br>
<p style="color:white;font-size:32px;">Kubera Agent :</p>    
At the time of instantiating Kubera chaos, a kubera chaos agent is installed on the same cluster where Kubera Enterprise is running. The agent acts as a daemon which communicates with Kubera chaos so that workflows can be scheduled on the cluster. These workflows can be run inside any namespace in the cluster where the agent is installed.

To run chaos experiments on another cluster, Kubera chaos does not need to be installed again. It is only the kubera chaos agent that needs to be installed on the cluster using kubectl (or yaml). At the time of running the workflow, you can select the agent that you want the workflow to run on, from the web UI.

Kubera chaos has a number of core components that are set up during the installation of Kubera agent. 
 <br><br>
<p style="color:white;font-size:32px;">Chaos Operator:</p>    

In Kubernetes, an operator is used to automate the task which might usually be done by a human. In Kubera Chaos, it is called a chaos operator. It monitors the state of the custom resources - Chaos Experiments, Chaos Engine, Chaos Probes and Chaos Results. 
<br><br>
<p style="color:white;font-size:32px;">Chaos Engine:</p>    

Chaos Engine is a custom resource which links the client application (which has to be tested) to the Chaos experiments.
<br><br><p style="color:white;font-size:32px;">Chaos Experiments:</p>    

Chaos Experiment is a CR and is available as YAML files on Chaos Hub. For more details visit <a href="https://docs.litmuschaos.io/">Chaos Hub documentation</a>.

Chaos probes are pluggable checks that can be defined within the ChaosEngine for any chaos experiment. The experiment pods execute these checks based on the mode they are defined in & factor their success as necessary conditions in determining the verdict of the experiment (along with the standard “in-built” checks).
Kubera chaos  currently supports three types of probes:
- httpProbe: To query health/downstream URIs
- cmdProbe: To execute any user-desired health-check function implemented as a shell command
- k8sProbe: To perform CRUD operations against native & custom Kubernetes resources



<p style="color:white;font-size:32px;">Chaos Results:</p>    

ChaosResult resource holds the results of a ChaosExperiment with a namespace scope. It is created or updated at runtime by the experiment itself. It holds important information like the ChaosEngine reference, Experiment State, Verdict of the experiment (on completion), salient application/result attributes. 
<br><br>
<p style="color:white;font-size:32px;">Chaos Exporter:</p>    

Exporter is a service which fetches metrics from our target and converts them into format that prometheus understands. Prometheus scrapes this data from the /metrics endpoint. 
 

