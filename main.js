
const buton = document.getElementById('nav-bar');

let nav = document.getElementById('nav-dos');



window.addEventListener('scroll',function(){
    var header = document.querySelector('nav');
    header.classList.toggle('active',window.scrollY > 0);
})



buton.addEventListener('click',()=>{
    nav.classList.toggle('toggle')
})

