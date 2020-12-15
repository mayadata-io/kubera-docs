---
title: Deploying kubera Enterprise with ssl and Domain
redirect_from:
  - /kubera-enterprise/installation-with-tls
versions:
  free-pro-team: '*'
---
### TLS certificates
If you want to run kubera with  https which requires TLS certificates follow this doc to install and Kubera Enterprise. 

### Installing cert manager
To get started, ensure you have a cert manager installed. Click here to know the detailed steps for installation.
### Creating issuer 
 create an issuer using the below YAML. Copy the below YAML in a file say, issuer.yaml and update the email address with the email you want to use for the issuer.
<pre style="color:#9966ff">
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
  namespace: cert-manager
spec:
  acme:
    # The ACME server URL
    server: https://acme-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: xyz.abc@gmail.com
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-prod
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx 
</pre>  
To apply the above YAML, execute:
```kubectl apply -f <yaml_name>```
 
### Deploying  kubera Enterprise
Execute the below mentioned command to install Kubera with domain

```helm install kubera kubera/kubera-enterprise --set domain=<your domain>```
### Enabling TLS
Add cert-manager.io/cluster-issuer: letsencrypt-prod under annotations and patch the ingress in kubera namespace with tls under spec, as shown below
```
spec:
   tls:
   - hosts:
     - <domain>
     secretName: <secret_name>
```