# Kubernetes - Kubectl


Kubectl is the command line utility to interact with Kubernetes API. It is an interface which is used to communicate and manage pods in Kubernetes cluster.


One needs to set up kubectl to local in order to interact with Kubernetes cluster.


Download the executable to the local workstation using the curl command.


<pre>$ curl -O https://storage.googleapis.com/kubernetesrelease/
release/v1.5.2/bin/linux/amd64/kubectl
</pre>


<pre>$ curl -O https://storage.googleapis.com/kubernetesrelease/
release/v1.5.2/bin/darwin/amd64/kubectl
</pre>


After download is complete, move the binaries in the path of the system.


<pre>$ chmod +x kubectl
$ mv kubectl /usr/local/bin/kubectl
</pre>


Following are the steps to perform the configuration operation.


<pre>$ kubectl config set-cluster default-cluster --server = https://${MASTER_HOST} --
certificate-authority = ${CA_CERT}

$ kubectl config set-credentials default-admin --certificateauthority = ${
CA_CERT} --client-key = ${ADMIN_KEY} --clientcertificate = ${
ADMIN_CERT}

$ kubectl config set-context default-system --cluster = default-cluster --
user = default-admin
$ kubectl config use-context default-system
</pre>


To verify if the kubectl is working fine or not, check if the Kubernetes client is set up correctly.


<pre>$ kubectl get nodes

NAME       LABELS                                     STATUS
Vipin.com  Kubernetes.io/hostname = vipin.mishra.com    Ready
</pre>


