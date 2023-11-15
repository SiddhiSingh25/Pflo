/*var like= document.querySelector(".like")
var flag=0
like.addEventListener("click", function(){
    let a =1;
    like.classList.toggle("liked")
})*/
var page1=document.querySelector(".page1");
page1.addEventListener("mouseenter", function(){
    document.querySelector(".ab").style.color="#49bff6";
})
page1.addEventListener("mouseleave", function(){
    document.querySelector(".ab").style.color="#b3b3b3";
})
let page2 = document.querySelector(".about-foot");
let abc= document.querySelector(".about-foot h1");
page2.addEventListener("mouseenter", function(){
    document.querySelector(".abc").style.color="#49bff6";
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
    document.querySelector(".abc").style.color="#b3b3b3";

})
let skill = document.querySelector(".page3");
skill.addEventListener("mouseenter", function(){
    document.querySelector(".abcd").style.color="#49bff6";
    gsap.from(".skill-box", {
        opacity:1,
        delay:0.1,
        scale:1.2,
        duration:0.3,
        stagger:0.1
    })
})
skill.addEventListener("mouseleave", function(){
    document.querySelector(".abcd").style.color="#b3b3b3";
})
/***Scroll*/
let navbar =document.querySelector("nav")
document.addEventListener("scroll", function(){
    navbar.style.height="7.2rem";
    navbar.style.boxShadow="0 3px 3px rgba(0, 0, 0, 0.6);";
    document.querySelector(".info a").style.color= "#333333";
    navbar.style.backgroundColor="rgb(247, 247, 247)";
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