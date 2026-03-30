let scrollY = 0;

window.addEventListener("scroll", () => {
scrollY = window.scrollY;
});

function getProgress(){
return scrollY / (document.body.scrollHeight - window.innerHeight);
}

function loop(){
drawCave();
drawFire();
drawDark();
revealContent();
requestAnimationFrame(loop);
}

loop();