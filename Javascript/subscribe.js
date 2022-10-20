function validateName() {
    let valid = false;
    var name = document.forms['subform']['name'].value;
    let t=0;
    let f=0;

    for (let i = 0; i < name.length; i++) {
        if(name.charAt(i) >= 'a' && name.charAt(i) <='z')
        {
            t++;
        }
        else if(name.charAt(i) >= 'A' && name.charAt(i) <='Z')
        {
            t++;
        }
        else if(name.charAt(i) >= 0 && name.charAt(i) <=9){
            f++;
        }
    }
    if(t>=0 && f==0)
    {
        return true;
    }
    else if (f>=0)
    {
        alert("Name must use only alphabets");
        return false;
    }
    return valid;
}

function validateEmail(){
    let valid = false;
    let email = document.getElementById('email').value;
    let arrEmail = email.split('@')
    if(arrEmail.length !=2)
    {
        alert("Wrong Email")
    }
    else if(arrEmail[0].length<=1)
    {
        alert("Wrong Email")
    }
    else if(arrEmail[1] != 'gmail.com')
    {
        alert('Email must ends with @gmail.com')
    }
    else
    {
    valid = true;
    }
    return valid;
}

function validatePhoneNumber(){
    let valid = false;
    var phonenumber = document.getElementById('phonenumber').value;

    if(phonenumber == "" || isNaN(phonenumber)){
        alert('Phone number must be filled with numbers')
    }
    else{
        valid = true;
    }
    return valid;
}

function validateCountry(){
    let valid = false;
    let e = document.getElementById("country");
    let optionSelIndex = e.options[e.selectedIndex].value;
    let optionSelectedText = e.options[e.selectedIndex].text;
    if(optionSelIndex != 0)
    {
        valid = true;
    }
    else if (optionSelIndex == 0)
    {
        alert('Choose your country')
    }
    else 
    {

    }
    return valid;
    }

function validateCheckBox(){
    let valid = false;
    let terms = document.getElementById('agree');
    if(!terms.checked)
    {
        alert("Don't forget to check the terms of agreement")
    }
    else
    {
        valid = true;
    }
    return valid;
}

let form = document.getElementById('subform')
form.addEventListener('submit', function(e){
    nameValidation = validateName(),
    emailValidation = validateEmail(),
    phoneValidation = validatePhoneNumber(),
    countryValidation = validateCountry(),
    checkboxValidation = validateCheckBox();

if (true == nameValidation && true == emailValidation && true == phoneValidation
    && true == countryValidation && true == checkboxValidation) {
        alert("Subscription Successful")
}
else {
    e.preventDefault();
}
})