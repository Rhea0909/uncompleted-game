var criminalCaught, criminalRunning
var obstaclesGroup, obstacle1, obstacle2
var gameState = PLAY
var gameOverImg, restartImg
var road, invisibleRoad, roadImage







function preload(){

criminalRunnning=loadImage("criminal and police.jpeg")
criminal caught= loadImage("criminal caught.jpeg")
roadImage= loadImage("road.webp")
}

function setup() {
createCanvas(600,600)
obstacles=createSprite(50,50)
criminalRunning=createSprite(300,400)
criminalRunning.addImage(criminalRunning)
}

function draw() {
 background(180)


 obstacles.x=Math.round(random(400,550))


 drawSprites()
}