var canvas,edges;
var music;
var rect1 ,rect2 ,rect3 ,rect4 ,box ;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);

    //create 4 different surfaces
    rect1=createSprite( 700, 380, 195, 20 )
    rect1.shapeColor="red"
    rect2=createSprite( 500, 380, 195, 20 )
    rect2.shapeColor="yellow"
    rect3=createSprite( 300, 380, 195, 20 )
    rect3.shapeColor="green"
    rect4=createSprite( 100, 380, 195, 20 )
    rect4.shapeColor="blue"

    //create box sprite and give velocity
    box=createSprite(random(20,750))
    box.shapeColor="white"
    box.velocityX=2
    box.velocityY=5

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
        
    //create edgeSprite
   if(rect1.isTouching(box)  &&  box.bounceOff(rect1)){
        box.shapeColor="red"
        music.play();
}
    if(rect2.isTouching(box)){  
        box.shapeColor = rgb(255,128,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
}

   if(rect2.isTouching(box)  &&  box.bounceOff(rect2)){
        box.shapeColor="yellow"
}
   if(rect3.isTouching(box)  &&  box.bounceOff(rect3)){
        box.shapeColor="green"
}
    if(rect4.isTouching(box)  &&  box.bounceOff(rect4)){
        music.play();
        box.shapeColor="blue"
        
}


    //add condition to check if box touching surface and make it box
    
    drawSprites();
}
