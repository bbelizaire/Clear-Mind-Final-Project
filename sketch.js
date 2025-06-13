

let c1,c2;
var start = 0;

let dateInput, notesInput, sumbitButton;
let moodSelect = ["calm", "nervous", "sad", "angry", "sad", "mad"];
let moodBox = [];
let entries = [];



function preload(){
 sound = loadSound('birds-chirping-ambiance-26052.mp3'); 

  
}
function setup() {
  
  sound.play();
  sound.setVolume(10);
  
   
  createCanvas(800, 600);
  createCanvas(windowWidth, windowHeight);
  
  angleMode(DEGREES)
  noiseDetail(1)
  
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  
  
}


function setGradient(x, y, w, h, c1, c2){
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}



let fade = 0;

function draw() {
  
  mouseHover();
  
  setGradient(0,0,width,height,c1,c2);
 
  push();
    translate(width/2, height/2)
  
  var space = 0.1
  
  for (var i = 0; i < 360; i+= space) {
    
    var xoff = map(cos(i), -1, 1, 0, 3)
    var yoff = map(sin(i), -1, 1, 0, 3)
    var n = noise(xoff + start, yoff + start)
    var h = map(n, 0, 1, -40, 40)
    rotate (space)
    fill('c1')
    rect(150, 0, h, 10)
  }
  
  start +=0.01
  pop();
  
  push();
  
  if (fade < 255) {
  fade += 2;
}
   
  
  
  
  
    textFont('Didot')
    noStroke();
    textAlign(CENTER);
    textSize(18);
    text('clear mind', width/2,height/2)
    fill(17, 186, 183,fade);
    
    textAlign(CENTER,TOP)
    textFont('Bondi 72')
    text('journal',width/2,0)
  
     textAlign(CENTER,TOP)
    textFont('Bondi 72')
    text('journal',width/2,0)
  
    textAlign(LEFT,TOP)
    textFont('Bondi,72')
    text('entries', width/1.5,0)
  
      if (mouseHover()){
        fill('white');
       }
      else {
      fill(17, 186, 183,fade);
      }
    
  pop();
  

}

function mousePressed() {
  let journalText = 'journal';
  let entriesText = 'entries';
  
  let journalX = width / 2;
  let journalY = 0;
  let journalW = textWidth(journalText);
  let journalH = 30;

  if (
    mouseX > journalX - journalW / 2 &&
    mouseX < journalX + journalW / 2 &&
    mouseY > journalY &&
    mouseY < journalY + journalH
  ) {
    window.location.href = "journal.html"; 
  }
  
  let entryX = width /1.5;
  let entryY = 0;
  let entryW = textWidth(entriesText);
  let entryH = 30;
  
  if(
    mouseX > entryX - entryW / 2 &&
    mouseX < entryX + entryW / 2 &&
    mouseY > entryY &&
    mouseY < entryY + entryH
  )
    {window.location.href = "entries.html";
    }

}
function mouseHover(){
  let journalText = "journal";
  
  let journalX = width / 2;
  let journalY = 0;
  let journalW = textWidth(journalText);
  let journalH = 30;
  
  return(
     mouseX > journalX - journalW / 2 &&
     mouseX < journalX + journalW / 2 &&
     mouseY > journalY &&
     mouseY < journalY + journalH
  );
}
