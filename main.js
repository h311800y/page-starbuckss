
window.addEventListener('scroll',function(){
    var header = document.querySelector('nav');
    header.classList.toggle('active',window.scrollY > 0);
})