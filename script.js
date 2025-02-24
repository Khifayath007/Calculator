let buttons = document.querySelectorAll(".button")
const calculate  = (btnValue) => {
    console.log(btnValue);
} 
buttons.forEach(button => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
