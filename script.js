function scrollToContent(){
document.getElementById("charge").scrollIntoView({
behavior:"smooth"
});
}

function calculateForce(){

let q1=parseFloat(document.getElementById("q1").value);
let q2=parseFloat(document.getElementById("q2").value);
let r=parseFloat(document.getElementById("distance").value);

let k=8.99e9;

let F=(k*Math.abs(q1*q2))/(r*r);

document.getElementById("forceOutput").innerHTML =
"Force = " + F.toExponential(4) + " N";
}

let slider=document.getElementById("angleSlider");
let output=document.getElementById("angleValue");

if(slider){
slider.addEventListener("input",()=>{
output.innerHTML="Angle = "+slider.value+"°";
});
}
