## 22-Javascript-with-the-Canvas-API

**folder 01**

## 1. 02 Project Setup

#### UI documentation

https://brm.io/matter-js/
https://brm.io/matter-js/demo

## 2. 04 Getting Content to Appear

## 3. 05 Boilerplate Overview

**world** variable print it in the console browser.

**gravity** it's enable by default, makes the shape stay exactly where it is.

```javascript
const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
})
World.add(world, shape)
```

## 4. 06 Drawing Borders

## 5. 07 Clicking and Dragging

## 6. 08 Generating Random Shapes

## 7. 11 Configuration Variables

**folder 02**

## 8. 12 Grid Generation

```javascript
// Maze generation
const grid = []

for (let i = 0; i < 3; i++) {
  grid.push([])
  for (let j = 0; j < 3; j++) {
    grid[i].push(false)
  }
}
console.log(grid)
```

```javascript
const grid = Array(3).fill(null)

console.log(grid)
```

## 9. 13 Verticals and Horizontals

## 10. 14 Abstracting Maze Dimensions

## 11. 15 Guiding Comments

## 12. 16 Neighbor Coordinates

## 13. 17 Shuffling Neighbor Pairs

## 14. 18 Determining Movement Direction

## 15. 19 Updating Vertical Wall Values
