var cenario;
var background1;
var compass;
var pauseButton;
var mapCircle;
var correct;
var PhotoCamButton;
var captura, capturaData;
var QRCode; // link para gerar marcadores: http://goqr.me/
var checkpoint1, checkpoint2, checkpoint3;

function setup()
{
  createCanvas(windowWidth, windowHeight);
 background1 = loadImage("Background.jpg");
  cenario = 1;
  compass = loadImage('img/Compass.png');
  pauseButton = loadImage('img/PauseButton.png');
  MapCircle = loadImage('img/MapCircle.png');
  correct = loadImage('img/Correct.png');
  PhotoCamButton = loadImage('img/PhotoCamButton.png');

  checkpoint1 = false;
  checkpoint2 = false;
  checkpoint3 = false;

  iniciaCaptura();
}

function draw()
{
  if (cenario === 1) introducao();
  else
  if (cenario === 2) verificaCaptura();
  else
  if (cenario === 3) conclusao();
  else
  {
    background(0);
    fill(255);
    text ("O cenário não existe", width/2, height/2);
  }
}

function keyPressed()
{
  if (key === "1") cenario = 1;
  if (key === "2") cenario = 2;
  if (key === "3") cenario = 3;
}

function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);


}
