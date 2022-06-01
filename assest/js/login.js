
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



const viewLogin = () => {
    modalLogin.classList.add('flex')
    modalRegister.classList.remove('flex');
}
const unViewLogin = () => {
    modalLogin.classList.remove('flex')
}
const unViewRegister = () => {
    modalRegister.classList.remove('flex')
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
    unViewLogin()
})
closeRegister.addEventListener('click', () => {
    unViewRegister()
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

let index = 1;
let acountUsers = [
    {
        id: 1,
        name: 'Thảo Bắp',
        phone: '0987654321',
        password: '12345678'
    }
]

const submitLogin = $('.submit_login')
const submitRegister = $('.submit_register')
const acc = $('#acc')
const pass = $('#password')
const falseUsers = $$('.false_user')
const trueUsers = $$('.true_user')
const nameUser = $('.user_name')

let checkLogin = false
submitLogin.addEventListener('click', function(){
    acountUsers.forEach((value,index) => {
        if(acc.value === value.phone && pass.value === value.password){
            falseUsers.forEach((value) => {
                value.style.display = 'none'
            })
            trueUsers.forEach((value) => {
                value.style.display = 'block'
            })
            nameUser.innerText = value.name
            checkLogin = true
            unViewLogin()
        }else{
            alert('Sai tài khoản hoặc mật khẩu !')
        }
       
    })
})
const logOut = $('.log_out')
logOut.addEventListener('click', () => {
    falseUsers.forEach((value) => {
        value.style.display = 'flex'
    })
    trueUsers.forEach((value) => {
        value.style.display = 'none'
    })
    nameUser.innerText = null
})

const inputName = $('.input_name')
const inputPhone = $('.input_phone')
const inputPass = $('.input--password')
submitRegister.addEventListener('click', function(){
    let check = true;
    acountUsers.forEach((value) => {
        if(value.phone === inputPhone.value){
            check = false
            alert('Số điện thoại đã được đăng ký !');
        }
    })
    if(check){
        let acountNew = {
            id: ++index,
            name: inputName.value,
            phone: inputPhone.value,
            password: inputPass.value
        }
        acountUsers = [...acountUsers, acountNew]
        alert('Đăng ký thành công')
        unViewRegister()
    }
    console.log(acountUsers, index);
})

const noViewOrder = $('#no_view-order')
const viewOrder =$('#view-order')
const btnViewOrder = $('#btn_view-order')
const btnHome = $('#btn_home')

btnViewOrder.addEventListener('click', function(){
    viewOrder.style.display = 'block'
    noViewOrder.style.display = 'none'
    btnHome.classList.remove('page-state')
})

btnHome.addEventListener('click', function(){
    viewOrder.style.display = 'none'
    noViewOrder.style.display = 'block'
    this.classList.add('page-state')
})

