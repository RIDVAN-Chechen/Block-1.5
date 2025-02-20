//Slider
if(window.innerWidth < 768){
    const swiper = new Swiper('.brands__container',{
        slidesPerView:1.25,
        loop:true,
        pagination:{
            el:'.brands__pagination',
            clickable: true,
        },
        breakpoints:{
            375:{slidesPerView: 1.5},
            425:{slidesPerView: 1.7},
            580: {slidesPerView: 2},
            720:{slidesPerView:3},
        },    
    });
};



//Show more

const showMore = document.querySelector('.brands__show-more');
const wrapper = document.querySelector('.brands__wrapper');
let showerText = document.querySelector('.read-more__text');


showMore.addEventListener('click',() => {
    if(showerText.textContent != 'Скрыть'){
        wrapper.classList.add('brands__wrapper_showed');
        showMore.classList.add('read-more_opened');
        showerText.textContent = 'Скрыть';
    }else{
        wrapper.classList.remove('brands__wrapper_showed');
        showMore.classList.remove('read-more_opened');
        showerText.textContent = 'Показать все';
    }
});
