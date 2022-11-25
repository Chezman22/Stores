
const menuBtn = document.querySelector('#menu');
const navBar = document.querySelector('#navbar');

menuBtn.addEventListener('click', ()=> {
    if (navBar.className == "") {
        navBar.className = "open";
    }
    else {
        navBar.className = "" ;
    }
});

const docwidth = window.innerWidth + "px";
console.log(docwidth)

/*
const moreBtn = document.querySelector('.soon');
const display = document.querySelector('#more');

moreBtn.addEventListener( 'click',()=>{
    if(display.className=="") {
        display.className = "open" ;
        moreBtn.innerHTML ='View less'
    }
    else {
        display.className='';
        moreBtn.innerHTML= 'Coming soon...' ;
    }
});

//carousel

const slide = document.querySelector('.carousel')
const images = document.querySelectorAll('.carousel div');
var count = 0;
var size = images[0].clientWidth;

function changeImg() {
    
        if(count>=images.length-1) {count = count-images.length; 
            };

        if(images[count] !== 'last'){
            slide.style.transition = 'transform 0.5s ease-in-out';
        count ++;
        slide.style.transform = 'translateX(' + (-size*count) + 'px)';
        }
        
    
}

setInterval('changeImg()', 3000);
window.onload;
*/


const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const text = document.querySelector('.text')
let counter = 0;

plusBtn.addEventListener('click', function(){
    counter++;
    text.innerHTML= counter;
})
minusBtn.addEventListener('click', function(){
    counter--;
    if(counter== -1){
        counter++;
    }
    text.innerHTML= counter;
})

const shirts = [
    {
        img:"./images/tshirt-5.jpg",
        name : "Yeezus",
        price : "<p>#7000</p><p>#8000</p>"
    },
    {
        img: "./images/tshirt-1.jpg",
        name: "XL Print",
        price: "<p>#6500</p><p>#7500</p>"
    },
    {
        img: "./images/tshirt6.png",
        name: "Medium and Large Print",
        price: "<p>#6000</p><p>#7500</p>"
    },
    {
        img: "./images/tshirt-3.jpg",
        name: "Graphic Shirts",
        price: "<p>#8000</p><p>#10,000</p>"
    },
    {
        img: "./images/tshirt-4.jpg",
        name: "Bleached T's",
        price: "<p>#8000</p><p>#10,000</p>"
    },
    {
        img: "./images/tshirt7.jpg",
        name: "'Insanity' t-shirts",
        price: "<p>#6000</p><p>#8000</p>"
    }
]

const shirtContainer = document.querySelector('.p-el');
const img = document.querySelector('.img');
const shirtName = document.querySelector('.name');
const priceTag = document.querySelector('.div');
const nextBtn = document.querySelector('.increase');
const prevBtn = document.querySelector('.decrease');
let counts = 0;


window.addEventListener('DOMContentLoaded', function(){
    const item = shirts[counts];
    img.src = item.img;
    shirtName.textContent = item.name;
    priceTag.innerHTML = item.price;
})

function shirtDetails(shirt){
    const item = shirts[shirt];
    img.src = item.img;
    shirtName.textContent = item.name;
    priceTag.innerHTML = item.price;
}

nextBtn.addEventListener('click', function(){
    counts++;
    if(counts>shirts.length-1){
        counts=0;
    }
    shirtDetails(counts);
})

prevBtn.addEventListener('click', function(){
    counts--;
    if(counts<0){
        counts= shirts.length-1;
    }
    shirtDetails(counts);
})

//review
const yesBtn = document.querySelector('.yes-ans');
const noBtn = document.querySelector('.no-ans');
const yesIcon = document.querySelector('.yes');
const yesDiv = document.querySelector('.yes-div');
const container = document.querySelector('.question');

yesBtn.addEventListener('click', function(e){
    const div = e.currentTarget.parentElement;
    div.classList.add('show');
    container.classList.remove('showtext')
})

noBtn.addEventListener('click', function(e){
    const noDiv = e.currentTarget.parentElement.parentElement.parentElement;
    noDiv.classList.add('showtext');
    yesDiv.classList.remove('show')
})