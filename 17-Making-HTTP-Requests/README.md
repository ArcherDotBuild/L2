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

create an international phonetic alphabet with examples

## 3. XMLHttpRequest

- The "original" way of sending requests via JS.
- Does not support promises, so...lots of callbacks!
- WTF is going on with the weird capitalization?
- Clunky syntax that i find difficult to remember!

Making our first request using XMLHttpRequest through JavaScript. So these are objects in the browser we can create that have different methods and we can use them to fetch data from an API to send data somewhere.

So we end up with a lot of callbacks, if we have nested requests, things where we want to make one request, get information back and then make a second request.

This was the only way of making a request **XMLHttpRequest**

```javascript
const myReq = new XMLHttpRequest()

myReq.onload = function () {
  const data = JSON.parse(this.responseText)
  console.log(data)
}
myReq.onerror = function (err) {
  console.log('ERROR!', err)
}
myReq.open('get', 'https://icanhazdadjoke..com/', true)
myReq.setRequestHeader('Accept', 'application/json')
myReq.send()
```

## 4. XMLHttpRequests Chaining Requests

## 5. A Better Way Fetch

#### Fetch

- The newer way of making requests via JS
- Supports promises!

```javascript
fetch('https://icanhazdadjoke.com/23/2', {
  headers: { Accept: 'application/json' },
})
  .then((res) => {
    if (res.status !== 200) {
      console.log('Problem!', res.status)
      return
    }
    res.json().then((data) => {
      console.log(data)
    })
  })
  .catch(function (err) {
    console.log('Fetch Error', err)
  })
```

#### Fetch API MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## 6. Chaining Fetch Requests

## 7. Refactoring Fetch Chains

## 8. An Even Better Way Axios

#### AXIOS

A LIBRARY FOR MAKING HTTP REQUESTS

Next up, we have a third option for making requests via JavaScript. This is not a built in option, it's not native JavaScript like Fetch or XHR.

It is a external library called **Axios** it's one of many a whole bunch of different HTTP libraries that you could use. **Axios** is just the most popular.

#### https://github.com/axios/axios

So all that it does is it simplifies the process of making requests. It uses fetch behind the scenes so it doesn't give us anything we can't already do.

It just simplifies things through a bunch of methods and objects that it creates that we can interact with. It is promise based just like fetch.

You can use it both in the client on the browser side of things, but also on the server side using NodeJS

#### Run in the Chrome browser

```javascript
// 1. const res = axios.get('https://swapi.dev/api/planets/')
// 2. res
// 3. Open Promise, then PromiseResult, then Open Data
```

I get a promise back, save it to a variable **res**. So just like **Fetch** we get a promise back when we make a request using **Axios**. Let's take a look at the value that it's been resolved with.

Inside we have a data property and it's already been parsed for us. We don't have to parsed it ourselves. That's one of the main advantages of using a tool like Axios, is that unlike Fetch, we don't have to do the **JSON parsing** on our own.

## 9. Sequential Axios Requests
Let's see how we can use **Axios** to make multiple chain requests.