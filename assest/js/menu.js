const menu = $('.menu-main')
const menu2 = $('.menu2')
const btnExit = $('.btn-exit')
menu.addEventListener('click', () => {
    menu2.classList.add('view');
})
btnExit.onclick = function(){
    console.log('test');
    menu2.classList.remove('view')
}