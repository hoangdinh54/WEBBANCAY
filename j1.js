function signup(e){
    event.preventDefault();
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var user={
        username : username,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    if(document.getElementById('username').value == null && document.getElementById('password').value == null && 
    document.getElementById('confirmpassword').value == null){
        alert("Dang ky khong thanh cong moi nhap tai khoan va mat khau")
        window.location.href="SignUp.html"
    }
    else if(document.getElementById('password').value ==document.getElementById('confirmpassword').value){
        alert("Dang ky thanh cong!")
        window.location.href="login.html"
    }
    else{
        alert("Dang ky khong thanh cong mat khau khong trung khop")
        window.location.href="SignUp.html"
    }
}
function login(e){
    event.preventDefault();
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;   
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user==null){
        alert("Moi nhap Tài Khoản và Mật khẩu")
        window.location.href="login.html"
    }
    else if(username == data.username && password == data.password){
        alert("Dang nhap thanh cong")
        window.location.href="index.html"
    }
    else{
        alert("Dang nhap khong thanh cong: sai tai khoan hoac mat khau")
        window.location.href="login.html"
    }
}
