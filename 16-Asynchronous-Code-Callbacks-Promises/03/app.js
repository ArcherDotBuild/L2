// ******************************
// JS is Single Threaded ******************************
// Example 1
console.log('JS is Single Threaded')
console.log('\n')


console.log('I HAPPEN FIRST!');

// this alert is blocking everything else from going on
// until the user finishes it or completes it
// at which point JavaScrit moves on to the next line
 alert('Hi there!')

 console.log('I HAPPEN SECOND!');