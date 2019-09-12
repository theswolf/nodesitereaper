# Kubernetes - Pod


A pod is a collection of containers and its storage inside a node of a Kubernetes cluster. It is possible to create a pod with multiple containers inside it. For example, keeping a database container and data container in the same pod.


There are two types of Pods −


They can be simply created with the kubctl run command, where you have a defined image on the Docker registry which we will pull while creating a pod.


<pre>$ kubectl run &lt;name of pod&gt; --image=&lt;name of the image from registry&gt;
</pre>


Example − We will create a pod with a tomcat image which is available on the Docker hub.


<pre>$ kubectl run tomcat --image = tomcat:8.0
</pre>


This can also be done by creating the yaml file and then running the kubectl create command.


<pre>apiVersion: v1
kind: Pod
metadata:
   name: Tomcat
spec:
   containers:
   - name: Tomcat
      image: tomcat: 8.0
      ports:
containerPort: 7500
   imagePullPolicy: Always
</pre>


Once the above yaml file is created, we will save the file with the name of tomcat.yml and run the create command to run the document.


<pre>$ kubectl create –f tomcat.yml
</pre>


It will create a pod with the name of tomcat. We can use the describe command along with kubectl to describe the pod.


Multi container pods are created using yaml mail with the definition of the containers.


<pre>apiVersion: v1
kind: Pod
metadata:
   name: Tomcat
spec:
   containers:
   - name: Tomcat
      image: tomcat: 8.0
      ports:
containerPort: 7500
   imagePullPolicy: Always
   -name: Database
      Image: mongoDB
      Ports:
containerPort: 7501
   imagePullPolicy: Always
</pre>


In the above code, we have created one pod with two containers inside it, one for tomcat and the other for MongoDB.


