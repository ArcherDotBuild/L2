## 15-Communicating-with-Events

## 1. Intro to DOM Events

### EVENTS

#### Responding to user inputs and actions!

Events allow us to run that code to create a new element or to remove an element or to change color when a specific interaction happens from a user

This is a small sampling of some of the events that we can work with in our browser

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

So instead, there's another way of doing this where we select an element first in JavaScript and then we can add onclick or mouseover