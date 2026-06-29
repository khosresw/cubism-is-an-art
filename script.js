const cube=document.getElementById("cube");
let dragging=false,lastX=0,lastY=0,rx=-25,ry=35;

function render(){
 cube.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
}
cube.addEventListener("pointerdown",e=>{
 dragging=true;
 lastX=e.clientX; lastY=e.clientY;
 cube.style.cursor="grabbing";
});
window.addEventListener("pointermove",e=>{
 if(!dragging) return;
 ry+=(e.clientX-lastX)*0.5;
 rx-=(e.clientY-lastY)*0.5;
 lastX=e.clientX; lastY=e.clientY;
 render();
});
window.addEventListener("pointerup",()=>{
 dragging=false;
 cube.style.cursor="grab";
});
render();

document.getElementById("play").onclick=()=>{
 alert("Part 2 will open the first Gratitude puzzle!");
};
