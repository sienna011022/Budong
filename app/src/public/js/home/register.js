"use srtict"

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
 psword = document.querySelector("#psword"),
 confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",register);


function register(){
    const req = {
        id : id.value,
        name : id.name,
        psword : psword.value,
        confirmPsword : confirmPsword.value
    
    };
    console.log(req);

    fetch("/register",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            //로그인 success시 이동할 페이지
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });


}

