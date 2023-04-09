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
