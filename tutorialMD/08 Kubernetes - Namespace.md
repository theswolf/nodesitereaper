# Kubernetes - Namespace


Namespace provides an additional qualification to a resource name. This is helpful when multiple teams are using the same cluster and there is a potential of name collision. It can be as a virtual wall between multiple clusters.


Following are some of the important functionalities of a Namespace in Kubernetes −


The following command is used to create a namespace.


<pre>apiVersion: v1
kind: Namespce
metadata
   name: elk
</pre>


The following command is used to control the namespace.


<pre>$ kubectl create –f namespace.yml ---------&gt; 1
$ kubectl get namespace -----------------&gt; 2
$ kubectl get namespace &lt;Namespace name&gt; -------3
$ kubectl describe namespace &lt;Namespace name&gt; ----&gt;4
$ kubectl delete namespace &lt;Namespace name&gt;
</pre>


In the above code,


Following is an example of a sample file for using namespace in service.


<pre>apiVersion: v1
kind: Service
metadata:
   name: elasticsearch
   namespace: elk
   labels:
      component: elasticsearch
spec:
   type: LoadBalancer
   selector:
      component: elasticsearch
   ports:
   - name: http
      port: 9200
      protocol: TCP
   - name: transport
      port: 9300
      protocol: TCP
</pre>


In the above code, we are using the same namespace under service metadata with the name of elk.


