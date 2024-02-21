const inputs = document.querySelectorAll('.otp-card-inputs input')
const button = document.querySelector('.otp-card button')
inputs.forEach(input =>{
let LastInputStatus = 0
input.onkeyup = (e) =>{
    const currentElement = e.target
    const nextElement = input.nextElementSibling
    const prevElement = input.previousElementSibling

    if(prevElement && e.keyCode === 8){
        if(LastInputStatus === 1){
            prevElement.value = ''
            prevElement.focus()
        }
        button.setAttribute('disabled', true)
        LastInputStatus = 1
    }else{
        const reg = /^[0-9]+$/
        if(!reg.test(currentElement.value)){
            currentElement.value = currentElement.value.replace(/\D/g, '')
        }else if(currentElement.value){
            if(nextElement){
                nextElement.focus()
            }else{
                button.removeAttribute('disabled')
                LastInputStatus = 0
            }
        }
    }
}

})