var grid=[];


function PacMan() {
  this.x = 0;
  this.y = 0;
  this.nextX=0;
  this.nextY=0;
  this.dots = 0;
  this.dir = 0;
  this.speed = 1;
}


PacMan.prototype.move = function(event) {
  if (event.which == 37) {
    this.dir = 1;
  } else if(event.which == 38) {
    this.dir = 2;
  } else if (event.which == 39) {
    this.dir = 3;
  } else if (event.which == 40) {
    this.dir = 4;
  }
  slide = setInterval(moveMore(), 500);
  updatePos(this);
  this.x = this.nextX;
  this.y = this.nextY;
}

function updatePos(pac) {
  $("#col" + pac.x + "-" + pac.y).addClass("emptyCell");
  $("#col" + pac.x + "-" + pac.y).removeClass("pacAt");
  $("#col" + pac.nextX + "-" + pac.nextY).removeClass("emptyCell");
  $("#col" + pac.nextX + "-" + pac.nextY).addClass("pacAt");
  var hasDot=$("#col" + pac.nextX + "-" + pac.nextY).hasClass("dot");
  if(hasDot){
    $("#col" + pac.nextX + "-" + pac.nextY).removeClass("dot");
    pac.dots++;
  }
  $("span#dotAmount").text(pac.dots);
}

var textBlock = "";
function addGrid(size){
  for (var i=0;i<=parseInt(size);i++){
    grid[i] = [];
    textBlock += "<div class='row'>";

    for (var j=0;j<=parseInt(size);j++){
      grid[i][j]=0;
      textBlock += "<div class='dot emptyCell cell col-sm-" + (Math.floor(12/size)) + "' id='col" + i + "-" + j + "'></div>";

    }
    textBlock += "</div>";

  }
  $("#gridSpot").append(textBlock);
}
var result = 0;
function score(ban,che,pea,pin,str) {
  result = (ban * 10 + che * 20 + pea * 40 + pin * 80 + str * 160);
  return result;
}

  var myVar = setInterval(myTimer, 1000);
  var timeLeft = 30;
  function myTimer() {
    if (timeLeft > 0){
    	timeLeft--;
    	document.getElementById("timer").innerHTML = timeLeft;
    } else {
      clearInterval(myVar);
      document.getElementById("timer").innerHTML = "Game Over";
      $("#timer").toggle();
      $("#scoreboard").toggle();
      $("#score").text(score(bananaNum,cherryNum,pearNum,pineappleNum,strawberryNum));
    }
  }


var pacMan = new PacMan();
var bananaNum=0;
var cherryNum=0;
var pearNum=0;
var pineappleNum=0;
var strawberryNum=0;


var slide = setInterval(moveMore, 125);

function moveMore() {
  switch (pacMan.dir) {
    case 0:
      break;
    case 1:
      pacMan.nextY -= 1;
      updatePos(pacMan);
      pacMan.y = pacMan.nextY;
      break;
    case 2:
      pacMan.nextX -= 1;
      updatePos(pacMan);
      pacMan.x = pacMan.nextX;
      break;
    case 3:
      pacMan.nextY += 1;
      updatePos(pacMan);
      pacMan.y = pacMan.nextY;
      break;
    case 4:
      pacMan.nextX += 1;
      updatePos(pacMan);
      pacMan.x = pacMan.nextX;
      break;
  }
  if (pacMan.nextX < 0) {
    pacMan.nextX = grid.length - 1;
  }
  if (pacMan.nextY < 0) {
    pacMan.nextY = grid.length - 1;
  }
  if (pacMan.nextX == grid.length) {
    pacMan.nextX = 0;
  }
  if (pacMan.nextY == grid.length) {
    pacMan.nextY = 0;
  }
  updatePos(pacMan);
  pacMan.x = pacMan.nextX;
  pacMan.y = pacMan.nextY;
}

$(document).ready(function() {
  addGrid(11);
  updatePos(pacMan);
  document.addEventListener("keydown", function(event) {
    pacMan.move(event);
  });
  $('#banana').click(function(){
    if(pacMan.dots>=20){
      pacMan.dots-=20;
      bananaNum++;
      $("span#numBanana").text(bananaNum);
      $("span#dotAmount").text(pacMan.dots);
    }
  });
  $('#cherry').click(function(){
    if(pacMan.dots>=40){
      pacMan.dots-=40;
      cherryNum++;
      $("span#numCherry").text(cherryNum);
      $("span#dotAmount").text(pacMan.dots);
    }
  });
  $('#pear').click(function(){
    if(pacMan.dots>=60){
      pacMan.dots-=60;
      pearNum++;
      $("span#numPear").text(pearNum);
      $("span#dotAmount").text(pacMan.dots);
    }
  });
  $('#pineapple').click(function(){
    if(pacMan.dots>=80){
      pacMan.dots-=80;
      pineappleNum++;
      $("span#numPineapple").text(pineappleNum);
      $("span#dotAmount").text(pacMan.dots);
    }
  });
  $('#strawberry').click(function(){
    if(pacMan.dots>=100){
      pacMan.dots-=100;
      strawberryNum++;
      $("span#numStrawberry").text(strawberryNum);
      $("span#dotAmount").text(pacMan.dots);
    }
  });
});
