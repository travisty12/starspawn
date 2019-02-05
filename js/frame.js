function Fire(){
  this.life = 100;
}

function Player(){
  this.pos = [50,50];
  this.inventory = [{type: wood, amount: 0}];
  this.score = 0;
  this.time = 0;
}

// Player.prototype.addToInventory(obj){
//   this.inventory.push(obj);
// }


Player.prototype.cutTree = function(arr){
    //arr;
    this.inventory[0].amount += 1;
};

Player.prototype.addToFire = function(theFire){
  if(player.inventory[0].amount > 0){
    this.inventory[0].amount -= 1;
    theFire.life += 30;

  }
};


function gameOver(){
$("#gridSpot").hide();
$("#game-over").show();
}

function gameRestart(){

}
