const THEME_BTN_1 = document.querySelector('#theme-1-btn');
const THEME_BTN_2 = document.querySelector('#theme-2-btn');
const THEME_BTN_3 = document.querySelector('#theme-3-btn');

const THEME_BTNS = [ THEME_BTN_1, THEME_BTN_2, THEME_BTN_3]

const theme1Listener = (event) => { themeToggler(event.target, "theme-1") }
const theme2Listener = (event) => { themeToggler(event.target, "theme-2") }
const theme3Listener = (event) => { themeToggler(event.target, "theme-3") }

THEME_BTN_1.addEventListener('click', theme1Listener)
THEME_BTN_2.addEventListener('click', theme2Listener)
THEME_BTN_3.addEventListener('click', theme3Listener)

function themeToggler(btn, themeId) {
    let themeElements = document.querySelectorAll('[data-theme]')
    
    themeElements.forEach((el) => {
        el.dataset.theme = themeId
    })

    for (let i = 0; i < THEME_BTNS.length; i++) {
        if(THEME_BTNS[i].id !== btn.id){
            THEME_BTNS[i].style.opacity = "0"
        }else{
            THEME_BTNS[i].style.opacity = "1"
        }
    }
}

themeToggler(THEME_BTN_1, "theme-1")