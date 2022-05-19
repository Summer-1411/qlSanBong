
const modal = $$('.modal')
const btnLogin = $('#btn-login')
const btnRegister = $('#btn-register')
const modalLogin = $('.modal__login')
const modalRegister = $('.modal__registration')
const closeLogin = $('.close_login')
const closeRegister = $('.close_register')
const modalBody = $$('.modal__body');
const fromLogin = $('.from-login')
const fromRegister = $('.from-register')
const menu = $('.menu-main')
const menu2 = $('.menu2')
const btnExit = $('.btn-exit')
const viewLogin = () => {
    modalLogin.classList.add('flex')
    modalRegister.classList.remove('flex');
}
const viewRegister = () => {
    modalLogin.classList.remove('flex')
    modalRegister.classList.add('flex');
}

btnLogin.addEventListener('click', () => {
    viewLogin();
})
btnRegister.addEventListener('click', () => {
    viewRegister();
})

closeLogin.addEventListener('click', () => {
    modalLogin.classList.remove('flex')
})
closeRegister.addEventListener('click', () => {
    modalRegister.classList.remove('flex')
})

;
modal.forEach(value => {
    value.addEventListener("click", () => {
        value.classList.remove('flex')
    })
})

;

[...modalBody].forEach(overlay => {
    overlay.addEventListener("click", (e) => {
        e.stopPropagation();
    })
})

fromLogin.onclick = function(){
    viewLogin();
}
fromRegister.onclick = function(){
    viewRegister();
}


menu.addEventListener('click', () => {
    menu2.classList.add('view');
})
btnExit.onclick = function(){
    console.log('test');
    menu2.classList.remove('view')
}