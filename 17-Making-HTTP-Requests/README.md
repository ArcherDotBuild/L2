## 17-Making-HTTP-Requests

## 1. Intro to AJAX

### REQUESTS

- XMLHTTP
- FETCH
- AXIOS

### AJAX

- ASYNCHRONOUS
- JAVASCRIPT
- AND
- XML

Back in the day before, AJAX was really a big thing. Before single page apps SPA we common, we had one standard flow for loading new data or getting information from a server which included a page refresh.

Example: Go to MDN website and search for the **div** word and hit enter.

So what's happening here is the browser is sending a request for a new webpage and it's going off to one of MDN servers depending on this URL `https://developer.mozilla.org/en-US/search?q=div`, this is the URL that we requested by hitting enter. This URL is then received, the request is received by the server, and it compiles a new webpage for us, including the HTML, CSS and any relevant JavaScript. It sends the entire page back, our browser refreshes and this is what we see, a whole new page.

Contrast that with the `https://caniuse.com` page. Search for gradient, the page never reloads, I don't go anywhere else. Data is being loaded, there is communication with the server, but it's happening behind the scenes. It doesn't involve a whole page refresh, we're not getting a new webpage, It's a different approach.

We're just getting some data, the webpage is asking for data from a server. It comes back and then new elements are added to the page, the page is changing, the contents are changing, at least some of it. But it's a single page SPA that we are staying on.

**This is really what AJAX is all about**

The idea of **AJAX** is using these requests that we can make via JavaScript asynchronously to load some data from a server or to send data to a server to save something to a database, whatever it is, we're communicating with a server behind the scenes.

Not in between page loads like the MDN example, in between those loads, in between what a user sees and the page refreshing, that is when the communication is occurring with the server.

With SPA example the communication is happening while i'm on this page. It's happening in the background. We get some response from the server.

The response usually these days is in the form of something called **JSON**. In the past, it was **XML**, which is what was most commonly used and where the name AJAX comes from. But these days almost everyone uses JSON

So **JSON** is just a format for sending data. Imagine you have data representing all of this information (Previous Example) `https://caniuse.com` we see here.

The elements themselves are not being sent as HTML or the CSS is not being sent. All that's being sent is basically the text and some information that maybe doesn't show up, you know what's supported what's not supported, and it's being sent as text

But rather than just plain text, it's turned into this **JSON** notation. It's a way of representing data. It's a protocol for communicating between servers or a protocol for formatting data and sending it to another server or to another browser somewhere.

#### See the request happening behind the scenes

- Go to Chrome Dev Tools
- Open the network tab
- Go to https://caniuse.com
- Search for **spread** in the search bar, hit enter
- Check the network activity

This network activity represents different kinds of requests that have been sent.

If we go to XHR tab, is going to show us the requests that have been sent. This is one `query.php?search=spread` and some information was sent back, this is the data that was sent back by the server.

But the point is, this is not HTML that's being sent. It's not JavaScript itself. It looks like JavaScript but it's actually called **JSON**. It's simply a way of sharing data between a server and another server, a server and a browser that we can then use in JavaScript.

It's really easy to take JSON and turn it into JavaScript and do something with it.

## 2. JSON & XML

XML Extensible Markup Language and JSON JavaScript Object Notation, So these are two ways of basically formatting data so that you can send it from a server to another server, or a server to a browser.

It's a format for information they both solve essentially the same problem. We have some data that we want to send. We need to figure out a common standard way of sending that information.

#### XML example

```xml
<!-- name -> @ElfGodd
email -> elfgodd@elfgodd.com
age -> 36 -->
<name>
  <first>Elf</first>
  <first>Godd</first>
</name>
<email>elfgodd@elfgodd.com</email>
```

**In JavaScript we have a way of taking data in XML and turning it into a JavaScript Object**

#### JavaScript Object example

```javascript
{
  name: {
    first: 'Elf',
    last: 'Godd'
  },
  email: 'elfgodd@elfgodd.com'
}
```

#### JSON

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": ["Molecule Man", "Madame Uppercut", "Eternal Flame"]
}
```

Every key in JSON must be a string with quotes. We also can use arrays, We can have values like numbers, booleans, strings, but we cannot store more complicated things like functions as an example.

**We can translate between JSON and JavaScript very, very easily**

- SWAPI API a Star Wars API that we can play around with `https://swapi.co`.

- JSON Formatter & validator `https://jsonformatter.curiousconcept.com`.
