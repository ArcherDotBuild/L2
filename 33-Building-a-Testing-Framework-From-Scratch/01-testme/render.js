const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const render = async (filename) => {
  const filePath = path.join(process.cwd(), filename)

  const dom = await JSDOM.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable',
  })

  return new Promise((resolve, reject) => {
    dom.window.document.addEventListener('DOMContentLoaded', () => {
      // console.log('All done loading!!!')
      resolve(dom)
    })
  })

  return dom
}

module.exports = render
