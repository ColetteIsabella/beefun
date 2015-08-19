frameRate =  30;
timeInterval = Math.round( 1000 / frameRate );
relMouseX = 0;
relMouseY = 0;
var image = $("#flying");

$(document).ready(function(){
  offset = $(".stage").offset();
  atimer = setInterval("animateFollower()", timeInterval );
});

$(document).mousemove(function(e){
  mouseX = e.pageX;
  mouseY = e.pageY;
  relMouseX = mouseX - offset.left;
  relMouseY = mouseY - offset.top;
  centerX = (offset.left) + (image.width()/2);
  centerY = (offset.top) + (image.height()/2);
  radians = Math.atan2(mouseX - centerX, mouseY - centerY);
  degree = (radians *(180/Math.PI)* -1);

  image.css('-moz-transform', 'rotate('+degree+'deg)');
  image.css('-webkit-transform', 'rotate('+degree+'deg)');
  image.css('-o-transform', 'rotate('+degree+'deg)');
  image.css('-ms-transform', 'rotate('+degree+'deg)');
});

function animateFollower() {
  $("#flying").css("left", relMouseX);
  $("#flying").css("top", relMouseY);
}
$("#send").click(function(){
  $("#flying").animate({
    "top": "-=100px",
    "toggle": "hide"}, {
    duration: 50,
    complete: function(){
      //$(this).after()
      $("#beeHome").animate({"toggle": "show"},
      {duration: "slow"});
    }
  })

});
$("#send").hover(function(){
    $("#byebee").toggle();
});

var stickyElements = $(".sticky");
for (var i = stickyElements.length - 1; i>= 0; i--) {
  Stickyfill.add(stickyElements[i]);
}




