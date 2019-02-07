function Fire() {
  this.life = 30;
}

var fire = new Fire();
var player = new Player();
function Player() {
  this.pos = [50,50];
  this.inventory = [{type: "wood", amount: 0}];
  this.score = 0;
  this.time = 0;
}

// Player.prototype.addToInventory(obj){
//   this.inventory.push(obj);
// }


Player.prototype.cutTree = function(arr) {
  this.inventory[0].amount++;
    arr.forEach(function(ar) {
      map[map.indexOf(ar)] = [];
    });
    map = map.filter(function(ma) {
      if(ma.length > 1) {
        return ma;
      }
    });
    $(".tree").remove();
    mapFill();
    setTimeout(refill, 6000);
    $("#wood").text(this.inventory[0].amount);
    fx("saw");
  } 

Player.prototype.addToFire = function() {
    if(over === false){
      this.inventory[0].amount -= 10;
      this.score += 100;
      fire.life += 7;
      $("#wood").text(this.inventory[0].amount);
      fx("jump");
  }
};
var highscores=[];


var over = false;
function gameOver(){
  if(over === false){
    highscores.push(parseInt(player.score));
    highscores = highscores.sort(function sortNumber(a,b) {
          return a - b;
      });
    highscores = highscores.reverse();
    console.log(highscores);
    if(highscores.length > 5)
    {
      highscores.length = 5;
    }
    musicChange("");
    fx("laugh");
    over = true;
    if (fire.life <= 10) {
      $("#skull").hide();
    } else {
      $("#rageSkull").hide();
    }
    setTimeout(function() {
      musicChange("brushFire");
      $("#gridSpot").hide();
      $("#game-over").show();
      $(".your-score").empty();
      $(".your-score").append("Your Score Was: " + player.score);
      $(".high-scores").empty();
      highscores.forEach(function(ar){
        $(".high-scores").append(ar + "<br>")
      })
      $(".bonfire").hide();
      $("#inventory").hide();
      map = [];
    }, 2500);
    over = true;
  }
}

function gameRestart() {
  clearInterval(myVar);
  clearInterval(skellyMove);
  $("#gridSpot").show();
  $("#game-over").hide();
  $(".bonfire").show();
  $("#inventory").show();
  musicChange("game");
  fire = new Fire();
  myVar = setInterval(myTimer, 1000);
  skellyMove = setInterval(skellyGoing, 10);
  player = new Player();
  over = false;
  $(".tree").remove();
  $(".man").css("left","50%");
  $(".man").css("top","500px");
  $(".skull").css("left","-300px");
  $(".skull").css("top","50%");
  $("#rageSkull").hide();
  $("#wood").text("0");
  $("#score-count").text(player.score);
  document.getElementById("timer").innerHTML = fire.life;
  trees = 0;
  mapFill();
}
