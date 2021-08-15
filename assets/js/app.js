const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const inputSearch = $('.search-box__form-input')
const overplay = $('.overplay')
const headerRight = $('.header-right')
const menuRightItems = $$('.header-right__item')


//preloader
preloader = function(){
    setTimeout(function(){
        $('.loading').style.display = 'none'
    }, 1000)
}

//đóng, mở search pc
closeSearch = function(){
    $('.search-box').style.display = 'none'
}
openSearch = function(){
    $('.search-box').style.display = 'flex'  
    inputSearch.focus()
}


//đóng mở menu mobile
closeMenuMobile = function(){
    headerRight.classList.remove('active')
    overplay.classList.remove('active')
    document.body.style.overflow = 'auto'
}

showMenuMobile = function(){
    headerRight.classList.add('active')
    overplay.classList.add('active')
    document.body.style.overflow = 'hidden'
}

$('.header-mobile').onclick = function(){
    if (headerRight.clientHeight == 0){
        showMenuMobile()
    } else {
        closeMenuMobile()
    }
}

overplay.onclick = function(){
    closeMenuMobile()
}

//menu onclick
activeMenu = function(e){
    menuRightItems.forEach(item => {
        item.classList.remove('active');
    });
    e.classList.add('active');
    closeMenuMobile()
}

menuRightItems.forEach(item => {
    item.onclick = function(){
        activeMenu(this)
    }
})