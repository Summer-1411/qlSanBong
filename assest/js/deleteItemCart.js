var number = $('.search__shopping--notice');
var itemCart = $$('.cart__container--item');
var deleteCart = $$('.item__delete');
var myCart = $('.my__cart');
var cartContainer = $('.cart__container');
// var numberCart = $('.search__shopping--notice');


var j = 0;
var leng = itemCart.length;
// number.innerText = leng;
if(leng != 0){
    cartContainer.classList.add('have__cart');
}else {
    cartContainer.classList.remove('have__cart');
    myCart.classList.add('my__cart--noCart');
}

//Chức năng xoá sản phẩm
for(var i in itemCart){
    itemCart[i].onclick = function(e){
        console.log(i);
        if(e.target.closest(".item__delete")){
            this.classList.add('none');
            
           leng--;
           console.log(leng);
        //    number.innerText = leng;
           if(leng == 0){
               cartContainer.classList.remove('have__cart');
               myCart.classList.add('my__cart--noCart');
               numberCart.style.display = "none";
            }
        }
    }
}
