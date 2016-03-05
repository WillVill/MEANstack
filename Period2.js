/**
 * Created by williambech on 3/3/16.
 */
/**
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	PERIOD 2 HAND-IN
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
fd

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	1 - Why would you consider a scripting language as JavaScript as your backend platform?
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 You would consider a scripting language such as JavaScript as your backend platform when you want a fast and ubiquity
 backend platform. When writing the backend in javascript you would also have your frontend written in javascript as
 well this creates ubiquity. Javascript backend platforms are also proven to be faster than other backend platforms.

 Javascript backend platforms also have their disadvantages such as having a less solid foundation compared to making
 a backend in Java. This leads to very large projects to usually lean towards backend platforms written with Java
 rather than Javascript

 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
 	2 - Explain pros & cons in using Node.js + Express to implement your backend compared
 	to a strategy using for example java/jax-rs/tomcat
 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

Pros
 - Ubiquity, frontend and backend written in the same language.
 - Speed, Node.js is very fast.
 - Json and database queries uniformity. Sytax is very similar making the memorization of different syntaxes not needed.
 - Momentum, javascript backends have a lot of momentum, the community is growing and improving much faster than any
 other competitor.

 Cons
 - Javascript does not have a solid foundation compared to Java, as it is newer and the way the language has been made.
 Although this is changing more and more.
 - The IDEs for javascript are not as intricate as the ones for Java.
 - Libraries are not as large as the ones for Java.

 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
 	3 - Explain strategies to implement a Node.js based server architecture that still could
 	take advantage of a multi-core server.
 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

Node.Js itself is asynchronous as opposed to JavaScript and the V8 engine. Node.Js makes asynchronous implementation 
possible as it basis the execution of 'tasks' in an event loop and a event stack. The event loop being the main reason 
for asynchronous code being able to run. The event loop and stack is used whenever code is run using Node.Js. Thus making
Node.Js a great tool as it is easy to make asynchronous code. In order to make code synchronous this has to be 
specified. Most methods that can be made synchronous can also be run asynchronously. In general no stategy needs to be
followed but using Node.Js properly will lead to asynchrnous code execution.

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	4 - Explain, using relevant examples, concepts related to the testing a REST-API using
	Node/JavaScript + relevant packages
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	5 - Explain, using relevant examples, the Express concept; Middleware
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

The concept of middleware in Express is basically manually creating your own stack execution order. Middleware has access 
to the Request and Response object and the Next function. Middleware can also be thought of as a filter for the response
object. To create the stack order Middleware uses the Next function specifying what to be executed after a certain 
function is run. There are different levels in which middleware canbe used. These being: application level, router 
level, error handling and third party middleware. Although middleware is used in different levels of your server it 
is created and ran in the same way. In a simple example I will show how middleware is used to create your own stack
execution order.
**/
var express = require('express');

var app = express();

var server = app.listen(3000);

function hello(req,res,next){
  res.write('Hello \n');
  next();
}

function bye(req,res,next){
  res.write('Bye \n');
  res.end();
}

app.get('/hello',hello,bye);

/* So here I ahve specified that I want to first run my hello function and then my bye function. I am passing in both
functions in the app.get() function. This will start off the execution in the order I have specifies. The res.end()
will end the execution of the the functions and end the stack I have manually ordered.
 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
 	6 - Explain, using relevant examples, how to implement sessions,
 	and the legal implications of doing this
 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

To implement sessions or set cookies, websites now have to ask the user for permission to do so. Otherwise it is illegal
do so.

 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
 	7 - Compare the express strategy toward (server side) templating with the one
 	you used with Java on 2nd semester
 —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————




—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	8 - Explain, using relevant examples, your strategy for implementing a REST-API with
	Node/Express and show how you can “test” all the four CRUD operations programmatically
	using for example the Request package
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————




—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	9 - Explain, using relevant examples, about testing JavaScript code, relevant packages
	(Mocha etc.) and how to test asynchronous code
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
	10 - Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.
—————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 */
