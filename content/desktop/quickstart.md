---
title: Quickstart 
shortTitle: Quickstart
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.' 
redirect_from:
  - /desktop/quickstart
versions:
  free-pro-team: '*'
---
<br><br>
This guide serves as a concise but complete documentation on how to install Kubera from the helm chart with default values onto the Kubernetes cluster. 
### Installing Helm v3
For this guide, you need to  make use of the latest release of Helm v3 (v3.0.2 or newer) <https://helm.sh/docs/intro/install/>

### Adding the Mayadata Helm repository
In order to install Kubera, you must add the repository to your helm’s configuration:
<br><br>
### Installing Kubera
<b>helm repo add kubera https://charts.mayadata.io/</b>
<br><br>
Below command can be used to install Kubera with default values 
 
<b>```helm install kubera kubera/kubera-enterprise```  </b> 
<br><br>
To install kubera with custom configuration you can find the values.yaml <some link> file and update it accordingly and then below command can be used to install Kubera 

<b>helm install kubera kubera/kubera-enterprise  -f    path_to_values.yaml></b> 

*Note: This step can take several minutes in order for all resources to be allocated, services to start, and access made available.*
 
