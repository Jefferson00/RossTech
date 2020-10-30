 /*Itens dos produtos*/
 const prev = document.getElementById("prev");
 const next = document.getElementById("next");
 const container = document.getElementById("container");

 const itens = document.getElementsByClassName("produtos-card-item")
 var translated = 0
 const containerWidth = container.clientWidth
 prev.addEventListener("click", function () {
     translated = translated + containerWidth
     for (i = 0; i < itens.length; i++) {
         console.log(translated)
         itens[i].style.transform = "translateX(" + translated + "px)";
     }
 })
 next.addEventListener("click", function () {
     translated = translated - containerWidth
     for (i = 0; i < itens.length; i++) {
         console.log(translated)
         itens[i].style.transform = "translateX(" + translated + "px)";
     }
 })

 /*Scroll do menu*/
 const btnSobre = document.getElementById("btn-sobre");
 const btnProdutos = document.getElementById("btn-produtos");
 const btnParceiros = document.getElementById("btn-parceiros");
 const btnGoverno = document.getElementById("btn-governo");
 const btnContato = document.getElementById("btn-contato");

 btnSobre.addEventListener('click', function () {
     scrollToSobre()
 })
 btnProdutos.addEventListener('click', function () {
     scrollToProdutos()
 })
 btnParceiros.addEventListener('click', function () {
     scrollToParceiros()
 })
 btnGoverno.addEventListener('click', function () {
     scrollToGoverno()
 })
 btnContato.addEventListener('click', function () {
     scrollToContato()
 })

 function scrollToSobre() {
     document.querySelector('.sobre').scrollIntoView({ behavior: 'smooth' })
 }
 function scrollToProdutos() {
     document.querySelector('.produtos').scrollIntoView({ behavior: 'smooth' })
 }
 function scrollToParceiros() {
     document.querySelector('.parceiros').scrollIntoView({ behavior: 'smooth' })
 }
 function scrollToGoverno() {
     document.querySelector('.governo').scrollIntoView({ behavior: 'smooth' })
 }
 function scrollToContato() {
     document.querySelector('.contato').scrollIntoView({ behavior: 'smooth' })
 }

 /*Go to Top*/
 const toTopElement = document.getElementById('toTop')

 function scrolToTop() {
     window.scroll({
         top: 0,
         behavior: 'smooth'
     })
 }

 toTopElement.addEventListener('click', function () {
     scrolToTop()
 })

 window.onscroll = function () {


     if (window.pageYOffset > window.innerHeight) {
         toTopElement.style.opacity = 1
     } else {
         toTopElement.style.opacity = 0
     }

 }

 ///enviar e-mail

 function sendEmail() {
     
     const name = document.getElementById("name").value
     const email = document.getElementById("email").value
     const phone = document.getElementById("phone").value
     const mensage = document.getElementById("mensage").value
     const subject = document.getElementById("subject").value
     
     if(name == "" || email == "" || phone == "" || mensage == "" || subject == ""){
         alert("Preencha todos os campos!")
     }else{
         Email.send({
             SecureToken: "d9b3f81f-82fa-4e67-be80-768d2a3d955c",
             To: 'jefferson@northware.com.br',
             From: "jefferson@northware.com.br",
             Subject: subject,
             Body: "<html><strong>"+mensage+"</strong><br></br><em>E-mail: "+email+"<br></br> Telefone: "+phone+"<br></br> Nome: "+name+"</em></html>"
         }).then(
             message => alert("mail sent successfully")
         );
     }
 }
