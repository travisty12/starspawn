var change = {
  65: {     //left
    left: "-=1"
  },

  87: {     //up
    top: "-=1"
  },

  68: {     //right
    left: "+=1"
  },

  83: {     //down
    top: "+=1"
  },
};

$(document).on( {
  keydown: keydown,
  keyup: keyup
});

var movement = [];

function keydown(e) {
  var key = e.which;
  if (key === 65 || key === 68 || key === 83 || key === 87) {
    var animation = change[key];
    if (!movement[key]) { // watch out for repeating keys!
      movement[key] = setInterval(keepGoing, 1);
    }
    function keepGoing() {
      if (over === false) {
        if ( !((key === 65 && parseInt($(".man").css("left")) <= 10) || (key === 68 && parseInt($(".man").css("right")) <= 10) || (key === 87 && parseInt($(".man").css("top")) <= 10) || (key === 83 && parseInt($(".man").css("bottom")) <= 10  ))) {
          $(".man").css(animation);
        }
        if (key === 65) {
          $(".man").empty();
          $(".man").append("<img src='img/leftMan.gif'>");
        }
        else if (key === 87) {
          $(".man").empty();
          $(".man").append("<img src='img/upMan.gif'>");
        }
        else if (key === 68) {
          $(".man").empty();
          $(".man").append("<img src='img/rightMan.gif'>");
        }
        else if (key === 83) {
          $(".man").empty();
          $(".man").append("<img src='img/downMan.gif'>");
        }
        else {

        }
      }
    }
  }
  if (key === 16) {
    checkTrees(map);
  }
  if(((parseInt($(".man").css("left")) >= parseInt($(".bonfire").css("left")) - 20) && parseInt($(".man").css("left")) <= parseInt($(".bonfire").css("left")) + 120) && ((parseInt($(".man").css("top")) >= parseInt($(".bonfire").css("top")) - 20) && parseInt($(".man").css("top")) <= parseInt($(".bonfire").css("top")) + 120)) {
    if(key === 16) {
      if (player.inventory[0].amount >= 10) {
        player.addToFire();
      }
    }
  }
}

function keyup(e) {
  var key = e.which;
  movement[key] = clearInterval(movement[key]);
}

function addGrid(size) {
  for (var rows = 0; rows < size; rows++) {
    for (var columns = 0; columns < size; columns++) {
      $("#gridSpot").append("<div class='grid' id='cell" + rows + "-" + columns + "'></div>");
    }
  }
  $(".grid").width(parseInt($("#gridSpot").css("width")) / size);
  $(".grid").height(900/size);
}

function checkGridSize() {
  $(".grid").width(parseInt($("#gridSpot").css("width")) / 50);
  $(".grid").height(900/50);
}
var skellyLR = 0;
var skellyUD = 0;
var myVar = setInterval(myTimer, 1000);
var skellyMove;
var skellyRun = 0;
var skellyJump = 0;
function myTimer() {
  if (fire.life > 0){
  	fire.life--;
  	document.getElementById("timer").innerHTML = fire.life;
    player.score +=1;
  }
  else {
    clearInterval(myVar);
    clearInterval(skellyMove);
    gameOver();
  }
  $("#score-count").text(player.score);
}
function refill() {
    trees -= 1;
    mapFill();
}

var skellyMove = setInterval(skellyGoing, 10);
function skellyGoing() {
  skellyRun = 0;
  skellyJump = 0;
  skellyLR = 0;
  skellyUD = 0;
  $(".skull").fadeIn();
  if (parseInt($(".man").css("left")) > (parseInt($(".skull").css("left")))) {
    skellyLR = 68;
  }
  else if (parseInt($(".man").css("left")) < (parseInt($(".skull").css("left")))) {
    skellyLR = 65;
  }
  else {
    skellyLR = (Math.floor(Math.random()*2)*3 + 65);
  }
  if (parseInt($(".man").css("top")) > (parseInt($(".skull").css("top")))) {
    skellyUD = 83;
  }
  else if (parseInt($(".man").css("top")) < (parseInt($(".skull").css("top")))) {
    skellyUD = 87;
  }
  else {
    skellyUD = (Math.floor(Math.random()*2)*4 + 83);
  }
  skellyRun = change[skellyLR];
  skellyJump = change[skellyUD];


   //console.log("down", key, movement[key])

  if (fire.life <= 25) {
    if (over === false) {
      $(".skull").css(skellyRun);
      $(".skull").css(skellyJump);
    }
    $(".skull").empty();
    $(".skull").append("<img src='img/skull.gif'>");
  }
  if (((parseInt($(".man").css("left")) >= parseInt($(".skull").css("left"))-10) && parseInt($(".man").css("left")) <= parseInt($(".skull").css("left")) + 85) && ((parseInt($(".man").css("top")) >= parseInt($(".skull").css("top")) - 10) && parseInt($(".man").css("top")) <= parseInt($(".skull").css("top")) + 105)) {
    if (fire.life <= 25) {
      clearInterval(myVar);
      clearInterval(skellyMove);
      gameOver();
    }
  }
}


function checkTrees(treesAvailable) {
  var treesClose = [];
  treesAvailable.forEach(function(tree) {
    if (parseInt($(".man").css("left")) >= ((parseInt($("#gridSpot").css("width")) / 50) * tree[1]) - 60) {
      if (parseInt($(".man").css("left")) <= ((parseInt($("#gridSpot").css("width")) / 50) * tree[1]) + 98) {
        if (parseInt($(".man").css("top")) >= (180 + (19 * tree[0]) - 60)) {
          if (parseInt($(".man").css("top")) <= (180 + (19 * tree[0]) + 118)) {
            treesClose.push(tree);
            player.cutTree(treesClose);
          }
        }
      }
    }
  });

  return treesClose;
}

var trees = 0;
var map = [];

function mapFill() {
  while (trees < 14) {
    var mapAdd = [parseInt(Math.random()*45),parseInt(Math.random()*49)];
    if (map.includes(mapAdd) === false) {
      if ((mapAdd[0] > 13 && mapAdd[0] < 26) && (mapAdd[1] > 19 && mapAdd[1]<28)) {
      }
      else {
        map.push(mapAdd);
        trees++;
      }
    }
  }
  map.forEach(function(ma) {
    $("#cell" + ma[0] + "-" + ma[1]+ "").append("<img class='tree' src='img/tree.png'>");
  });
}

$(document).ready(function() {
  addGrid(50);
  $("#play").click(function() {
    $("#mainDiv").toggle();
    $("#gameDiv").toggle();
    $("#gridSpot").toggle();
    gameRestart();
  });
  $(".btn").click(function() {
    gameRestart();
  });
});
