const arrows  = document.querySelectorAll(".arrow-imgs")


{
    let isRotated = false
arrows.forEach((upArrow)=>{
    upArrow.addEventListener("click",()=>{
        if(!isRotated){
            upArrow.style.transform = "rotate(180deg)"
            isRotated=true;
        }
        else{
            upArrow.style.transform="rotate(0deg)"
            isRotated=false;
        }
    })
})
}