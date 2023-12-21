let slider=document.getElementById("range")
let slider_value= document.getElementById("range-value")
let passbox=document.getElementById("passbox")
let uppercase=document.getElementById("uppercase")
let lowercase=document.getElementById("lowercase")
let symbols=document.getElementById("symbols")
let numbers=document.getElementById("numbers")
let genBtn=document.getElementById("genBtn")

slider_value.textContent=slider.value
slider.addEventListener('input', ()=>{
    slider_value.textContent=slider.value
})

genBtn.addEventListener('click', ()=>{
    passbox.value=generator()
})
let upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChar="abcdefghijklmnopqrstuvwxyz"
let symbolChar= "@#$^&*"
let numberChar="0123456789"
function generator(){
    gen=''

    allChars=uppercase.checked? upperChar: ''
    allChars+=lowercase.checked? lowerChar: ''
    allChars+=symbols.checked? symbolChar: ''
    allChars+=numbers.checked? numberChar: ''

    if(allChars==0 || allChars==""){
        return gen
    }
    let i=0
    while(i!=slider.value){
        gen+= allChars.charAt(Math.floor(Math.random()*allChars.length))
        i++
    }
    return gen
}