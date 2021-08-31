/**
 * 210830 Tangram Cats
 * Started: 8/30/21
 * By: Oz Ramos
 * Twitter: https://twitter.com/thecodemedium
 * GitHub: https://github.com/codemedium
 * Personal website: https://codemedium.com
 *
 * 		 "Any sufficiently advanced technology is indistinguishable from magic"
 * 		 - Arthur C. Clarke
 *
 * Description: A collectiong of generative tangram cats
 */

/**
 * Color palettes
 */
// VSCode Shades of purple editor colors
bgColor = [0, 25, 60]
colors = ['#000000', '#ffffff', '#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0']

/**
 * Sketch entry point
 */
function setup() {
  // Param args
  params = Object.assign({
    baseScale: 50
  }, getURLParams())
  
  angleMode(DEGREES)

	createCanvas(windowWidth, windowHeight)
  refresh()
}

/**
 * Main draw loop
 */
function draw() {
}

/**
 * Returns a color in colors
 */
function getColor (arr) {
  if (!arr) arr = colors
  return arr[Math.floor(random(arr.length))]
}

/**
 * Refresh the scene
 */
function refresh () {
  c = getColor()
  background(c)
  new Cat(1, c)
}


/**
 * Create a cat
 */
class Cat {
  constructor (type, bg) {
    switch (type) {
      case 1:
        rectMode(CENTER)
        translate(0, 3 * -params.baseScale)
        new TriSm(0, 0, 135, bg)
        new TriSm(0, 0, -45, bg)
        new SquareSm(0, sqrt(2) / 2, -45, bg)
        new TriMd(0, sqrt(2), 45, bg)
      break
    }
  }
}


/**
 * Triangles
 */
class TriSm {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(width / 2 + x * params.baseScale, height / 2 + y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    triangle(0, params.baseScale, 0, 0, params.baseScale, 0)
    pop()
  }
}

class TriMd {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(width / 2 + x * params.baseScale, height / 2 + y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    triangle(0, params.baseScale * sqrt(2), 0, 0, params.baseScale * sqrt(2), 0)
    pop()
  }
}

class TriLg {
  constructor () {}
}

/**
 * Squares
 */
class SquareSm {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(width / 2 + x * params.baseScale, height / 2 + y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    rect(0, 1, params.baseScale, params.baseScale)
    pop()
  }
}
class SquareMd {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(width / 2 + x * params.baseScale, height / 2 + y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    rect(0, 1, params.baseScale * 2, params.baseScale * 2)
    pop()
  }
}
class SquareLg {
  constructor () {}
}
class Para {
  constructor () {}
}







/**
 * Handle keypressed across multiple files
 */
function keyPressed () {
  keypressFn.forEach(fn => fn())
}

/**
 * Split keypressed into multiple functions
 * - On my localhost I have another file to record the canvas into a video,
 *   but on OpenProcessing.org this file is not. Locally, the other file
 *   adds another function that starts recording if space is pressed
 * 
 * @see https://github.com/CodeMedium/subdivided-starships
 */
function mouseClicked () {
  refresh()
}
const keypressFn = [function () {
  refresh()
  switch (keyCode) {
    // Space
    case 32:
      break
    // 1
    case 49:
      break
    // 2
    case 50:
      break
    // 3
    case 51:
      break
    // 4
    case 52:
      break
    // 5
    case 53:
      break
  }
}]
