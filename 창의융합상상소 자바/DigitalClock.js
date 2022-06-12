"use strict"
const clockDiv = document.getElementById("clock");


function getTime(){

    let now = new Date();
    let year = number(now.getFullYear());
    let month = number(now.getMonth() + 1);
    let date = number(now.getDate());
    let day = number(transfromNumToDate(now.getDay()));


    let hour = number(now.getHours());//시 0~23시
    let minute = number(now.getMinutes());//분 0~59분
    let second = number(now.getSeconds());//초 0~59초
    let noon = "AM";
    



    if(now.getHours()>11){
        noon = "PM";
        if(hour > 12){
            hour = hour -12
        }
    }
    if(now.getHours() === 0){
        hour = 12;
    }
    clockDiv.innerHTML = year + "/" + month + "/" + date + '_' + day + '<br>' + noon + "_" + hour + ":" + minute + ":" + second;
    
}


getTime();
setInterval(getTime, 1000);// 1000 밀리초 마다 다시 실행

function number(num){
    if(num < 10){
        return "0"+ num;
    }
    return "" + num;


}

function transfromNumToDate(num){

    switch(num){
        case 0:
            return 'Sun';
            break;
        case 1:
            return 'Mon'
            break;
        case 2:
            return 'Tue';
            break;
        case 3:
            return 'Wed';
            break;
        case 4:
            return 'Thu';
            break;
        case 5:
            return 'Fri';
            break;
        case 6:
            return 'Sat';
            break;;

    }


}