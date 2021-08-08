const quizform = document.querySelector(".quiz");

const submitAns = document.querySelector("#submit-btn");
 
const outp = document.querySelector(".output");


const ans = ["Yes","90","right","4","10"]

submitAns.addEventListener("click",score);
function score(){
      let score = 0;
      let i = 0;
      const results = new FormData(quizform);
      for(let value of results.values()){
          if(value === ans[i])
          {
              score=score+1;
          }
          i+=1;

      }
      outp.innerText = "Your score is " + score
}

