# Kubernetes - API


Kubernetes API serves as a foundation for declarative configuration schema for the system. Kubectl command-line tool can be used to create, update, delete, and get API object. Kubernetes API acts a communicator among different components of Kubernetes.


Adding a new API to Kubernetes will add new features to Kubernetes, which will increase the functionality of Kubernetes. However, alongside it will also increase the cost and maintainability of the system. In order to create a balance between the cost and complexity, there are a few sets defined for it.


The API which is getting added should be useful to more than 50% of the users. There is no other way to implement the functionality in Kubernetes. Exceptional circumstances are discussed in the community meeting of Kubernetes, and then API is added.


In order to increase the capability of Kubernetes, changes are continuously introduced to the system. It is done by Kubernetes team to add the functionality to Kubernetes without removing or impacting the existing functionality of the system.


To demonstrate the general process, here is an (hypothetical) example −


Now that we have the Pod object stored, a user can GET that object in any supported API version. For example −


The implication of this process is that API changes must be done carefully and backward compatibly.


To make it easier to support multiple structures, Kubernetes supports multiple API versions each at different API path such as /api/v1 or /apsi/extensions/v1beta1


Versioning standards at Kubernetes are defined in multiple standards.


