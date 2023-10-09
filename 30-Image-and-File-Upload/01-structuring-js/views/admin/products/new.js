const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ errors }) => {
  return layout({
    content: `
      <form method='POST'>
        <input placeholder="Price" name="price" />
        <input placeholder="Title" name="title" />
        <input type="file" name="image" />
        <button>Submit</button>
      </form>
    `,
  })
}
