"use strict";(self.webpackChunkfellowship=self.webpackChunkfellowship||[]).push([[572],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2632:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:7},l="Unit 7: APIs",p={unversionedId:"unit7",id:"unit7",title:"Unit 7: APIs",description:"Building off of last unit, we are going to make requests to APIs in our web app. This will let us spice up our project, and include more from the web.",source:"@site/docs/unit7.md",sourceDirName:".",slug:"/unit7",permalink:"/course/unit7",editUrl:"https://github.com/icssc-projects/fellowship/tree/main/docs/unit7.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Unit 6: Intro to React",permalink:"/course/unit6"},next:{title:"Unit 8: Typing in TypeScript",permalink:"/course/unit8"}},u={},c=[{value:"REST API",id:"rest-api",level:2},{value:"HTTP Methods",id:"http-methods",level:3},{value:"An Example",id:"an-example",level:3},{value:"HTTP Status Codes",id:"http-status-codes",level:3},{value:"URL Encoding",id:"url-encoding",level:3},{value:"Fetch",id:"fetch",level:3},{value:"GraphQL",id:"graphql",level:2},{value:"What is GraphQL?",id:"what-is-graphql",level:3},{value:"Why GraphQL?",id:"why-graphql",level:3},{value:"\ud83d\udcc9 Scalability",id:"-scalability",level:3},{value:"\ud83d\ude0a Don&#39;t get more data than you need",id:"-dont-get-more-data-than-you-need",level:3},{value:"\ud83e\udd13 Simplified usage",id:"-simplified-usage",level:3},{value:"How to use GraphQL",id:"how-to-use-graphql",level:3},{value:"Due Date",id:"due-date",level:3},{value:"Submission",id:"submission",level:3}],h={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unit-7-apis"},"Unit 7: APIs"),(0,i.kt)("h1",{id:"welcome-to-unit-7"},"Welcome to Unit 7"),(0,i.kt)("p",null,"Building off of last unit, we are going to make requests to APIs in our web app. This will let us spice up our project, and include more from the web."),(0,i.kt)("h1",{id:"unit-7-lecture-video"},"Unit 7 Lecture Video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/wHWBw-lHdLM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,i.kt)("p",null,"Only the 100 seconds, we won\u2019t be talking about how to build an API (around 2:30)"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-MTSQjw5DrM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eIQh02xuVw4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,i.kt)("h1",{id:"what-is-an-api"},"What is an API?"),(0,i.kt)("p",null,"API stands for (",(0,i.kt)("strong",{parentName:"p"},"A"),")pplication (",(0,i.kt)("strong",{parentName:"p"},"P"),")rogramming (",(0,i.kt)("strong",{parentName:"p"},"I"),")nterface. It provides a structured way to communicate with an application by sending and receiving data."),(0,i.kt)("p",null,"When we go to a website (i.e. facebook.com). We are making a request to Facebook\u2019s servers and are asking them to respond with some data. When you do this, your browser is interacting with Facebook\u2019s API to display some data. "),(0,i.kt)("p",null,"APIs are also used for programs to interact with each other. We will be using APIs in our own website so that we can retrieve some data from the internet,"),(0,i.kt)("h2",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"REST stands for Representational State Transfer, and is an architectural style for creating web services. REST treats each any data as a resource, that the client can fetch/edit/delete. We specify these resources through URLs and then sending a ",(0,i.kt)("strong",{parentName:"p"},"request"),". The server will then provide a ",(0,i.kt)("strong",{parentName:"p"},"response"),". "),(0,i.kt)("h3",{id:"http-methods"},"HTTP Methods"),(0,i.kt)("p",null,"With REST APIs we send HTTP Requests. Each of these requests has a method type, that usually correspond to what we want our request to do. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GET")," - Getting a resource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"POST")," - Creating and saving a new resource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PUT")," - Updating a resource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE"),"  - Deleting a resource.")),(0,i.kt)("p",null,"Once we make a request, the server will give a response. Most times the response will be in ",(0,i.kt)("strong",{parentName:"p"},"JSON")," (JavaScript Object Notation). This is the primary data format passed between APIs. "),(0,i.kt)("h3",{id:"an-example"},"An Example"),(0,i.kt)("p",null,"Let\u2019s do an example with the ",(0,i.kt)("a",{parentName:"p",href:"https://api.peterportal.org/"},"PeterPortal API"),". This API was created by ICSSC and is in use by applications like AntAlmanac and Zotistics. It provides data such as courses, instructors, grades, etc. "),(0,i.kt)("p",null,"To make a request, we can use ",(0,i.kt)("a",{parentName:"p",href:"https://curl.se/"},"cURL")," in our shell. cURL lets us make an HTTP request in our shell. By default cURL is making a GET request. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cURL https://api.peterportal.org/rest/v0/courses/COMPSCI161\n")),(0,i.kt)("p",null,"The output will look a little weird but after it\u2019s made pretty, it will look like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "COMPSCI161",\n    "department": "COMPSCI",\n    "number": "161",\n    "school": "Donald Bren School of Information and Computer Sciences",\n    "title": "Design and Analysis of Algorithms",\n    "course_level": "Upper Division (100-199)",\n    "department_alias": [\n        "CS"\n    ],\n    "units": [\n        4,\n        4\n    ],\n    "description": "Techniques for efficient algorithm design, including divide-and-conquer and dynamic programming, and time/space analysis. Fast algorithms for problems applicable to networks, computer games, and scientific computing, such as sorting, shortest paths, minimum spanning trees, network flow, and pattern matching.",\n    "department_name": "Computer Science",\n    ...\n}\n')),(0,i.kt)("p",null,"I\u2019ve excluded some other fields here, but as you can see the request gives us more information on the requested resource. Let\u2019s break the URL down a little bit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.peterportal.org"},(0,i.kt)("inlineCode",{parentName:"a"},"https://api.peterportal.org"))," - This means we want to make a request to this server. Your internet will use this to find the server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/rest/v0/courses/")," - When we find the server, what resource do we want. In our case we want a specific course."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COMPSCI161")," - This is our parameter, we can change this to another course if we want a different course.")),(0,i.kt)("p",null,"How we know exactly what format to make our URL is usually specified in the API documentation. For the PeterPortal API, we looked here for how to use the courses endpoint. ",(0,i.kt)("a",{parentName:"p",href:"https://api.peterportal.org/REST-API/courses/"},"https://api.peterportal.org/REST-API/courses/")),(0,i.kt)("h3",{id:"http-status-codes"},"HTTP Status Codes"),(0,i.kt)("p",null,"In the above response we also received a status code of 200. 200 indicates a successful request. There are lots of different HTTP status codes, but the gist of it is this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2xx - Success!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4xx - You did something wrong")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"5xx - There is a problem with the server."),(0,i.kt)("p",{parentName:"li"},"For more specific status codes, you can read more ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"here"),". "))),(0,i.kt)("p",null,"If we made a request like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"cURL https://api.peterportal.org/rest/v0/courses/NONEXISTENT121\n")),(0,i.kt)("p",null,"Our response will give us an error, indicating this course was not found."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp": "Tue, 15 Feb 2022 22:39:23 GMT",\n    "status": 404,\n    "error": "Bad Request: Invalid parameter",\n    "message": "Course not found"\n}\n')),(0,i.kt)("h3",{id:"url-encoding"},"URL Encoding"),(0,i.kt)("p",null,"When specifying parameters in URLs, you will need to URL Encode them, especially if there are any special characters. This is because URLs usually use these special characters for other important notation. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Here the '&' was URL encoded to %26. \ncURL https://api.peterportal.org/rest/v0/courses/I%26CSCI33\n")),(0,i.kt)("p",null,"In JavaScript, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"encodeURIComponent")," to URL encode our parameter strings. "),(0,i.kt)("h3",{id:"fetch"},"Fetch"),(0,i.kt)("p",null,"To make a request to an API in JavaScript, we use the fetch library. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install node-fetch\n")),(0,i.kt)("p",null,"Fetch is a function that takes 2 arguments. The url and a configuration object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const url = "https://api.peterportal.org/rest/v0/courses/all";\nconst response = await fetch(url, {\n    "method": "GET"\n});\nconsole.log(response.json());\n')),(0,i.kt)("p",null,"Learn more about Fetch, in Mozilla documentation:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},"Using the Fetch API - Web APIs | MDN")),(0,i.kt)("h2",{id:"graphql"},"GraphQL"),(0,i.kt)("h3",{id:"what-is-graphql"},"What is GraphQL?"),(0,i.kt)("aside",null,"\ud83d\udca1 GraphQL is a query language for Web APIs. GraphQL itself is *not* a tool or a framework, it is a **language**"),(0,i.kt)("p",null,"Three cool features of GraphQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get exactly what you ask for"),(0,i.kt)("li",{parentName:"ul"},"Get multiple resources in one request"),(0,i.kt)("li",{parentName:"ul"},"Type System to know what is possible")),(0,i.kt)("h3",{id:"why-graphql"},"Why GraphQL?"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/339f7a54-f287-46a9-920f-4068b53a3da1/Untitled.png",alt:"Untitled"})),(0,i.kt)("p",null,"Let's say you're consuming an API for a social media platform. What kind of data resources are you looking for?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Posts"),(0,i.kt)("li",{parentName:"ul"},"Pictures"),(0,i.kt)("li",{parentName:"ul"},"Likes"),(0,i.kt)("li",{parentName:"ul"},"Comments")),(0,i.kt)("p",null,"If you're familiar with REST, a REST API endpoints for this app may look like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/newsfeed \u2014> ","[post IDs]"),(0,i.kt)("li",{parentName:"ul"},"/post/{id} \u2014> picture ID, user ID, likes"),(0,i.kt)("li",{parentName:"ul"},"/picture/{id} \u2014> picture data"),(0,i.kt)("li",{parentName:"ul"},"/user/{id}/picture \u2014> commenter profile pic")),(0,i.kt)("p",null,"What's the problem with the REST approach?"),(0,i.kt)("p",null,"\ud83d\udcc8 ",(0,i.kt)("strong",{parentName:"p"},"Scalability")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83e\udd2e Too much data")),(0,i.kt)("p",null,"With REST, the fields I get from each endpoint cannot be changed. If I just want to get the user who posted a post, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/post/{id}")," endpoint returns more than just the user \u2014 it also returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"picture ID")," and the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"likes"),". I don't need all of that, and such inefficiency can be costly in the long run. "),(0,i.kt)("p",null,"\ud83d\ude35 ",(0,i.kt)("strong",{parentName:"p"},"Complicated")),(0,i.kt)("p",null,"Certain use cases can lead to multiple, complicated requests to get the resources I want. Let's say I want to get the profile picture of every user who posted on the newsfeed. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/newsfeed")," I need to get all the ",(0,i.kt)("inlineCode",{parentName:"li"},"post ID")," from the newsfeed"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/post/{id}")," I then need to get the ",(0,i.kt)("inlineCode",{parentName:"li"},"user ID")," of who made each post"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/user/{id}/picture")," I then use the ",(0,i.kt)("inlineCode",{parentName:"li"},"user ID")," from each post to get the profile picture")),(0,i.kt)("p",null,"Now that's ",(0,i.kt)("em",{parentName:"p"},"complicated.")),(0,i.kt)("p",null,"Instead, we can use GraphQL! \ud83e\udd11"),(0,i.kt)("h3",{id:"-scalability"},"\ud83d\udcc9 Scalability"),(0,i.kt)("h3",{id:"-dont-get-more-data-than-you-need"},"\ud83d\ude0a Don't get more data than you need"),(0,i.kt)("p",null,"With GraphQL, you ",(0,i.kt)("strong",{parentName:"p"},"get exactly what you need"),". In each request, you can specify what fields are to be returned. If you want to add another field later on, like a commenter's username, simply add it into the request!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gifs.tisuela.com/graphql/ask-and-get-graphql.gif",alt:"https://gifs.tisuela.com/graphql/ask-and-get-graphql.gif"})),(0,i.kt)("h3",{id:"-simplified-usage"},"\ud83e\udd13 Simplified usage"),(0,i.kt)("p",null,"So we know that GraphQL puts all resources under one endpoint, but how does it do this and keep things simple? A ",(0,i.kt)("strong",{parentName:"p"},"type system")," defines the fields available in a type as well as a type's relationship with other types. So if we get an overhead perspective, we can see that this is what puts the graph in GraphQL."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gifs.tisuela.com/graphql/the-graph-in-graphql.gif",alt:"https://gifs.tisuela.com/graphql/the-graph-in-graphql.gif"})),(0,i.kt)("h3",{id:"how-to-use-graphql"},"How to use GraphQL"),(0,i.kt)("p",null,"Like in REST, we can use the Fetch API to make a request. First, we define our URL, and our query. In our query we specify what data we want, and which fields we want. Usually the documentation for the API will tell you the names of the fields. "),(0,i.kt)("p",null,"For the PeterPortal API, the documentation is found in its ",(0,i.kt)("a",{parentName:"p",href:"https://api.peterportal.org/graphql-playground"},"GraphQL Playground"),", under the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," tab on the right. The playground is usually in most GraphQL APIs that let you test out their queries. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const url = "https://api.peterportal.org/graphql/";\n\nconst query = `\n    query {\n        course(id: "DANCE3"){\n            id\n            department\n            school\n            instructor_history {\n                ucinetid\n                department\n            }\n        }\n    }`;\n')),(0,i.kt)("p",null,"In this query, we are querying ",(0,i.kt)("inlineCode",{parentName:"p"},"course")," with the id ",(0,i.kt)("inlineCode",{parentName:"p"},"DANCE3"),". The course query returns a Course type, that we specify what fields we want. One of these is the ",(0,i.kt)("inlineCode",{parentName:"p"},"instructor_history")," which is an array of Instructor types. Since this is also a type, we need to give it some more fields of the Instructor type. "),(0,i.kt)("p",null,"In GraphQL, all requests are POST requests to the endpoint, ",(0,i.kt)("inlineCode",{parentName:"p"},"/graphql/"),".  The fetch function takes in two arguments. A URL is the first one, and the second one is options (we pass in as a JavaScript Object)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const response = await fetch(url, {\n    "method": "POST",\n    "body": JSON.stringify({query}),\n    // Not necessary for every Web API, but it\'s good practice\n  "headers" : {\n      "Content-Type": "application/json",\n    }\n});\nconsole.log(response.json());\n')),(0,i.kt)("p",null,"GraphQL is super cool and an up and coming way of communicating with APIs. More and more apps everywhere are using GraphQL, and it\u2019s definitely worth learning. There is a lot more we can do with GraphQL, and this is only the beginning."),(0,i.kt)("h1",{id:"peterportal-api"},"PeterPortal API"),(0,i.kt)("p",null,"The PeterPortal API was created by ICSSC to encourage user development of projects to benefit UCI. It includes data on Courses, Instructors, Grades and Schedule of Classes. It is being used by our current projects including AntAlmanac, Zotistics, and even our newest project, PeterPortal. "),(0,i.kt)("p",null,"Check it out here: "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.peterportal.org/"},"PeterPortal API Docs")),(0,i.kt)("h1",{id:"assignment"},"Assignment"),(0,i.kt)("p",null,"For the assignment this week, we will be building off of last week\u2019s project and make requests to the PeterPortal API to display some data!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Required Tasks")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Make a Request to the PeterPortal API REST Endpoint with Fetch"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Display the data from the REST API"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Make a request to the PeterPortal API GraphQL Endpoint"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Display data from GraphQL API"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Style the data you just added!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional Stretch Goals")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," "," Use GraphQL to also display Instructor History and each of their names")),(0,i.kt)("h3",{id:"due-date"},"Due Date"),(0,i.kt)("p",null,"Monday, February 28th at 11:59pm (Updated)"),(0,i.kt)("h3",{id:"submission"},"Submission"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://forms.gle/UpcXA8Bjmq3twZjt7"},"https://forms.gle/UpcXA8Bjmq3twZjt7")),(0,i.kt)("h1",{id:"external-resources"},"External Resources"),(0,i.kt)("p",null,"PeterPortal API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://api.peterportal.org"},"api.peterportal.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.peterportal.org/REST-API/start_here/"},"REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.peterportal.org/GraphQL-API/start_here/"},"GraphQL API"))),(0,i.kt)("p",null,"GraphQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/"},"https://graphql.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.howtographql.com/"},"https://www.howtographql.com/"))),(0,i.kt)("p",null,"Presentation Slides: "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1al4_dRwGblKJUJxYF9kolIX9QEUmZdAWXpak8svZpqI/edit?usp=sharing"},"API Slides")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/17qjgXJdK1ZNukdsAoUWJgGnm8wcOSrmir7f06y1BfrA/edit?usp=sharing"},"GraphQL Slides")))}d.isMDXComponent=!0}}]);