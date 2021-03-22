(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{821:function(e,a,t){"use strict";t.r(a);var o=t(31),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"change-default-datasources-and-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-default-datasources-and-connections"}},[e._v("#")]),e._v(" Change Default Datasources and Connections")]),e._v(" "),t("h2",{attrs:{id:"purpose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),t("p",[e._v("This tutorial explains how to customize our EAP and Wildfly base Docker images, and then configure the EntandoApp\ncustom resource to use these customizations")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The Entando Operator is running in the target names")])]),e._v(" "),t("li",[t("p",[e._v("Keycloak and the Entando Cluster Infrastructure have been deployed")])]),e._v(" "),t("li",[t("p",[e._v("The required external databases and other services are up and running.")])]),e._v(" "),t("li",[t("p",[e._v("Your own custom project as described in "),t("a",{attrs:{href:"../app-engine/building-prepackaged-image"}},[e._v("the tutorial")])])])]),e._v(" "),t("h2",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),t("h3",{attrs:{id:"_1-create-a-docker-project-for-your-own-base-image-to-entando-s-standard-base-image-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-docker-project-for-your-own-base-image-to-entando-s-standard-base-image-s"}},[e._v("#")]),e._v(" 1. Create a Docker project for your own base image to Entando's standard base image(s)")]),e._v(" "),t("p",[e._v("Create a project, ideally in Git repository, and put the following files in the folder")]),e._v(" "),t("h4",{attrs:{id:"_1-1-the-standalone-xml-standalone-openshift-xml-file-of-choice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-the-standalone-xml-standalone-openshift-xml-file-of-choice"}},[e._v("#")]),e._v(" 1.1. The standalone.xml/standalone-openshift.xml file of choice")]),e._v(" "),t("p",[e._v("It is essential for your custom Docker image to use a file from one of the official Entando Docker base images.")]),e._v(" "),t("p",[e._v("If you intend to use provide your own EAP based image, please use this\n"),t("a",{attrs:{href:"https://github.com/entando/entando-docker-base-images/blob/master/entando-eap71-clustered-base/standalone-openshift.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("standalone-openshift.xml"),t("OutboundLink")],1),e._v("\nfile.")]),e._v(" "),t("p",[e._v("If you intend to use provide your own Wildfly based image, please use this\n"),t("a",{attrs:{href:"https://github.com/entando/entando-docker-base-images/blob/master/entando-wildfly12-base/contrib/wildfly-configuration/standalone.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("standalone.xml"),t("OutboundLink")],1),e._v("\nfile.")]),e._v(" "),t("p",[e._v("Please note that if you create your own base image with a different version of EAP or Wildfly, using these files\nmay have unintended consequences.")]),e._v(" "),t("h4",{attrs:{id:"_1-2-any-modules-that-may-be-required-for-your-datasource-or-other-connection-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-any-modules-that-may-be-required-for-your-datasource-or-other-connection-resource"}},[e._v("#")]),e._v(" 1.2. Any modules that may be required for your datasource or other connection resource")]),e._v(" "),t("p",[e._v("If the resource you need to connect to requires some custom classes, such as JDBC drivers, please add these as"),t("br"),e._v("\na module to Wildfly/EAP. As an example, you can look at our\n"),t("a",{attrs:{href:"https://github.com/entando/entando-docker-base-images/tree/master/entando-base-common/wfmodules/org/apache/derby/jdbc/main",target:"_blank",rel:"noopener noreferrer"}},[e._v("Derby database module"),t("OutboundLink")],1),e._v("\nthat Entando uses for embedded databases. Please ensure that the path of the folder containing the jar files reflects\nthe fully qualified name of the module in the module.xml file.")]),e._v(" "),t("h4",{attrs:{id:"_1-3-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-dockerfile"}},[e._v("#")]),e._v(" 1.3 Dockerfile")]),e._v(" "),t("p",[e._v("In your Dockerfile, please be sure to extend the correct base image, and add the correct configuration file to\nthe correct location in the target image.")]),e._v(" "),t("p",[e._v("For EAP, a most basic Dockerfile would look like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FROM entando/entando-eap71-clustered-base:6.1.2\nCOPY --chown=185:0 ./standalone-openshift.xml /opt/eap/standalone/configuration\n")])])]),t("p",[e._v("For Wildfly, a most basic Dockerfile would look like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FROM entando/entando-eap71-clustered-base:6.1.2\nCOPY --chown=1001:0 ./standalone.xml /wildfly/standalone/configuration\n")])])]),t("p",[e._v("Please take note of the user ownership in these different Dockerfiles. This is quite important as Openshift will\nexpect the user/group ownership to be respected.")]),e._v(" "),t("h3",{attrs:{id:"_2-customize-the-standalone-xml-standalone-openshift-xml-file-using-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-customize-the-standalone-xml-standalone-openshift-xml-file-using-environment-variables"}},[e._v("#")]),e._v(" 2. Customize the standalone.xml/standalone-openshift.xml file using environment variables.")]),e._v(" "),t("p",[e._v("You can now modify your Wildfly/EAP configuration to meet your requirements. Where the configuration could differ\nfrom one environment to a next, we strongly advise using environment variable expressions ("),t("code",[e._v("${env.VAR_NAME}")]),e._v("). The most likely change\nthat would be required in this file is the addition of a datasource. Here is an example of how to add a datasource\nto the datasources subsystem. All the environment variables starting with 'YOURDB' can be specified from the Docker\ncontainer.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   ...\n    <subsystem xmlns="urn:jboss:domain:datasources:5.0">\n      <datasources>\n        <datasource jndi-name="${env.YOURDB_JNDI}" enabled="true" use-java-context="true" pool-name="yourDbDataSource" use-ccm="true">\n          <connection-url>${env.YOURDB_URL}</connection-url>\n          <driver>${env.YOURDB_DRIVER}</driver>\n          <security>\n            <user-name>${env.YOURDB_USERNAME}</user-name>\n            <password>${env.YOURDB_PASSWORD}</password>\n          </security>\n        </datasource>\n')])])]),t("p",[e._v("Please take extra care not to remove any lines from these files. This is of particular importance in the case of the\nEAP image as, on startup, scripts in the official EAP look for certain placeholders in this file and populates them\nfrom other environment variables.")]),e._v(" "),t("h3",{attrs:{id:"_3-build-your-own-docker-base-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-build-your-own-docker-base-image"}},[e._v("#")]),e._v(" 3. Build your own Docker base image")]),e._v(" "),t("p",[e._v("You can now build your Docker base image. It is highly recommended that you consider using a dedicated CI/CD build\ntool such as Jenkins X to build the base image and maintain traceability between your source code and the resulting\nDocker image. One possible build command could look like this:")]),e._v(" "),t("p",[t("code",[e._v("docker build . -t your-docker-registry.com/your-org/your-base-image:1.0.0")])]),e._v(" "),t("h3",{attrs:{id:"_4-modify-your-entando-app-project-to-use-the-new-docker-base-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-modify-your-entando-app-project-to-use-the-new-docker-base-image"}},[e._v("#")]),e._v(" 4. Modify your Entando App project to use the new Docker base image")]),e._v(" "),t("p",[e._v("You can now modify your Entando App project that you have forked as described in the\n"),t("a",{attrs:{href:"../../devops/build-core-image"}},[e._v("relevant tutorial")]),e._v(". You would require two changes to the pom.xml file\nof the sample project.")]),e._v(" "),t("ul",[t("li",[e._v("Firstly, you would need to change the variable "),t("code",[e._v("server.base.image")]),e._v(" to reflect the fully\nqualified URI of your Docker image for EAP and/or Wildfly. For example, if you decided to extend the Wildfly image,\ngo to the Maven profile with the id "),t("code",[e._v("wildfly")]),e._v(" and change the  "),t("code",[e._v("server.base.image")]),e._v(" to look like this:")])]),e._v(" "),t("p",[t("code",[e._v("<server.base.image>your-docker-registry.com/your-org/your-base-image:1.0.0</server.base.image>")])]),e._v(" "),t("ul",[t("li",[e._v("Then you need to change the "),t("code",[e._v("<from>")]),e._v(" element in the Fabric8 Maven Docker Plugin to reflect this variable.\nNavigate to the first "),t("code",[e._v("<image>")]),e._v(" element in the pom.xml file. You have found the correct one\nif it contains the following xml:")])]),e._v(" "),t("p",[t("code",[e._v("<from>entando/${server.base.image}:${entando.version}</from>")])]),e._v(" "),t("p",[e._v("Delete the "),t("code",[e._v("entando/")]),e._v(" prefix and the "),t("code",[e._v(":${entando.version}")]),e._v(" suffix:")]),e._v(" "),t("p",[t("code",[e._v("<from>${server.base.image}</from>")])]),e._v(" "),t("p",[e._v("Please note that, should you still require support for both Wildfly and EAP in your Maven pom, you may need to\nrepeat this exercise for both the "),t("code",[e._v("eap")]),e._v(" and "),t("code",[e._v("wildfly")]),e._v(" profiles.")]),e._v(" "),t("h3",{attrs:{id:"_5-build-and-push-your-custom-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-build-and-push-your-custom-docker-image"}},[e._v("#")]),e._v(" 5. Build and push your custom Docker image")]),e._v(" "),t("p",[e._v("Before building your Docker image, it would be a good idea to change the name of the image you want to build. Navigate\nto the previously modified "),t("code",[e._v("<image>")]),e._v(" element in the Fabric8 Maven Docker Plugin.You can change the "),t("code",[e._v("<name>")]),e._v(" element\nto reflect your preferred name, e.g.")]),e._v(" "),t("p",[t("code",[e._v("<name>your-docker-registry.com/your-org/your-entando-app:1.0.0</name>")])]),e._v(" "),t("p",[e._v("Run:")]),e._v(" "),t("p",[t("code",[e._v("mvn clean package -Pwildfly -Pderby")])]),e._v(" "),t("p",[e._v("A new Docker image should now be available named "),t("code",[e._v("your-docker-registry.com/your-org/your-entando-app:1.0.0")])]),e._v(" "),t("p",[e._v("Log into the Docker registry in question and then push the image:")]),e._v(" "),t("p",[t("code",[e._v("docker push your-docker-registry.com/your-org/your-entando-app:1.0.0")])]),e._v(" "),t("p",[e._v("You are now ready to deploy this image.")]),e._v(" "),t("h3",{attrs:{id:"_6-deploy-your-entandoapp-with-the-correct-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-deploy-your-entandoapp-with-the-correct-environment-variables"}},[e._v("#")]),e._v(" 6. Deploy your EntandoApp with the correct environment variables")]),e._v(" "),t("p",[e._v("The final step is to configure your EntandoApp deployment with the correct environment variables. As is the case with\nall the Entando Custom Resources that result in actual deployments, the property "),t("code",[e._v("spec.parameters")]),e._v(" will be translated\ninto environment variables on each of the Containers in the Deployment's Pod. For an EntandoApp named 'my-app',\nthe new state of the EntandoApp would could be placed in a file named "),t("code",[e._v("my-app.yaml")]),e._v(" that would look something like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      kind: "EntandoApp"\n      metadata:\n        name: "my-app"\n      spec:\n        dbms: postgresql\n        replicas: 1\n        customServerImage: your-docker-registry.com/your-org/your-entando-app:1.0.0\n        ingressPath: /your-entando-app\n        parameters:\n          YOURDB_JNDI: java/your-ds\n          YOURDB_URL: jdbc:postgresql://somehost.com:5432/mydb\n          YOURDB_DRIVER: postgresql\n          YOURDB_USERNAME: my_user\n          YOURDB_PASSWORD: mypassword\n      entandoStatus:\n        entandoDeploymentPhase: requested\n\n')])])]),t("p",[e._v("Notice how this Custom Resource specifies a "),t("code",[e._v("parameter")]),e._v(" for each environment variable that was referenced from the\n"),t("code",[e._v("standalone.xml")]),e._v(" file referenced earlier.")]),e._v(" "),t("p",[e._v("To apply the changes to your deployment, change the "),t("code",[e._v("entandoStatus.entandoDeploymentPhase")]),e._v(" property to requested and\napply the file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl apply -f my-app.yaml\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);