"use srtict"

const wall0=document.querySelector("#wall0"),
wall1=document.querySelector("#wall1"),
walloc=document.querySelector("#walloc"),
wlek0=document.querySelector("#wlek0"),
wlek1=document.querySelector("#wlek1"),
wlekloc=document.querySelector("#wlekloc"),
pl0=document.querySelector("#pl0"),
pl1=document.querySelector("#pl1"),
pl2=document.querySelector("#pl2"),
plloc=document.querySelector("#plloc"),
image=document.querySelector("#image"),
video=document.querySelector("#video"),
etc=document.querySelector("#etc"),


registerBtn = document.querySelector("#임시저장");

registerBtn.addEventListener("click",register);


function register(){

    const req = {
        wall0: wall0.value,
        wall1: wall1.value,
        walloc: walloc.value,
        wlek0: wlek0.value,
        wlek1: wlek1.value,
        wlekloc: wlekloc.value,
        pl0: pl0.value,
        pl1: pl1.value,
        pl2: pl2.value,
        plloc: plloc.value,

        image: image.value,
        video: video.value,
        etc: etc.value,
        
        


    };

   

    fetch("/page7_2",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("page7_2성공")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("page7_2 등록 중 에러 발생"));
    });


}

