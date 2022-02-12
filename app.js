let indicator = document.querySelector('#indicators').children;
let item =document.querySelector('#container').children;
for (let i1 of item){
    const name = i1.querySelector('strong');  
    const x = name.textContent;
    i1.setAttribute('data-category' , x);
}
for(let i2=0 ; i2<indicator.length ; i2++){
    indicator[i2].onclick = function(){
        for(let x=0 ; x<indicator.length ; x++){
            indicator[x].classList.remove('active');
        }
this.classList.add('active');
const displayItems = this.getAttribute('data-filter');
for(let z=0 ; z<item.length ; z++){
    item[z].style.display = 'none';
    setTimeout(() => {
        item[z].style.display = 'none';
    }, 500);
    if((item[z].getAttribute('data-category') == displayItems) || displayItems == 'All'){
        item[z].style.display = 'flex';
    setTimeout(() => {
        item[z].style.display = 'flex';
    }, 500);  
    }
}
    }
}

let sorterFilter = document.getElementById('sorter');
let defaultFilter = document.getElementById('Default');
let lowToHigh = document.getElementById('LowToHigh');
let highToLow = document.getElementById('HighToLow');

let itemsContainer = document.querySelector('#container');
let array = Array.from(itemsContainer.children);

let sorter = document.getElementById('low');
for ( let i of array){
    const prices = i.lastElementChild.lastElementChild;
    const x = prices.textContent.substring(1);
   i.setAttribute('data-price', x);
}


sorterFilter.addEventListener("mouseover" , function(){
    lowToHigh.style.display = 'block';
    highToLow.style.display = 'block';

    lowToHigh.addEventListener("click" , function(){
        let sorted =  array.sort(function (a , b){
            let a1 = parseInt( a.getAttribute('data-price'));
            let a2 = parseInt(b.getAttribute('data-price'));     
            if(a1 > a2){
                return 1;
            }else {
                return -1;
            }   
        })
        itemsContainer.append(...sorted);
    });

    highToLow.addEventListener("click" , function(){
        let sorted =  array.sort(function (a , b){
            let a1 = parseInt( a.getAttribute('data-price'));
            let a2 = parseInt(b.getAttribute('data-price'));  

            if(a1 > a2){
                return -1;
            }else {
                return 1;
            }   
        })
        itemsContainer.append(...sorted);
    });
});
sorterFilter.addEventListener("mouseout" , function(){
    lowToHigh.style.display = 'none';
    highToLow.style.display = 'none';
})


let buyNow = document.querySelectorAll('#test > a');

let allNames = document.querySelectorAll('#test > p');
let allPrices = document.querySelectorAll('#prices');
let allImages = document.querySelectorAll('#mainImage');


let signUp = document.getElementById('signUp');

signUp.addEventListener("click" , () =>{
    window.location.href = 'signUp.html';
})

let signIn = document.getElementById('signIn');
let signInContainer = document.getElementById('sign-in-container');
let signCloser = document.getElementById('sign-in-container-closer');
signIn.addEventListener('click' , ()=>{
signInContainer.style.left = 0;
document.body.style.overflow = "hidden";
});
signCloser.addEventListener('click',()=>{
    signInContainer.style.left = '-100%';
    document.body.style.overflow = "visible";
})
let signInUpContainer = document.getElementById('signInUp');
let userName = document.querySelector('.username');
let signInButton = document.getElementById('sign-button');
let sideBarMenu = document.createElement('img');
let favoriteItems = document.createElement('img');
let accountName = document.getElementById('name');
sideBarMenu.id = 'side-bar-menu';
favoriteItems.id = 'favorite-items';
signInButton.addEventListener("click",()=>{
    signIn.style.display = 'none';
    signUp.style.display = 'none';
    sideBarMenu.src = 'icons8-account-50.png';
    favoriteItems.src = 'icons8-favorite-32.png';
    signInUpContainer.append(favoriteItems ,sideBarMenu);
    signInContainer.style.left = '-100%';
    document.body.style.overflow = "visible";
    accountName.textContent =   "Welcome" + userName.value;
});
let menu = document.getElementById('sideBarAccount');
sideBarMenu.addEventListener("click",()=>{
menu.style.top = 0;
})

let menuCloser = document.getElementById('close-side-bar');

menuCloser.addEventListener("click",()=>{
    menu.style.top = '-1000px';
})