var starImg,bgImg;
var star, starBody;
var fairy, fairyImg
var fairySong;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadImage("images/fairyimage1.png", "images/fairyimage2.png");
    //fairySong = loadSound("soung/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //play(fairySong);
    
    fairy = createSprite(20,550);
    fairy.addImage(fairyImg);
    fairy.scale = 0.3;
    
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
 background(bgImg)
    drawSprites();

 if(keyDown("right_arrow")){
    fairy.velocityX = 3;
 }

 if(keyDown("left_arrow")){
    fairy.velocityX = -3;
 }

 if(fairy.x === star.x){
    star.velocityY = 5
 }

 if (star.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
}

}
