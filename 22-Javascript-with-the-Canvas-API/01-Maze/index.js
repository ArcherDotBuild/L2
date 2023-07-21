// Matter.js library
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
})

Render.run(render)
Runner.run(Runner.create(), engine)

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
)

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
]

World.add(world, walls)

World.add(world, Bodies.rectangle(200, 200, 50, 50))
