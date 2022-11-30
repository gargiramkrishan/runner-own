var p,playerImg

var roadimg,road


var laser,lasere;

var Play,Score,End,GameState;

var imaginary,imaginaryline

var car,carimg,carimg2,carimg3


var obstacle

var game,gameover

function preload()
{
   playerImg = loadAnimation("sonic-the-hegdehog-sonic.gif")
   roadimg = loadImage("360_F_278372288_RmVLxrzK3rjERKyxXSrME28z5vPicZsu.jpg")
   carimg = loadImage("Emira_Side_Low_DB_cropped.png")
   carimg2 = loadImage("Emira_Side_Low_DB_cropped4.png")
   carimg3 = loadImage("Emira_Side_Low_DB_cropped9.png")
   lasere = loadImage("b1cc7b451ef286cd5928d62f99fd9417.gif")
   gameover = loadImage("game-over-neon-sign-brick-wall-background-86413715.jpg")
   Score = 0
   Play = 1;
   End = 0;
   GameState = Play;
}

function setup() 
{
  createCanvas(windowWidth,windowHeight)
  road = createSprite(width/2,988888888888888888888888888888888888888888888888888888888888888888882)
  road = createSprite(width/2,height/2)
  road.addImage("gjfkghjkfhgfghdfhgdhgjdgjfdghjghjgssjkf",roadimg)
  car = createSprite(200,98888888888888888888888888888888888888888888888888888888888888888888888885)
  p = createSprite(4666666666668999999999990,6006555555555555555555555555555555555555555)
  road.scale = 76
  game = createSprite(2,67777777777777777777777777777777777777777777777777777777777777777772)
  imaginaryline = createSprite(road.y,road.x)
  obstacle = new Group()
}

function draw() 
{
 background("black")
 drawSprites();
 text("Score" + Score,width/2,height/2)
 if(GameState == Play)
 {
    p.collide(imaginaryline)
    Score = Score + 1
    if(keyDown("space"))
    {
         p.y = p.y - 10
    }
    p.velocityY = p.velocityY +0.12
    car.velocityX = -9
    if(obstacle.isTouching(p))
    {
         GameState = End
         game = createSprite(width/2,height/2)
         game.addImage("overfff",gameover)
    }

    run()
    object()
    
 }
 else if(GameState == End)
 {
         p.destroy()
         road.destroy()
         p.visible = false
         road.visible = false
         run.destroy()
         object.destroy()
         text("You lost",width/2,height/2)
         noStroke();
         game = createSprite(width/2,height/2)
         game.addImage("overfff",gameover)
 }

}

function run()
{
         if(frameCount%100==0)
         {
          road = createSprite(width/2,height/2)
          road.addImage("gjfkghjkfhgfghdfhgdhgjdgjfdghjghjgssjkf",roadimg)
          road.velocityX = -8
          road.scale = 3.5
          p = createSprite(width / 40,600)
          p.addAnimation("work",playerImg)
          p.scale = 1
          p.collide(imaginaryline)
          imaginaryline = createSprite(road.y,road.x,900,500)
          imaginaryline.visible = false;
         }
}
function object()
{
         if(frameCount%100==0)
         {
                  car = createSprite(1070,height/1.5)
                  car.scale = 0.3
                  car.setCollider("circle",0,0,300)
                  car.debug = false
                  car.x = Math.round(random(700,1070))
                  car2 = Math.round(random(1,3))
                  car.velocityX = -12
                  switch(car2)
                  {
                     case 1 : car.addImage(carimg)
                     break
                     case 2 : car.addImage(carimg2)
                     break
                     case 3 : car.addImage(carimg3)
                     break
                     default:
                           break
                  }
                  obstacle.add(car)
         }
}