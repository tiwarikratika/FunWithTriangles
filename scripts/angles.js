
var ang1 = document.querySelector("#angle1");
var ang2 = document.querySelector("#angle2");
var ang3 = document.querySelector("#angle3");
var btnangles = document.querySelector("#btnang");
var out = document.querySelector(".output");

var happyimg = document.querySelector("#happy");
var sadimg = document.querySelector("#sad");
var flag=-1;
happyimg.style.display  = "none";
sadimg.style.display = "none";


btnangles.addEventListener("click", sumofangles);


function sumofangles(){
    var firstangle = ang1.value;
    console.log(firstangle);
    var secangle = ang2.value;
    var thirdangle = ang3.value;
    if(!firstangle || !secangle || !thirdangle)
    {
        out.innerText = "Fill in all the details"
        out.style.color = "gray";
        out.style.fontSize = "30px";
    }
    else{
  
    var sum = Number(firstangle)+Number(secangle)+Number(thirdangle);
    console.log(sum);
    if(sum===180)
    {
        flag=1;
        display();
        out.innerText = "Valid Triangle !!"
        
        
        out.style.color = "green";
        out.style.fontSize = "28px";
    }
    else{
        flag=0;

        out.style.color = "red";
        display();
        out.innerText = "Invalid Triangle !!";
       
        out.style.fontSize = "28px";
    }
}
}

function display(){
  if(flag==1)
  {
      happyimg.style.display = "block";
}
else{
    sadimg.style.display = "block";
}
}

