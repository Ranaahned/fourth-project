


// var ALLProducts= document.querySelectorAll(".card-body h4");
var add = document.querySelectorAll(".card-body button");
var cart = document.querySelector("#demo");
var show =document.querySelector(".bt-js");
// var body = document.querySelector("body")
var cartbag=document.querySelector("#count-cart")
var increase=0;
var totalPrice= 0;

 add.forEach(function (btn){
    btn.onclick= function(){
     cart.innerHTML+= btn.textContent  + "<br>"+"<hr>"
        // ALLProducts.forEach(function(pro)
        // {cart.innerHTML=pro.textContent  + "<br>"
        // })
    //   body.style.backgroundColor = "rgba(55, 54, 51, 0.166)"
       increase ++;
       cartbag.innerHTML=increase;
       totalPrice += parseInt (btn.getAttribute ("price"))
       
         
        if(cart.innerHTML != ""){
            cart.style.display = "block";

          
        }
    }
})

show.onclick = function (){
    document.getElementById("total-price").innerHTML= "Total price:"+ totalPrice;
    console.log(totalPrice);
  }
  

// pricebut.style.width="200px"
// pricebut.onclick = function(){
//     // document.getElementById("total-price").innerHTML= totalPrice;
//     console.log(totalPrice)
// }