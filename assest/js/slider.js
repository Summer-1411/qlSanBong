const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPrev = $('.btn-prev');
const btnNext = $('.btn-next');

/*menu 2 */

const handleSilder = (value) => {
    const sliderFirst = document.querySelector('.slider-item.index0')
    const sliderSecond = document.querySelector('.slider-item.index1')
    const sliderThirst = document.querySelector('.slider-item.index2')
    const sliderFouth = document.querySelector('.slider-item.index3')
    const sliderFive = document.querySelector('.slider-item.index4')
    const sliderSix = document.querySelector('.slider-item.index5')
    const sliderSeven = document.querySelector('.slider-item.index6')
    const sliderEight = document.querySelector('.slider-item.index7')



    if(value === 1){
        sliderFirst.classList.replace('index0', 'index7')
        sliderSecond.classList.replace('index1', 'index0')
        sliderThirst.classList.replace('index2', 'index1')
        sliderFouth.classList.replace('index3', 'index2')
        sliderFive.classList.replace('index4', 'index3')
        sliderSix.classList.replace('index5', 'index4')
        sliderSeven.classList.replace('index6', 'index5')
        sliderEight.classList.replace('index7', 'index6')
    }else if(value === -1){
        sliderFirst.classList.replace('index0', 'index1')
        sliderSecond.classList.replace('index1', 'index2')
        sliderThirst.classList.replace('index2', 'index3')
        sliderFouth.classList.replace('index3', 'index4')
        sliderFive.classList.replace('index4', 'index5')
        sliderSix.classList.replace('index5', 'index6')
        sliderSeven.classList.replace('index6', 'index7')
        sliderEight.classList.replace('index7', 'index0')
    }

    
}
btnPrev.addEventListener("click", () => {
    handleSilder(-1)
})
btnNext.addEventListener("click", () => {
    handleSilder(1)
})
setInterval(() => {handleSilder(1)}, 4000)

