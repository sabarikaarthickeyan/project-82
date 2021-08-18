canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


var width=1;
var last_position_of_x,last_position_of_y;
 var mouseevent="empty";
 canvas.addEventListener("mousedown", mouse_down);
 function mouse_down(e){
     mouseevent="mousedown";
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width_of_line=document.getElementById("width").value;
 }
 canvas.addEventListener("mousemove",mouse_move);
 function mouse_move(e){
     current_position_of_x=e.clientX-canvas.offsetLeft;
     current_position_of_y=e.clientY-canvas.offsetTop;
     if(mouseevent=="mousedown"){
        console.log("x= "+last_position_of_x +" y= "+last_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.arc(last_position_of_x,last_position_of_y,radius,0,2*Math.PI);
        ctx.stroke();
     }
     last_position_of_x=current_position_of_x;
     last_position_of_y=current_position_of_y;
 }
 