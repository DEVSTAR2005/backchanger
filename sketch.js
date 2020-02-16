
var pointer 

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(1200,400);

pointer = createSprite(200,200,50,50);
pointer.x = mouseX;
pointer.y = mouseY;

}


function draw(){
  background("black");

pointer.x = mouseX;
pointer.y = mouseY;

if (pointer.x>600 && pointer.y>200){

background("red");

}

if (pointer.x<600 && pointer.y>200){

  background("blue");
  
  }
  
if (pointer.x>600 && pointer.y<200){
background("green");
    
}
    
if (pointer.x<600 && pointer.y<200){

background("magenta");
      
}
      
if (pointer.x>600 && pointer.y>200){

  pointer.shapeColor="blue"
  
  }
  
  if (pointer.x<600 && pointer.y>200){
  
  pointer.shapeColor="red"
    
    }
    
  if (pointer.x>600 && pointer.y<200){
  pointer.shapeColor="magenta"      
  }
      
  if (pointer.x<600 && pointer.y<200){
  
  pointer.shapeColor="green"
        
  }
       


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}