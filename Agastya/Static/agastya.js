const changeColor = () =>{
    setTimeout(() => {        
        
        setTimeout(()=>{
            const page1 = document.querySelector("#page1");
            page1.style.background="linear-gradient(to top,#f2f2f2,#555555)";            
        },110)
        const headerElement = document.querySelector(".header");
        headerElement.style.backgroundColor="black";

        
       
    }, 2000);
}
document.addEventListener("DOMContentLoaded", changeColor);