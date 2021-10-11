const submit_btn = document.querySelector('.submit_btn')
const span_info = document.querySelector('.info')
const error_icon = document.querySelector('.error_icon')
const input = document.querySelector('.mail_input')
const mail_value = input.value

const formHandler = () => {
    if (input.value.includes('@') && input.value.includes('.com') && !input.value.includes(' ') || input.value.includes('@') && input.value.includes('.pl') && !input.value.includes(' ')) {
        span_info.textContent = "Success!"
        span_info.classList.add('success')
        input.value = ''
    } else if (input.value) {
        console.log('error')
        span_info.textContent = "Please provide a vaild email!"
        error_icon.classList.add('show')
    }
}

const focusHandler = () => {
    span_info.textContent = ''
    span_info.classList.remove('success')
    error_icon.classList.remove('show')
}

submit_btn.addEventListener('click', () => formHandler())
input.addEventListener('focus', () => focusHandler())