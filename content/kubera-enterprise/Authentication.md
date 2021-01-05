---
title: Authentication 
shortTitle: Authentication
#intro: '{% data variables.product.prodname_ghe_server %} supports the same powerful API available on {% data variables.product.prodname_dotcom_the_website %} as well as its own set of API endpoints.' 
redirect_from:
  - /kubera-enterprise/Authentication
versions:
  free-pro-team: '*'
---
<br><br>
A Kubera administrator can specify the ways the users can log into Kubera Portal and other products. The authentication tab, under the settings section, helps the admin manage user authentication settings. 
<br><br>
There are two ways for user authentication, Using local authentication or using GitHub OAuth. By default, only local authentication is enabled.
<br><br>

### Local Authentication:

This method of authentication allows the users to log in to the-Kubera portal using a local username and password.
<br><br>
<a href="/assets/images/authentication1.png" target="_blank"><img class="image-with-border" src="/assets/images/authentication1.png"></a>
<br><br>

### GitHub Authentication:

Admin can enable GitHub authentication. To use this method of authentication, enter the following details acquired from GitHub:
* Client ID
* Secret ID

To acquire your ID from your GitHub account, do the following: 
1. Choose a GitHub auth
2. Select “All members of the organization” to grant access to all the members of the specified organization, or select “Open for entire Github” to grant access to Kubera Portal and its modules.


<br><br>
<a href="/assets/images/authentication2.png" target="_blank"><img class="image-with-border" src="/assets/images/authentication2.png"></a>
<br><br>

