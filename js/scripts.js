var change = {
  37: {
    left: "-=1"
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
}
$(document).on({
  keydown: keydown,
  keyup: keyup
})


var movement = []

function keydown(e) {
  var key = e.which
  var animation = change[key];
  if (!movement[key]) { // watch out for repeating keys!
    movement[key] = setInterval(keepGoing, 1)
  }

   //console.log("down", key, movement[key])
  function keepGoing() {
    $(".ball").css(animation)
  }
  if(((parseInt($(".ball").css("left")) >= parseInt($(".bonfire").css("left")) - 20) && parseInt($(".ball").css("left")) <= parseInt($(".bonfire").css("left")) + 220) && ((parseInt($(".ball").css("top")) >= parseInt($(".bonfire").css("top")) - 20) && parseInt($(".ball").css("top")) <= parseInt($(".bonfire").css("top")) + 220)) {
    console.log("hello");
  }
}

function keyup(e) {
  var key = e.which
  movement[key] = clearInterval(movement[key])
     //console.log("up", key, movement[key])
}

function addGrid(size){
  for (var rows = 0; rows < size; rows++) {
    for (var columns = 0; columns < size; columns++) {
      $("#gridSpot").append("<div class='grid' id='cell" + rows + "-" + columns + "'></div>");
    };
  };
  $(".grid").width(parseInt($("#gridSpot").css("width")) / size);
  $(".grid").height(900/size);
}

function checkGridSize() {
  $(".grid").width(parseInt($("#gridSpot").css("width")) / 50);
  $(".grid").height(900/50);
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
$(document).ready(function() {
  addGrid(50);
});
