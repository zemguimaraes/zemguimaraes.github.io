
var captura, capturaData;
var QRCode; // link para gerar marcadores: http://goqr.me/
var checkpoint1, checkpoint2, checkpoint3;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  checkpoint1 = false;
  checkpoint2 = false;
  checkpoint3 = false;

  iniciaCaptura();
}

function iniciaCaptura() 
{
  //var capturaOptions = {audio: false, video: {facingMode: {exact: "environment"}}};
  //captura = createCapture (capturaOptions); //mobile
  captura = createCapture(VIDEO); //pc

  captura.size(320, 240);

  if (width>height) captura.size(width, AUTO);
  else captura.size(AUTO, height);

  captura.hide();
}

function draw() 
{
  background(0);
  verificaCaptura();
}

function verificaCaptura() 
{
  if (checkpoint1 && checkpoint2 && checkpoint3) 
  {
    textSize(50);
    fill (255, 0, 0);
    text("Passou no teste", width/2, height/2);
    print("Passou no teste");
  }

  else 
  {
    imageMode(CENTER);
    image(captura, width/2, height/2, captura.width, captura.height);
    captura.loadPixels();

    capturaData = captura.drawingContext.getImageData(0, 0, captura.width, captura.height);
    QRCode = jsQR(capturaData.data, capturaData.width, capturaData.height);

    if (QRCode) 
    {
      //console.log(QRCode.data);
      if (QRCode.data === "checkpoint1") 
      {
        checkpoint1 = true;
      }
      if (QRCode.data === "checkpoint2") checkpoint2 = true;
      if (QRCode.data === "checkpoint3") checkpoint3 = true;

      rectMode(CORNERS);
      stroke(255, 0, 0);
      strokeWeight(3);
      noFill();
      rect(width/2-captura.width/2 + QRCode.location.topLeftCorner.x,     height/2-captura.height/2 + QRCode.location.topLeftCorner.y, 
           width/2-captura.width/2 + QRCode.location.bottomRightCorner.x, height/2-captura.height/2 + QRCode.location.bottomRightCorner.y);
      
    }
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
  iniciaCaptura();
}