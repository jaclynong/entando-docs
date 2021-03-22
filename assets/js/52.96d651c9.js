(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{639:function(t,e,s){t.exports=s.p+"assets/img/entando-login.0d7dcc2a.png"},640:function(t,e,s){t.exports=s.p+"assets/img/entando-app-builder.129380b5.png"},949:function(t,e,s){"use strict";s.r(e);var a=s(31),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started-with-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-entando"}},[t._v("#")]),t._v(" Getting Started with Entando")]),t._v(" "),a("p",[t._v("You have two options for getting started with Entando.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#automatic-install"}},[t._v("Automatically install Entando via the Entando command-line interface (CLI)")]),t._v(". This is the fastest way to start up an Entando application in Kubernetes.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#manual-install"}},[t._v("Manually install Entando step by step")]),t._v(". This is useful if you're preparing a shared cluster rather than a local developer environment, the CLI defaults don't meet your specific needs, or if you want to customize the deploy itself.")])]),t._v(" "),a("h2",{attrs:{id:"automatic-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-install"}},[t._v("#")]),t._v(" Automatic Install")]),t._v(" "),a("p",[t._v("The following steps will launch an Ubuntu VM via Multipass, install Kubernetes, and then deploy Entando to it.")]),t._v(" "),a("ol",[a("li",[t._v("Install "),a("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipass"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-http request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("https:")]),t._v("//multipass.run/#install\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Install Entando into Kubernetes on Ubuntu using the "),a("RouterLink",{attrs:{to:"/v6.3/docs/reference/entando-cli.html"}},[t._v("Entando CLI")])],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://get.entando.org "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("The progress of the install will be displayed on the console and can take 10 minutes or so depending on the time needed to download the Docker images. The sequence of steps matches the manual steps below. It can be useful to review those steps to help understand what the CLI is doing.")]),t._v(" "),a("li",[t._v("Once complete, the installer will give you the URL to access the "),a("code",[t._v("Entando App Builder")]),t._v(".")]),t._v(" "),a("li",[t._v("Login with username:"),a("code",[t._v("admin")]),t._v(" and password: "),a("code",[t._v("adminadmin")]),t._v(". See the "),a("a",{attrs:{href:"#log-in-to-entando"}},[t._v("Log in to Entando")]),t._v(" section for more information and next steps.")])]),t._v(" "),a("h2",{attrs:{id:"manual-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-install"}},[t._v("#")]),t._v(" Manual Install")]),t._v(" "),a("p",[t._v("This in-depth guide takes a learn-as-you-go approach, and will give you a working knowledge of Kubernetes as you get Entando up and running in a local environment.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#install-kubernetes"}},[t._v("Install Kubernetes")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#prepare-kubernetes"}},[t._v("Prepare Kubernetes Environment")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#deploy-entando"}},[t._v("Deploy Entando")])])]),t._v(" "),a("p",[t._v("Note: For advanced or long-time Entando users, check out our "),a("a",{attrs:{href:"quick-reference"}},[t._v("Quick Reference")]),t._v(" install guide with just the steps.")]),t._v(" "),a("p",[t._v("Since Entando is designed to run on Kubernetes, let's get started by installing our own instance of Kubernetes locally.")]),t._v(" "),a("p",[t._v("We've tested a variety of Kubernetes implementations including Minikube, Minishift, CodeReady Containers, K3s, and Microk8s to find the best combination of low cpu/memory usage, fast startup times, and minimal configuration so we can get started quickly. After downloading the necessary files, we'll have our own instance of Kubernetes up and running in < 60 seconds.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What's Needed to Run Kubernetes?")]),t._v(" "),a("p",[t._v("Kubernetes is a container orchestrator designed to manage a server cluster. It requires at least one master node running a Linux OS. We'll be using Multipass to create a lightweight Ubuntu VM in seconds that runs on a bare metal hypervisor for speed and performance.")])]),t._v(" "),a("h3",{attrs:{id:"install-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-kubernetes"}},[t._v("#")]),t._v(" Install Kubernetes")]),t._v(" "),a("h4",{attrs:{id:"enable-hypervisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-hypervisor"}},[t._v("#")]),t._v(" Enable Hypervisor")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why a Hypervisor?")]),t._v(" "),a("p",[t._v("Hypervisors allow you to create and run virtual machines. Virtualization software that run on top of your operating system like VirtualBox or VMWare Workstation are Type 2 hypervisors. Type 1 hypervisors run on bare metal.")])]),t._v(" "),a("p",[t._v("Let's install a bare metal hypervisor for optimal performance.")]),t._v(" "),a("p",[a("strong",[t._v("Mac:")]),t._v(" Install "),a("code",[t._v("hyperkit")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hyperkit\n")])])]),a("p",[a("strong",[t._v("Windows:")]),t._v(" "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v?redirectedfrom=MSDN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Hyper-V"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What if my machine doesn't support hyperkit or Hyper-V?")]),t._v(" "),a("p",[t._v("Use a Type 2 hypervisor that runs on top of your operating system:")]),t._v(" "),a("ul",[a("li",[t._v("Install Virtual Box:\n"),a("a",{attrs:{href:"https://multipass.run/docs/installing-on-macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://multipass.run/docs/installing-on-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),a("OutboundLink")],1)])])]),t._v(" "),a("hr"),t._v(" "),a("br"),t._v(" "),a("h4",{attrs:{id:"launch-ubuntu-vm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-ubuntu-vm"}},[t._v("#")]),t._v(" Launch Ubuntu VM")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why Multipass?")]),t._v(" "),a("p",[t._v("Multipass is a cross-platform tool developed by the publishers of Ubuntu to create lightweight Ubuntu VMs in seconds.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install "),a("a",{attrs:{href:"https://multipass.run/#install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multipass"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Launch VM")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("multipass launch --name ubuntu-lts --cpus "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" --mem 8G --disk 20G\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Open a shell")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("multipass shell ubuntu-lts\n")])])]),a("h4",{attrs:{id:"run-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-kubernetes"}},[t._v("#")]),t._v(" Run Kubernetes")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why K3s?")]),t._v(" "),a("p",[t._v("K3s is a certified Kubernetes distribution designed for production workloads in resource-constrained environments.")]),t._v(" "),a("p",[t._v("It's packaged as a single <40MB binary that reduces the dependencies and steps needed to install, run and auto-update a production Kubernetes cluster.")])]),t._v(" "),a("ol",[a("li",[t._v("Install "),a("code",[t._v("k3s")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sfL https://get.k3s.io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Check for "),a("code",[t._v("Ready")]),t._v(" "),a("code",[t._v("STATUS")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get node\n")])])]),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What's running out of the box?")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -A\n")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("You now have a local instance of Kubernetes up and running.")])]),t._v(" "),a("p",[t._v("Now that Kubernetes is running, you can setup kubectl to send commands directly to k3s from the host machine rather than from within the VM. See the instructions "),a("a",{attrs:{href:"https://rancher.com/docs/k3s/latest/en/cluster-access/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"prepare-kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-kubernetes"}},[t._v("#")]),t._v(" Prepare Kubernetes")]),t._v(" "),a("p",[t._v("To install Entando, we'll add "),a("code",[t._v("Custom Resources")]),t._v(", create a "),a("code",[t._v("Namespace")]),t._v(", download a "),a("code",[t._v("Helm")]),t._v(" chart, and configure external access to our cluster.")]),t._v(" "),a("h4",{attrs:{id:"add-custom-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-custom-resources"}},[t._v("#")]),t._v(" Add Custom Resources")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Why Custom Resources?")]),t._v(" "),a("p",[t._v("Standard resources in Kubernetes include things like "),a("code",[t._v("Pods")]),t._v(", which are a group of one or more containers, "),a("code",[t._v("Services")]),t._v(", the way to call or access your pods, and "),a("code",[t._v("Ingresses")]),t._v(", for managing external access to your cluster.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom resources"),a("OutboundLink")],1),t._v(" let you store and retrieve structured data. Combining a custom resource with a custom controller allows you to define a desired state to automate the running of your applications or services in a Kubernetes cluster.")])]),t._v(" "),a("p",[t._v("Examples of custom resources in Entando are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Entando App Engine")])]),t._v(" "),a("li",[a("code",[t._v("Entando Identity Management System")])])]),t._v(" "),a("p",[t._v("From your Ubuntu shell:")]),t._v(" "),a("ol",[a("li",[t._v("Download custom resource definitions.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -C - https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/custom-resources.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xz\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Create custom resources")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl create -f dist/crd\n")])])]),a("h4",{attrs:{id:"create-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-namespace"}},[t._v("#")]),t._v(" Create Namespace")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What are Namespaces?")]),t._v(" "),a("p",[t._v("Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",target:"_blank",rel:"noopener noreferrer"}},[t._v("namespaces."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can use namespaces to allocate resources and set cpu/memory limits for individual projects or teams. They can also encapsulate projects from one another.")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl create namespace entando\n")])])]),a("h4",{attrs:{id:"download-helm-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-helm-chart"}},[t._v("#")]),t._v(" Download Helm Chart")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What is Helm?")]),t._v(" "),a("p",[t._v("Helm is a package manager for Kubernetes that helps you define, install, and upgrade Kubernetes applications.\nThis "),a("em",[t._v("Getting Started")]),t._v(" guide uses a Helm-generated file with a number of default values to help get you started faster,\ne.g. use embedded databases, don't include OpenShift support, don't include PDA widgets, etc. If you want to\nchange any of those defaults please see "),a("a",{attrs:{href:"https://github.com/entando-k8s/entando-helm-quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/entando-k8s/entando-helm-quickstart"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L -C - -O https://raw.githubusercontent.com/entando/entando-releases/v6.3.0/dist/qs/entando.yaml\n")])])]),a("h4",{attrs:{id:"entandocompositeapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entandocompositeapp"}},[t._v("#")]),t._v(" EntandoCompositeApp")]),t._v(" "),a("p",[t._v("To quickly deploy an application, Entando uses a Kubernetes Custom Resource named "),a("code",[t._v("EntandoCompositeApp")]),t._v(". It's composed of 3 parts:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("EntandoKeycloakServer")]),t._v(" (authentication manager)")]),t._v(" "),a("li",[a("code",[t._v("EntandoClusterInfrastructure")]),t._v(" (interface between Entando app and Kubernetes)")]),t._v(" "),a("li",[a("code",[t._v("EntandoApp")]),t._v(" (core logic application)")])]),t._v(" "),a("p",[t._v("To speed up the "),a("em",[t._v("Getting Started")]),t._v(" environment, embedded databases are used by default for these components.\nSee "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/devops/default-database.html"}},[t._v("this tutorial")]),t._v(" for more information on how to change your\ndatabase connection.")],1),t._v(" "),a("h4",{attrs:{id:"configure-access-to-your-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-access-to-your-cluster"}},[t._v("#")]),t._v(" Configure Access to Your Cluster")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("What about Networking?")]),t._v(" "),a("p",[t._v("Entando sets up "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Ingresses")]),a("OutboundLink")],1),t._v(" in Kubernetes to expose HTTP routes from outside the cluster to services within the cluster. We'll use this to access Entando from a local browser.")]),t._v(" "),a("p",[t._v("If you run into network issues during startup or if you are using Windows for your local development instance, please see "),a("RouterLink",{attrs:{to:"/v6.3/docs/reference/local-tips-and-tricks.html#network-issues"}},[t._v("the tips")]),t._v(". Symptoms can include having Entando fail to completely start the first time or a working Entando installation may fail to restart later.")],1)]),t._v(" "),a("p",[t._v("To set up external access to your cluster, you'll need to replace the value of\n"),a("code",[t._v("ENTANDO_DEFAULT_ROUTING_SUFFIX")]),t._v(" with your Ubuntu IP. You can look up your Ubuntu IP, and edit the\nYAML file manaully, but running the below commands will automatically update the IP address for you.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s/192.168.64.25/'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IP")]),t._v('/"')]),t._v(" entando.yaml\n")])])]),a("h3",{attrs:{id:"deploy-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-entando"}},[t._v("#")]),t._v(" Deploy Entando")]),t._v(" "),a("p",[t._v("Deploying the Helm chart will deploy all of the Kubernetes resources required for Entando to run.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl create -f entando.yaml\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -n entando --watch\n")])])]),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What does a successful startup look like?")]),t._v(" "),a("ul",[a("li",[t._v("First, you'll see the Entando operator: "),a("code",[t._v("ContainerCreating")]),t._v(" > "),a("code",[t._v("Running")])]),t._v(" "),a("li",[t._v("Next, the Entando composite app deployer: "),a("code",[t._v("Pending")]),t._v(" > "),a("code",[t._v("ContainerCreating")]),t._v(" > "),a("code",[t._v("Running")])]),t._v(" "),a("li",[t._v("Then, Keycloak: "),a("code",[t._v("kc-deployer")]),t._v(" > "),a("code",[t._v("kc-db-deployment")])])]),t._v(" "),a("p",[a("strong",[t._v("Jobs / Deployments")])]),t._v(" "),a("ul",[a("li",[t._v("Jobs, like "),a("code",[t._v("kc-db-preparation-job")]),t._v(" run once, and are "),a("code",[t._v("Completed")]),t._v(": "),a("code",[t._v("0/1")])]),t._v(" "),a("li",[t._v("Database deployments, like "),a("code",[t._v("kc-db-deployment")]),t._v(", should end up as "),a("code",[t._v("Running")]),t._v(": "),a("code",[t._v("1/1")])]),t._v(" "),a("li",[t._v("The Keycloak server deployment "),a("code",[t._v("kc-server-deployment")]),t._v(", should end up as "),a("code",[t._v("Running")]),t._v(": "),a("code",[t._v("1/1")])]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("quickstart-server-deployment")]),t._v(" should end up as "),a("code",[t._v("3/3")])])]),t._v(" "),a("p",[a("strong",[t._v("Lifecycle Events")])]),t._v(" "),a("ul",[a("li",[t._v("Each line represents an event: "),a("code",[t._v("Pending")]),t._v(", "),a("code",[t._v("ContainerCreating")]),t._v(", "),a("code",[t._v("Running")]),t._v(" or "),a("code",[t._v("Completed")])]),t._v(" "),a("li",[t._v("Restarts should ideally be "),a("code",[t._v("0")]),t._v("; otherwise, there was a problem with your cluster, and Kubernetes is trying to self-heal")])]),t._v(" "),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[a("span",{pre:!0,attrs:{class:"token info punctuation"}},[a("span",{pre:!0,attrs:{class:"token user"}},[t._v("ubuntu@test-vm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token path"}},[t._v("~")])]),a("span",{pre:!0,attrs:{class:"token shell-symbol important"}},[t._v("$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token bash language-bash"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -n entando --watch")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token output"}},[t._v("NAME                                   READY   STATUS              RESTARTS   AGE\nquickstart-operator-8556c9c6f8-9ghwg   0/1     ContainerCreating   0          3s\nquickstart-operator-8556c9c6f8-9ghwg   0/1     Running             0          49s\nquickstart-composite-app-deployer-picaju7bf0   0/1     Pending             0          0s\nquickstart-composite-app-deployer-picaju7bf0   0/1     Pending             0          0s\nquickstart-composite-app-deployer-picaju7bf0   0/1     ContainerCreating   0          0s\nquickstart-composite-app-deployer-picaju7bf0   1/1     Running             0          20s\nquickstart-kc-deployer-mx7ms3sc2l              0/1     Pending             0          0s\nquickstart-kc-deployer-mx7ms3sc2l              0/1     Pending             0          0s\nquickstart-kc-deployer-mx7ms3sc2l              0/1     ContainerCreating   0          0s\nquickstart-operator-8556c9c6f8-9ghwg           1/1     Running             0          88s\nquickstart-kc-deployer-mx7ms3sc2l              1/1     Running             0          19s\nquickstart-kc-db-deployment-c57f75d7f-wxmqr    0/1     Pending             0          0s\nquickstart-kc-db-deployment-c57f75d7f-wxmqr    0/1     Pending             0          7s\nquickstart-kc-db-deployment-c57f75d7f-wxmqr    0/1     ContainerCreating   0          7s\nquickstart-kc-db-deployment-c57f75d7f-wxmqr    0/1     Running             0          77s\nquickstart-kc-db-deployment-c57f75d7f-wxmqr    1/1     Running             0          87s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     Pending             0          0s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     Pending             0          0s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     Init:0/1            0          0s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     Init:0/1            0          13s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     PodInitializing     0          15s\nquickstart-kc-db-preparation-job-1d6ab9b6-7    0/1     Completed           0          17s\nquickstart-kc-server-deployment-66484d596d-qr78q   0/1     Pending             0          0s\nquickstart-kc-server-deployment-66484d596d-qr78q   0/1     Pending             0          0s\nquickstart-kc-server-deployment-66484d596d-qr78q   0/1     ContainerCreating   0          0s\nquickstart-kc-server-deployment-66484d596d-qr78q   0/1     Running             0          3m\nquickstart-kc-server-deployment-66484d596d-qr78q   1/1     Running             0          4m36s\nquickstart-kc-deployer-mx7ms3sc2l                  0/1     Completed           0          6m50s\nquickstart-eci-deployer-kx9nhop22g                 0/1     Pending             0          0s\nquickstart-eci-deployer-kx9nhop22g                 0/1     Pending             0          0s\nquickstart-eci-deployer-kx9nhop22g                 0/1     ContainerCreating   0          0s\nquickstart-eci-deployer-kx9nhop22g                 1/1     Running             0          5s\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   0/1     Pending             0          0s\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   0/1     Pending             0          0s\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   0/1     ContainerCreating   0          0s\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   0/1     Running             0          97s\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   1/1     Running             0          2m7s\nquickstart-eci-deployer-kx9nhop22g                   0/1     Completed           0          2m15s\nquickstart-deployer-os19rw3eto                       0/1     Pending             0          0s\nquickstart-deployer-os19rw3eto                       0/1     Pending             0          0s\nquickstart-deployer-os19rw3eto                       0/1     ContainerCreating   0          1s\nquickstart-deployer-os19rw3eto                       1/1     Running             0          6s\nquickstart-db-deployment-7fff4c8479-qf469            0/1     Pending             0          0s\nquickstart-db-deployment-7fff4c8479-qf469            0/1     Pending             0          4s\nquickstart-db-deployment-7fff4c8479-qf469            0/1     ContainerCreating   0          4s\nquickstart-db-deployment-7fff4c8479-qf469            0/1     Running             0          7s\nquickstart-db-deployment-7fff4c8479-qf469            1/1     Running             0          19s\nquickstart-db-preparation-job-5a55b267-6             0/1     Pending             0          0s\nquickstart-db-preparation-job-5a55b267-6             0/1     Pending             0          0s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:0/4            0          0s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:0/4            0          4s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:1/4            0          5s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:1/4            0          8s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:2/4            0          9s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:2/4            0          6m42s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:3/4            0          7m20s\nquickstart-db-preparation-job-5a55b267-6             0/1     Init:3/4            0          7m22s\nquickstart-db-preparation-job-5a55b267-6             0/1     PodInitializing     0          7m23s\nquickstart-db-preparation-job-5a55b267-6             0/1     Completed           0          7m25s\nquickstart-server-deployment-5597597575-gtptz        0/3     Pending             0          0s\nquickstart-server-deployment-5597597575-gtptz        0/3     Pending             0          4s\nquickstart-server-deployment-5597597575-gtptz        0/3     ContainerCreating   0          4s\nquickstart-server-deployment-5597597575-gtptz        0/3     Running             0          2m35s\nquickstart-server-deployment-5597597575-gtptz        1/3     Running             0          2m37s\nquickstart-server-deployment-5597597575-gtptz        2/3     Running             0          2m38s\nquickstart-server-deployment-5597597575-gtptz        3/3     Running             0          3m5s\nquickstart-deployer-os19rw3eto                       0/1     Completed           0          11m\nquickstart-composite-app-deployer-picaju7bf0         0/1     Completed           0          20m\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Press "),a("code",[t._v("Ctrl-C")]),t._v(" to exit the watch command once everything is up and running.")]),t._v(" "),a("hr"),t._v(" "),a("details",[a("summary",[t._v("What pods come out of the box?")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get pods -n entando\n")])])]),a("div",{staticClass:"language-shell-session extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell-session"}},[a("code",[a("span",{pre:!0,attrs:{class:"token output"}},[t._v("NAME                                                 READY   STATUS      RESTARTS   AGE\nquickstart-operator-8556c9c6f8-9ghwg                 1/1     Running     0          132m\nquickstart-kc-db-deployment-c57f75d7f-wxmqr          1/1     Running     0          130m\nquickstart-kc-db-preparation-job-1d6ab9b6-7          0/1     Completed   0          129m\nquickstart-kc-server-deployment-66484d596d-qr78q     1/1     Running     0          128m\nquickstart-kc-deployer-mx7ms3sc2l                    0/1     Completed   0          130m\nquickstart-eci-k8s-svc-deployment-7c58c78b55-z52xj   1/1     Running     0          123m\nquickstart-eci-deployer-kx9nhop22g                   0/1     Completed   0          124m\nquickstart-db-deployment-7fff4c8479-qf469            1/1     Running     0          121m\nquickstart-db-preparation-job-5a55b267-6             0/1     Completed   0          121m\nquickstart-server-deployment-5597597575-gtptz        3/3     Running     0          113m\nquickstart-deployer-os19rw3eto                       0/1     Completed   0          121m\nquickstart-composite-app-deployer-picaju7bf0         0/1     Completed   0          131m\n")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Get the URL to access Entando from your local browser.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kubectl get ingress -n entando -o "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("jsonpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{.items[2].spec.rules[*].host}{.items[2].spec.rules[*].http.paths[2].path}{\""),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("\"}'")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Example URL:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("quickstart-entando.192.168.64.33.nip.io/app-builder/\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"log-in-to-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-entando"}},[t._v("#")]),t._v(" Log in to Entando")]),t._v(" "),a("p",[t._v("Now that we've installed Entando, let's log in to the "),a("code",[t._v("Entando App Builder")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:s(639),alt:"entando-login.png"}})]),t._v(" "),a("ul",[a("li",[t._v("Username: "),a("code",[t._v("admin")])]),t._v(" "),a("li",[t._v("Password: "),a("code",[t._v("adminadmin")])])]),t._v(" "),a("p",[t._v("After login, change your password to activate your account.")]),t._v(" "),a("ul",[a("li",[t._v("Note: If the login process hangs for more than 5 seconds, refresh the browser.")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(640),alt:"entando-app-builder.png"}})]),t._v(" "),a("p",[t._v("The App Builder is where we'll compose our micro frontends alongside CMS pages and content.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Congratulations!")]),t._v(" "),a("p",[t._v("We now have Entando up and running on Kubernetes in our local environment.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[t._v("Choose one of the following actions to continue your journey with Entando!")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Build Your First Application:")]),t._v(" Use the "),a("RouterLink",{attrs:{to:"/v6.3/docs/getting-started/welcome-wizard.html"}},[t._v("Welcome Wizard")]),t._v(" to build your first application via guided prompts.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Try a Tutorial:")]),t._v(" Take advantage of the "),a("RouterLink",{attrs:{to:"/v6.3/tutorials/#learning-paths"}},[t._v("Learning Paths")]),t._v(" which organize a few of the most popular tutorials by user type.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Dig Deeper into Entando Concepts:")]),t._v(" Review the "),a("RouterLink",{attrs:{to:"/v6.3/docs/"}},[t._v("Docs")]),t._v(" sections to more deeply understand the Entando building blocks.")],1)]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Learn about the Quickstart Environment:")]),t._v(" See the "),a("RouterLink",{attrs:{to:"/v6.3/docs/reference/local-tips-and-tricks.html"}},[t._v("Quickstart Tips")]),t._v(" for more information on how to manage your Getting Started or quickstart environment.")],1)])]),t._v(" "),a("hr")])}),[],!1,null,null,null);e.default=n.exports}}]);