(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{808:function(e,t,a){"use strict";a.r(t);var r=a(31),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hello-world-for-a-widget-using-the-app-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-for-a-widget-using-the-app-builder"}},[e._v("#")]),e._v(" Hello World for a Widget Using the App builder")]),e._v(" "),a("p",[e._v("This tutorial will take you through the basics of creating an Entando\nwidget and placing it on a page. This document will also review the\nbasics of fragments which are re-usable pieces of a user interface.")]),e._v(" "),a("h2",{attrs:{id:"basic-widget-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-widget-tutorial"}},[e._v("#")]),e._v(" Basic Widget Tutorial")]),e._v(" "),a("p",[e._v("For this example you will use the Entando App Builder to build and\nassign your widget on a page. In a production system or a larger\ndevelopment environment you would build and deploy widgets differently,\nhowever this example provides a quick idea of the building blocks.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the App Builder menu, at the top, Go To: UX Patterns -→ Widgets")])]),e._v(" "),a("li",[a("p",[e._v("Select NEW")])]),e._v(" "),a("li",[a("p",[e._v("The Custom UI Field is a freemarker template where you can put raw\nhtml and include freemarker logic,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It allows you to import javascript, css, or any normal HTML")])]),e._v(" "),a("li",[a("p",[e._v("Example, put <h2>Hello World</h2> into your widget, give it\na name and save it")])])])]),e._v(" "),a("li",[a("p",[e._v("Go To: Page Designer -→ Page Settings")])]),e._v(" "),a("li",[a("p",[e._v("In the Home Page dropdown select Home / Service and select SAVE")])]),e._v(" "),a("li",[a("p",[e._v("Now place the widget on the page")])]),e._v(" "),a("li",[a("p",[e._v("Go To: Page Designer -→ Page Tree")])]),e._v(" "),a("li",[a("p",[e._v('On the row that says "Service", on the far right side, select the\nKebab button and select CONFIGURE')])]),e._v(" "),a("li",[a("p",[e._v("Find the widget created in step 5 on the right hand side")])]),e._v(" "),a("li",[a("p",[e._v("Drag and drop the widget onto the open frame of the page")])]),e._v(" "),a("li",[a("p",[e._v("Select PUBLISH at the bottom of the screen")])]),e._v(" "),a("li",[a("p",[e._v("Then select GO TO HOME PAGE in the upper right")])]),e._v(" "),a("li",[a("p",[e._v('You should see "Hello World" on the page')])])]),e._v(" "),a("h2",{attrs:{id:"simple-fragment-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-fragment-tutorial"}},[e._v("#")]),e._v(" Simple Fragment tutorial")]),e._v(" "),a("p",[e._v("A fragment is a way to take a common piece of front end code and reuse\nit across multiple pages or widgets. Common elements such as basic html,\njavascript, or freemarker logic can be stored as fragments and\nreferenced via the "),a("code",[e._v("<@wp.fragment …​")]),e._v(" tag.")]),e._v(" "),a("p",[e._v("Starting from the simple widget tutorial above:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the app builder Go To: UX Patterns -→ Fragments")])]),e._v(" "),a("li",[a("p",[e._v("Enter the code for the fragment as "),a("code",[e._v("test")])])]),e._v(" "),a("li",[a("p",[e._v("In the "),a("code",[e._v("Gui Code")]),e._v(" enter "),a("code",[e._v("<h2>This is a fragment</h2>")])])]),e._v(" "),a("li",[a("p",[e._v("Next place the fragment on a page")])]),e._v(" "),a("li",[a("p",[e._v("Go To: Ux Patterns -→ Page Models")])]),e._v(" "),a("li",[a("p",[e._v("On the row for "),a("code",[e._v("service")]),e._v(", select EDIT")])]),e._v(" "),a("li",[a("p",[e._v("Use the fragment tag to place the fragment on the page\n"),a("code",[e._v('<@wp.fragment code="test"/>')])])]),e._v(" "),a("li",[a("p",[e._v("SAVE the page model")])]),e._v(" "),a("li",[a("p",[e._v("Go To: homepage (assuming you’ve set the service page to the\nhomepage)")])]),e._v(" "),a("li",[a("p",[e._v("Note that the fragment is printed including the HTML tags. By\ndefault html embedded via a fragment tag is escaped so you get it\nrendered exactly as you enter it. You’ll need to un-escape it to get\nit to render correctly.")])]),e._v(" "),a("li",[a("p",[e._v("Go back to your page model (UX Patterns -→ Page Models) select\nSERVICE and EDIT")])]),e._v(" "),a("li",[a("p",[e._v("Change the tag to: "),a("code",[e._v('<@wp.fragment code="test" escapeXml=false/>')])])]),e._v(" "),a("li",[a("p",[e._v("Go back to the homepage")])]),e._v(" "),a("li",[a("p",[e._v("See correctly rendered fragment")])])]),e._v(" "),a("h2",{attrs:{id:"freemarker-basics-in-entando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freemarker-basics-in-entando"}},[e._v("#")]),e._v(" Freemarker Basics in Entando")]),e._v(" "),a("p",[e._v("The freemarker templating language gives you a lot of flexibility and\npower in how pages are rendered. You can include conditional logic,\ninject information from the backend, check for query parameters and\nroute to different pages.")]),e._v(" "),a("p",[e._v("For example, to check for a query parameter you can use:\n"),a("code",[e._v("<#if RequestParameters.myParam?exists > …​")])]),e._v(" "),a("p",[e._v("To check the current username, use:\n"),a("code",[e._v('<#if (Session.currentUser.username != "guest") >')])]),e._v(" "),a("p",[e._v("When you need dynamic behavior in your widgets consider using the power\nof freemarker.")]),e._v(" "),a("h2",{attrs:{id:"useful-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://freemarker.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://freemarker.apache.org"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);