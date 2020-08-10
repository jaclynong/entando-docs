---
sidebarDepth: 2
--- 
# Local Development Tips and Tricks
We've collected a list of tips and tricks for optimizing your local development environment. 
We invite you to ask questions, collaborate with the community, and share your own favorite 
practices over on the [Entando forum](https://forum.entando.org).

## Kubernetes
Per the [Getting Started](../../docs/getting-started/) guide, we've recommended using Multipass as a way to quickly spin up an Ubuntu VM to host a local Kubernetes cluster for test purposes. There are many times when a local environment is useful but most teams utilize a shared Kubernetes cluster managed by an operations team and installed either on premise or with a cloud provider for full integration testing, CI/CD, DevOps, etc. 

## Windows development
### Hyper-V IP changes
**Q:** My Entando installation stops working when I restart Windows. How can I fix this?

**A:** The basic issue is that Windows Hyper-V makes it difficult to set
a static IP for a VM. See this [forum post](https://techcommunity.microsoft.com/t5/windows-insider-program/hyper-v-default-switch-ip-address-range-change-ver-1809-build/m-p/261431) for details. 
 
Locally the problem is that the ENTANDO_DEFAULT_ROUTING_SUFFIX (in your entando.yaml or similar) is based on a fixed IP address which is configured during the initial installation. That setting is used to generate ingress routes so it's not a simple fix to rewire those settings once Entando is installed. In production environments there's generally a dedicated network layer to manage IPs/routing (both on premise and cloud) but those options are generally not readily available in a local setup. Here are a few options short of modifying your router/switch settings: 

#### Option 1: Manually update your hosts file
The simplest option to re-enable external access to your cluster is to update your hosts file after each Windows restart.
 
You need two pieces of information for this workaround and you'll need administrator access to do this.

1. Determine the original IP used for your VM. This is included in the `ENTANDO_DEFAULT_ROUTING_SUFFIX` or you can see it included in the ingress names. Run ` kubectl -n entando get ingress` and you should see something like this:
````
NAME                          CLASS    HOSTS                                           
quickstart-kc-ingress         <none>   quickstart-kc-entando.192.168.235.100.nip.io  
quickstart-eci-ingress        <none>   quickstart-eci-entando.192.168.235.100.nip.io  
quickstart-ingress            <none>   quickstart-entando.192.168.235.100.nip.io    
````

2. Determine the current IP using `hostname -I` in the VM or by running `multipass list` from Windows:
```
$ multipass list
Name                    State             IPv4             Image
primary                 Running           172.31.118.12   Ubuntu 18.04 LTS
```

3. As a Windows administrator, edit your hosts file `(C:\Windows\System32\drivers\etc\hosts)` to map any needed URLs from the old IP to the new IP. This will bypass .nip.io lookups.

```
172.31.118.12 quickstart-kc-entando.192.168.235.100.nip.io
172.31.118.12 quickstart-eci-entando.192.168.235.100.nip.io
172.31.118.12 quickstart-entando.192.168.235.100.nip.io
``` 

4. You should now be able to access your Entando URLs via the new IP. If your Entando installation stalled during startup, it should continue starting up as soon as the external address is functional again. 

#### Option 2: Add a Windows route
This option is a little more involved the first time but it means repairing your network settings can be done very easily later. In this case you'll pick a static IP, configure a Windows route to map it to the Hyper-V interface, and claim the IP in the Ubuntu VM via a netplan entry. 

 You'll need to run all of these steps before installing Entando the first time but then just steps #1 and #2 after subsequent Windows restarts. 

1. Determine an IP that is unused on your local network. You can use ping or other tools for this but in the following steps we assume that your selected IP is 192.168.99.1.

2. Determine the interface address to Hyper-V, e.g. 32 below. Use cmd `route print` and look for the Interface entry for Hyper-V:
```
Interface List
 32...00 15 5d 86 45 20 ......Hyper-V Virtual Ethernet Adapter
```

3. Using elevated privileges, add a persistent route to map your IP to the Hyper-V interface: 
``` 
route -p add [YOUR-IP] mask 255.255.255.255 0.0.0.0 IF [HYPER-V-INTERFACE]
route -p add 192.168.99.1 mask 255.255.255.255 0.0.0.0 IF 32
```
4. Verify the route was added by using `route print 192.168.99.1`. This command is useful after restart to check if the route needs to be created again.

5. Next, configure your VM to claim the same address. Shell into the VM using `winpty multipass shell [YOUR-VM-NAME]`. 

6. Change to the root user to make the following steps simpler: `sudo -i`

7. Determine your network adapter via `ip link`, e.g. eth0. You just need the name. It's often second in the list after the loopback adapter.
``` bash
ubuntu@primary:~$ ip link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DEFAULT group default qlen 1000
    link/ether 00:15:5d:00:1a:0c brd ff:ff:ff:ff:ff:ff
```

8. `cd /etc/netplan`

9. Create a netplan entry starting with 0 so it's loaded first: `vi 0-entando.yaml`  

``` yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    [YOUR-NETWORK-ADAPTER]:
      dhcp4: no
      addresses: 
        - [YOUR-IP]/24
```
Example:

``` yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
      addresses: 
        - 192.168.99.1/24
```

10. Apply the changes via `netplan apply`

11. Verify connectivity via `ping 192.168.99.1` from the VM. You should get a response rather than a timeout.

12. (Optional) Run a python server to verify you can access the VM from the host at `http://192.168.99.1:8000.` It may take a minute or so before the server is ready.

13. You should now be able to install Entando using the static IP. If your Entando installation stalled during startup and was previously configured using the static IP, it should continue starting up as soon as the external address is functional again. 

#### Option 3: Reinstall Entando
We're including this option because it works and requires no additional configuration. If you plan to regularly work with Entando we recommend developing against a centralized and shared Kubernetes instance rather than running a full stack locally. If you need a cluster locally we recommend using option 1 or 2.

### JHipster
**Q:** How can I run JHipster on Windows? 

**A:** JHipster requires a TTY interface for its menus to function correctly. Here are a few options to satisfy that requirement on Windows:
* Run `jhipster` under cmd or Powershell 
* Using Git Bash, run `winpty jhipster.cmd`
* Use Ubuntu bash via WSL (1 or 2) or within the Multipass VM