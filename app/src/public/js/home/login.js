"use srtict"

const id = document.querySelector("#id"),
 psword = document.querySelector("#psword"),
 loginBtn = document.querySelector("#button");
loginBtn.addEventListener("click",login);



function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    
    };
    fetch("/login",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }) // 다시 response 보낸거 여기서 받아줌
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            //로그인 success시 이동할 페이지
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });


}

