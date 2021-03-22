(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{968:function(e,t,a){"use strict";a.r(t);var o=a(31),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"widgets-and-fragments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-and-fragments"}},[e._v("#")]),e._v(" Widgets and Fragments")]),e._v(" "),a("p",[e._v("This tutorial will take you through the basics of creating an Entando\nwidget and placing it on a page. This document will also review the\nbasics of fragments which are re-usable pieces of a user interface.")]),e._v(" "),a("h2",{attrs:{id:"create-a-widget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-widget"}},[e._v("#")]),e._v(" Create a Widget")]),e._v(" "),a("p",[e._v("For this example you will use the Entando App Builder to build and\ndisplay a widget on a page. In a production system or a larger\ndevelopment environment you would build and deploy widgets differently,\nhowever this example provides a quick idea of the building blocks.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the App Builder menu, go to: "),a("code",[e._v("Components → Micro frontends & Widgets")])]),e._v(" "),a("ul",[a("li",[e._v("At bottom of the page, select ADD")])])]),e._v(" "),a("li",[a("p",[e._v("Now create a widget with the sample HTML code.  Enter into the following fields:")]),e._v(" "),a("ul",[a("li",[e._v("Code: "),a("code",[e._v("MyHelloWorld")])]),e._v(" "),a("li",[e._v("en Title: "),a("code",[e._v("Hello World")])]),e._v(" "),a("li",[e._v("it Title: "),a("code",[e._v("Ciao Mondo")])]),e._v(" "),a("li",[e._v("Custom UI field: "),a("code",[e._v("<h2>Hello World</h2>")])]),e._v(" "),a("li",[e._v("Select SAVE")]),e._v(" "),a("li",[e._v("Note: the Custom UI Field is a freemarker template where you can put raw html and include freemarker logic. This allows you to import javascript, css, or any normal HTML.")])])]),e._v(" "),a("li",[a("p",[e._v("Select a new Home Page")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Settings")])]),e._v(" "),a("li",[e._v("From the “Home Page” dropdown menu, select “Home / Service” and select SAVE")])])]),e._v(" "),a("li",[a("p",[e._v("Place the widget on the page")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Management")])]),e._v(" "),a("li",[e._v('On the row that says "Service", on the far right side, select the Kebab button and select CONFIGURE')]),e._v(" "),a("li",[e._v("From the right hand column, drag and drop the new widget into an open frame in the page")]),e._v(" "),a("li",[e._v("From the top of the page, select PREVIEW")]),e._v(" "),a("li",[e._v('You should see "Hello World" on the page')])])]),e._v(" "),a("li",[a("p",[e._v("Publish the updated page")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Management")])]),e._v(" "),a("li",[e._v("Note for the row showing the Services page, the Status is now yellow")]),e._v(" "),a("li",[e._v("Select the Kebab button and select PUBLISH")])])])]),e._v(" "),a("h2",{attrs:{id:"create-a-ux-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-ux-fragment"}},[e._v("#")]),e._v(" Create a UX Fragment")]),e._v(" "),a("p",[e._v("A UX Fragment is a way to take a common piece of front end code and reuse\nit across multiple pages or widgets. Common elements such as basic HTML,\njavascript, or freemarker logic can be stored as fragments and\nreferenced via the "),a("code",[e._v("<@wp.fragment …")]),e._v(" tag.")]),e._v(" "),a("p",[e._v("Starting from the simple widget tutorial above:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a new fragment:")]),e._v(" "),a("ul",[a("li",[e._v("In the App Builder Go To: "),a("code",[e._v("Components → UX Fragments")])]),e._v(" "),a("li",[e._v("At bottom of page, select ADD, and enter the following fields")]),e._v(" "),a("li",[e._v("Code: "),a("code",[e._v("test")])]),e._v(" "),a("li",[e._v("Gui Code: "),a("code",[e._v("<h2>Hello World</h2>")])]),e._v(" "),a("li",[e._v("Select SAVE")])])]),e._v(" "),a("li",[a("p",[e._v("Place the fragment in a template:")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Page Templates")])]),e._v(" "),a("li",[e._v("On the row for service, select EDIT")]),e._v(" "),a("li",[e._v("In the "),a("code",[e._v("Template")]),e._v(" text box, add  "),a("code",[e._v('<@wp.fragment code="test"/>')]),e._v(" on a new line between the "),a("code",[e._v("<body>")]),e._v(" and  "),a("code",[e._v("</body>")]),e._v(" tags")]),e._v(" "),a("li",[e._v("SAVE the page template")])])]),e._v(" "),a("li",[a("p",[e._v("View the page with the new fragment:")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Management")])]),e._v(" "),a("li",[e._v('On the row that says "Service", on the far right side, select the Kebab button and select CONFIGURE')]),e._v(" "),a("li",[e._v("From the top of the page, select PREVIEW")]),e._v(" "),a("li",[e._v("Note: You will see the fragment "),a("code",[e._v("<h2> This is a fragment. </h2>")]),e._v(" which includes the HTML tags. By default html embedded via a fragment tag is escaped so you get it rendered exactly as you enter it. You’ll need to un-escape it to get it to render correctly.")])])]),e._v(" "),a("li",[a("p",[e._v("Update the Fragment:")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Page Templates")])]),e._v(" "),a("li",[e._v("On the row for service, select EDIT")]),e._v(" "),a("li",[e._v("Change the tag to: "),a("code",[e._v('<@wp.fragment code="test" escapeXml=false/>')])])])]),e._v(" "),a("li",[a("p",[e._v("View the page with the updated fragment:")]),e._v(" "),a("ul",[a("li",[e._v("Go To: "),a("code",[e._v("Pages → Management")])]),e._v(" "),a("li",[e._v('On the row that says "Service", on the far right side, select the Kebab button and select CONFIGURE')]),e._v(" "),a("li",[e._v("From the top of the page, select PREVIEW")]),e._v(" "),a("li",[e._v("See correctly rendered fragment")])])])]),e._v(" "),a("h2",{attrs:{id:"freemarker-basics-in-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freemarker-basics-in-entando"}},[e._v("#")]),e._v(" FreeMarker Basics in Entando")]),e._v(" "),a("p",[e._v("The FreeMarker templating language gives you a lot of flexibility and\npower in how pages are rendered. You can include conditional logic,\ninject information from the backend, check for query parameters and\nroute to different pages.")]),e._v(" "),a("p",[e._v("For example, to check for a query parameter you can use:\n"),a("code",[e._v("<#if RequestParameters.myParam?exists > …")])]),e._v(" "),a("p",[e._v("To check the current username, use:\n"),a("code",[e._v('<#if (Session.currentUser.username != "guest") >')])]),e._v(" "),a("p",[e._v("When you need dynamic behavior in your widgets consider using the power\nof FreeMarker.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://freemarker.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://freemarker.apache.org"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);