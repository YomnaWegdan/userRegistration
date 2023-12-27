var userName = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var btn = document.getElementById('btn')
var error = document.getElementById('error')
var errorEmail = document.getElementById('errorEmail');
var success = document.getElementById('Success')
var invalid = document.getElementById('invalid')



btn.addEventListener('click' , function(){
if(userName.value.length === 0 || password.value.length === 0 || email.value.length === 0 ) {
    error.classList.replace('d-none' , 'd-block');
    errorEmail.classList.replace('d-block', 'd-none');
    success.classList.replace('d-block', 'd-none');
}
else{
    error.classList.replace(  'd-block' , 'd-none') ;
        if((validationName() == true && validationEmail() == true && validationPassword() == true)){
        addData();
        clearData();
        invalid.classList.replace('d-block' , 'd-none')
        }
        else{
            invalid.classList.replace('d-none' , 'd-block');
        }
}
})


var dataList = [];

if(localStorage.getItem('Data') != null){
    dataList= JSON.parse(localStorage.getItem('Data'));
    console.log(dataList)
}



function addData(){
    var data = {
        userName : userName.value,
        email : email.value,
        password : password.value
    }

    // Check if the email already exists in dataList
    var emailExists = dataList.some(function (item) {
        return item.email === data.email;
    });

    if (emailExists) {
       
        errorEmail.classList.replace('d-none', 'd-block');
        success.classList.replace('d-block' , 'd-none')

    } else {
        errorEmail.classList.replace('d-block', 'd-none');
        success.classList.replace('d-none' , 'd-block')
        dataList.push(data);
        localStorage.setItem('Data', JSON.stringify(dataList));
    }
}

function clearData(){
    userName.value= '';
    email.value = '';
    password.value = '';
}

function validationName (){
    var text = userName.value;  
    var regexName = /^[A-Za-z]{3,20}$/; 
    if(regexName.test(text) == true){  
        userName.classList.add('is-valid'); 
        userName.classList.remove('is-invalid');
        return true;
    }
    else{ 
        userName.classList.add('is-invalid'); 
        userName.classList.remove('is-valid');
        return false; 
    }
}

userName.oninput= function(){
    validationName();
}

function validationEmail (){
    var text = email.value;  
    var regexName = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regexName.test(text) == true){  
        email.classList.add('is-valid'); 
        email.classList.remove('is-invalid');
        return true;
    }
    else{ 
        email.classList.add('is-invalid'); 
        email.classList.remove('is-valid');
        return false; 
    }
}

email.oninput= function(){
    validationEmail();
}


function validationPassword (){
    var text = password.value;  
    var regexName = /^(\S){5,}$/;
    if(regexName.test(text) == true){  
        password.classList.add('is-valid'); 
        password.classList.remove('is-invalid');
        return true;
    }
    else{ 
        password.classList.add('is-invalid'); 
        password.classList.remove('is-valid');
        return false; 
    }
}

password.oninput= function(){
    validationPassword();
}




