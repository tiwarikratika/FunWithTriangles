var sd1 = document.querySelector("#side1");
var sd2 = document.querySelector("#side2");
var out2 = document.querySelector(".output")

var btnhypotenuse = document.querySelector("#hypobtn");

btnhypotenuse.addEventListener("click",calcHypo);


function calcHypo(){
    var firstside = sd1.value;
    var secside = sd2.value;
    console.log(firstside);
    console.log(secside);
    var hypo = Math.hypot(firstside,secside);

    out2.innerText= hypo;
}