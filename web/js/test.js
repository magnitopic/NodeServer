const check =document.getElementById("check")

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}
var a= localStorage.getItem('darkMode');

checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        check.checked = true;
        document.body.style.backgroundColor = "#181A1B";
    }else{
        check.checked = false;
        document.body.style.backgroundColor = "#FFF";
    }
}

function changeStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        localStorage.setItem('darkMode', "false");
        document.body.style.backgroundColor = "#FFF";
    } else{
        localStorage.setItem('darkMode', "true");
        document.body.style.backgroundColor = "#181A1B";
    }
}
