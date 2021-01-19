//Menu responsivo

let show = true;
const header = document.getElementById("menu")
const menuToggle = header.querySelector(".menu-toggle")
const menuItens = header.querySelector(".menu")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"
    header.classList.toggle("on", show)
    menuItens.classList.toggle("menuResponsive", show)
    show = !show
})


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

 const elementSobre = document.getElementById("sobre")
 const elementProdutos = document.getElementById("produtos")
 const elementParceiros = document.getElementById("parceiros")
 const elementGoverno = document.getElementById("governo")
 const elementContato = document.getElementById("contato")

 btnSobre.addEventListener('click', function () {
    /*Remove classes do menu responsivo*/
    header.classList.remove("on")
    menuItens.classList.remove("menuResponsive")
    document.body.style.overflow = "initial" 
    if (header.classList.contains("down")){
        elementSobre.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToSobre()
    }else{
        elementSobre.setAttribute("style","scroll-margin-top: 45rem;")
        scrollToSobre()
    }   
 })
 btnProdutos.addEventListener('click', function () {
     /*Remove classes do menu responsivo*/
    header.classList.remove("on")
    menuItens.classList.remove("menuResponsive")
    document.body.style.overflow = "initial" 
    if (header.classList.contains("down")){
        elementProdutos.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToProdutos()
    }else{
        elementProdutos.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToProdutos()
    }
 })
 btnParceiros.addEventListener('click', function () {
     /*Remove classes do menu responsivo*/
    header.classList.remove("on")
    menuItens.classList.remove("menuResponsive")
    document.body.style.overflow = "initial" 
    if (header.classList.contains("down")){
        elementParceiros.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToParceiros()
    }else{
        elementParceiros.setAttribute("style","scroll-margin-top: 45rem;")
        scrollToParceiros()
    }
 })
 btnGoverno.addEventListener('click', function () {
     /*Remove classes do menu responsivo*/
    header.classList.remove("on")
    menuItens.classList.remove("menuResponsive")
    document.body.style.overflow = "initial" 
    if (header.classList.contains("down")){
        elementGoverno.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToGoverno()
    }else{
        elementGoverno.setAttribute("style","scroll-margin-top: 45rem;")
        scrollToGoverno()
    }
 })
 btnContato.addEventListener('click', function () {
     /*Remove classes do menu responsivo*/
    header.classList.remove("on")
    menuItens.classList.remove("menuResponsive")
    document.body.style.overflow = "initial" 
    if (header.classList.contains("down")){
        elementContato.setAttribute("style","scroll-margin-top: 0rem;")
        scrollToContato()
    }else{
        elementContato.setAttribute("style","scroll-margin-top: 20rem;")
        scrollToContato()
    }
 })

 function scrollToSobre() {
     document.querySelector('.sobre').scrollIntoView({ block: "center",  behavior: 'smooth' })
 }
 function scrollToProdutos() {
     document.querySelector('.produtos').scrollIntoView({  block: "start", behavior: 'smooth' })
 }
 function scrollToParceiros() {
     document.querySelector('.parceiros').scrollIntoView({ block: "center", behavior: 'smooth' })
 }
 function scrollToGoverno() {
     document.querySelector('.governo').scrollIntoView({ block: "center", behavior: 'smooth' })
 }
 function scrollToContato() {
     document.querySelector('.contato').scrollIntoView({ block: "start", behavior: 'smooth' })
 }
 
 function handleCorrectPosition(){
     const vl = window.innerHeight/2
     window.scroll({
         top:vl,
         behavior:'auto'
     })
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

 /// menu fixo ao descer a pagina

 const menu = document.getElementById("menu")

 function scrollDownShowMenuFixed(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    console.log(windowTop)
    console.log(menu.style.height)
    console.log(window.innerHeight)
    if ((windowTop) > window.innerHeight+(window.innerHeight/4)) {
        menu.classList.add('down')
    }
 }

 function scrollUpHideMenuFixed() {
    menu.classList.remove('down')
}

window.addEventListener('scroll', function () {
    scrollDownShowMenuFixed()
    if (window.scrollY === 0 && window.scrollX === 0) {
        scrollUpHideMenuFixed()
    }
})

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

 