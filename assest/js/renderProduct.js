
const renderProduct = $('.render-product')
const ListYard = [
    {
        name: 'Sân A1',
        category: 7,
        state: 0,
        status: 'Sắp có',
        price: 500000,
        img: './assest/img/main/img0.jpg'
    },
    {
        name: 'Sân A2',
        category: 7,
        state: 1,
        status: 'Sân trống',
        price: 400000,
        img: './assest/img/main/img1.jpg'
    },
    {
        name: 'Sân C1',
        category: 11,
        state: 0,
        status: 'Sắp có',
        price: 700000,
        img: './assest/img/main/img2.jpg'
    },
    {
        name: 'Sân C2',
        category: 11,
        state: 0,
        status: 'Sắp có',
        price: 700000,
        img: './assest/img/main/img3.jpg'
    },
    {
        name: 'Sân B1',
        category: 5,
        state: 1,
        status: 'Sân trống',
        price: 300000,
        img: './assest/img/main/img4.jpg'
    },
    {
        name: 'Sân B2',
        category: 5,
        state: -1,
        status: 'Bận',
        price: 350000,
        img: './assest/img/main/img5.jpg'
    },
    {
        name: 'Sân A3',
        category: 7,
        state: -1,
        status: 'Bận',
        price: 450000,
        img: './assest/img/main/img6.jpg'
    },
    {
        name: 'Sân A4',
        category: 7,
        state: 1,
        status: 'Sân trống',
        price: 480000,
        img: './assest/img/main/img7.jpg'
    }
]

const classElement = function(value){
    let result = 'state_item ready';
    if(value === 0){
        result = 'state_item short-time'
    }else if(value === -1){
        result = 'state_item busy'
    }
    return result
}

console.log(ListYard);


const htmls = ListYard.map((value) => {
    return `
    
    <div class="col l-4 m-6 c-12">
        <div class="yard-item">
            <div class="yard-item-img" style="background-image: url('${value.img}')">
                
                <div class="yard-info">
                    <div class="overlay"></div>
                    <div class= "${classElement(value.state)}">
                        ${value.status}
                    </div>
                </div>
            </div>
            <div class="yard-item-info">
                <div class="yard-item-name">
                    ${value.name}
                </div>
                <div class="item-category">
                    <div class="categoy-title">Loại sân</div>
                    <div class="category-number">
                        Sân ${value.category}
                    </div>
                </div>
                <div class="yart-item-vote">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <div class="price-item">
                    <div class="price-title">
                        Giá : 
                    </div>
                    <div class="price-number">${value.price} đ/h</div>
                </div>
                <div  class= "${value.state === 1 ? "main-order btn-oder" : "main-order busy-item"}">
                    Đặt sân
                </div>
            </div>
        </div>
    </div>
    `
})
renderProduct.innerHTML = htmls.join('');

const btnOders = $$('.btn-oder')
const yard = $('.order-yard')


btnOders.forEach(value => {
    value.addEventListener('click', () => {
        let parent =  value.parentElement;
        let nameYard = parent.querySelector('.yard-item-name').innerText
        let categoryYard = parent.querySelector('.category-number').innerText
        let priceYard = parent.querySelector('.price-number').innerText;
        console.log(nameYard, categoryYard, priceYard);
        

        const name = $('.name-yard')
        const category = $('.category-yard')
        const price = $('.price-yard')

        name.innerText = nameYard
        category.innerText = categoryYard
        price.innerText = priceYard

        yard.classList.add('view-order-yard')
    })
})

const close = $('.heading-icon-close')

close.addEventListener('click', () => {
    yard.classList.remove('view-order-yard')
})

const btnBusy = $$('.busy-item')

btnBusy.forEach(value => {
    value.addEventListener('click', () => {
        alert('Nay sân này anh bao rồi cu :))');
    })
})
