
let beanMode =false;
let dinos;
let dinos2;
let firstRun=true;
let meteor;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(59, 12, 12);
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  
  if(firstRun){
    meteor = loadImage('meteor.png');
    dinos = loadImage('Dinos.0.png');
    dinos2  = loadImage('Dinos.1.png');
    firstRun = false;
  }


  drumMap = map(drum,60,70,0.5,0.6);
  bassMap = map(bass,0,100,1,2);

 
  
  
push();
translate(200,-125);
  scale(drumMap);
  image(meteor,70,0);
  pop();



if(vocal > 50){beanMode = true;}

 
  vocalMap = map(vocal, 0,80,50,200);
  let lineStart = -5;
  let lengthOfLine = 300;
  let lineEnd = lineStart + lengthOfLine;
  stroke(245, 203, 135);
  strokeWeight(vocalMap);

  if(beanMode){;
  
    for(let i =1; i <=vocalMap; i++){;
    line(100,lineStart,100,lineEnd);
  }};

  noStroke();
  fill(89, 23, 23);
  rect(270,435,590,300);

  if(bass>50){image(dinos,0,0)}
  else{(image(dinos2,0,0))};


  fill(79, 11, 20);
  noStroke();
  rect(100,250,250,100);
  triangle(225,200,300,300,225,300);


}
