const offering_type = document.getElementById("offering_type"),
area = document.getElementById("area"),
floor = document.getElementById("floor"),
room = document.getElementById("room");
restroom = document.getElementById("restroom");
duplex = document.getElementById("duplex");
month_money = document.getElementById("money1");
month_control = document.getElementById("money2");
info = document.getElementById("add");
offering_solution = document.getElementById("offering_solution"),
register = document.getElementById("register");
register.addEventListener("click",register_function);


const UserStorage = require("");
//계약서용코드
const obj = {
    area : area.value,
        floor : floor.value,
        room : room.value,
        duplex : duplex.value,
        restroom : restroom.value,
        month_money : month_money.value,
        month_control : month_control.value,
        offering_type : offering_type.value,
        offering_solution : offering_solution.value,
        info : info.value,
}

module.exports=obj

function register_function(){


    if(duplex.checked) {
        duplex.value = 'y'}
        else {
            duplex.value = 'N'
        }


    const req = {
        area : area.value,
        floor : floor.value,
        room : room.value,
        duplex : duplex.value,
        restroom : restroom.value,
        month_money : month_money.value,
        month_control : month_control.value,
        offering_type : offering_type.value,
        offering_solution : offering_solution.value,
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

