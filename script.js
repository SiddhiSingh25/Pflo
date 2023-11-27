/*window.onload = function(){
    document.getElementById("error").style.opacity=1;
}
window.on

*/












var page1=document.querySelector(".page1");
page1.addEventListener("mouseenter", function(){
    document.querySelector(".home-nav").style.color="#49bff6";
    navbar.style.backgroundColor="#fff";
})
page1.addEventListener("mouseleave", function(){
    document.querySelector(".home-nav").style.color="#b3b3b3";
})
let page2 = document.querySelector(".about-foot");
let abc= document.querySelector(".about-foot h1");
page2.addEventListener("mouseenter", function(){
    document.querySelector(".about-nav").style.color="#49bff6";
    gsap.to(".about-foot h1, .about-foot h2, .pg, .mail p" ,{
        y: -6,
        delay : 0,
        duration :0.2,
        opacity:1,
        stagger:0.4
    })
    gsap.to(" .mail p" ,{
        y: -6,
        delay : 1.2,
        duration :0.2,
        opacity:1,
    })
    gsap.to(" .location p" ,{
        y: -6,
        delay : 1.6,
        duration :0.2,
        opacity:1,
    })
    gsap.to(".hello",{
        y: -6,
        delay : 1.9,
        duration :0.3,
        opacity:1,

    })
})
page2.addEventListener("mouseleave", function(){
    document.querySelector(".about-nav").style.color="#b3b3b3";
})
let skill = document.querySelector(".page3");
skill.addEventListener("mouseenter", function(){
    document.querySelector(".skills-nav").style.color="#49bff6";
    gsap.from(".skill-box", {
        opacity:1,
        delay:0.1,
        scale:1.2,
        duration:0.3,
        stagger:0.1
    })
})
skill.addEventListener("mouseleave", function(){
    document.querySelector(".skills-nav").style.color="#b3b3b3";
})
var page4=document.querySelector(".page4");
page4.addEventListener("mouseenter", function(){
    document.querySelector(".education-nav").style.color="#49bff6";
})
page4.addEventListener("mouseleave", function(){
    document.querySelector(".education-nav").style.color="#b3b3b3";
})
var page5=document.querySelector(".page5");
page5.addEventListener("mouseenter", function(){
    document.querySelector(".samples-nav").style.color="#49bff6";
})
page5.addEventListener("mouseleave", function(){
    document.querySelector(".samples-nav").style.color="#b3b3b3";
})
var page6=document.querySelector(".contact");
page6.addEventListener("mouseenter", function(){
    document.querySelector(".contact-nav").style.color="#49bff6";
})
page6.addEventListener("mouseleave", function(){
    document.querySelector(".contact-nav").style.color="#b3b3b3";
})

/***Scroll*/
let navbar =document.querySelector("nav")
document.addEventListener("scroll", function(){
    navbar.style.height="7.2rem";
    navbar.style.boxShadow="0 3px 3px rgba(0, 0, 0, 0.6);";
    document.querySelector(".info a").style.color= "#333333";
    navbar.style.backgroundColor="#ffcdde";
})
/*Love button efffect*/
const heartIcon = document.querySelector(".like-button .heart-icon");
const likesAmountLabel = document.querySelector(".like-button .likes-amount");
let likesAmount = 7;
heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
  if (heartIcon.classList.contains("liked")) {
    likesAmount++;
  } else {
    likesAmount--;
  }

  likesAmountLabel.innerHTML = likesAmount;
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmrRlC2GeLmCAkqyNgG17RrYIDAZj8ol3C5E7nQ3x0zxCY4lDjSsLtfjsWvvdFXbbCvg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        animmsg();
        console.log("sucessfully sent")
        alert("mesaage sent sucessfully")
        msg.innerHTML="Message sent sucessfully";
        setTimeout( function(){
            msg.innerHTML=""
        },4000)
      })
      .catch(error =>{
        msg.innerHTML="Message not sent!!";
        setTimeout( function(){
            msg.innerHTML=""
        },4000)
      } )
})
function animmsg(){
    gsap.to(msg, {
        y:-10,
        color:"red",
        duration:0.2,
        opacity:1
    })
 }
let menu = document.querySelector(".menu");
menu.addEventListener("click", function(){
    navbar.style.display="flex";

})
document.querySelector(".form-group input").addEventListener("focus", function(){
    document.querySelector(".form-group").style.backgroundColor = "pink"
})
let ip =document.querySelector(".form-group input");
ip.addEventListener("blur", function(){
    ip.value = ip.value.toUpperCase();
})
console.log(document.getElementsByClassName("fname"))
function hel(){
    alert("Hello");
}