# Kubernetes - Images


Kubernetes (Docker) images are the key building blocks of Containerized Infrastructure. As of now, we are only supporting Kubernetes to support Docker images. Each container in a pod has its Docker image running inside it.


When we are configuring a pod, the image property in the configuration file has the same syntax as the Docker command does. The configuration file has a field to define the image name, which we are planning to pull from the registry.


Following is the common configuration structure which will pull image from Docker registry and deploy in to Kubernetes container.


<pre>apiVersion: v1
kind: pod
metadata:
   name: Tesing_for_Image_pull -----------&gt; 1
   spec:
      containers:
         - name: neo4j-server ------------------------&gt; 2
         image: &lt;Name of the Docker image&gt;---------- 3
         imagePullPolicy: Always -------------&gt;4
         command: ["echo", "SUCCESS"] -------------------&gt;
</pre>


In the above code, we have defined −


In order to pull the image and create a container, we will run the following command.


<pre>$ kubectl create –f Tesing_for_Image_pull
</pre>


Once we fetch the log, we will get the output as successful.


<pre>$ kubectl log Tesing_for_Image_pull
</pre>


The above command will produce an output of success or we will get an output as failure.


Note − It is recommended that you try all the commands yourself.


