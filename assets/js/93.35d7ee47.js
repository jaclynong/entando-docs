(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{637:function(e,t,n){e.exports=n.p+"assets/img/ecr-architecture.1101d571.png"},945:function(e,t,n){"use strict";n.r(t);var a=n(31),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The Entando Component Repository (ECR) is meant to be a repository to\nshare reusable components among different Entando instances.")]),e._v(" "),a("p",[e._v("The following glossary relates to the ECR and related concepts:")]),e._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),a("h3",{attrs:{id:"component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component"}},[e._v("#")]),e._v(" Component")]),e._v(" "),a("p",[e._v("An Entando component - simply referred to as component - is a piece of\nreusable code/resource to be used in an Entando widget, page or\napplication. Examples of components are widgets, microfrontends,\ncontent-types, labels, plugins, and static resources")]),e._v(" "),a("h3",{attrs:{id:"ecr-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecr-bundle"}},[e._v("#")]),e._v(" ECR Bundle")]),e._v(" "),a("p",[e._v("An ECR bundle - is a package containing one or more components and a\n'descriptor.yaml' file providing information about the bundle. The\nbundle is published on an Git registry and is shared with an Entando\napplication using the EntandoDeBundle custom resource.")]),e._v(" "),a("h3",{attrs:{id:"entandodebundle-custom-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entandodebundle-custom-resource"}},[e._v("#")]),e._v(" EntandoDeBundle custom resource")]),e._v(" "),a("p",[e._v("The EntandoDeBundle custom resource is a Kubernetes custom resource\nreadable by the Entando6 operator. It’s used to provide information\nabout an ECR bundle and make the bundle available in kubernetes for the\nentando-component-manager.")]),e._v(" "),a("h3",{attrs:{id:"entando-component-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-component-manager"}},[e._v("#")]),e._v(" Entando-component-manager")]),e._v(" "),a("p",[e._v("The entando-component-manager - a.k.a component-manager is part of the\nEntando6 app and dialogs both with the Kubernetes cluster via the\nentando-k8s-service and with the entando-core. The\nentando-component-manager reads the bundles from the cluster and exposes\nthem via an API accessible from AppBuilder. The component-manager is\nalso responsible of the installation/removal of components from\nentando-core")]),e._v(" "),a("h3",{attrs:{id:"entando-k8s-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entando-k8s-service"}},[e._v("#")]),e._v(" Entando-K8S-service")]),e._v(" "),a("p",[e._v("The Entando-K8S-Service is part of the Entando infrastructure and is\nresponsible for the low-level communication with the K8S cluster API.")]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[a("img",{attrs:{src:n(637),alt:"ECR Architecture"}})]),e._v(" "),a("p",[e._v("From an architectural point of view, the ECR is composed of")]),e._v(" "),a("ol",[a("li",[e._v("The EntandoDeBundles which contain the metadata associated with a bundle")]),e._v(" "),a("li",[e._v("The Entando-k8s-service which reads the bundles from the\ncluster/namspace(s) and serves them via a consumable API")]),e._v(" "),a("li",[e._v("The Component-manager which creates the connection between the EntandoApp\nand the K8S-service.")])]),e._v(" "),a("h2",{attrs:{id:"example-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-flow"}},[e._v("#")]),e._v(" Example flow")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The user lands on the ECR page in app-builder and wants to see the\nlist of bundles shared with that EntandoApp")])]),e._v(" "),a("li",[a("p",[e._v("AppBuilder asks the component-manager for the list of available\nbundles")])]),e._v(" "),a("li",[a("p",[e._v("Component-manager queries the k8s-service to get the available\nbundles")])]),e._v(" "),a("li",[a("p",[e._v("The k8s-service queries the cluster/namespace(s) it is able to read\nfrom for available bundles and returns the list to the\ncomponent-manager")])]),e._v(" "),a("li",[a("p",[e._v("Component-manager returns a list to App-Builder")])]),e._v(" "),a("li",[a("p",[e._v("The user is able to see the available bundles and is able to install\none or more of them")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);