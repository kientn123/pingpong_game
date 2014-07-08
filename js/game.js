window.onload = function() {
  var canvas = document.querySelector("#main_canvas");
  canvas.width = 800;
  canvas.height = 500;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "hsla(215, 16%, 87%, .7)";
  ctx.fillRect(0, 0, 800, 500);
  
  // Draw 2 paddles
  ctx.fillStyle = "hsla(100, 54%, 68%, 1)";
  ctx.fillRect(50, 50, 30, 150);
  ctx.fillRect(720, 50, 30, 150);
  // Draw the ball
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 30, 0, 2*Math.PI);
  ctx.fillStyle = "hsl(352, 70%, 76%)";
  ctx.fill();
  ctx.stroke();
};
