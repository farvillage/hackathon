//popup
function selfHelp() {
   var popup = document.getElementById("myPopup");
   popup.classList.toggle("show")
 }

//popup chat window
function openForm() {
   document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}

// expandir os botões
function expand() {
   var botao = document.getElementById('send_res')
   botao.style.backgroundColor = 'cornflowerblue'
   botao.style.transform = 'scale(1.1)'
}
function retract() {
   var botao = document.getElementById('send_res')
   botao.style.backgroundColor = 'white'
   botao.style.transform = 'none'
}

//top nav bar
function myFunction() {
   var x = document.getElementById("topNav");
   if (x.className === "topNav") {
     x.className += " responsive";
   } else {
     x.className = "topNav";
   }
 }