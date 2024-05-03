
var input =document.getElementById("text-inp");
var button =document.querySelector(".btn");

button.addEventListener("click",function(){
    if (input.value === "") {
         return false
    }
    else {
    var result = '<div class = "remeve"><hr><input type="button" class="bttnn" value="remove"> <input type="button"class="btnn" value="save"></div>';
 
    let element = document.createElement("p");
    var div = document.getElementById("empty").appendChild(element);
    div.insertAdjacentHTML("beforebegin",result)
    
    element.innerHTML= input.value;}
});

