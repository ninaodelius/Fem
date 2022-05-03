function Validate(){
var emailInput = document.getElementById('email');

emailInput.addEventListener('focus', validateEmailInput);
emailInput.addEventListener('blur', validateEmailInput);

function validateEmailInput(event){
    var emailInputValue = event.target.value;
    var emailInputError = document.getElementById('email-error');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailInputValue == ''){
        emailInputError.innerText = 'Must enter email address';
    }

    if(!emailInputValue.match(mailformat)){
        emailInputError.innerText = 'Invalid email address';
    }else{
        emailInputError.innerText = '';
    }
    
}
}
export default Validate;