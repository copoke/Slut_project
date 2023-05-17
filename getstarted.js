document.addEventListener("DOMContentLoaded", function () {


const rightContainer = document.getElementById("rightPanel");
const leftContainer = document.getElementById("leftPanel");
const arrow = document.getElementById("arrow");
const subheader = document.getElementById("subheader");
const loginBelow = document.getElementById("loginBelow")
const signUp = document.getElementById("signUp")
const draggable = document.getElementById("draggablePanel")
const formContainer = document.getElementById("formContainer")
const formFlex = document.getElementsByClassName("formFlex")
const form = document.getElementById("form")
const email = document.getElementById("emailContainer")
const ConfirPassword = document.getElementById("confirmPassword")
const verifyLock = document.getElementById("verifyLock")
const passwordInput = document.getElementById("passwordInput")
let isPressed = false;
var isExpand = false;
var isDown = false;
var sliderValue = 0

function expand(option) {
    isExpand = true
    draggable.style.display = "block"
    rightContainer.style.width = "100%";
    leftContainer.style.width = "0%";
    arrow.style.opacity = "1";
    arrow.style.display = "flex";
    arrow.style.cursor = "pointer";
    formContainer.style.display="flex"
    loginBelow.classList.add('animate__fadeOutLeft');
    signUp.classList.add('animate__fadeOutLeft');
    loginBelow.removeAttribute("onclick")
    if (option === login) {
        subheader.style.color = "black";
        email.style.display = "none"
        subheader.style.userSelect = "auto";
        ConfirPassword.style.display = "none"
        passwordInput.required = false
    }else {
        email.style.display = "block"
    }
    for (var i = 0; i < formFlex.length; i++) {
        formFlex[i].style.animationDelay = formFlex[i].dataset.animationDelay
        formFlex[i].classList.add('animate__fadeInDown')
    }
}

loginBelow.addEventListener("click", function(){
    expand(login)
})
arrow.addEventListener("click", collapse)
signUp.addEventListener("click", expand)

function collapse() {
    passwordInput.required = true
    draggable.style.display = "none"
    rightContainer.style.width = "30%";
    leftContainer.style.width = "70%";
    arrow.style.opacity = "0";
    subheader.style.userSelect = "none"
    subheader.style.color = "transparent";
    loginBelow.classList.add('animate__fadeInLeft');
    loginBelow.classList.remove('animate__fadeOutLeft');
    signUp.classList.add('animate__fadeInLeft');
    signUp.classList.remove('animate__fadeOutLeft');
    loginBelow.style.display = "flex"
    signUp.style.display = "flex"
    formContainer.style.display = "none"
    loginBelow.setAttribute('onclick','expand(login)')
    signUp.setAttribute('onclick', 'expand()')
    ConfirPassword.style.display = "block"
    for (var i = 0; i < formFlex.length; i++) {
        formFlex[i].classList.remove('animate__fadeInDown')
    }


}

const end = () => {
    isDown = false;
    console.log("end")
    sliderValue = 0
    draggable.style.cursor = "grab"
    
}

const start = (e) => {
    isDown = true;
    draggable.style.cursor = "grabbing";
}

const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    sliderValue += 1
    console.log(sliderValue)
    draggable.style.cursor = "grab"
    if(sliderValue == 10){
        collapse()
    }
    
}

draggable.addEventListener("mousedown", (e) => {
    if (isExpand == true) {
        isPressed = true;

    }
});

(() => {
    draggable.addEventListener('mousedown', start);
    draggable.addEventListener('touchstart', start);

    draggable.addEventListener('mousemove', move);
    draggable.addEventListener('touchmove', move);

    draggable.addEventListener('mouseleave', end);
    draggable.addEventListener('mouseup', end);
    draggable.addEventListener('touchend', end);
})();


var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword")

function validatePassword(){
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity = ("Passwords don't match")
    }
    else{
        confirmPassword.setCustomValidity = ("")
    }
}

password.onchange = validatePassword
confirmPassword.onkeyup = validatePassword
})