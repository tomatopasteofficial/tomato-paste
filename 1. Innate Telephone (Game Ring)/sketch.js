let scene = 1; 
let startButton = false;
let startScreen = false; 

let text1 = ['Fear of judgement and hope of positive possibility shaped me as a kid', 'I used to go with my mom to help her & her team make gardens', 'I think I mostly ended up running and playing around haha', 'silly plants living their silly lives', 'I developed a reverence for rolly pollys here', 'Green spaces are so important!', 'being among plants is brain nourishment', 'I never had a perception of myself aside from how others would describe me']; 
let text2 = []; 
let text3 = []; 
let text4 = []; 
let text5 = []; 
let text6 = [];  
let randText = []; 
let currentText = " ";

let start;
let main;
let homeBg; 
let schoolBg; 
let beachBg; 
let officeBg; 
let gardenBg; 
let grandmaHouseBg; 

let fontA; 
let fontB;

function preload(){ 
  start = loadImage('aStart.png'); 
  main = loadImage('bMain.png'); 
  
  fontA = loadFont('fontA.ttf'); 
}

function setup() {
  createCanvas(600, 600);
}

function button(bx, by, bd){
  if (dist(mouseX, mouseY, bx, by) < bd/2){
    return true; 
  }else{
    return false; 
  }
}

function draw() {
  background(220);
  
  drawScene(scene);
  
  //start
  if (scene == 1){
    push(); 
    fill(255); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(80); 
    text('start?', width/2, height/2); 
    pop(); 
  }
  
  //return 
  if (scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8){
    fill(0, 255, 0); 
    circle(480, 480, 20); 
  }
  
  //back 
  if (scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8){
    circle(10, 10, 10); 
  }
  
  //pick scenes 
  if (scene == 2){
    push(); 
    fill(255); 
    textAlign(CENTER, CENTER); 
    textFont(fontA); 
    textSize(30); 
    text('where would you like to go?', width/2, height/2); 
    pop();   
    
    push();
    fill(255, 255, 255, 80); 
    noStroke(); 
    circle(95, 150, 80);
    circle(220, 320, 60); 
    circle(60, 390, 70); 
    circle(170, 490, 80); 
    circle(340, 530, 75);
    circle(500, 530, 60);
    pop(); 
  }
  
  //random text 
  if (scene == 3){
    // for (let i = 0; i < text1.length; i++){ 

      textSize(30); 
      textFont(fontA);
      textAlign(LEFT, TOP);
      fill(0); 
      text(currentText, 50, 50, 500, 500 ); 
    // }
  }
}

function drawScene(sceneNum) {
  switch (sceneNum) {
    case 1:
      background(start);  
      startScreen = true;  
      break;
    case 2:
      background(main);
      startScreen = false;    
      break;
    case 3:
      background('lightgreen');
      startScreen = false;    
      break;
    case 4:
      background('pink');
      startScreen = false;    
      break;
    case 5:
      background('lightblue');
      startScreen = false;    
      break;
    case 6:
      background('orange');
      startScreen = false;    
      break;
    case 7:
      background('red');
      startScreen = false;    
      break;
    case 8:
      background('blue');
      startScreen = false;    
      break;
    }
  }

function mousePressed() {
  //start 
  if (startScreen == true){
    if (button(width/2, height/2, 150) == true){
      scene = 2; 
      console.log('start'); 
    }
    return;
  }
  
  //return 
  if (scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8){
    if (button(480, 480, 20) == true){
      scene = 2; 
      console.log('return'); 
    }
  }
  
  //back 
  if (scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8){
    if (button(10, 10, 10) == true){
      scene = 1; 
      console.log('title'); 
    }
  }
  
  //settings
  if (scene == 2){
    if (button(95, 150, 80) == true){
      scene = 3; 
      console.log('garden'); 
    }
    if (button(220, 320, 60) == true){
      scene = 4; 
      console.log('home'); 
    }
    if (button(60, 390, 70) == true){
      scene = 5; 
      console.log('office'); 
    }
    if (button(170, 490, 80) == true){
      scene = 6; 
      console.log('school'); 
    }
    if (button(340, 530, 75) == true){
      scene = 7; 
      console.log('beach'); 
    }
    if (button(500, 530, 60) == true){
      scene = 8; 
      console.log('grandmas house'); 
    }
  }
  
  //random text 
  randText = [];
  let tempText1 = [];
  tempText1 = text1.slice(); 
  
  for(let i = 0; i < text1.length; i++){
    let randomLine = int(random(0,tempText1.length));
    randText.push(tempText1[randomLine]); 
    tempText1.splice(randomLine, 1);  
  }

  currentText = randText[int(random(0,randText.length-1))]
}