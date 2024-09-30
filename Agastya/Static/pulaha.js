let scrollerDet = document.querySelectorAll('.page2 .scroller .scroller-detail');
let count=scrollerDet.length;
let scrollerDetActive=0;

function nextScrollerDet(){
    let scrollerDetActiveOld=document.querySelector('.page2 .scroller .scroller-detail.active');

    scrollerDetActiveOld.classList.remove('active');

    scrollerDet[scrollerDetActive].classList.add('active');

    clearInterval(refreshInterval);
    let refreshInterval = setInterval(()=>{
        next()
    },80000)
}

let refreshInterval = setInterval(()=>{
    next()
},80000)

function next(){
    scrollerDetActive = scrollerDetActive + 1;
    if(scrollerDetActive>=count){
        scrollerDetActive=0
    }
}
