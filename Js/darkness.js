const darkCanvas = document.getElementById("dark");
const darkCtx = darkCanvas.getContext("2d");

darkCanvas.width = window.innerWidth;
darkCanvas.height = window.innerHeight;

function drawDark(){
darkCtx.clearRect(0,0,darkCanvas.width,darkCanvas.height);

darkCtx.fillStyle="rgba(0,0,0,0.98)";
darkCtx.fillRect(0,0,darkCanvas.width,darkCanvas.height);

const progress = getProgress();
const x = window.innerWidth/2;
const y = window.innerHeight - 150 - progress*200;

const flicker = 280 + Math.sin(Date.now()*0.02)*20;

const g = darkCtx.createRadialGradient(x,y,0,x,y,flicker);
g.addColorStop(0,"rgba(0,0,0,0)");
g.addColorStop(1,"black");

darkCtx.globalCompositeOperation="destination-out";
darkCtx.fillStyle=g;

darkCtx.beginPath();
darkCtx.arc(x,y,flicker,0,Math.PI*2);
darkCtx.fill();

darkCtx.globalCompositeOperation="source-over";

document.getElementById("explorer").style.transform =
`translateX(-50%) translateY(${-progress*200}px)`;
}