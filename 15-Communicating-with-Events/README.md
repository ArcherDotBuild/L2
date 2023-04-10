## 15-Communicating-with-Events

## 1. Intro to DOM Events

### EVENTS

#### Responding to user inputs and actions!

Events allow us to run that code to create a new element or to remove an element or to change color when a specific interaction happens from a user.

This is a small sampling of some of the events that we can work with in our browser.

### A SMALL TASTE

- clicks
- drags
- drops
- hovers
- scrolls
- form submission
- key presses
- focus/blur
- mouse wheel
- double click
- copying
- pasting
- audio start
- screen resize
- printing

### Event reference

https://developer.mozilla.org/en-US/docs/Web/Events

## 2. 2 Ways NOT to Add Events

Even though the triggers of the event are different, whether it's a user typing a key enter or return versus the user hovering or dragging or dropping, the triggers are different. But the way we incorporate these events into our code follows the same pattern.

### How events work?:

1. The thing
2. Event type
3. The code to run

```javascript
// The thing  |  Event type   |  The code to run

// Button     |  Click        |  Change the color

// Input      |  Hits return  |  Get search results

// Image      |  Mouseover    |  Display the image caption
```

Bad practice with inline events handlers:

- It's really hard to keep organized
- Understand where everything is comming from
- You don't want to put all that JavaScript directly into your elements

So instead, there's another way of doing this where we select an element first in JavaScript and then we can add onclick or mouseover.

## 3. addEventListener

Specify the event type and a callback to run

```
const button = document.querySelector('h1)

button.addEventListener('click', function() {
  alert('You clicked me!!')
})
```

**addEventListener** is great because for one thing, it's one method and it will attach any type of event listener, you want a click a double click, a drag, a mouse over, any of them, a print, a before print.

And also it will attach as many as we want to a give element.

**addEventListener**:

- 1st argument the event
- 2nd argument the (callback) function to execute when this event occurs

We are not setting the onclick property of the element, you can check in the app.js file `console.log(btn.onclick); // null`.

We are attaching an **eventListener**, which we can have multiple of for a given event on a given element, so i could attach as many as i want. It's probably uncommon to do that.

You can do also do arrow functions, but there are situations where you wouldn't want to use an arrow function. It has to do with the keyword **THIS** .

## 4. The Impossible Button Demo

How do we get access to the size of the screen?  
`window.screen`

## 5. Events on Multiple Elements

## 6. The Event Object

When a function is called, example: changeColor function, we're never executing changeColor ourself. It's being called for us and it's actually passed a value, it's pass an event object.

And this event object sometimes is extremely useful to have access to in our callback in our event handler. So we have access to it, it's automatically passed every single time.

We need to add in a parameter `changeColor(event)`, usually you'll see **e** or **event** **or** evt.

## 7. Key Events keypress, keyup, & keydown

- **keydown** runs for any of the potential keys i could press, whether they actually change the input or not
- **keyup** only occurs when the release actually happens
- **keypress** for something to be considered a keypress, there needs to be a character showing up in this input or a change like space

## 8. Coin Game Demo

## 9. Form Events & PreventDefault

A form is made to take data that we get from an input and submit it or send it somewhere.

Traditionally, we would submit our data to some URL like /signup => this would be an endpoint on our own server. The data would be sent to /signup and then on our server side we would do something, create a new user in the database and then respond with a new page that would load and so you would end up going to a completely new page

So what we'll do with JavaScript is take the form when it's submitted, will say stop, don't actually send the request, don't take us anywhere else, i just want to capture that event, i want to trigger some JavaScript code, when the user submits the form, then we can extract the information we want and do something with it.

Whether it's simply to display it back to the user, whatever we're doing here or maybe we'll send the data to a database somewhere to a server, but we won't actually refresh the page.

We'll do it using JavaScript on the same page we're currently on and we could maintain a single page application.

```javascript
const form = document.querySelector('#signup-form')
form.addEventListener('submit', function(e) {
  console.log('submit form')
  e.preventDefault()
})

<form id="signup-form" action="'no" method="GET"></form>
```

**e.preventDefault()** prevent the default behavior and the default behavior in this case with a form when it's submitted, is to continue sending on your data, sending a request to whatever URL we specified in our case /no with a GET request

Our form has not actually submitted, the submit event has run but we haven't actually submitted data anywhere and this leaves us free to now extract data adn send it to an API using AJAX, using client side request

The point is we have the flexibility to do something with the data and we can still capture the submit event

By adding just one submit event listener, there's just one event we're waiting for to extract our data.