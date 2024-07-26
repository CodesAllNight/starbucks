const arrows  = document.querySelectorAll(".arrow-imgs")
const navBarToggleBtn = document.querySelector("#nav-bar-icon")
const asideNavOpen = document.querySelector(".nav-container-aside")
const asideSemantic =document.querySelector(".nav-aside-open")
const backdropFilter =document.querySelector(".backdrop")


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


{
    let isTranslated = true; //translate is at 0% by default which means that nav-bar is hidden .... also the value of isTranslated is taken as 100% which means that the bar is hidden. 
    navBarToggleBtn.addEventListener("click",()=>{
        if(isTranslated==true){
            navBarToggleBtn.style.transform = "rotate(90deg)"
            asideNavOpen.style.transform = "translate(0%)";
            document.body.style = "overflow-y:hidden";
           
            isTranslated=false;
        }else{
            
            navBarToggleBtn.style.transform = "rotate(0deg)"
            asideNavOpen.style.transform = "translate(100%)"
            document.body.style = "overflow-y:visible";
            
            isTranslated=true
        }
    })
    
}
