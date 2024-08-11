let form = document.querySelector('#create-account-form');
let userName = document.getElementById('userName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
form.addEventListener("submit", e => {
    e.preventDefault();
validateForm();
});
function validateForm(){
    if(userName.value.trim()===''){
        setError(userName,'Name can not be blank');
    }else if(userName.value.trim().length<5||userName.value.trim().length>15)
        {
        setError(userName,'Name length should be between 5 and 15');
    }
    else{
    setSuccess(userName);
    }
    if(email.value.trim()===''){
        setError(email,' Provide email address');
    }else if(isEmailValid(email.value)){
        setSuccess(email);
    }
    else{
        setError(email,'Provide valid email address');
    }
    if(password.value.trim()===''){
        setError(password,'Password can not be blank');
    }
    else if(password.value.trim().length<6|| password.value.trim().length>20){
    setError(password,'Password length should be between 6 and 20');
    }else{
        setSuccess(password);
    }
    if(password2.value.trim()===''){
        setError(password2,'Password confirmation can not be blank');
    }else if(password2.value.trim()!==password.value.trim()){
        setError(password,'Password do not match');
    }else{
        setSuccess(password2);
    }

}
function setError(element,message){
    const parent=element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent=message;
}
function setSuccess(element){
    const parent=element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
function isEmailValid(email){
    const reg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
}