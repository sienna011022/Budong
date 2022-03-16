const area = document.getElementById("area"),
floor = document.getElementById("floor"),
room = document.getElementById("room");
restroom = document.getElementById("restroom");
month_money= document.getElementById("money1");
month_control = document.getElementById("money2");
info = document.getElementById("add");
register = document.getElementById("register");
register.addEventListener("click",register_function);

function register_function(){
    //return console.log(info.value)
    const req = {
        area : area.value,
        floor : floor.value,
        room : room.value,
        restroom : restroom.value,
        month_money : month_money.value,
        month_control : month_control.value,
        info : info.value,
    };

    fetch("/product_register",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("상품등록완료")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("상품 등록 중 에러 발생"));
    });


}

