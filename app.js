let item = document.querySelectorAll( '.slider .list .item' );
let thumbnail =document.querySelectorAll('.thumbnail .item');

let countItem=item.length;
let itemActive=0;

function next(){
    itemActive = itemActive + 1;
    if(itemActive>= countItem){
        itemActive=0;
    }

    showSlider();
}

let refreshInterval = setInterval(()=>{
    next()
},10000)

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    item[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    let refreshInterval = setInterval(()=>{
        next()
    },10000)

}

thumbnail.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
        itemActive=index;
        showSlider();
    })
})