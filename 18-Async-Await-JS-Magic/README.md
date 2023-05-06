## 18-Async-Await-JS-Magic

## 1. A Quick Overview of Async Functions

#### ASYNC FUNCTIONS

Async functions depend extremely heavily on promises. Async functions are just a nice syntactic sugar for promises. It's a nice, clean, easy syntax to work with promises, but you still have to understand promises.

#### 2 PIECES

- ASYNC
- AWAIT

## 2. The Async Keyword

#### The async keyword

- Async functions always return a promise
- If the function returns a value, the promise will be resolved with that value
- If the function throws an exception, the promise will be rejected

```javascript
async function hello() {
  return 'Hey guy!'
}
hello()
// Promise {<resolved>: "Hey guy!"}
async function uhOh() {
  throw new Error('oh no!')
}
uhOh()
// Promise {<rejected>: Error: oh no!}
```

So we use async in front of a function declaration or function expression, we use it to designate a certain function as an async function.

The key thing to understand about this keyword is when you put it in front of a function, this function behaves differently. **It's now going to return a promise**.

So even though i never write a new promise, i don't explicitly say, hey, return a promise. I'm simply saying return a string because i put async there the function now returns a promise.

#### How do we return a promise that is not resolved?

- If we want to return a rejected promise, all that we do is
  raise an exeption. So if we throw an exception, we throw an error,
  that promise will be rejected

## 3. The Await Keyword

- We can only use the await keyword inside of functions declared wit async
- await will pause the execution of the function, waiting for a promise to be resolved

We put the **await** keyword inside of an async function and it iwll pause the execution of the function while it waits for a promise to be resolved so it will await something without having to use the **.then**, we can run code after an asynchrounous operation without having to nest things with callbacks.

**You can only use await keyword inside of an async function**

```javascript
async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets/')
  console.log(res.data)
}

getPlanets()
```

## 4. Error Handling in Async Functions

What if the asynchronous operation, if that promise is not resolved?, What if it's rejected?

```javascript
const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
```

- This endpoint should give me a 404
- **Axios** is going to reject the promise
- I don't have a catch
- I don't have any sort of error handling

```javascript
async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
    console.log(res.data)
  } catch (e) {
    console.log('IN CATCH!!!')
    console.log(e)
  }
}

getPlanets()
```
## 5. Multiple Awaits
