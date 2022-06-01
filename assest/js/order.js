const inputStart = $('.input-time-start')
const inputEnd = $('.input-time-end')
const sumPrice = $('.sum-price')
const btn = $('.btn-order-yard')
const price = $('.coin-item')





const inputs = $$('.input')
const phone = $('.phone-user')


const showError = (input, message) => {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    input.classList.add('error')
    small.innerText = message
}


function showSucces(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    input.classList.remove('error')
    small.innerText = ''
}



function checkEmptyError(listInputs){
    let ischeckEmpty = true;
    listInputs.forEach((input) => {
        input.value = input.value.trim()
        if(!input.value){
            showError(input,'Không được để trống !');
            ischeckEmpty = false;
        }else {
            showSucces(input)
        }
    })
    return ischeckEmpty;
}
function checkPhoneNumber(input){
    const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
    input.value = input.value.trim()
    if(regexPhone.test(input.value)){
        showSucces(input)
        return true;
    }else {
        showError(input, 'Số điện thoại không hợp lệ !')
        return false;
    }
}



[...inputs].forEach((input, index) => {
    input.addEventListener('blur', () => {
        input.value = input.value.trim()
        console.log('test');
       
        if(!input.value){
            showError(input,'Không được để trống !');
        }else if(index ===2 ){
            checkPhoneNumber(input)
        }else {
            showSucces(input)
        }
        
    })
});
[...inputs].forEach((input, index) => {
    input.addEventListener('focus', () => {
       
        showSucces(input)
    })
    
});





inputs[5].addEventListener('blur', () => {
    const coin = Number(price.innerText)
    let sumCoin = 0;
    const a = inputStart.value.split(':')
    const b = inputEnd.value.split(':')
    const startTime = a.map(value => Number(value))
    const endTime = b.map(value => Number(value))
    let hours = endTime[0] - startTime[0]
    let mins = endTime[1] - startTime[1]

    if(endTime[0] > startTime[0]){
        sumCoin = coin*hours + coin*mins/60;
    }else if(endTime[0] === startTime[0]){
        if(mins > 30){
            sumCoin = coin*mins/60;
        }else {
            sumCoin = coin*30/60;
        }
    }else {
        alert('Thời gian thuê không hợp lệ !');
    }
    $('.sum-price').innerText = sumCoin.toFixed()+ 'đ'

})



const renderTable = (table, listOrder) => {
    let data = [`
        <tr>
            <th>Tên sân</th>
            <th>Loại sân</th>
            <th>Thời gian</th>
            <th>Ngày đặt</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th></th>
        </tr>
    `]
    let htmls = listOrder.map((value, index) => {
        return `
            <tr>
                <td>${value.name}</td>
                <td>${value.category}</td>
                <td>${value.time}</td>
                <td>${value.date}</td>
                <td>${value.price}</td>
                <td>${value.sumPrice}</td>
                <td data-set = ${index} class="delete-item-order">
                    Xoá hoá đơn đặt
                </td>
            </tr>
        `
    })
    data = [...data, htmls]
    table.innerHTML = data.join('')
   
} 

let listOrder = [
    
]
const tableOrder = $('.table-order')
btn.addEventListener('click', function(e){
    e.stopPropagation()
    
    let isCheck =  checkEmptyError([...inputs])
    let isCheckPhoneNumber = checkPhoneNumber(inputs[2])
    if(isCheck && isCheckPhoneNumber){
        alert('Xử lí dữ liệu ')
        let data = {
            
            name: $('.name-yard').innerText,
            category: $('.category-yard').innerText,
            date: inputs[3].value,
            time: inputs[4].value,
            price : $('.coin-item').innerText + 'đ',
            sumPrice: $('.sum-price').innerText
        }
        listOrder = [...listOrder, data]
        renderTable(tableOrder, listOrder)

    }else {
        console.log('vẫn có lỗi');
    }
})
tableOrder.addEventListener('click', function(e){
    const deleteItem = e.target.closest('.delete-item-order')
    if(deleteItem){
        const index = deleteItem.dataset.set 
        listOrder.splice(index, 1)
        renderTable(tableOrder, listOrder)
    }
})

