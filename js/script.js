function replaceName() {
    let username = prompt("halo, siapakah nama anda?", "");
    document.getElementById("username").innerHTML = username
}

replaceName();

function validateForm(){
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["messages-form"]["birthdate"].value;
    const gender = document.forms["messages-form"]["jenkel"].value;
    const messages = document.forms["messages-form"]["messages"].value;
    
    if(name == "" || birthDate == ""|| gender==""||messages==""){
    alert("Tidak boleh ada yang kosong");
    return false;
    }
    
    setSenderUI(name, birthDate, gender, messages);
    return false;
    
    
    }
    function setSenderUI(name, birthDate, gender, messages){
        document.getElementById("sender-fullname").innerHTML = name;
        document.getElementById("sender-birthdate").innerHTML= birthDate;
        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-messages").innerHTML=messages;
    }