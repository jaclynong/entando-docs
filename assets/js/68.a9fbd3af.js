(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{483:function(e,t,o){e.exports=o.p+"assets/img/component-gen-flow.15bc61e9.png"},744:function(e,t,o){"use strict";o.r(t);var n=o(31),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"generate-microservices-and-micro-frontends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-microservices-and-micro-frontends"}},[e._v("#")]),e._v(" Generate Microservices and Micro Frontends")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("This tutorial shows you how to use the Entando Component Generator powered by "),n("a",{attrs:{href:"https://www.jhipster.tech/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHipster"),n("OutboundLink")],1),e._v(" to create microservices and micro frontends for eventual deployment to the "),n("RouterLink",{attrs:{to:"/next/docs/ecr/ecr-overview.html"}},[e._v("Entando Component Repository")]),e._v(" and Entando applications.")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(483),alt:"Entando Component Generator"}})]),e._v(" "),n("p",[e._v("The general flow of the component generation is:")]),e._v(" "),n("ol",[n("li",[e._v("Run the Entando Blueprint to create your components (Spring Boot microservice and optionally React micro frontends)")]),e._v(" "),n("li",[e._v("Customize and enhance your generated code")]),e._v(" "),n("li",[e._v("Build an Entando bundle from your components")]),e._v(" "),n("li",[e._v("Deploy a custom resource for your bundle into Kubernetes")]),e._v(" "),n("li",[e._v("Install your Entando bundle into your Entando Application(s)")])]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Use the "),n("RouterLink",{attrs:{to:"/next/docs/reference/entando-cli.html#check-environment"}},[e._v("Entando CLI")]),e._v(" to verify you have the prerequisites in place for this tutorial (e.g. Java, npm, git, JHipster, Entando Blueprint).")],1),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent check-env develop\n")])])]),n("h3",{attrs:{id:"manual-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup"}},[e._v("#")]),e._v(" Manual Setup")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("ent jhipster")]),e._v(" command is the recommended way to generate microservices and micro frontends but you can also setup JHipster and the Entando Blueprint yourself. You should then use the "),n("code",[e._v("jhipster")]),e._v(" command instead of "),n("code",[e._v("ent jhipster")]),e._v(" for the tutorial.")]),e._v(" "),n("ol",[n("li",[e._v("Install JHipster")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g generator-jhipster@6.9.1 \n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Install the Entando Blueprint")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g generator-jhipster-entando@6.3.0\n")])])]),n("h2",{attrs:{id:"generate-the-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-the-project"}},[e._v("#")]),e._v(" Generate the Project")]),e._v(" "),n("ol",[n("li",[e._v("Setup a new project directory")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" testProject "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" testProject\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Use "),n("code",[e._v("ent jhipster")]),e._v(" to generate the project skeleton using the Entando Blueprint")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent jhipster --blueprints entando\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("You'll be presented with a series of prompts to configure your project. The list below provides a set of choices. "),n("strong",[e._v("You can select the defaults in every step of the tutorial. Just hit Enter at each step.")])])]),e._v(" "),n("ul",[n("li",[e._v("If you want to go through the choices follow this guide. Except where noted below in bold you can choose what works best for you. Base values for the tutorial are in parentheses.\n"),n("ul",[n("li",[n("code",[e._v("What is the base name of your application?")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("As you are running in a microservice architecture, on which port would like your server to run? It should be unique to avoid port conflicts.")]),e._v(" (8081)")]),e._v(" "),n("li",[n("code",[e._v("What is your default Java package name?")]),e._v("(Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Which *type* of database would you like to use?")]),e._v(" (SQL)\n"),n("ul",[n("li",[e._v("If you pick no database here you'll be building a stateless microservice which is a valid choice but the rest of this tutorial won't work)")])])]),e._v(" "),n("li",[n("code",[e._v("Which *production* database would you like to use?")]),e._v(" (PostgreSQL or MySQL)")]),e._v(" "),n("li",[n("code",[e._v("Which *development* database would you like to use?")]),e._v(" (H2 with disk-based persistence )")]),e._v(" "),n("li",[n("code",[e._v("Do you want to use the Spring cache abstraction?")]),e._v(" (Yes, with the Caffeine implementation)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to use Hibernate 2nd level cache?")]),e._v(" (Yes)")]),e._v(" "),n("li",[n("code",[e._v("Would you like to use Maven or Gradle for building the backend?")]),e._v(" "),n("strong",[e._v("Maven")]),e._v(" <-- this is required for Entando and is the default")]),e._v(" "),n("li",[n("code",[e._v("Which other technologies would you like to use?")]),e._v(" (Don't select any other technologies)")]),e._v(" "),n("li",[n("code",[e._v("What name would you give to the bundle to share on an Entando digital-exchange?")]),e._v(" Enter a name for your Entando bundle or accept the default")]),e._v(" "),n("li",[n("code",[e._v("Which is the organization name to use when publishing the docker image?")]),e._v(" "),n("strong",[e._v("At this point enter the name of the organization where you are going to push your docker image. If you're using your own docker hub account you should enter your username here.")]),e._v(" (this can be changed later as needed)")]),e._v(" "),n("li",[n("code",[e._v("Would you like to generate micro frontends when creating entities?")]),e._v(" (Always)")]),e._v(" "),n("li",[n("code",[e._v("Would you like to enable internationalization support")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Please choose the native language of the application")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Please choose additional languages to install")]),e._v(" (if you picked internationalization)")]),e._v(" "),n("li",[n("code",[e._v("Besides JUnit and Jest, which testing frameworks would you like to use?")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Would you like to install other generators from the JHipster Marketplace?")]),e._v(" (No)")])])])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Next, add an Entity to your microservice and create the corresponding Micro Frontends. For the tutorial, "),n("code",[e._v("Conference")]),e._v(" is the name of the entity that will be added to the application.")])]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("ent jhipster entity Conference \n")])])]),n("ul",[n("li",[n("strong",[e._v("Add Fields")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")]),e._v(" "),n("li",[n("code",[e._v("What is the name of your field?")]),e._v(" (Enter "),n("code",[e._v("name")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("What is the type of your field?")]),e._v(" (Select "),n("code",[e._v("String")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (Yes)")]),e._v(" "),n("li",[n("code",[e._v("What is the name of your field?")]),e._v(" (Enter "),n("code",[e._v("location")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("What is the type of your field?")]),e._v(" (Select "),n("code",[e._v("String")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add validation rules to your field?")]),e._v(" (No)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add a field to your entity?")]),e._v(" (No)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add a relationship to another entity?")]),e._v(" (No)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to use separate service class for your business logic?")]),e._v(" (Up to you)\n"),n("ul",[n("li",[e._v("If yes:")]),e._v(" "),n("li",[n("code",[e._v("Do you want to use a Data Transfer Object (DTO)?")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Do you want to add filtering?")]),e._v(" (Up to you)")])])]),e._v(" "),n("li",[n("code",[e._v("Is this entity read-only?")]),e._v(" (Up to you)")]),e._v(" "),n("li",[n("code",[e._v("Do you want pagination on your entity?")]),e._v(" (Yes, with infinite scroll)")]),e._v(" "),n("li",[e._v("If you asked to be prompted about micro frontends when generating the project:\n"),n("ul",[n("li",[n("code",[e._v("Do you want to generate micro frontends?")]),e._v(" (Up to you)")])])])])]),e._v(" "),n("li",[e._v("At this point the blueprint will generate controllers, repositories, services, and micro frontends for your entity.\n"),n("ul",[n("li",[n("code",[e._v("Overwrite src/main/resources/config/liquibase/master.xml?")]),e._v(" When prompted with a conflict at this stage enter "),n("code",[e._v("a")]),e._v(" for All. This will override existing files with the configuration changes needed for your new entity.")])])])]),e._v(" "),n("p",[e._v("You now have a Entando project including a Spring Boot microservice with database integration and React-based micro frontends.")]),e._v(" "),n("h3",{attrs:{id:"project-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project Structure")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("/src/main/docker")]),e._v(" contains Docker files to help with local development environments")]),e._v(" "),n("li",[n("code",[e._v("/src/main/java")]),e._v(" and "),n("code",[e._v("src/main/resources")]),e._v(" contain the microservice codebase and configuration")]),e._v(" "),n("li",[n("code",[e._v("/ui")]),e._v(" holds the React-based micro frontends. By default each entity gets an MFE for details, form, and table.")]),e._v(" "),n("li",[n("code",[e._v("/bundle")]),e._v(" is used to assemble the project code into an Entando bundle.")])]),e._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),n("p",[e._v("You now have a choice:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/ecr/publish-project-bundle.html"}},[e._v("Build your Entando bundle and deploy your microservice and micro frontends to the Entando Component Repository.")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/backend-developers/run-local.html"}},[e._v("Go to the Running Locally tutorial to run your micro frontends and microservice in your local dev environment.")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/micro-frontends/generate-micro-frontends-from-a-database-entity/"}},[e._v("Learn about the key elements included in the Blueprint generated widgets")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/next/tutorials/backend-developers/update-data-model.html"}},[e._v("Iterate on your data model using the JHipster Domain Language (JDL)")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);