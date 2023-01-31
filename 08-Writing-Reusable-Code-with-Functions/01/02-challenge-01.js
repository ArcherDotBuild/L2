/* Function Challenge 1 */
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain username
// If all requirements are met, return true
// Otherwise: false
// isValidPassword('89Fjj1nms', 'dogLuvr'); // true
// isValidPassword('dogLuvr123!, 'dogLuvr'); // false
// isValidPassword('hello1', 'dogLuvr'); // false
// isValidPassword('hello 1', 'dogLuvr'); // false

console.log('\n')
/* Solution 1 */
function isValidPassword(password, username) {
  if (password.length < 8) {
    return false
  }
  if (password.indexOf(' ') !== -1) {
    return false
  }
  if (password.indexOf(username) !== -1) {
    return false
  }
  return true
}

console.log(isValidPassword('asfg2', 'asd')) // false, to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // false, has space
console.log(isValidPassword('chicken1234', 'chicken')) // false, too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true

console.log('\n')
/* Solution 2 */
function isValidPassword(password, username) {
  if (password.length < 8) return false
  if (password.indexOf(' ') !== -1) return false
  if (password.indexOf(username) !== -1) return false
  return true
}

console.log(isValidPassword('asfg2', 'asd')) // false, to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // false, has space
console.log(isValidPassword('chicken1234', 'chicken')) // false, too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true

console.log('\n')
/* Solution 3 */
function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false
  }
  return true
}
console.log(isValidPassword('asfg2', 'asd')) // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // has space
console.log(isValidPassword('chicken1234', 'chicken')) // too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true

console.log('\n')
/* Solution 4 */
function isValidPassword(password, username) {
  const tooShort = password.length < 8
  const hasSpace = password.indexOf(' ') !== -1
  const tooSimilar = password.indexOf(username) !== -1
  if (tooShort || hasSpace || tooSimilar) return false
  return true
}
console.log(isValidPassword('asfg2', 'asd')) // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // has space
console.log(isValidPassword('chicken1234', 'chicken')) // too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true

console.log('\n')
/* Solution 5 */
function isValidPassword(password, username) {
  const tooShort = password.length < 8
  const hasSpace = password.indexOf(' ') !== -1
  const tooSimilar = password.indexOf(username) !== -1
  if (!tooShort && !hasSpace && !tooSimilar) return true
  return false
}
console.log(isValidPassword('asfg2', 'asd')) // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // has space
console.log(isValidPassword('chicken1234', 'chicken')) // too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true

console.log('\n')
/* Solution 6 */
function isValidPassword(password, username) {
  const tooShort = password.length < 8
  const hasSpace = password.indexOf(' ') !== -1
  const tooSimilar = password.indexOf(username) !== -1
  return !tooShort && !hasSpace && !tooSimilar
}
console.log(isValidPassword('asfg2', 'asd')) // to short
console.log(isValidPassword('aasjasd askjd', 'asdasdasd')) // has space
console.log(isValidPassword('chicken1234', 'chicken')) // too similar
console.log(isValidPassword('chiken1234', 'chicken')) // true
