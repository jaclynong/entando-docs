(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{931:function(e,t,n){"use strict";n.r(t);var o=n(31),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tutorial-blueprint-generated-widgets-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-blueprint-generated-widgets-overview"}},[e._v("#")]),e._v(" Tutorial: Blueprint generated widgets' overview")]),e._v(" "),n("p",[e._v("When you "),n("RouterLink",{attrs:{to:"/v6.2/tutorials/backend-developers/generate-microservices-and-micro-frontends.html"}},[e._v("create an entity using Entando blueprint")]),e._v(", it generates a few\npremade widgets. In this section we will review them.")],1),e._v(" "),n("p",[e._v("We will be using "),n("code",[e._v("Conference")]),e._v(" as an entity name for the examples below.")]),e._v(" "),n("h2",{attrs:{id:"common-parts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#common-parts"}},[e._v("#")]),e._v(" Common parts")]),e._v(" "),n("p",[e._v("Each widget contains a README file that should help you with the setup.")]),e._v(" "),n("p",[e._v("All generated widgets are web components created using Custom Elements\nAPI.")]),e._v(" "),n("p",[e._v("Each widget is displayed using the custom element tag - e.g., inside the\nDetails widget folder "),n("code",[e._v("conference/detailsWidget/public/index.html")]),e._v(" you\ncan find\n"),n("code",[e._v('conference-details id="1" override-edit-handler hide-edit-button />')]),e._v(".\nThis element "),n("code",[e._v("<conference-details />")]),e._v(" is defined in the component entry\npoint at\n"),n("code",[e._v("conference/detailsWidget/src/custom-elements/ConferenceDetailsElement.js")]),e._v(".")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")])]),e._v(" "),n("p",[e._v("custom element names ("),n("code",[e._v("conference-details")]),e._v(") require a dash in them to\nbe used, e.g., (kebab-case) - they can not be single words.")])]),e._v(" "),n("p",[e._v('For more information about web components, custom elements and micro\nfrontends, please refer to "Create a react micro frontend widget"\nsection.')]),e._v(" "),n("h3",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),n("p",[e._v("If widget requires authentication, component is wrapped in\n"),n("code",[e._v("KeycloakContext.Provider")]),e._v(" and Keycloak object is fetched from\n"),n("code",[e._v("window.entando.keycloak")]),e._v(" variable. Entando is using Keycloak as our\nauthentication provider, but you can add any providers you like.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("ReactDOM.render(\n  <KeycloakContext.Provider value={this.keycloak}>\n    <StylesProvider jss={this.jss}>\n      <ThemeProvider theme={this.muiTheme}>{FormContainer}</ThemeProvider>\n    </StylesProvider>\n  </KeycloakContext.Provider>,\n  this.mountPoint\n);\n")])])]),n("p",[e._v('For more information about authentication implementation, please refer\nto the "Authentication" section.')]),e._v(" "),n("h3",{attrs:{id:"custom-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-events"}},[e._v("#")]),e._v(" Custom events")]),e._v(" "),n("p",[e._v("All widgets rely on custom events for communication which is why custom\nevent creation and removal is in each widget, as well as event listener\ncreation. Note that when an event listener is created, it should be when\nthe element is no longer needed. It should be created in the custom\nelement’s "),n("code",[e._v("disconnectedCallback()")]),e._v(" function.")]),e._v(" "),n("p",[e._v("To add more events to listen to the widgets, add the event types to\n"),n("code",[e._v("INPUT_EVENT_TYPES")]),e._v(" object at\n"),n("code",[e._v("detailsWidget/src/custom-elements/widgetEventTypes.js")]),e._v(" which will add\nit to the listener list (or remove the event by removing the element).")]),e._v(" "),n("p",[e._v('For more information about custom events and widget communication,\nplease refer to the section on "Widget communication".')]),e._v(" "),n("h3",{attrs:{id:"tests-and-mocks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tests-and-mocks"}},[e._v("#")]),e._v(" Tests and mocks")]),e._v(" "),n("p",[e._v("Each widget has tests written for it. Entando uses\n"),n("code",[e._v("react-testing-library")]),e._v(", but developers are free to upgrade and use any\ntool. Tests are kept at "),n("code",[e._v("detailsWidget/src/components/")]),e._v(" and mocks for\nthem are at "),n("code",[e._v("detailsWidget/src/components/")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"proptypes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proptypes"}},[e._v("#")]),e._v(" PropTypes")]),e._v(" "),n("p",[e._v("PropTypes for data used across several components are shared - you can\nsee and modify them at "),n("code",[e._v("detailsWidget/src/components/")]),e._v(". This way you can\navoid repeating same propTypes in each component and just import shared\nones")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import React from 'react';\nimport conferenceType from 'components/__types__/conference';\n\nconst ConferenceDetails = props => {\n  // ...\n};\n\nConferenceDetails.propTypes = {\n  conference: conferenceType,\n  t: PropTypes.func.isRequired,\n};\n\nexport default ConferenceDetails;\n")])])]),n("h3",{attrs:{id:"fetching-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fetching-data"}},[e._v("#")]),e._v(" Fetching data")]),e._v(" "),n("p",[e._v("For data fetching from widgets use Fetch API. You can find functions for\nfetching data at "),n("code",[e._v("detailsWidget/src/api")]),e._v(" in different files for\ndifferent contexts.")]),e._v(" "),n("h2",{attrs:{id:"form-widget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#form-widget"}},[e._v("#")]),e._v(" Form widget")]),e._v(" "),n("p",[e._v("For displaying forms within a widget use\n"),n("a",{attrs:{href:"https://jaredpalmer.com/formik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Formik"),n("OutboundLink")],1),e._v(" which helps with form state\nmanagement. For data validation use\n"),n("a",{attrs:{href:"https://github.com/jquense/yup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yup"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);