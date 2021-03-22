(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{722:function(e,t,o){"use strict";o.r(t);var n=o(31),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"bundle-versions-and-updates-faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bundle-versions-and-updates-faq"}},[e._v("#")]),e._v(" Bundle versions and updates - FAQ")]),e._v(" "),o("h2",{attrs:{id:"does-the-ecr-support-versioning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#does-the-ecr-support-versioning"}},[e._v("#")]),e._v(" Does the ECR support versioning?")]),e._v(" "),o("p",[e._v("A bundle, as discussed in the "),o("RouterLink",{attrs:{to:"/next/docs/ecr/ecr-overview.html"}},[e._v("overview")]),e._v(", is a package containing one or more components.\nAs in many other packaging systems, the ECR supports bundle versioning, allowing developers to create and release improvements of their package over time.")],1),e._v(" "),o("h2",{attrs:{id:"how-is-a-bundle-version-defined"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-is-a-bundle-version-defined"}},[e._v("#")]),e._v(" How is a bundle version defined?")]),e._v(" "),o("p",[e._v("In the ECR, the bundle custom resource comes with a set of "),o("code",[e._v("tags")]),e._v(", each one representing a version of the bundle.\nHere an example for a CMS quickstart bundle")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("apiVersion: entando.org/v1\nkind: EntandoDeBundle\nmetadata:\n    name: cms-quickstart-bundle\nspec:\n  details:\n    name: Entando Example CMS Bundle\n    description: Example Bundle containing CMS components for the Quickstart experience\n  tags:\n    - integrity: ''\n      shasum: ''\n      tarball: 'https://github.com/entando/entando-cms-quickstart-bundle.git'\n      version: v0.0.1\n    - integrity: ''\n      shasum: ''\n      tarball: 'https://github.com/entando/entando-cms-quickstart-bundle.git'\n      version: v0.0.2\n")])])]),o("p",[e._v("As you can see from the code above, the bundle "),o("code",[e._v("cms-quickstart-bundle")]),e._v(" has 2 versions available.\nEach version in the "),o("code",[e._v("tags")]),e._v(" object must correspond a tag in the git repository provided in the "),o("code",[e._v("tarball")]),e._v(" field.")]),e._v(" "),o("h2",{attrs:{id:"what-format-should-i-use-to-version-my-bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-format-should-i-use-to-version-my-bundle"}},[e._v("#")]),e._v(" What format should I use to version my bundle?")]),e._v(" "),o("p",[e._v("The ECR requires versions to follow the "),o("a",{attrs:{href:"https://semver.org/#semantic-versioning-200",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning 2.0.0"),o("OutboundLink")],1),e._v(", with the possibility to prepend a "),o("code",[e._v("v")]),e._v(" to the version itself. Some valid bundle versions are:")]),e._v(" "),o("ul",[o("li",[e._v("1.0")]),e._v(" "),o("li",[e._v("v0.1.0-alpha")]),e._v(" "),o("li",[e._v("1.0.1-SNAPSHOT")]),e._v(" "),o("li",[e._v("22.109.10234-RC.1")])]),e._v(" "),o("h2",{attrs:{id:"as-a-bundle-developer-how-should-i-create-a-new-version-of-a-bundle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#as-a-bundle-developer-how-should-i-create-a-new-version-of-a-bundle"}},[e._v("#")]),e._v(" As a bundle developer, how should I create a new version of a bundle?")]),e._v(" "),o("p",[e._v("If you're a bundle developer and you want to release a new version of your bundle, you can simply update the content of your bundle and commit the changes to the bundle git repository.\nOnce all the required changes are committed, you can create a new tag in the git repository using the "),o("code",[e._v("git tag")]),e._v(" command and publish it to the remote repository using the "),o("code",[e._v("git push --tags")]),e._v(" command")]),e._v(" "),o("p",[e._v("For example, let's assume my bundle already has a version "),o("code",[e._v("1.0.0")]),e._v(" and I want to publish the version "),o("code",[e._v("2.0.0")]),e._v(" of my bundle, here the commands I need to use to create and publish the new tag:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('    git tag -a "2.0.0" -m "My new version"\n    git push --tags\n')])])]),o("h2",{attrs:{id:"how-to-prevent-a-particular-bundle-version-from-being-visible-in-the-ecr"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-prevent-a-particular-bundle-version-from-being-visible-in-the-ecr"}},[e._v("#")]),e._v(" How to prevent a particular bundle version from being visible in the ECR?")]),e._v(" "),o("p",[e._v("If, for some reason, you don't want a particular version to be available for the installation, you can proceed as follows:")]),e._v(" "),o("ol",[o("li",[e._v("You can edit the bundle directly using the command "),o("code",[e._v("kubectl edit entandodebundles.entando.org -n <namespace-of-the-bundle> <name-of-the-bundle>")])])]),e._v(" "),o("p",[e._v("or if you still have the original file you can also:")]),e._v(" "),o("ol",[o("li",[e._v("remove the undesired version from the tag list in your bundle Kubernetes file ("),o("code",[e._v("integrity")]),e._v(", "),o("code",[e._v("shasum")]),e._v(", "),o("code",[e._v("tarball")]),e._v(" and "),o("code",[e._v("version")]),e._v(")")]),e._v(" "),o("li",[e._v("delete your bundle from your cluster using a command like this "),o("code",[e._v("kubectl delete -f your-bundle-file.yml [-n your-cluster-namespace]")])]),e._v(" "),o("li",[e._v("upload your bundle again to Kubernetes using a command like this "),o("code",[e._v("kubectl create -f your-bundle-file.yml [-n your-cluster-namespace]")])])]),e._v(" "),o("h2",{attrs:{id:"my-bundle-contains-a-microservice-generated-with-the-entando-component-generator-does-the-version-of-the-microservice-have-to-be-the-same-as-the-bundle-version"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#my-bundle-contains-a-microservice-generated-with-the-entando-component-generator-does-the-version-of-the-microservice-have-to-be-the-same-as-the-bundle-version"}},[e._v("#")]),e._v(" My bundle contains a microservice generated with the Entando Component Generator, does the version of the microservice have to be the same as the bundle version?")]),e._v(" "),o("p",[e._v("The version of the microservice - or to be more precise the docker image associated with the microservice - isn't bound to the version of the bundle containing the microservice itself.")]),e._v(" "),o("p",[e._v("This gives the bundle developer complete control over the bundle release process, especially in those situations where the bundle contains more components and even more microservices.")]),e._v(" "),o("h2",{attrs:{id:"how-bundle-versions-are-installed-from-the-ecr"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-bundle-versions-are-installed-from-the-ecr"}},[e._v("#")]),e._v(" How bundle versions are installed from the ECR")]),e._v(" "),o("p",[e._v("When the user decides to install a version of the bundle, the ECR checks the provided tag in the git repository and clones locally just the content of the repository for that tag.")]),e._v(" "),o("p",[e._v("For this reason it's important that for each provided tag in the custom-resource a corresponding tag is available in the git repository, otherwise the ECR will not be able to donwload the bundle and will throw an error. Note that the ECR can only see published tags, so make sure that all the time you create a new tag in your git repository you publish it to the remote repository too.")])])}),[],!1,null,null,null);t.default=a.exports}}]);