function revealContent(){
const x = window.innerWidth/2;
const y = window.innerHeight - 150;

document.querySelectorAll(".reveal").forEach(el=>{
const r = el.getBoundingClientRect();

```
const cx = r.left + r.width/2;
const cy = r.top + r.height/2;

const d = Math.hypot(cx-x, cy-y);

if(d < 300){
  el.classList.add("show");
}
```

});
}