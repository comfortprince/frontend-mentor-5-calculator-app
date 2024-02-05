// THEME TOGGLER
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

// ARITHMETIC CALCULATOR
let arithmetic_exptn = ""
// display(arithmetic_exptn)

const updateExpr = (key) => {
    switch (key) {
        case 'Enter':
            const LARGEST_ANSWER = 900000000000000000000

            if ( !validateArithmeticExpression(arithmetic_exptn) ) 
                return

            let answer = computeExpression(arithmetic_exptn)
            answer = answer > LARGEST_ANSWER ? Infinity : answer
            arithmetic_exptn = answer === Infinity ? "" : answer
            
            display(answer)

            break;
        
        case 'Escape':
            arithmetic_exptn = ""
            display(arithmetic_exptn)
            break;

        case 'Delete':
            if (arithmetic_exptn.length === 0)
                return 
        
            arithmetic_exptn = arithmetic_exptn.substring(0, arithmetic_exptn.length - 1)
            display(arithmetic_exptn)
            break;

        case 'Backspace':
            if (arithmetic_exptn.length === 0)
                return 
        
            arithmetic_exptn = arithmetic_exptn.substring(0, arithmetic_exptn.length - 1)
            display(arithmetic_exptn)
            break;
    
        default:
            let tempExpression = arithmetic_exptn + key
            arithmetic_exptn = validatePartialArithmeticExpression(tempExpression) ? tempExpression : arithmetic_exptn
            display(arithmetic_exptn)
            break;
    }
}

window.addEventListener('keydown', (event) => {
    const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '.', 'Backspace', 'Delete', 'Escape', 'Enter']
    const PRESSED_KEY = event.key

    if ( !KEYS.includes(PRESSED_KEY) )
        return

    updateExpr(PRESSED_KEY)
})

const computeExpression = (arithmetic_exptn) => {
    return eval(arithmetic_exptn)
}

function display(str) {
    const displaySpan = document.querySelector('#display')
    displaySpan.innerHTML = str

    const parentElement = displaySpan.parentElement
    parentElement.scrollLeft = parentElement.scrollWidth
}

const validateArithmeticExpression = (expression) => {
    const PATTERN = /^([-+]?[0-9]+(\.[0-9]+)?)([-+*/][0-9]+(\.[0-9]+)?)*$/
    return PATTERN.test(expression)
}

const validatePartialArithmeticExpression = (expression) => {
    const DUMMY_NUMERIC_VAL = "6"
    return validateArithmeticExpression(expression + DUMMY_NUMERIC_VAL)
}