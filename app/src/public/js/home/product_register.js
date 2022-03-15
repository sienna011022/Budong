const area = document.getElementById("area").value,
floor = document.getElementById("floor").value,
room = document.getElementById("room").value;
restroom = document.getElementById("restroom").value;
month_money= document.getElementById("money1").value;
month_control = document.getElementById("money2").value;
info = document.getElementById("add").value;
register = document.getElementById("register");
register.addEventListener("click",register_function);

function register_function(){


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

