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
