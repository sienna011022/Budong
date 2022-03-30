"use srtict"

const numa = document.querySelector("#numa"),
roada = document.querySelector("#roada"),
 landt = document.querySelector("#landt"),
 landarea = document.querySelector("#landarea"),
 appvalue = document.querySelector("#appvalue"),
 area = document.querySelector("#area"),
 price = document.querySelector("#price"),
 buse = document.querySelector("#buse"),
 floorr = document.querySelector("#floorr"),
 landr = document.querySelector("#landr"),
 struc = document.querySelector("#struc"),
 roof = document.querySelector("#roof"),
 lig = document.querySelector("#lig"),
 ratio = document.querySelector("#ratio"),
 confirm = document.querySelector("#confirm"),
 date = document.querySelector("#date"),
 use = document.querySelector("#use"),
 use1 = document.querySelector("#use1"),
 use2 = document.querySelector("#use2"),
 mltry = document.querySelector("#mltry"),
 chktime = document.querySelector("#chktime"),
registerBtn = document.querySelector("#물건등록");

registerBtn.addEventListener("click",register);
function register(){

    const req = {
        numa : numa.value,
        roada : roada.value,
        landt : landt.value,
        landarea : landarea.value,
        appvalue : appvalue.value,
        area : area.value,
        price : price.value,
        buse : buse.value,
        floorr : floorr.value,
        landr : landr.value,
        struc : struc.value,
        roof : roof.value,
        lig : lig.value,
        ratio : ratio.value,
        confrim : confirm.value,
        date : date.value,
        use : use.value,
        use1 : use1.value,
        use2 : use2.value,
        mltry : mltry.value,
        chktime : chktime.value,
    
    


    };

   

    fetch("/page5_2",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("page5_2성공")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("page5_2 등록 중 에러 발생"));
    });


}

