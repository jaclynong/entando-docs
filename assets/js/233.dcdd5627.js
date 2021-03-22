(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{897:function(e,a,t){"use strict";t.r(a);var n=t(31),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adding-a-new-api-to-the-core-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-api-to-the-core-app"}},[e._v("#")]),e._v(" Adding a new API to the core app")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Java 8")])]),e._v(" "),t("li",[t("p",[e._v("maven")])])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("This guide will take you through adding a new REST API to the Entando\ncore app. In some cases it is better to add new APIs to the core rather\nthan creating a new microservice. Some example cases where adding new\nAPIs to the core is recommended are:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("When extending or adding functionality to the WCMS")])]),e._v(" "),t("li",[t("p",[e._v("When you have a simple use case requiring persistence that is\nspecific to only the application you’re working within")])]),e._v(" "),t("li",[t("p",[e._v("When exposing configurations that are needed by the portal-ui during\npage rendering")])]),e._v(" "),t("li",[t("p",[e._v("For small changes that don’t warrant a full stand-alone microservice")])])]),e._v(" "),t("p",[e._v("You can build widgets and micro frontends that take advantage of these\nAPIs in the same way that your micro-frontends can invoke APIs exposed\nby other services.")]),e._v(" "),t("h2",{attrs:{id:"tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[e._v("#")]),e._v(" Tutorial")]),e._v(" "),t("p",[e._v("Creating a controller and services")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a new java package in the project using your favorite IDE at\nthe path "),t("code",[e._v("org.entando.training")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Under that package add packages for "),t("code",[e._v("controllers")]),e._v(" and "),t("code",[e._v("services")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Create a class called "),t("a",{attrs:{href:"/assets/add-rest-api/DemoController.java"}},[e._v("DemoController.java")]),e._v(" from the\ntraining package into the controllers package.")]),e._v(" "),t("ul",[t("li",[e._v("This is a normal Spring rest controller and it will be\ndiscovered by annotations.")])])]),e._v(" "),t("li",[t("p",[e._v("Copy "),t("a",{attrs:{href:"/assets/add-rest-api/DemoService.java"}},[e._v("DemoService.java")]),e._v(" from the\ntraining package into the services package.")]),e._v(" "),t("ul",[t("li",[e._v("This is a normal Spring service that will be autowired into the\ncontroller. The data in this service is hardcoded but this is\nwhere you can wire in external services or other parts of the\nEntando architecture to fetch the data.")])])]),e._v(" "),t("li",[t("p",[e._v("Copy "),t("a",{attrs:{href:"/assets/add-rest-api/commonConfig.xml"}},[e._v("commonConfig.xml")]),e._v(" to\n"),t("code",[e._v("src/main/resources/spring/aps/managers")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The goal is to enable package scanning for annotation driven\nspring services. This includes the package scan for your package\ndefined above. If you want to scan another package, then you\nneed to add another path to this file. This is the only spring\nXML you will need to change if you want to build annotation\ndriven beans in Entando.")])]),e._v(" "),t("li",[t("p",[e._v("See also web.xml for deeper details.")])])])]),e._v(" "),t("li",[t("p",[e._v("Review the code and annotations in the controller to understand how\nthe APIs are protected and integrated.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("@RestAccessControl")]),e._v(" is a custom Entando annotation that can be used\nto restrict APIs by role.")]),e._v(" "),t("ul",[t("li",[e._v("The rest of the annotations are normal Spring annotations.")])])]),e._v(" "),t("li",[t("p",[e._v("Restart your app using jetty.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("if you get an error add the entries below to\n"),t("code",[e._v("src/main/conf/systemParams.properties")]),e._v(" This is temporary")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("# Parameters for Argon2 algorithm encryption\nalgo.argon2.type=ARGON2i\nalgo.argon2.hash.length=32\nalgo.argon2.salt.length=16\nalgo.argon2.iterations=4\nalgo.argon2.memory=65536\nalgo.argon2.parallelism=4\nalgo.default.key=changeit\n")])])])])])]),e._v(" "),t("li",[t("p",[e._v("Go to Swagger")])]),e._v(" "),t("li",[t("p",[e._v("Find the demo-controller and try your new endpoints out using\nswagger")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);