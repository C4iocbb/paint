 canvas=document.getElementById=("myCanvas");
ctx=canvas.getContext("2d")
color="black";
largura_da_linha=0.9;
var posicaox;
var posicaoy;
mouse_event=""
canvas.addEventListener("mousedown",mouse_down);
function mouse_down (e){
    mouse_event="mouse_down";
}

canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave (e){
    mouse_event="mouse_leave";
}

canvas.addEventListener("mouseup",mouse_up);
function mouse_up (e){
    mouse_event="mouse_up";
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move (e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    if (mouse_event=="mouse_down"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura_da_linha;
        ctx.moveTo(posicaox,posicaoy);
        ctx.lineTo(mousex,mousey);
        ctx.stroke();
    }
    posicaox=mousex;
    posicaoy=mousey;
}
