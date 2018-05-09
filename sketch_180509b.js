var a,b;
var muk;
var back;
var A;

function setup() {
  createCanvas(600,900);
  muk = loadImage("scream.png");
  back = loadImage("scream2.png");
  a=0;
  b=0;
  A=30;
}

function draw() {
  image(back,0,0);
  tint(A);
  if(A>180) A=30;
  A+=2;
  image(muk,a,b);
}

function keyPressed()
{
  if(keyCode == LEFT_ARROW)
   {
     a-=10;
   }
   if(keyCode == RIGHT_ARROW)
   {
     a+=10;
   }
   if(keyCode == UP_ARROW)
   {
     b-=10;
   }
   if(keyCode == DOWN_ARROW)
   {
     b+=10;
   }
}
  