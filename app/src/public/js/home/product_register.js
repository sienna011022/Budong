

// const area = document.querySelector("#area"),
// floor = document.querySelector("#floor"),
// room = document.querySelector("#room");
// restroom = document.querySelector("#restroom");
// month_money= document.querySelector("#money1");
// month_control = document.querySelector("#money2");
// info = document.querySelector("#add");
// register = document.querySelector("#register");
// register.addEventListener("click",register);


document.querySelector("register").addEventListener("click", function () {
    var area = document.querySelector
("area");
    var floor = document.querySelector
("floor");

    console.log(area.value); // 데이터 값
    console.log(floor.value);
});



// function register(){


//     const req = {
//         area : area.value,
//         floor : floor.value,
//         room : room.value,
//         restroom : restroom.value,
//         month_money : month_money.value,
//         month_control : month_control.value,
//         info : info.value,
//     };


//     fetch("/product_register",{
//         method : "POST",
//         headers :{
//             "Content-Type" : "application/json",
//         },
//         body : JSON.stringify(req),
//     })
//         .then((res) => res.json())
//         .then((res) => {
//             if(res.success){
//             console.log("상품등록완료")
//         }else{
//             alert(res.msg);
//         }
//     })
//     .catch((err) => {
//         console.error(new Error("상품 등록 중 에러 발생"));
//     });


// }

