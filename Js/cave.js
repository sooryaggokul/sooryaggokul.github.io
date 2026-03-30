const caveCanvas = document.getElementById("cave");
const caveCtx = caveCanvas.getContext("2d");

let W = window.innerWidth;
let H = window.innerHeight;

function resize(){
W = caveCanvas.width = window.innerWidth;
H = caveCanvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function drawCave(){
caveCtx.fillStyle="#000";
caveCtx.fillRect(0,0,W,H);

for(let i=0;i<15;i++){
caveCtx.beginPath();
caveCtx.arc(W/2, H/2 + scrollY*0.1, 200+i*40, 0, Math.PI*2);
caveCtx.strokeStyle=`rgba(0,255,150,0.05)`;
caveCtx.stroke();
}
}