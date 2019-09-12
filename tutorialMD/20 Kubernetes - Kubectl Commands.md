# Kubernetes - Kubectl Commands


Kubectl controls the Kubernetes Cluster. It is one of the key components of Kubernetes which runs on the workstation on any machine when the setup is done. It has the capability to manage the nodes in the cluster.


Kubectl commands are used to interact and manage Kubernetes objects and the cluster. In this chapter, we will discuss a few commands used in Kubernetes via kubectl.


kubectl annotate − It updates the annotation on a resource.


<pre>$kubectl annotate [--overwrite] (-f FILENAME | TYPE NAME) KEY_1=VAL_1 ...
KEY_N = VAL_N [--resource-version = version]
</pre>


For example,


<pre>kubectl annotate pods tomcat description = 'my frontend'
</pre>


kubectl api-versions − It prints the supported versions of API on the cluster.


<pre>$ kubectl api-version;
</pre>


kubectl apply − It has the capability to configure a resource by file or stdin.


<pre>$ kubectl apply –f &lt;filename&gt;
</pre>


kubectl attach − This attaches things to the running container.


<pre>$ kubectl attach &lt;pod&gt; –c &lt;container&gt;
$ kubectl attach 123456-7890 -c tomcat-conatiner
</pre>


kubectl autoscale − This is used to auto scale pods which are defined such as Deployment, replica set, Replication Controller.


<pre>$ kubectl autoscale (-f FILENAME | TYPE NAME | TYPE/NAME) [--min = MINPODS] --
max = MAXPODS [--cpu-percent = CPU] [flags]
$ kubectl autoscale deployment foo --min = 2 --max = 10
</pre>


kubectl cluster-info − It displays the cluster Info.


<pre>$ kubectl cluster-info
</pre>


kubectl cluster-info dump − It dumps relevant information regarding cluster for debugging and diagnosis.


<pre>$ kubectl cluster-info dump
$ kubectl cluster-info dump --output-directory = /path/to/cluster-state
</pre>


kubectl config − Modifies the kubeconfig file.


<pre>$ kubectl config &lt;SUBCOMMAD&gt;
$ kubectl config –-kubeconfig &lt;String of File name&gt;
</pre>


kubectl config current-context − It displays the current context.


<pre>$ kubectl config current-context
#deploys the current context
</pre>


kubectl config delete-cluster − Deletes the specified cluster from kubeconfig.


<pre>$ kubectl config delete-cluster &lt;Cluster Name&gt;
</pre>


kubectl config delete-context − Deletes a specified context from kubeconfig.


<pre>$ kubectl config delete-context &lt;Context Name&gt;
</pre>


kubectl config get-clusters − Displays cluster defined in the kubeconfig.


<pre>$ kubectl config get-cluster
$ kubectl config get-cluster &lt;Cluser Name&gt;
</pre>


kubectl config get-contexts − Describes one or many contexts.


<pre>$ kubectl config get-context &lt;Context Name&gt;
</pre>


kubectl config set-cluster − Sets the cluster entry in Kubernetes.


<pre>$ kubectl config set-cluster NAME [--server = server] [--certificateauthority =
path/to/certificate/authority] [--insecure-skip-tls-verify = true]
</pre>


kubectl config set-context − Sets a context entry in kubernetes entrypoint.


<pre>$ kubectl config set-context NAME [--cluster = cluster_nickname] [--
user = user_nickname] [--namespace = namespace]
$ kubectl config set-context prod –user = vipin-mishra
</pre>


kubectl config set-credentials − Sets a user entry in kubeconfig.


<pre>$ kubectl config set-credentials cluster-admin --username = vipin --
password = uXFGweU9l35qcif
</pre>


kubectl config set − Sets an individual value in kubeconfig file.


<pre>$ kubectl config set PROPERTY_NAME PROPERTY_VALUE
</pre>


kubectl config unset − It unsets a specific component in kubectl.


<pre>$ kubectl config unset PROPERTY_NAME PROPERTY_VALUE
</pre>


kubectl config use-context − Sets the current context in kubectl file.


<pre>$ kubectl config use-context &lt;Context Name&gt;
</pre>


kubectl config view


<pre>$ kubectl config view
$ kubectl config view –o jsonpath='{.users[?(@.name == "e2e")].user.password}'
</pre>


kubectl cp − Copy files and directories to and from containers.


<pre>$ kubectl cp &lt;Files from source&gt; &lt;Files to Destinatiion&gt;
$ kubectl cp /tmp/foo &lt;some-pod:/tmp/bar -c &lt;specific-container&gt;
</pre>


kubectl create − To create resource by filename of or stdin. To do this, JSON or YAML formats are accepted.


<pre>$ kubectl create –f &lt;File Name&gt;
$ cat &lt;file name&gt; | kubectl create –f -
</pre>


In the same way, we can create multiple things as listed using the create command along with kubectl.


kubectl delete − Deletes resources by file name, stdin, resource and names.


<pre>$ kubectl delete –f ([-f FILENAME] | TYPE [(NAME | -l label | --all)])
</pre>


kubectl describe − Describes any particular resource in kubernetes. Shows details of resource or a group of resources.


<pre>$ kubectl describe &lt;type&gt; &lt;type name&gt;
$ kubectl describe pod tomcat
</pre>


kubectl drain − This is used to drain a node for maintenance purpose. It prepares the node for maintenance. This will mark the node as unavailable so that it should not be assigned with a new container which will be created.


<pre>$ kubectl drain tomcat –force
</pre>


kubectl edit − It is used to end the resources on the server. This allows to directly edit a resource which one can receive via the command line tool.


<pre>$ kubectl edit &lt;Resource/Name | File Name)
Ex.
$ kubectl edit rc/tomcat
</pre>


kubectl exec − This helps to execute a command in the container.


<pre>$ kubectl exec POD &lt;-c CONTAINER &gt; -- COMMAND &lt; args...&gt;
$ kubectl exec tomcat 123-5-456 date
</pre>


kubectl expose − This is used to expose the Kubernetes objects such as pod, replication controller, and service as a new Kubernetes service. This has the capability to expose it via a running container or from a yaml file.


<pre>$ kubectl expose (-f FILENAME | TYPE NAME) [--port=port] [--protocol = TCP|UDP]
[--target-port = number-or-name] [--name = name] [--external-ip = external-ip-ofservice]
[--type = type]
$ kubectl expose rc tomcat –-port=80 –target-port = 30000
$ kubectl expose –f tomcat.yaml –port = 80 –target-port =
</pre>


kubectl get − This command is capable of fetching data on the cluster about the Kubernetes resources.


<pre>$ kubectl get [(-o|--output=)json|yaml|wide|custom-columns=...|custom-columnsfile=...|
go-template=...|go-template-file=...|jsonpath=...|jsonpath-file=...]
(TYPE [NAME | -l label] | TYPE/NAME ...) [flags]
</pre>


For example,


<pre>$ kubectl get pod &lt;pod name&gt;
$ kubectl get service &lt;Service name&gt;
</pre>


kubectl logs − They are used to get the logs of the container in a pod. Printing the logs can be defining the container name in the pod. If the POD has only one container there is no need to define its name.


<pre>$ kubectl logs [-f] [-p] POD [-c CONTAINER]
Example
$ kubectl logs tomcat.
$ kubectl logs –p –c tomcat.8
</pre>


kubectl port-forward − They are used to forward one or more local port to pods.


<pre>$ kubectl port-forward POD [LOCAL_PORT:]REMOTE_PORT
[...[LOCAL_PORT_N:]REMOTE_PORT_N]
$ kubectl port-forward tomcat 3000 4000
$ kubectl port-forward tomcat 3000:5000
</pre>


kubectl replace − Capable of replacing a resource by file name or stdin.


<pre>$ kubectl replace -f FILENAME
$ kubectl replace –f tomcat.yml
$ cat tomcat.yml | kubectl replace –f -
</pre>


kubectl rolling-update − Performs a rolling update on a replication controller. Replaces the specified replication controller with a new replication controller by updating a POD at a time.


<pre>$ kubectl rolling-update OLD_CONTROLLER_NAME ([NEW_CONTROLLER_NAME] --
image = NEW_CONTAINER_IMAGE | -f NEW_CONTROLLER_SPEC)
$ kubectl rolling-update frontend-v1 –f freontend-v2.yaml
</pre>


kubectl rollout − It is capable of managing the rollout of deployment.


<pre>$ Kubectl rollout &lt;Sub Command&gt;
$ kubectl rollout undo deployment/tomcat
</pre>


Apart from the above, we can perform multiple tasks using the rollout such as −


kubectl run − Run command has the capability to run an image on the Kubernetes cluster.


<pre>$ kubectl run NAME --image = image [--env = "key = value"] [--port = port] [--
replicas = replicas] [--dry-run = bool] [--overrides = inline-json] [--command] --
[COMMAND] [args...]
$ kubectl run tomcat --image = tomcat:7.0
$ kubectl run tomcat –-image = tomcat:7.0 –port = 5000
</pre>


kubectl scale − It will scale the size of Kubernetes Deployments, ReplicaSet, Replication Controller, or job.


<pre>$ kubectl scale [--resource-version = version] [--current-replicas = count] --
replicas = COUNT (-f FILENAME | TYPE NAME )
$ kubectl scale –-replica = 3 rs/tomcat
$ kubectl scale –replica = 3 tomcat.yaml
</pre>


kubectl set image − It updates the image of a pod template.


<pre>$ kubectl set image (-f FILENAME | TYPE NAME)
CONTAINER_NAME_1 = CONTAINER_IMAGE_1 ... CONTAINER_NAME_N = CONTAINER_IMAGE_N
$ kubectl set image deployment/tomcat busybox = busybox ngnix = ngnix:1.9.1
$ kubectl set image deployments, rc tomcat = tomcat6.0 --all
</pre>


kubectl set resources − It is used to set the content of the resource. It updates resource/limits on object with pod template.


<pre>$ kubectl set resources (-f FILENAME | TYPE NAME) ([--limits = LIMITS &amp; --
requests = REQUESTS]
$ kubectl set resources deployment tomcat -c = tomcat --
limits = cpu = 200m,memory = 512Mi
</pre>


kubectl top node − It displays CPU/Memory/Storage usage. The top command allows you to see the resource consumption for nodes.


<pre>$ kubectl top node [node Name]
</pre>


The same command can be used with a pod as well.


