
var input =document.getElementById("text-inp");
var button =document.querySelector(".btn");
let div = document.getElementById("empty");
button.addEventListener("click",()=>{
    if (input.value === "") {
         return false
    }
    else {
    let element = document.createElement("div")
    element.innerHTML= input.value;
    element.classList.toggle("a");
   div.appendChild(element);
let newBTN = document.createElement("button");
newBTN.innerHTML = "remove";
element.appendChild(newBTN);
  newBTN.addEventListener("click",()=>{
element.remove()
  })
    }
input.value =""
});

