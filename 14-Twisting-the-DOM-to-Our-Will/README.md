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