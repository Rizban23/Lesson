function validate(){
let n = document.getElementById("name").value
let login = document.getElementById("login").value
let pwd = document.getElementById("password").value
let pwd2 = document.getElementById("password-2").value
let message = document.getElementById('message')
console.log(pwd,pwd2)
let email = document.getElementById("email").value
let code = document.getElementById("code").value
let submit = document.getElementById("button")


    if(n == ''){
        alert('Atynyzdy jazynyz');
        return false;
    }
    if(!isNaN(n)){
        alert('san jazuuga bolboit')
    }
    
    // Логин
    if(login == ''){
        alert('Atynyzdy jazynyz');
        return false;
    }
    if(!isNaN(login)){
        alert('san jazuuga bolboit')
    }

    // email
    if(email == ''){
        alert('email jazynyz');
        return false;
    }
    // pwd
    if(pwd.length != 0){
        if(pwd == pwd2){
            message.textContent = 'Parol dal keldi';
            message.style.color = 'green'
        }
    else{
   message.textContent = 'Parol dal kelbeyt';
   message.style.color = 'red'

    }
}
else{
    alert('parol bow bolbow kerek')
}

// code
if(code == ''){
    alert('sandardy jazynyz');
    return false;
}

document.getElementById('code1').innerHTML = Math.floor(Math.random() *9)
document.getElementById('code2').innerHTML = Math.floor(Math.random() *9)
document.getElementById('code3').innerHTML = Math.floor(Math.random() *9)
document.getElementById('code4').innerHTML = Math.floor(Math.random() *9)
document.getElementById('code5').innerHTML = Math.floor(Math.random() *9)
document.getElementById('code6').innerHTML = Math.floor(Math.random() *9)
}