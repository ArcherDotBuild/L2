// Matter.js library
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter

const cellsHorizontal = 6
const cellsVertical = 4
const width = window.innerWidth
const height = window.innerHeight

const unitLengthX = width / cellsHorizontal
const unitLengthY = height / cellsVertical

const engine = Engine.create()
engine.world.gravity.y = 0
const { world } = engine
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
})

Render.run(render)
Runner.run(Runner.create(), engine)

// Walls

const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
]

World.add(world, walls)

// Maze generation

const shuffle = (arr) => {
  let counter = arr.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)

    counter--

    const temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }

  return arr
}

const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false))

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false))

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false))

// console.log(horizontals)

const startRow = Math.floor(Math.random() * cellsVertical)
const startColumn = Math.floor(Math.random() * cellsHorizontal)

// console.log(startRow, startColumn);

const stepThroughCell = (row, column) => {
  // If i have visited the cell at [row, column], then return
  if (grid[row][column] === true) {
    return
  }
  // Mark this cell as being visited
  grid[row][column] = true

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, 'up'],
    [row, column + 1, 'right'],
    [row + 1, column, 'down'],
    [row, column - 1, 'left'],
  ])
  // console.log(neighbors)

  // For each neighbor....
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor

    // See if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue
    }

    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue
    }

    // Remove a wall from either horizontals or verticals
    if (direction === 'left') {
      verticals[row][column - 1] = true
    } else if (direction === 'right') {
      verticals[row][column] = true
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true
    } else if (direction === 'down') {
      horizontals[row][column] = true
    }

    stepThroughCell(nextRow, nextColumn)
  }
  // Visit that next cell
}

stepThroughCell(startRow, startColumn)
// stepThroughCell(1, 1)
// console.log(grid)
// console.log(verticals);
// console.log(horizontals);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) {
      return
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      10,
      {
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    )
    World.add(world, wall)
  })
})

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      10,
      unitLengthY,
      { 
        label: 'wall',
        isStatic: true,
        render: {
          fillStyle: 'red'
        }
      }
    )
    World.add(world, wall)
  })
})

// Goal

const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    label: 'goal',
    isStatic: true,
    render: {
      fillStyle: 'green'
    }
  }
)
World.add(world, goal)

// Ball

const ballRadius = Math.min(unitLengthX, unitLengthY) / 4
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: 'ball',
  render: {
    fillStyle: 'blue',
  },
})
World.add(world, ball)

document.addEventListener('keydown', (event) => {
  // console.log(event.keyCode)
  // console.log(event);

  const { x, y } = ball.velocity
  console.log(x, y)
  if (event.keyCode === 38) {
    // console.log('move ball up')
    Body.setVelocity(ball, { x, y: y - 5 })
  }
  if (event.keyCode === 39) {
    // console.log('move ball right')
    Body.setVelocity(ball, { x: x + 5, y })
  }
  if (event.keyCode === 40) {
    // console.log('move ball down')
    Body.setVelocity(ball, { x, y: y + 5 })
  }
  if (event.keyCode === 37) {
    // console.log('move ball left')
    Body.setVelocity(ball, { x: x - 5, y })
  }
})

// Win Condition

Events.on(engine, 'collisionStart', (event) => {
  // console.log(event);
  event.pairs.forEach((collision) => {
    // console.log(collision)
    const labels = ['ball', 'goal']

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      // console.log('User won!')
      // alert('User won!')
      document.querySelector('.winner').classList.remove('hidden')
      world.gravity.y = 1
      world.bodies.forEach((body) => {
        if(body.label === 'wall') {
          Body.setStatic(body, false)
        }
      })
    }
  })
})
