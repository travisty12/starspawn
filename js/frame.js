function Fire(){
  this.life = 75;
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
  this.inventory[0].amount++;
    arr.forEach(function(ar){
      map[map.indexOf(ar)] = [];
    })
    map = map.filter(function(ma){
      if(ma.length > 1)
      {
        return ma;
      }
    })
    console.log(map.length);
    $(".tree").remove();
    mapFill();
    setTimeout(refill, 10000);
    $("#wood").text(this.inventory[0].amount);

  }

Player.prototype.addToFire = function(){
    this.inventory[0].amount -= 10;
    this.score += 100;
    fire.life += 20;
    $("#wood").text(this.inventory[0].amount);
};


var over = false;
function gameOver(){
$("#gridSpot").hide();
$("#game-over").show();
$(".bonfire").hide();
$(".man").empty();
$("#inventory").hide();
over = true;
map = [];
console.log(map);
}

function gameRestart(){
  clearInterval(myVar);
  clearInterval(skellyMove);
  $("#gridSpot").show();
  $("#game-over").hide();
  $(".bonfire").show();
  $("#inventory").show();
  fire = new Fire();
  myTimer();
  myVar = setInterval(myTimer, 1000);
  skellyMove = setInterval(skellyGoing, 10);
  player = new Player();
  over = false;
  $(".tree").remove();
  trees = 0;
  mapFill();
}
