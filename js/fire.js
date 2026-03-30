const fireCanvas = document.getElementById("fire");
const fireCtx = fireCanvas.getContext("2d");

fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:window.innerWidth/2,
y:window.innerHeight-150,
vx:(Math.random()-0.5)*1,
vy:-Math.random()*2,
life:Math.random()*100
});
}

function drawFire(){
fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

const progress = getProgress();
const x = window.innerWidth/2;
const y = window.innerHeight - 150 - progress*200;

particles.forEach(p=>{
p.x += p.vx;
p.y += p.vy;
p.life--;

```
if(p.life <= 0){
  p.x = x;
  p.y = y;
  p.life = 100;
}

fireCtx.beginPath();
fireCtx.arc(p.x, p.y, 2, 0, Math.PI*2);
fireCtx.fillStyle="orange";
fireCtx.fill();
```

});
}