const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body")
buttons.forEach((b)=>{
    // console.log(b);
    b.addEventListener("click",(e)=>{
        console.log(e.target);
        body.style.backgroundColor=e.target.id;
    })
})
// console.log(buttons);