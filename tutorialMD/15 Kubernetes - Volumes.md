# Kubernetes - Volumes


In Kubernetes, a volume can be thought of as a directory which is accessible to the containers in a pod. We have different types of volumes in Kubernetes and the type defines how the volume is created and its content.


The concept of volume was present with the Docker, however the only issue was that the volume was very much limited to a particular pod. As soon as the life of a pod ended, the volume was also lost.


On the other hand, the volumes that are created through Kubernetes is not limited to any container. It supports any or all the containers deployed inside the pod of Kubernetes. A key advantage of Kubernetes volume is, it supports different kind of storage wherein the pod can use multiple of them at the same time.


Here is a list of some popular Kubernetes Volumes −


Persistent Volume (PV) − It’s a piece of network storage that has been provisioned by the administrator. It’s a resource in the cluster which is independent of any individual pod that uses the PV.


Persistent Volume Claim (PVC) − The storage requested by Kubernetes for its pods is known as PVC. The user does not need to know the underlying provisioning. The claims must be created in the same namespace where the pod is created.


<pre>kind: PersistentVolume ---------&gt; 1
apiVersion: v1
metadata:
   name: pv0001 ------------------&gt; 2
   labels:
      type: local
spec:
   capacity: -----------------------&gt; 3
      storage: 10Gi ----------------------&gt; 4
   accessModes:
      - ReadWriteOnce -------------------&gt; 5
      hostPath:
         path: "/tmp/data01" --------------------------&gt; 6
</pre>


In the above code, we have defined −


<pre>$ kubectl create –f local-01.yaml
persistentvolume "pv0001" created
</pre>


<pre>$ kubectl get pv
NAME        CAPACITY      ACCESSMODES       STATUS       CLAIM      REASON     AGE
pv0001        10Gi            RWO         Available                            14s
</pre>


<pre>$ kubectl describe pv pv0001
</pre>


<pre>kind: PersistentVolumeClaim --------------&gt; 1
apiVersion: v1
metadata:
   name: myclaim-1 --------------------&gt; 2
spec:
   accessModes:
      - ReadWriteOnce ------------------------ 3
   resources:
      requests:
         storage: 3Gi --------------------- 4
</pre>


In the above code, we have defined −


<pre>$ kubectl create –f myclaim-1
persistentvolumeclaim "myclaim-1" created
</pre>


<pre>$ kubectl get pvc
NAME        STATUS   VOLUME   CAPACITY   ACCESSMODES   AGE
myclaim-1   Bound    pv0001     10Gi         RWO       7s
</pre>


<pre>$ kubectl describe pv pv0001
</pre>


<pre>kind: Pod
apiVersion: v1
metadata:
   name: mypod
   labels:
      name: frontendhttp
spec:
   containers:
   - name: myfrontend
      image: nginx
      ports:
      - containerPort: 80
         name: "http-server"
      volumeMounts: ---------------------------- 1
      - mountPath: "/usr/share/tomcat/html"
         name: mypd
   volumes: ----------------------- 2
      - name: mypd
         persistentVolumeClaim: -------------------------3
         claimName: myclaim-1
</pre>


In the above code, we have defined −


