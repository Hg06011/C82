var mouse_event ="empty";
var last_position_of_x, last_position_of_y;  

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Color = "black";
width = 1;
canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e)
{

Color = document.getElementById("Color").value;
width = document.getElementById("width").value;
mouseEvent ="mouseDown";

}

canvas.addEventListener("Mousemove", My_mousemove);
function My_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle = Color;
    ctx.lineWidth = width;
    console.log("x =" +  last_position_of_x + "y =" + last_position_of_y );
    ctx.moveTo ( last_position_of_x, last_position_of_y);
    console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
    ctx.lineTo( current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup" , My_mouseUp);
function  My_mouseUp(e)
{
mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", My_mouseleave);
function My_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

function clear()
{
    ctx.clearRect(0,0 ,ctx.canvas.width,ctx.canvas.height);
 
}