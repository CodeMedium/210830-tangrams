# Tangram Cats
Generates a bunch of Tangrams in the shape of cats

![download (6)](https://user-images.githubusercontent.com/89111078/131448051-2d21c6a7-f2c2-487b-9408-923a9582fb64.png)

## CCapture to mp4 with spacebar

Uncomment `ccapturer` line in `index.html` to enable. Then press Space to start recording the canvas into an mp4

## `keyPressed.push(fn)`

All functions passed into this array will be called when p5 calls `keyPressed()`. This is helpful for splitting it across multiple files (eg to record the canvas into a mp4)

## `getColor(transparentAmountHex)`

Returns a random color from `colors`
