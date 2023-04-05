## 14-Twisting-the-DOM-to-Our-Will

## 1. Working with innerText & textContent

### PROPERTIES & METHODS

(the important ones)

- classList
- getAttribute()
- setAtrinbute()
- appendChild()
- append()
- prepend()
- removeChild()
- remove()
- createElement
- innerText
- textContent
- innerHTML
- value
- parentElement
- children
- nextSibling
- previousSibling
- style

The unfortunate thing about the DOM is when you're learning it, you take a look at any document or any element that you select. There are so many properties, so many methods as we've already seen a couple of times.

It definitely can be overwhelming, but we're going to narrow it down to some of the most important methods and properties you need to know.

And these are the ones that 9 times out of 10 probably, most of the time you end up using these methods

These are the methods and properties that we use to style elements, to create new elements, to change attributes, to add a class to an element or remove a class.

`h1.innerText` is going to give me the text that is in between the tags

`h1.textContent` same as innerText but adds spacing, text inside scripts, hidden text, gives all the text it can find

## 2. innerHTML

innerHTML is going to return or retrieve not only the text inside of an element, but also all other tags inside of a given element, content, li, text, all the attributes, everything that i wrote in the HTML is showing up and i can use innerHTML to update the inside of an element to change the content in between the two tags if i wanted to.

**innerHTML, innerText and textContent they all return strings**. So no objects are involved here except for the object that we're actually selecting.

There is a difference between **innerHTML** and **innerText** when you are setting them. When we retrieve them, we've already seen the difference in **innerText** does not give you the tags, **innerHTML** does. When you set them it seems like you could use either.

## 3. value, src, href, and more

This are properties that we can directly access on individual elements

- value: Gets the value of the input element

## 4. Getting & Setting Attributes

Two methods, not properties these methods allow us to access or change the value of attributes on elements.

There are other attributes that don't have shortcut property like example: placeholder.value does have. So we have these methods **getAttribute() and setAttribute()**

## 5. Finding Parent Children Siblings

- parentElement
- children
- nextSibling
- previousSibling

They allow you to access other elements based on of the current element that you're working with

We can use **parentElement** `firstLi.parentElement` to work **backwards** back up the tree, find out a parent from a given element

**children** `ul.children` this is another array like object and it contains the children elements of the ul

## 6. Changing Multiple Elements

## 7. Altering Styles

Changing styles using JavaScript so we could select one element or 20 elements and pontentially change their color, their background color, their font size, we could hide them.

**Every element that we select has a style property**

```javascript
const h1 = document.querySelector('h1')

console.log(h1.style)

// Nothing is here
console.log(h1.style.color)
```

This is the first really important thing to understand about style property. We can use this style property to change colors or styles. We can change any of those properties and they will be affected on the page.

**But if we're trying to use the style property to read existing properties, to read existing styles. It won't work unless those styles are defined inline, which is not really a good idea. We normally don't add inline styles**

```css
/* CSS syntax */
background-color: blue;
```

```javascript
// JavaScript syntax
backgroundColor: blue;
p.style.backgroundColor: blue;

// SyntaxError
const background-color: blue;
```

**All of the styles properties in JavaScript are camelCase**

We are not changing our style sheet, it's just inserting an inline style declaration into the individual element already.

## 8. getComputedStyle

Different way of accessing style values, so not to set a value, but to retrieve what the current value is for color or background color or display, position, width all these different properties, we might want to access on an element we couldn't really do using the style property.

```javascript
const li = document.querySelector('li')
console.log(getComputedStyle(li))
```

You can see that this **object** that we got from **getComputedStyle**, is actually going to contain all of the properties in CSS for a given element, all the possible properties and all of their current values.

**getComputedStyle** is a great way to figure out what's actually going on on your page.

You can have a whole bunch of styles being applie to one element, but to know what is actually winning, what is actually showing up in the DOM and taking effect, you can use computed **getComputedStyle**.

## 9. Manipulating Classes

Better way to add multiple styles at once

**classList** is an object representation it's called a DOM token list. it kind of looks like an array, but it's not. And it contains the classes that we have on this element.

It also provides methods so that we can do things

- add
- contains
- entries
- forEach
- item
- keys
- length
- remove
- replace
- supports
- toString
- toggle
- value
- values
- and many more stuff

**Perhaps the most useful part is the ability to toggle a class, it returns true or false**

## 10. Creating Elements

We'll see how we can create elements from scratch and insert them or add them to the DOM, wo we could create an image, give it a source and put in on inside of a dive or whatever

We could create 100 links with different URLs and insert them into the DOM

#### appendChild()
**appendChild** is a method that we call on a parent element that we want to append an element into

**appendChild** will append the element at the end of the last child of an element

## 11. Append, Prepend, & insertBefore

- insertBefore()
- append()
- prepend()

A few other methods we can use to add new elements to the DOM

With **appendChild()** you cannot insert multiple elements

## 12. removeChild & remove

- remove()
- removeChild()

To use **removeChild()**, we need to find the parent of what we're trying to remove and find the item that we want to remove

To use **removeChild()** returns the removed element so i can save it

**remove()**, works differently, it does not need the parent node, all we need to do is select the target and then call remove() on that node on the actual item we want to remove

## 13. NBA Scores Chart Pt1

## 14. NBA Scores Chart Pt2