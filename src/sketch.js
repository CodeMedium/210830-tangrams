/**
 * 210830 Tangrams
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
let r

/**
 * Sketch entry point
 */
function setup() {
  // Param args
  params = Object.assign({
    baseScale: 15
  }, getURLParams())
  
  angleMode(DEGREES)
  rectMode(CENTER)

	createCanvas(windowWidth, windowHeight)
  refresh()
}

/**
 * Main draw loop
 */
function draw() {
  // push()
  // translate(width / 2, height / 2)
  // // addTangram('triangle', 'md', bg, 1, 1, 45 + frameCount)
  // // addTangram('triangle', 'md', bg, 1, 1, 45 + frameCount)
  // // addTangram('triangle', 'md', bg, 1, 1, 45 + frameCount)
  // addTangram('quadFlipped', 'sm', bg, 0, 0, frameCount/6)

  // // addTangram('triangle', 'md', bg, 1, 1, 45 + frameCount)
  // pop()
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
  bg = getColor()
  background(bg)
  translate(params.baseScale * 3, params.baseScale * 3)

  for (let x = 0; x < ~~(width / (params.baseScale * 6)); x++) {
    for (let y = 0; y < ~~(height / (params.baseScale * 6)); y++) {
      push()
      translate(x * params.baseScale * 8, y * params.baseScale * 8)
      // new Cat(1, bg)
      new TangramBuilding(1, bg)
      pop()
    }
  }
}

/**
 * Create a building
 */
class TangramBuilding {
  constructor (type, bg) {
    switch (type) {
      case 1:
        // Chimney
        addTangram('square', 'sm', bg)
        
        // Roof
        addTangram('quadFlipped', 'sm', bg, -.5, 1)
        addTangram('triangle', 'lg', bg, .9, 1.03)

        // Facade
        // addTangram('triangle', 'md', bg, -1, 1.5, -45)
        // addTangram('triangle', 'lg', bg, .4, 1.5, 0)

        // addTangram('triangle', 'md', bg, 1.815, 1.5, 45)
        // addTangram('triangle', 'md', bg, 0, 0, 45)
        // addTangram('triangle', 'md', bg, 0, 0, 45)
        // addTangram('triangle', 'md', bg, 0, 0, 45)
        // addTangram('triangle', 'md', bg, 0, 0, 45)
      break
    }
  }
}

/**
 * Tangram
 */
function addTangram (shape, size, bg, xShift = 0, yShift = 0, rot = 0) {
  push()
  if (xShift || yShift) {
    translate(xShift * params.baseScale, yShift * params.baseScale)
  }
  
  switch (shape) {
    /**
     * Squares
     */
    case 'square':
      switch (size) {
        case 'sm':
          r = random()
          if (r < 1 / 3) {
            new TriangleSm(0, 0, 270 + rot, bg, .1695, .1695)
            new TriangleSm(0, 0, 90 + rot, bg, .1695, .1695)
          } else if (r < 2 / 3) {
            new TriangleSm(0, 0, 0 + rot, bg, .1695, .1695)
            new TriangleSm(0, 0, -180 + rot, bg, .1695, .1695)
          } else {
            new SquareSm(0, 0, 0 + rot, bg)
          }
        break

        // @todo
        case 'md':
          r = random()
          if (r < 1 / 3) {
            new TriangleLg(-1, 2.42, 0 + rot, bg)
            new TriangleLg(1, 4.43, 180 + rot, bg)
          } else if (r < 2 / 3) {
            new TriangleLg(1, 2.42, 90 + rot, bg)
            new TriangleLg(-1, 4.43, -90 + rot, bg)
          } else {
            new SquareMd(0, 3.42, 0 + rot, bg)
          }
        break
      }
    break

    /**
     * Triangles
     */
    case 'triangle':
      switch (size) {
        case 'sm':
          new TriangleSm(0, 0, 45 + rot, bg)
        break
        case 'md':
          r = random()
          if (r < .5) {
            new TriangleMd(0, 0, 45 + rot, bg)
          } else {
            new TriangleSm(0, 0, 270 + rot, bg, 0, -.33)
            new TriangleSm(0, 0, 180 + rot, bg, -.33, 0)
          }
        break
        case 'lg':
          r = random()
          if (r < .5) {
            new TriangleLg(0, 0, 45 + rot, bg)
          } else {
            addTangram('triangle', 'md', bg, -.47, 0, 135)
            addTangram('triangle', 'md', bg, .47, 0, -135)
          }
        break
      }
    break

    /**
     * Quad
     */
    case 'quad':
      switch (size) {
        case 'sm':
          r = random()
          if (r < .5) {
            new TriangleSm(0, 0, 90 + rot, bg, .17, -.33)
            new TriangleSm(0, 0, 270 + rot, bg, .17, -.33)
          } else {
            new Quad(0, 0, 0 + rot, bg)
          }
        break
      }
    break

    case 'quadFlipped':
      switch (size) {
        case 'sm':
          r = random()
          if (r < .5) {
            new TriangleSm(0, 0, 180 + rot, bg, -0.33, 0.17)
            new TriangleSm(0, 0, 0 + rot, bg, -.33, .17)
          } else {
            new QuadFlipped(0, 0, 0 + rot, bg)
          }
        break
      }
    break
  }

  pop()
}

/**
 * Triangles
 */
class TriangleSm {
  constructor (x, y, rot, bg, xShift = 0, yShift = 0) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    triangle(
      0 - params.baseScale * .33 - params.baseScale * xShift, params.baseScale - params.baseScale * .33 - params.baseScale * yShift,
      0 - params.baseScale * .33 - params.baseScale * xShift, 0 - params.baseScale * .33 - params.baseScale * yShift,
      params.baseScale - params.baseScale * .33 - params.baseScale * xShift, 0 - params.baseScale * .33 - params.baseScale * yShift)
    pop()
  }
}

// @todo
class TriangleMd {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    triangle(params.baseScale * -.47, params.baseScale * sqrt(2) + params.baseScale * -.47, params.baseScale * -.47, params.baseScale * -.47, params.baseScale * sqrt(2) + params.baseScale * -.47, params.baseScale * -.47)
    pop()
  }
}

// @todo
class TriangleLg {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    triangle(params.baseScale * -.67, params.baseScale * 2 + params.baseScale * -.67, params.baseScale * -.67, params.baseScale * -.67, params.baseScale * 2 + params.baseScale * -.67, params.baseScale * -.67)
    pop()
  }
}

/**
 * Squares
 */
class SquareSm {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    rect(0, 0, params.baseScale, params.baseScale)
    pop()
  }
}

class SquareMd {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    rect(0, 0, params.baseScale * 2, params.baseScale * 2)
    pop()
  }
}

class SquareLg {
  constructor () {}
}

/**
 * Parallelagrams
 */
class Quad {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    quad(
      0 - params.baseScale, 0 - params.baseScale / 2,
      0, 0 - params.baseScale / 2,
      params.baseScale, params.baseScale - params.baseScale / 2,
      0, params.baseScale - params.baseScale / 2
    )
    pop()
  }
}
// @todo
class QuadFlipped {
  constructor (x, y, rot, bg) {
    let newColors = colors.filter(c => c !== bg)
    
    push()
    translate(x * params.baseScale, y * params.baseScale)
    rotate(rot)
    fill(getColor(newColors))
    
    quad(
      0 + params.baseScale, 0 - params.baseScale / 2,
      0, 0 - params.baseScale / 2,
      -params.baseScale, params.baseScale - params.baseScale / 2,
      0, params.baseScale - params.baseScale / 2
    )
    pop()
  }
}

/**
 * Create a cat
 */
 class Cat {
  constructor (type, bg) {
    switch (type) {
      case 1:
        translate(0, 3 * -params.baseScale)
        
        // Ears
        new TriangleSm(0, 0, 135, bg)
        new TriangleSm(0, 0, -45, bg)
        
        // Face
        r = random()
        if (r < 1 / 3) {
          new SquareSm(0, sqrt(2) / 2, -45, bg)
        } else if (r < 2 /3) {
          new TriangleSm(0, 0, 45, bg)
          new TriangleSm(0, sqrt(2), 225, bg)
        } else {
          new TriangleSm(sqrt(2) / -2, sqrt(2) / 2, -45, bg)
          new TriangleSm(sqrt(2) / 2, sqrt(2) / 2, 135, bg)
        }
        
        // Neck
        new TriangleMd(0, sqrt(2), 45, bg)

        // Body
        r = random()
        if (r < 1 / 3) {
          new TriangleLg(-1, 2.42, 0, bg)
          new TriangleLg(1, 4.43, 180, bg)
        } else if (r < 2 / 3) {
          new TriangleLg(1, 2.42, 90, bg)
          new TriangleLg(-1, 4.43, -90, bg)
        } else {
          new SquareMd(0, 3.42, 0, bg)
        }

        // Tail
        r = random()
        if (r < .25) {
          new QuadFlipped(0, 4.43, 0, bg)
        } else if (r < .5) {
          new Quad(0, 4.43, 0, bg)
        } else if (r < .75) {
          new Quad(2, 2.43, 90, bg)
        } else {
          new QuadFlipped(-2, 2.43, -90, bg)
        }
      break
    }
  }
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
