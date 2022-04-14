window.addEventListener('scroll',function(){
    var scroll=document.querySelector('.upward');
    scroll.classList.toggle("active",window.scrollY>900)
})
function scrollTopTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}