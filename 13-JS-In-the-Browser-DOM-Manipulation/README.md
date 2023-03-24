## 13-JS-In-the-Browser-DOM-Manipulation

## 1. Introduction to the DOM

Document Object Model

## 2. IMPORTANT NOTE HTML & CSS

Make sure you are comfortable with **basic HTML & CSS!**

You just need to understand how to create simple elements on a page, how to nest things together,
how to work with IDs and classes, how to write simple CSS selectors to select based on of elements,
classes and ID's, maybe attributes.

You need to understand how to change color to CSS and fonts and how to resize something, the basic
properties, So if you don't have that understanding right now, i recommend you take an hour or two
to go follow a tutorial online.

## 3. Taste of the DOM

### WHAT IT IS?
- The DOM is a JavaScript representation of a webpage
- It's your JS "window" into the contents of a webpage
- It's just a bunch of objects that you can interact with via JS

We can write JavaScript that can:
- Figure out how many h1's <h1></h1> are on a page
- How many input's <input></input> are in a form <form></form>
- Get the value from a form <form></form>
- If a user is typing into the form <form></form>
- Change the value of a <form></form>
- Change images <img></img>, make them bigger
- Change CSS styles <style></style> of anything
- Add animations
- Listen for: clicks, drag's, hovers or any sort of event that a user could trigger
and then have some behavior that happens in response
- Add logic with JavaScript that controls, interacts, that reads and understands
tha contents of a page

When a page loads up whatever the Web Pages is, the browser is going to turn it into
a bunch of objects, just JavaScript objects, and these objects are all constructed
and put together to form the DOM.

It is a virtual representation or a JavaScript representation of the content on a page,
and it consists of a bunch of JavaScript objects.

Objects that have a bunch of different properties like:
- What their content is
- What text is inside the object
- Tons of properties for different attributes
- CSS styles
- Methods

### DOCUMENT
The Document object is our entry point in the world of the DOM It contains representations of all the content on a page, plus tons of useful methods and properties

### SELECTING
- getElementById
- getElementsByTagName
- getElementsByClassName


## 4. Another Fun DOM Example