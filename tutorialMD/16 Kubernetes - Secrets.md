# Kubernetes - Secrets


Secrets can be defined as Kubernetes objects used to store sensitive data such as user name and passwords with encryption.


There are multiple ways of creating secrets in Kubernetes.


In order to create secrets from a text file such as user name and password, we first need to store them in a txt file and use the following command.


<pre>$ kubectl create secret generic tomcat-passwd –-from-file = ./username.txt –fromfile = ./.
password.txt
</pre>


<pre>apiVersion: v1
kind: Secret
metadata:
name: tomcat-pass
type: Opaque
data:
   password: &lt;User Password&gt;
   username: &lt;User Name&gt;
</pre>


<pre>$ kubectl create –f Secret.yaml
secrets/tomcat-pass
</pre>


Once we have created the secrets, it can be consumed in a pod or the replication controller as −


In order to use the secret as environment variable, we will use env under the spec section of pod yaml file.


<pre>env:
- name: SECRET_USERNAME
   valueFrom:
      secretKeyRef:
         name: mysecret
         key: tomcat-pass
</pre>


<pre>spec:
   volumes:
      - name: "secretstest"
         secret:
            secretName: tomcat-pass
   containers:
      - image: tomcat:7.0
         name: awebserver
         volumeMounts:
            - mountPath: "/tmp/mysec"
            name: "secretstest"
</pre>


<pre>apiVersion: v1
kind: ReplicationController
metadata:
   name: appname
spec:
replicas: replica_count
template:
   metadata:
      name: appname
   spec:
      nodeSelector:
         resource-group:
      containers:
         - name: appname
            image:
            imagePullPolicy: Always
            ports:
            - containerPort: 3000
            env: ----------------------------- 1
               - name: ENV
                  valueFrom:
                     configMapKeyRef:
                        name: appname
                        key: tomcat-secrets
</pre>


In the above code, under the env definition, we are using secrets as environment variable in the replication controller.


<pre>apiVersion: v1
kind: pod
metadata:
   name: appname
spec:
   metadata:
      name: appname
   spec:
   volumes:
      - name: "secretstest"
         secret:
            secretName: tomcat-pass
   containers:
      - image: tomcat: 8.0
         name: awebserver
         volumeMounts:
            - mountPath: "/tmp/mysec"
            name: "secretstest"
</pre>


