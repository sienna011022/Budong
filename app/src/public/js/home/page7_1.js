"use srtict"

const waterN = document.querySelector("#waterN"),
waterY=document.querySelector("#waterY"),
waterloc=document.querySelector("#waterloc"),
wquant0=document.querySelector("#wquant0"),
wquant1=document.querySelector("#wquant1"),
wqloc=document.querySelector("#wqloc"),


elec0=document.querySelector("#elec0"),
elec1=document.querySelector("#elec1"),
elecloc=document.querySelector("#elecloc"),


gas0=document.querySelector("#gas0"),
gas1=document.querySelector("#gas1"),
gasoth=document.querySelector("#gasoth"),

fire0=document.querySelector("#fire0"),
fire1=document.querySelector("#fire1"),
fireloc=document.querySelector("#fireloc"),

bell0=document.querySelector("#bell0"),
bell1=document.querySelector("#bell1"),
belloc=document.querySelector("#belloc"),

heat1 = document.querySelector("#heat1"),

hope0 = document.querySelector("#hope0"),
 hope1 = document.querySelector("#hope1"),
 hopeloc = document.querySelector("#hopeloc"),
 hopedur = document.querySelector("#hopedur"),
 hopeno = document.querySelector("#hopeno"),

 hcase0 = document.querySelector("#hcase0"),
 hcase1 = document.querySelector("#hcase1"),
 hcase2 = document.querySelector("#hcase2"),
 hcase3 = document.querySelector("#hcase3"),
 hcase4= document.querySelector("#hcase4"),
 hcaseE = document.querySelector("#hcaseE"),

 elev0 = document.querySelector("#elev0"),
 elev1= document.querySelector("#elev1"),
 elev2 = document.querySelector("#elev2"),

 drw0 = document.querySelector("#drw0"),
 drw1= document.querySelector("#drw1"),
 drwloc = document.querySelector("#drwloc"),
 else1 = document.querySelector("#else"),


registerBtn = document.querySelector("#임시저장");

registerBtn.addEventListener("click",register);
function register(){

    const req = {
        waterN:waterN.value,
        waterY:waterY.value,
        waterloc:waterloc.value,
        wquant0:wquant0.value,
        wquant1:wquant1.value,
        wqloc:wqloc.value,
        
       
        elec0:elec0.value,
        elec1:elec1.value,
        elecloc:elecloc.value,
        
        gas0:gas0.value,
        gas1:gas1.value,
        gasoth:gasoth.value,
       
        fire0:fire0.value,
        fire1:fire1.value,
        fireloc:fireloc.value,
        bell0:bell0.value,
        bell1:bell1.value,
        belloc:belloc.value,
       
        heat0:heat0.value,
        heat1:heat1.value,
        hope0:hope0.value,
        hope1:hope1.value,
        hopeloc:hopeloc.value,
        hopedur:hopedur.value,
        hopeno:hopeno.value,
        hcase0:hcase0.value,
        hcase1:hcase1.value,
        hcase2:hcase2.value,
        hcase3:hcase3.value,
        hcase4:hcase4.value,
        hcaseE:hcaseE.value,
       
        elev0:elev0.value,
        elev1:elev1.value,
        elev2:elev2.value,
       
        drw0:drw0.value,
        drw1:drw1.value,
        drwloc:drwloc.value,
        else1:else1.value,
        


    };

   

    fetch("/page7_1",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("page7_1성공")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("page7_1 등록 중 에러 발생"));
    });


}

