# Kubernetes - Jobs


The main function of a job is to create one or more pod and tracks about the success of pods. They ensure that the specified number of pods are completed successfully. When a specified number of successful run of pods is completed, then the job is considered complete.


Use the following command to create a job −


<pre>apiVersion: v1
kind: Job ------------------------&gt; 1
metadata:
   name: py
   spec:
   template:
      metadata
      name: py -------&gt; 2
      spec:
         containers:
            - name: py ------------------------&gt; 3
            image: python----------&gt; 4
            command: ["python", "SUCCESS"]
            restartPocliy: Never --------&gt; 5
</pre>


In the above code, we have defined −


We will create the job using the following command with yaml which is saved with the name py.yaml.


<pre>$ kubectl create –f py.yaml
</pre>


The above command will create a job. If you want to check the status of a job, use the following command.


<pre>$ kubectl describe jobs/py
</pre>


The above command will create a job. If you want to check the status of a job, use the following command.


Scheduled job in Kubernetes uses Cronetes, which takes Kubernetes job and launches them in Kubernetes cluster.


Note − The feature of a scheduled job is supported by version 1.4 and the betch/v2alpha 1 API is turned on by passing the –runtime-config=batch/v2alpha1 while bringing up the API server.


We will use the same yaml which we used to create the job and make it a scheduled job.


<pre>apiVersion: v1
kind: Job
metadata:
   name: py
spec:
   schedule: h/30 * * * * ? -------------------&gt; 1
   template:
      metadata
         name: py
      spec:
         containers:
         - name: py
         image: python
         args:
/bin/sh -------&gt; 2
-c
ps –eaf ------------&gt; 3
restartPocliy: OnFailure
</pre>


In the above code, we have defined −


This scheduled job concept is useful when we are trying to build and run a set of tasks at a specified point of time and then complete the process.


