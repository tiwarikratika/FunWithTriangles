const base = document.querySelector("#side1");

const height = document.querySelector("#side2");

const btn = document.querySelector(".btn");

const outputarea = document.querySelector(".output");

btn.addEventListener("click", calculateArea);

function calculateArea()
{
   const product = Number(base.value)*Number(height.value);

   const area = 1/2*product;

   outputarea.innerText = "Area is " + area +"cm²";


}