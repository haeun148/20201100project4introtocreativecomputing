var drop = []
const doorcolors = [[254,55,17], [243,186,4], [7,178,196],[242, 228, 181]];
let k;
let max_rect= 100;
let xpos =[];
let ypos =[];
let n= random(0,3);
let random_index = Math.floor(Math.random() * doorcolors.length);
const [r, g, b] = doorcolors[random_index];


function setup() {
  createCanvas(800, 800);
  frameRate(50);

  for ( let i=0; i<max_rect;i++) {
    xpos[i]= random(width);
    ypos[i]= random(height);
  }
  
  for(var i = 0; i < 150; i++) {
    drop[i] = new Drop();
}
}

function draw() {
 background(0,32,63);
  
if(keyIsPressed){
  
  if(key === 'd'){
    k=1;
  }
  if(key === 'o'){
    k=2;
  }
  if(key === 'f'){
    k=3;
  }
  if(key=== 'c'){
    k=4;
  }
}

 if (k===1){
  for (x=15; x<800;x+=260){
    for (y=15; y<800;y+=260){
      
      
      let random_index = Math.floor(Math.random() * doorcolors.length);
      const [r, g, b] = doorcolors[random_index];
      
      //fill(r, g, b);
      fill(254,55,17);
      stroke(0,32,63);
      strokeWeight(25);
      rect(x,y,260,260,20);
      
      //fill(r, g, b);
      fill(243,186,4);
      stroke(0,32,63);
      strokeWeight(5);
      rect(x+30,y+30,200,200);
      
      //fill(r, g, b);
      fill(7,178,196);
      stroke(0,32,63);
      strokeWeight(5);
      rect(x+60,y+60,150,150);
      
    if(mouseIsPressed){
      //fill(r, g, b);
      fill(0,32,63);
      stroke(0,32,63);
      strokeWeight(5);
      rect(x+80,y+80,70,120,3);
      fill(242, 228, 181);
      noStroke();
      quad(x+130,y+100,x+130,y+180,x+150,y+200,x+150,y+80);
    } else{
      //fill(r, g, b);
      fill(242, 228, 181);
      stroke(0,32,63);
      strokeWeight(5);
      rect(x+80,y+80,70,120,3);
    }
      //fill(r, g, b);
      fill(0,32,63);
      stroke(0,32,63);
      strokeWeight(5);
      rect(x+95,y+140,7,7,1 );
 }
  }  
}
  
 else if (k===2){
   for(let i=0; i<max_rect;i++){
     
    let random_index = Math.floor(Math.random() * doorcolors.length);
    const [r, g, b] = doorcolors[random_index];
    fill(r, g, b);
    noStroke();
    rect(xpos[i],ypos[i],70,80,15);
    xpos[i]+=80;
    
    if(xpos[i]>height){
      xpos[i]= -15;
    }   
  }
 }
  
  else if (k==3){
  
    
    
//bottom
    noStroke();
    //fill(202,207,207);
    fill(135,140,140);
    quad(340, 460, 460, 460, 510, 570, 290, 570);
    fill(0,32,63);
    ellipse(400, 570, 120, 120);
    fill(88,90,90);
    rect(330, 450, 140, 10);
//mid
   fill(135,140,140);
   quad(370, 360, 430, 360, 450, 450, 350, 450);
   fill(0,32,63);
   quad(390, 400, 410, 400, 420, 450, 380, 450);
   fill(88,90,90);
   rect(360, 350, 80, 10);
//top
   fill(135,140,140);
   quad(390, 100, 410, 100, 420, 350, 380, 350);
   quad(380, 90, 420, 90, 410, 100, 390, 100);
   quad(390, 80, 410, 80, 420, 90, 380, 90);
   strokeWeight(4);
   stroke(88,90,90);
   line(400, 80, 400, 20); //antena
   
    for(var i = 0; i < 150; i++) {
    drop[i].show();
    drop[i].update(); //dropstar
      
    fill(223,223,220,200);
    noStroke();
    rect(0,570,800,230);
    
    
    fill(124,222,119);
    noStroke();
    rect(30,630,740,230,10);
      
    fill(83,156,114,200);
    noStroke();
    rect(90,700,620,230,15);
    
}
 
  }
  
  else if(k===4){
  
    fill(55,147,68);
    stroke(0);
    strokeWeight(4);
    rect(110,70,600,300); //board
    
    textSize(22);
    fill(255);
    noStroke();
    text('Learnig array and class',170,120); //text
    
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(300,230,170,170);
    ellipse(400,230,170,170);
   
    fill(121,90,51);
    stroke(0);
    strokeWeight(4);
    quad(110,600,0,height,width,height,680,600); //table
    
    stroke(0);
    strokeWeight(3);
    fill(249,244,203);
    quad(315,670,270,770,415,750,415,680);
    quad(415,680,415,750,560,770,520,670); //book
    stroke(0);
    strokeWeight(3);
    fill(255);
    quad(270,770,277,780,415,760,415,750);
    quad(415,750,415,760,560,780,560,770); //underbook
  }
}
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity; 
    this.x = this.x + this.speed*this.gravity;
    
    if (this.y > height) {
      this.y = random(0, -height);}
    if (this.x > width) {
      if (this.y < height){this.x= 0;}
      else {this.x = random(0, width);}
    }
}
}
