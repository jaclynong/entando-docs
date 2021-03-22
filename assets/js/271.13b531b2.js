(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{941:function(e,t,n){"use strict";n.r(t);var a=n(31),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"bundle-and-component-descriptors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-and-component-descriptors"}},[e._v("#")]),e._v(" Bundle and Component Descriptors")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The Entando Component Manager reads the "),n("code",[e._v("descriptor.yaml")]),e._v(" file from the root of the bundle package and uses it to install any components and resources included in the bundle. Here is the basic bundle structure:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(".\n├ descriptor.yaml\n├ resources/\n│ └ ...\n└ ... (folders reported in descriptor.yaml file)\n")])])]),n("h3",{attrs:{id:"bundle-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-conventions"}},[e._v("#")]),e._v(" Bundle Conventions")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The bundle descriptor file needs to be named "),n("code",[e._v("descriptor.yaml")]),e._v(" or the bundle will not be recognized.")])]),e._v(" "),n("li",[n("p",[e._v("Static resources should be placed in a "),n("code",[e._v("resources")]),e._v(" folder. They are not explicitly referenced in the "),n("code",[e._v("descriptor.yaml")]),e._v(" file itself.")])])]),e._v(" "),n("h3",{attrs:{id:"bundle-descriptor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-descriptor"}},[e._v("#")]),e._v(" Bundle Descriptor")]),e._v(" "),n("p",[e._v("The bundle descriptor file aggregates all included components and has the following structure:")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")])]),e._v(" "),n("p",[e._v("Remember the file needs to be named "),n("code",[e._v("descriptor.yaml")]),e._v(".")])]),e._v(" "),n("p",[n("strong",[e._v("descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: survey_bundle # The bundle ID\ndescription: This is the survey bundle # The description of the bundle\n\ncomponents: # All components will be here\n\n  # Optional. Use if the component requires a deployment\n  plugins:\n    - folder/you/want/my_plugin_descriptor.yaml\n    - folder/you/want/another_plugin_descriptor.yaml\n\n  # To create widgets you will need to add references to the descriptor file's\n  widgets:\n    - widgets/my_widget_descriptor.yaml\n    - widgets/another_widget_descriptor.yaml\n\n  # To create fragments, you will need to add references to the descriptor file's\n  fragments:\n    - fragments/my_fragment.yaml\n\n  # To create Page Templates you will need to add references to the descriptor file's\n  pageModels:\n    - pageModels/my_page_model_descriptor.yaml\n    - pageModels/another_page_model_descriptor.yaml\n\n  # To create and publish pages you will need to add references to the descriptor file's\n  page:\n    - page/my_page_descriptor.yaml\n    - page/another_page_descriptor.yaml\n\n  # To create a CMS Asset you will need to add a reference to the descriptor file and put on the same location the image or file you want to upload.\n  assets:\n    - assets/my-asset/my_asset_descriptor.yaml\n    - assets/my-asset/my_image.jpg\n\n  # To create Content Types you will need to add references to the descriptor file's\n  contentTypes:\n    - contentTypes/my_content_type_descriptor.yaml\n\n  # To create Content Templates you will need to add references to the descriptor file's\n  contentModels:\n    - contentModels/my_content_model_descriptor.yaml\n    - contentModels/another_content_model_descriptor.yaml\n\n  # To create and publish Contents you will need to add references to the descriptor file's\n  contents:\n    - contents/my_content_descriptor.yaml\n    - contents/another_content_descriptor.yaml\n    \n  # To create categories you will need to add references to the descriptor file's\n  categories:\n    - categories/my_categories.yaml\n    \n  # To create groups you will need to add references to the descriptor file's\n  groups:\n    - groups/my_groups.yaml\n    \n  # To create labels you will need to add references to the descriptor file's\n  labels:\n    - labels/my_labels.yaml\n  \n  # To enable labels you will need to add references to the descriptor file's\n  languages:\n    - languages/languages.yaml\n")])])]),n("h2",{attrs:{id:"plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),n("p",[e._v("Here is an example of a plugin descriptor:")]),e._v(" "),n("p",[n("strong",[e._v("Plugin descriptor.yaml")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('image: "entando/my-image:1.0.0" # The docker image used to create the plugin\ndeploymentBaseName: "myplugin" # The base name to assign to the pods that have to be created in Kubernetes\ndbms: "postgresql" # The DBMS the plugin will use\nroles: # The roles the plugin will expose in keycloak\n  - "task-list"\n  - "task-get"\n  - "connection-list"\n  - "connection-get"\n  - "connection-create"\n  - "connection-delete"\n  - "connection-edit"\nhealthCheckPath: "/actuator/health" # The health check path that kubernetes will use to check status of the plugin deployment\ningressPath: "/myhostname.io/entando-plugin" # the ingress path to assign to the plugin deployment\npermissions: # a list of keycloak clientId / role to bind each to the other\n  - clientId: realm-management\n    role: manage-users\n  - clientId: realm-management\n    role: view-users\n')])])]),n("h3",{attrs:{id:"kubernetes-pod-names"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-pod-names"}},[e._v("#")]),e._v(" Kubernetes pod names")]),e._v(" "),n("p",[e._v("Each plugin is deployed onto Kubernetes using composite names. The first part is created reading the descriptor file, the second one is appended autonomously by Kubernetes.\nThis second part is 31 char long and each Kubernetes pod name length must be at most 63: longer name will result in the fail of the deployment.")]),e._v(" "),n("p",[n("strong",[e._v("deploymentBaseName")])]),e._v(" "),n("p",[e._v("Initially, the first part of the pod name was generated concatenating and manipulating the "),n("code",[e._v("image")]),e._v(" field value, however sometimes this approach could lead to a pod name longer than 63.\nTo solve this problem, another (optional) property is available: "),n("code",[e._v("deploymentBaseName")]),e._v(".")]),e._v(" "),n("p",[e._v("It accepts a string not longer than 32 and, if present, its value will be used as the first part for the pod's names, instead of the "),n("code",[e._v("image")]),e._v(" one.")]),e._v(" "),n("p",[e._v("In the previous example of the descriptor a possible resulting pod name will be this one in case the "),n("code",[e._v("deploymentBaseName")]),e._v(" property is not present:")]),e._v(" "),n("p",[n("code",[e._v("entando-my-image-1-0-0-server-deployment-6f86f459wj9k")])]),e._v(" "),n("p",[e._v("and this one if the "),n("code",[e._v("deploymentBaseName")]),e._v(" property is present:")]),e._v(" "),n("p",[n("code",[e._v("myplugin-server-deployment-6f86f459wj9k")])]),e._v(" "),n("p",[e._v("Please note that if you are using the "),n("code",[e._v("deploymentBaseName")]),e._v(" property and you want to install more versions of the same plugin at the same time, you need to specify different values for "),n("code",[e._v("deploymentBaseName")]),e._v(", maybe including the plugin version.")]),e._v(" "),n("h3",{attrs:{id:"permissions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("permissions")]),e._v(" property specifies a list of coupled clientId and roles that will be bound in Keycloak.")]),e._v(" "),n("p",[e._v("To find them you can open the Keycloak console and then navigate to "),n("em",[e._v("clients")]),e._v(" → "),n("em",[e._v("awesomeplugin-server")]),e._v(" → "),n("em",[e._v("Service Account Roles")]),e._v(".")]),e._v(" "),n("p",[e._v("Currently using a non-existing clientId or role will be ignored and the plugin deployment will succeed without errors.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("The more verbose CRD plugin descriptor format is deprecated as of Entando 6.3 but is documented "),n("RouterLink",{attrs:{to:"/v6.2/docs/ecr/ecr-bundle-details.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#widget"}},[e._v("#")]),e._v(" Widget")]),e._v(" "),n("p",[e._v("Here is an example of a widget descriptor:")]),e._v(" "),n("p",[n("strong",[e._v("Widget descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: another_todomvc_widget # The Widget identification\n\ntitles: # Widget's Titles\n  en: TODO MVC Widget # Title in English\n  it: TODO MVC Widget # Title in Italian\n\ngroup: free # The owner group of the widget\n\n# Optional. The UI Path, the widget.ftl file will have the customUi content\ncustomUiPath: widget.ftl\n\n# Optional. The Custom UI\ncustomUi: >-\n    <h1>My custom widget UI</h1>\n\n# Optional. ConfigUI\nconfigUi:\n  customElement: todomvc-config # The name of the custom-element used to render the configUI\n  resources:\n    - <bundleid>/static/js/main.js # The resources necessary to the custom element to render the configUI, like the code\n")])])]),n("h2",{attrs:{id:"fragment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[e._v("#")]),e._v(" Fragment")]),e._v(" "),n("p",[n("strong",[e._v("Fragment descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('code: my_fragment # The unique id\n\n# Optional. The fragment content\nguiCode: >-\n  "<div>Here the content</div>"\n\n# Optional. A path to a FreeMarker file containing the fragment content.\nguiCodePath: fragment.ftl\n')])])]),n("h2",{attrs:{id:"page-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page-template"}},[e._v("#")]),e._v(" Page Template")]),e._v(" "),n("p",[n("strong",[e._v("Page Template descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('code: todomvc_page_template # The Page Template identification\ndescription: TODO MVC basic page template # The Page Template description\n\ntitles: # Page Template\'s Titles\n  en: TODO MVC PageTemplate # Title in English\n  it: TODO MVC PageTemplate # Title in Italian\n\n# The Page Template configuration\nconfiguration:\n  frames: # All frames\n    - pos: 0 # Frame position\n      description: Header # Frame description\n      sketch: # Frame sketch configuration\n        x1: 0\n        y1: 0\n        x2: 11\n        y2: 1\n      defaultWidget:\n        code: my-widget # the code of the widget to apply when using the button "apply default widgets" in the page configuration UI\n\n    # A simplified way to define a Frame\n    - pos: 1\n      description: Breadcrumb\n      sketch: { x1: 0, y1: 0, x2: 11, y2: 1 }\n\n# Optional. Define the Page Template in a separate file or inside the descriptor file with `template`\ntemplatePath: page.ftl\n\n# Optional. Define the Page Template this way or in a separate file with `templatePath`\ntemplate: >-\n  <#assign wp=JspTaglibs[\\"/aps-core\\"]>\n  <!DOCTYPE HTML PUBLIC \\"-//W3C//DTD HTML 4.0 Transitional//EN\\">\n  <html>\n      <head>\n          <title><@wp.currentPage param=\\"title\\" /></title>\n      </head>\n      <body>\n          <h1><@wp.currentPage param=\\"title\\" /></h1>\n          <a href=\\"<@wp.url page=\\"homepage\\"/>\\">Home</a><br>\n          <div>\n              <h1>Bundle 1 Page Template</h1>\n              <@wp.show frame=0 />\n          </div>\n      </body>\n  </html>\n')])])]),n("h2",{attrs:{id:"page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[e._v("#")]),e._v(" Page")]),e._v(" "),n("p",[e._v("This descriptor enables a page to be created and published via a bundle. Status can be "),n("code",[e._v("published")]),e._v(" or "),n("code",[e._v("draft")]),e._v(". The widgets section can be used to fully configure a page layout.")]),e._v(" "),n("p",[n("strong",[e._v("Page descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: dashboard\nparentCode: homepage\ntitles:\n  en: My dashboard\n  it: La mia Dashboard\npageModel: dashboard\nownerGroup: free\njoinGroups: []\ndisplayedInMenu: true\nseo: false\ncharset: utf-8\n\n# ECR will publish the page according to this property\nstatus: published|draft\n\n# Page Configuration\nwidgets:\n  - code: Brand-Logo\n    config: null\n    pos: 0\n  - code: Login_buttons\n    config: null\n    pos: 2\n  - code: seeds_card\n    config:\n      cardname: creditcard\n    pos: 6\n  - code: list_item\n    config:\n      icon: managealerts\n      count: '0'\n      title: Alerts\n    pos: 7\n  - code: list_item\n    config:\n      icon: viewstatements\n      count: '0'\n      title: View Statements\n    pos: 11\n  - code: seedscard-transaction-table\n    config: null\n    pos: 13\n")])])]),n("h2",{attrs:{id:"cms-asset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cms-asset"}},[e._v("#")]),e._v(" CMS Asset")]),e._v(" "),n("p",[e._v("This descriptor contains the metadata required for uploading and updating a CMS Asset.")]),e._v(" "),n("p",[n("strong",[e._v("Asset descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("correlationCode: 'my-reference-code'\ntype: image\n# This file should be placed on same folder as the descriptor.yaml\nname: 113f4437cac3b3f3d4db7229f12287a4_d3.png\ndescription: 113f4437cac3b3f3d4db7229f12287a4_d3.png\ngroup: free\ncategories: []\n")])])]),n("h2",{attrs:{id:"content-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-template"}},[e._v("#")]),e._v(" Content Template")]),e._v(" "),n("p",[n("strong",[e._v("Content-template descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("id: 8880003\ncontentType: CNG\ndescription: Demo Content Template\n\n# Optional. Define the Content Template Shape in a separate file or inside descriptor file with `contentShape`\ncontentShapePath:\n\n# Optional. Define the Content Template Shape this way or in a separate file with `contentShapePath`\ncontentShape: >-\n  <article>\n    <h1>$content.Title.text</h1>\n    <h2>Demo content template</h2>\n    #if ( $content.MainBody.text != \"\" )\n    $content.MainBody.text\n    #end\n  </article>\n\n\nwidgets:\n  - code: Brand-Logo\n    config: null\n    pos: 0\n  - code: Login_buttons\n    config: null\n    pos: 2\n  - code: seeds_card\n    config:\n      cardname: creditcard\n    pos: 6\n  - code: list_item\n    config:\n      icon: managealerts\n      count: '0'\n      title: Alerts\n    pos: 7\n  - code: list_item\n    config:\n      icon: viewstatements\n      count: '0'\n      title: View Statements\n    pos: 11\n  - code: seedscard-transaction-table\n    config: null\n    pos: 13\n")])])]),n("h2",{attrs:{id:"content-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[e._v("#")]),e._v(" Content Type")]),e._v(" "),n("p",[e._v("For more details on the Content Type properties, refer to the "),n("RouterLink",{attrs:{to:"/v6.3/tutorials/cms/content-types-tutorial.html"}},[e._v("Content Type\ndocumentation")]),e._v(".")],1),e._v(" "),n("p",[n("strong",[e._v("Content-type descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("code: CNG\nname: Demo\nstatus: 0\n\nattributes:\n  - code: title\n    type: Text\n    name: Title\n    roles:\n      - code: jacms:title\n        descr: The main title of a Content\n    disablingCodes: []\n    mandatory: true\n    listFilter: false\n    indexable: false\n\n    enumeratorStaticItems: string\n    enumeratorStaticItemsSeparator: string\n    enumeratorExtractorBean: string\n\n    validationRules:\n      minLength: 0\n      maxLength: 100\n      regex: string\n      rangeStartString: string\n      rangeEndString: string\n      rangeStartStringAttribute: string\n      rangeEndStringAttribute: string\n      equalString: string\n      equalStringAttribute: string\n      rangeStartDate: string\n      rangeEndDate: string\n      rangeStartDateAttribute: string\n      rangeEndDateAttribute: string\n      equalDate: string\n      equalDateAttribute: string\n      rangeStartNumber: 0\n      rangeStartNumberAttribute: string\n      rangeEndNumber: 0\n      rangeEndNumberAttribute: string\n      equalNumber: 0\n      equalNumberAttribute:\n      ognlValidation:\n        applyOnlyToFilledAttr: false\n        errorMessage: Something\n        keyForErrorMessage: some\n        keyForHelpMessage: thing\n        ognlExpression: string\n")])])]),n("h2",{attrs:{id:"content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[e._v("#")]),e._v(" Content")]),e._v(" "),n("p",[e._v("This descriptor enables a content to be created and optionally published via a bundle, according to the "),n("code",[e._v("status")]),e._v(" property. The content id is optional and can be auto generated or explicitly declared for linking from other components, like Content Widget.")]),e._v(" "),n("p",[n("strong",[e._v("Content descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("id: NWS650\ntypeCode: NWS\ndescription: Dealing with a financial emergency\nmainGroup: free\nstatus: PUBLIC\nattributes:\n  - code: title\n    values:\n      en: Dealing with a financial emergency\n  - code: subtitle\n    values:\n      en: |\n        <p>How to tackle financial stress</p>\n  - code: body\n    values:\n      en: |\n        <p>For many Americans, financial concerns are their number-one stress point. Here are 6 ways to help reduce your money stress and get motivated to take control of your finances.</p>\n  - code: img\n    values:\n      en:\n        correlationCode: '651'\n        name: bank_750xx684385064_d0.jpg\n  - code: links\n    elements:\n      - code: links\n        value:\n          symbolicDestination: '#!U;http://www.mysite.com/!#'\n          destType: 1\n          urlDest: 'http://www.mysite.com/'\n          pageDest: null\n          contentDest: null\n          resourceDest: null\n        values:\n          en: mio sito\n      - code: links\n        value:\n          symbolicDestination: '#!U;http://www.mysite.com/!#'\n          destType: 1\n          urlDest: 'http://www.mysite.com/'\n        values:\n          en: mio sito 2\n  - code: attaches\n    elements:\n      - code: attaches\n        values:\n          en:\n            correlationCode: '205'\n            name: Entando_Admin_Console_Overview_4.3.3_EN.pdf\n")])])]),n("h2",{attrs:{id:"categories"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[e._v("#")]),e._v(" Categories")]),e._v(" "),n("p",[e._v("This descriptor contains a "),n("em",[e._v("list")]),e._v(" of Categories.")]),e._v(" "),n("p",[n("strong",[e._v("Category descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('- code: new-category # Identifies the category\n  parentCode: home # The parent category, home is the base category\n  titles:\n    it: "Una nuova categoria" # Category name in Italian\n    en: "New category" # Category name in English\n')])])]),n("h2",{attrs:{id:"groups"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[e._v("#")]),e._v(" Groups")]),e._v(" "),n("p",[e._v("This descriptor contains a "),n("em",[e._v("list")]),e._v(" of Groups.")]),e._v(" "),n("p",[n("strong",[e._v("Group descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('- code: my_group # Identifies the group\n  name: "My group" # The name of the group\n')])])]),n("h2",{attrs:{id:"labels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" Labels")]),e._v(" "),n("p",[e._v("This descriptor contains a "),n("em",[e._v("list")]),e._v(" of Labels.")]),e._v(" "),n("p",[n("strong",[e._v("Label descriptor.yaml.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("- key: MY-FIRST-LABEL # Identifies the label\n  titles: # The titles on the label\n    it: Mio Titolo # The title in Italian\n    en: My Title # The title in English\n")])])]),n("h2",{attrs:{id:"languages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#languages"}},[e._v("#")]),e._v(" Languages")]),e._v(" "),n("p",[e._v("This descriptor contains a "),n("em",[e._v("list")]),e._v(" of Languages to enable during the installation process.")]),e._v(" "),n("p",[n("strong",[e._v("Language descriptor.yaml.")]),e._v("\n- code: en\ndescription: English\n- code: it\ndescription: Italian")]),e._v(" "),n("h2",{attrs:{id:"static-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#static-resources"}},[e._v("#")]),e._v(" Static Resources")]),e._v(" "),n("p",[e._v("In order to upload static files, you will need to create a folder called\n"),n("code",[e._v("resources")]),e._v(". All files inside this folder will be uploaded into Entando using the same\nfolder structure.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("resources/\n├ css/\n│ └ styles.css\n├ js/\n│ └ script.css\n├ images/\n│ ├ favicon.ico\n│ └ logo.png\n└ page.html\n")])])]),n("p",[e._v("On the structure mentioned above, the resulting files in the Entando\narchitecture will be:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("yourbundleid/\n├ css/\n│ └ styles.css\n├ js/\n│ └ script.js\n├ images/\n│ ├ favicon.ico\n│ └ logo.png\n└ page.html\n")])])]),n("blockquote",[n("p",[n("strong",[e._v("Important")])]),e._v(" "),n("p",[n("code",[e._v("yourbundleid")]),e._v(" is the "),n("code",[e._v("code")]),e._v(" property inside "),n("code",[e._v("descriptor.yaml")])])]),e._v(" "),n("p",[e._v("If you need to use one of these static files in a widget or page template, use this FTL\ntag "),n("code",[e._v("<@wp.resourceURL />")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<img src="<@wp.resourceURL />yourbundleid/images/logo.png">\n<link rel="stylesheet" href="<@wp.resourceURL />yourbundleid/css/styles.css">\n<link rel="shortcut icon" href="<@wp.resourceURL />yourbundleid/images/favicon.ico" type="image/x-icon"/>\n<script type="application/javascript" src="<@wp.resourceURL />yourbundleid/js/script.js"><\/script>\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);