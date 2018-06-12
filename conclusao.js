function conclusao(){
  background(0, 0, 255);
  image(background1,0,0,windowWidth, windowHeight);
  image(compass, width-width/20, height/4.9, width/35, width/35);
  image(pauseButton, width/74, height-height/7.2, width/35, width/35);
  image(MapCircle, width-width/14, height-height/6.7, width/16, width/16);
  imageMode(CENTER);

  //Ellipse Correct  noFill();
  stroke(72, 179, 89);
  strokeWeight(width/45);
  ellipse(width/2, height/2, width/5, width/5);

  //SimboloCorrect
  stroke(72, 179, 89);
strokeWeight(width/45)
  line(width/2.1, height/1.54, width/2.33, height/1.9);
  line(width/2.1, height/1.54, width/1.8, height/2.4);

  //image(correct, width/2, height/2, 300, 300);
  imageMode(CORNER);
  image(PhotoCamButton, width/74, height-height/15, width/35, width/35);
  noStroke();
  fill (255);
  textAlign(CENTER, CENTER);
  text (" ", width/2, height/2);

  if (mouseX>width/2-50 && mouseX<width/2+50 &&
    mouseY>height/2-15+90 && mouseY<height/2+15+90 &&
    mouseIsPressed === true)  {    cenario = 1;  }

    //mission
    noStroke();
    fill(64, 64, 64, 220);
    text("Missions", 0, 0);
    rect(width/13, height/230, width/6.3, height/17, 8);
    fill(255, 255, 255);
    textSize(width/90);
    text("Missions", width/13, height/50);
    textFont('helvetica');


    //notificacoes
    noStroke();
    fill(64, 64, 64, 200);
    rect(width/4.2, height/230, width/6.3, height/17, 8);
    fill(255, 255, 255);
    textSize(width/90);
    text("Notifications", width/4.2, height/50);
    textFont('helvetica');


//cornometro
noStroke();
fill(198, 198, 198, 240);
rect(width-width/13.3, height/21, width/7.8, height/20, 8);
textSize(width/45);
fill(83, 83, 83);
text("00:00:00:00",width-width/13, height/20);
textFont('helvetica');

//BodyArmour
angleMode(DEGREES);
// Change the mode to DEGREES
stroke(48, 168, 224);
strokeWeight(width/200);
noFill();
arc(width-width/9.18, height/7, width/20, height/10, 0, -90);
noStroke();
textSize(width/32);
fill(48, 168, 224);
text("85",width-width/9.18, height/6.8);
textFont('helvetica');

//Life
angleMode(DEGREES);
// Change the mode to DEGREES
stroke(234, 51, 57);
strokeWeight(width/200);
noFill();
arc(width-width/26.5, height/7, width/20, height/10, 0, 360);
noStroke();
textSize(width/40);
fill(234, 51, 57);
text("100",width-width/26.5, height/6.8);
textFont('helvetica');

//Points
noStroke();
fill(198, 198, 198, 240);
rect(width-width/15.9, height/3.4, width/11, height/21, 8);
textSize(width/60);
fill(83, 83, 83);
text("308528pt",width-width/16.55, height/3.35);
textFont('helvetica');

//mensagens
noStroke();
fill(64, 64, 64, 200);
rect(width/2, height-height/38, width/3.8, height/6, 8);
fill(255, 255, 255);
textSize(width/75);
text("Dirija-se ao próximo ponto de localização", width/2, height-height/13);
textFont('helvetica');

//bussola
rectMode(CENTER);
rect (width/2, height/2+90, 100, 30);
}
