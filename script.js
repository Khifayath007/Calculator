let string = "";
let num = 0;
let cl = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == "="){
            try{
                string = eval(string);
                document.querySelector(".display").innerHTML = string
            }
            catch(error){
                string = "error"
                document.querySelector(".display").innerHTML = string
            }
        }
        else if(e.target.innerHTML === "AC"){
            document.querySelector('.display').innerHTML = "";
            string = "";
        }
        else if(e.target.innerHTML === "DEL"){
            document.querySelector('.display').innerHTML = string.substring(0,string.length-1);
            string = string.substring(0,string.length-1)
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector(".display").innerHTML = string
        }
    })
})