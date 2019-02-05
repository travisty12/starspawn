var change = {
  37: {
    left: "-=1",
  },

  38: {
    top: "-=1"
  },

  39: {
    left: "+=1"
  },

  40: {
    top: "+=1"
  },
};
$(document).on({
  keydown: keydown,
  keyup: keyup
});


var movement = [];

function keydown(e) {
  var key = e.which;
  if (key >= 37 && key <= 40) {
    var animation = change[key];
    if (!movement[key]) { // watch out for repeating keys!
      movement[key] = setInterval(keepGoing, 1);
    }

     //console.log("down", key, movement[key])
    function keepGoing() {
      if(over === false){
        $(".ball").css(animation)
        if (key === 37) {
          $(".man").empty();
          $(".man").append("<img src='img/leftMan.gif'>");
        }
        else if (key === 38) {
          $(".man").empty();
          $(".man").append("<img src='img/upMan.gif'>");
        }
        else if (key === 39) {
          $(".man").empty();
          $(".man").append("<img src='img/rightMan.gif'>");
        }
        else if (key === 40) {
          $(".man").empty();
          $(".man").append("<img src='img/downMan.gif'>");
        }
        else {}
      }
    }
  }

  if (key === 32) {
    checkTrees(map);
  }
  if(((parseInt($(".ball").css("left")) >= parseInt($(".bonfire").css("left")) - 20) && parseInt($(".ball").css("left")) <= parseInt($(".bonfire").css("left")) + 120) && ((parseInt($(".ball").css("top")) >= parseInt($(".bonfire").css("top")) - 20) && parseInt($(".ball").css("top")) <= parseInt($(".bonfire").css("top")) + 120)) {
    console.log("hello");
  }
}

function keyup(e) {
  var key = e.which;
  movement[key] = clearInterval(movement[key]);
     //console.log("up", key, movement[key])
}

function addGrid(size){
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

var myVar = setInterval(myTimer, 1000);
function myTimer() {
  if (fire.life > 0){
  	fire.life--;
  	document.getElementById("timer").innerHTML = fire.life;
    if(fire.life % 5 === 0){
      mapFill();
    }
  } else {
    clearInterval(myVar);
    gameOver();
  }
}

function checkTrees(treesAvailable) {
  var treesClose = [];
  treesAvailable.forEach(function(tree) {
    if (parseInt($(".man").css("left")) >= ((parseInt($("#gridSpot").css("width")) / 50) * tree[1]) - 60) {
      if (parseInt($(".man").css("left")) <= ((parseInt($("#gridSpot").css("width")) / 50) * tree[1]) + 98) {
        if (parseInt($(".man").css("top")) >= (180 + (19* tree[0]) - 60)) {
          if (parseInt($(".man").css("top")) <= (180 + (19 * tree[0]) + 118)) {
            treesClose.push(tree);
          }
        }
      }
    }
  });
  return treesClose;
}

var trees = 0;
var map = [];

function mapFill(){

  while(trees < 12){
    var mapAdd = [parseInt(Math.random()*45),parseInt(Math.random()*49)];
    if(map.includes(mapAdd) === false)
    {
      if((mapAdd[0] > 13 && mapAdd[0] < 26) && (mapAdd[1] > 19 && mapAdd[1]<28)){
      }else{
        map.push(mapAdd);
        trees++;
      }
    }
  }
console.log(map);

  map.forEach(function(ma){
    console.log("#cell" + ma[0] + "-" + ma[1]);
    $("#cell" + ma[0] + "-" + ma[1]+ "").append("<img class='tree' src='img/tree.png'>");
  });
}



$(document).ready(function() {
  addGrid(50);
  mapFill();
  $("#play").click(function() {
    $("#mainDiv").toggle();
    $("#gameDiv").toggle();
    $("#gridSpot").toggle();
    $(".btn").click(function(){
      gameRestart();
    });
  });
});
