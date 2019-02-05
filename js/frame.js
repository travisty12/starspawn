function Fire(){
  this.life = 5;
}

var fire = new Fire();
var player = new Player();
function Player(){
  this.pos = [50,50];
  this.inventory = [{type: "wood", amount: 0}];
  this.score = 0;
  this.time = 0;
}

// Player.prototype.addToInventory(obj){
//   this.inventory.push(obj);
// }


Player.prototype.cutTree = function(arr){
    arr.forEach(function(ar){
      this.inventory[0].amount++;
      trees--;
    })
};

Player.prototype.addToFire = function(){
  if(this.inventory[0].amount > 0){
    this.inventory[0].amount -= 1;
    fire.life += 30;
  }
};

var over = false;
function gameOver(){
$("#gridSpot").hide();
$("#game-over").show();
$(".bonfire").hide();
$(".man").empty();
$("#inventory").hide();
over = true;
}

function gameRestart(){
  $("#gridSpot").show();
  $("#game-over").hide();
  $(".bonfire").show();
  $(".man").empty();
  $("#inventory").show();
  fire = new Fire();
  myTimer();
  myVar = setInterval(myTimer, 1000);
  player = new Player();
  over = false;
}
