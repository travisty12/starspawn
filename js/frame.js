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

//When a tree is cut, add 1 wood to inventory, set used value to true, set a re-use time
Player.prototype.cutTree = function(theTree){
  if(theTree.used === false){
    this.inventory[0].amount += 1;
    theTree.used = true;
    theTree.reUse = 60;
  }
};

//Add wood to fire, add 30 seconds to fire life
Player.prototype.addToFire = function(theFire){
  if(player.inventory[0].amount > 0){
    this.inventory[0].amount -= 1;
    theFire.life += 30;
  }
};

function Tree(){
  this.used = false;
  this.reUse = 0;
}



//  function mapFill(){
//
//    var map = [];
//
//    for(i=0;i<2;i++){
//      map.push([parseInt(Math.random()*24),parseInt(Math.random()*24)]);
//      map.push([parseInt(Math.random()*24)+25,parseInt(Math.random()*24)]);
//      map.push([parseInt(Math.random()*24),parseInt(Math.random()*24)+25]);
//      map.push([parseInt(Math.random()*24)+25,parseInt(Math.random()*24)])+25;
//      map.push([parseInt(Math.random()*49),parseInt(Math.random()*49)]);
//
//    }
// console.log(map);
//
//    map.forEach(function(ma){
//      console.log("#cell" + ma[0] + "-" + ma[1]);
//      $("#cell" + ma[0] + "-" + ma[1]+ "").append("<p>hey</p>");
//    })
//
//  }
// // <img src='img/tree.jpg'>
//  mapFill();

function gameOver(){
$("#gridSpot").hide();
$("#game-over").show();
}

function gameRestart(){

}
