let coinSprite, blobSprite
let images
let game
let sounds


function preload() {
  bg = loadImage('assets/unnamed.png')
  coinSprite = loadImage('assets/coin.png')
  blobSprite = loadImage('assets/character.png')

  images = {bg, coinSprite, blobSprite}
  sounds = {}
}

function setup() {
  createCanvas(800, 400)
  frameRate(12)
  game = new Game(images, sounds)
}

function draw() {
  checkKeys()
  game.update()  
  game.render()

}

function checkKeys() {
  if(keyIsDown(UP_ARROW)){
    game.bloby.jump()
    return
  } else if(keyIsDown(LEFT_ARROW)){
    game.bloby.moveLeft()
    return
  } else if(keyIsDown(RIGHT_ARROW)){
    game.bloby.moveRight()
    return       
  } else {
    game.bloby.render()
  }
}

function keyReleased(){
  if(keyCode === UP_ARROW){
    game.bloby.clearJump()
  }
}
