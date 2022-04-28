var nameInput = document.getElementById('name');

nameInput.addEventListener('focus', validateNameInput);
nameInput.addEventListener('blur', validateNameInput);
nameInput.addEventListener('input', validateNameInput);

function validateNameInput(event){
    console.log('main input blur');
    var nameInputValue = event.target.value;
    console.log('value:', nameInputValue);

    var nameInputError = document.getElementById('name-error');

    if(nameInputValue == '') return;

    if (nameInputValue.length < 2){
        nameInputError.innerText = 'ERROR! Name should have atleast 2 characters';
    }else{
        nameInputError.innerText='';
    }
    if (nameInputValue.length > 15){
        nameInputError.innerText = 'ERROR! Name should not have more than 15 characters';
    }
}

var emailInput = document.getElementById('email');

emailInput.addEventListener('focus', validateEmailInput);
emailInput.addEventListener('blur', validateEmailInput);

function validateEmailInput(event){
    var emailInputValue = event.target.value;
    var emailInputError = document.getElementById('email-error');

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //should be required and throw error if empty
    if(emailInputValue == ''){
        emailInputError.innerText = 'ERROR! Must enter email address';
    }

    if(!emailInputValue.match(mailformat)){
        emailInputError.innerText = 'ERROR! Invalid email address';
    }else{
        emailInputError.innerText = '';
    }
    
}

var passwordInput = document.getElementById('password');
var confirmpasswordInput = document.getElementById('confirmpassword');

passwordInput.addEventListener('focus', validatePasswordInput);
passwordInput.addEventListener('blur', validatePasswordInput);

function validatePasswordInput(event){
    var passwordInputValue = event.target.value;
    var passwordInputError = document.getElementById('password-error');

    if(passwordInputValue == ''){
       passwordInputError.innerText = 'ERROR! Must enter a new password';
    }

    if(passwordInputValue.length < 6){
        passwordInputError.innerText = 'Password must contain at least six characters';
    }else{
        passwordInputError.innerText = '';
    }
}

confirmpasswordInput.addEventListener('focus', validateConfirmpasswordInput);
confirmpasswordInput.addEventListener('blur', validateConfirmpasswordInput);

function validateConfirmpasswordInput(event){
    var confirmpasswordInputValue = event.target.value;
    var confirmpasswordInputError = document.getElementById('confirmpassword-error');
    var password = document.getElementById('password').value;

    if(confirmpasswordInputValue == ''){
        confirmpasswordInputError.innerText = 'ERROR! Must enter a new password';
     }

    if(!confirmpasswordInputValue.match(password)){
        confirmpasswordInputError.innerText = 'Please confirm password';
    }else{
        confirmpasswordInputError.innerText = '';
    }
}