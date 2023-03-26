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

## 4. Another Fun DOM Example

## 5. The Document Object

### DOCUMENT

The Document object is our entry point in the world of the **DOM**. It contains representations of all the content on a page, plus tons of useful methods and properties.

When we work with the **DOM**, is an object called **document**. So **document** is an object you have in every single browser window that you ever open. you can type `console.dir(document)` in the console.

This object represents the entire page, this entire document https://developer.mozilla.org/en-US/docs/Web/API/Document

There's all of these different methods and properties available and they're all container within the **document object**. So the **document** is the entry point that we use to access the DOM, to manipulate things, to just view the content in the **DOM**, but also to add events add functionality, it's all located inside of this one object.

```
// Run in the browser console
document.images
document.all
```

## 6. getElementById

Typically, we select an element or multiple elements and then do something with them like:

- Animated
- Move it around
- Delete it
- Select it and then add a new child within it
- Select a form and add two new buttons to it
- Select a button and add events to it

So when we want to add some events and interactivity, we still start by selecting and there's a bunch of different ways to select using the document

### SELECTING

- getElementById
- getElementsByTagName
- getElementsByClassName

**getElementById** it takes an ID and it finds the matching element that contains or what has that ID on it and it returns that object.

So when we call **getElementById** pass in a string if there is a match and only if
there is a match for that ID, we get that element back as an object the DOM representation of that element.

**Remember** you're only supposed to have one ID on a page or one of each ID, so there shouldn't be multiple bear photos **(Bear-Photo Example)** and if there were for some reason, we still only get the first one that matches. So we'll only ever get one element back.

If we pass in an invalid ID or something that's not on the page, we get nothing, so no error, we just get null because there isn't an element with that ID.

There are different categories of elements on the page and some of them have their own type, like in HTML paragraph element and HTML image element, these are different patterns for these objects.

## 7. getElementsByTagName

Select by a type of element, i want all the images or paragraphs or the h1's on a page.

getElementsByTagName we will get more than one element or potentially we could and that means that the elements returned are going to be stored in a list, we're not going to get a single element back like we got from getElementById.

The elements returned by getElementsByTagName looks like an array it is not an array.

### What is HTMLCollection?
It is an array like object that is not an array, it's a type in the DOM and a type of collection, but we can do some array things
