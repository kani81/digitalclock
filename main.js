var amp=document.getElementById("am");
var ampm=document.getElementById("pm");
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=padZero(dateTime.getMinutes());
    let sec=padZero(dateTime.getSeconds());
    if(hr>12){
        hr=hr-12;
        
        ampm.style.backgroundColor = "red";
    }
    else{
       
        amp.style.backgroundColor = "red";
    }
    
    document.getElementById("hours").innerHTML=padZero(hr);
    document.getElementById("mins").innerHTML=min;
    document.getElementById("second").innerHTML=sec;
   

}
function padZero(num){
    return num<10?"0"+num:num;
}
/*setInterval(displayTime,500)*/



//date section
var newdate = new Date();
console.log(newdate);
var daydate = document.getElementById("dayname");
//console.log(daydate);
var daymonth = document.getElementById("month");
//console.log(daymonth);
var dayyear = document.getElementById("year");
//console.log(dayyear);

//console.log(days);
function displaymonth() {
    var daydate = document.getElementById("dayname");
    var newdate = new Date();
    var datedisplayed = newdate.getDate();
    var monthdisplayed = newdate.getMonth() + 1;
    var yeardisplayed = newdate.getFullYear();
    //console.log(datedisplayed);
    //console.log(monthdisplayed);
    //console.log(yeardisplayed);
    daydate.innerHTML = "0" + datedisplayed;
    daymonth.innerHTML = "0" + monthdisplayed;
    dayyear.innerHTML = yeardisplayed;
}
displaymonth();


var sundaye = document.getElementById("sun");
//console.log(sundaye);
var mondaye = document.getElementById("mon");
//console.log(mondaye);
var thueshdaye = document.getElementById("thu");
//console.log(thueshday);
var wenshdaye = document.getElementById("wed");
//console.log(wenshdaey);
var thurdaye = document.getElementById("thes");
//console.log(thurdaye);
var fridaye = document.getElementById("fri");
//console.log(fridaye);
var saturdaye = document.getElementById("sat");
//console.log(saturdaye);
var days = ["sunday", "monday", "thesday", "wenasday", "thurday", "friday", "staurday"];
console.log(days);

function displayday() {
    
    var daty = new Date();
    var time = daty.getDay();
    console.log(time);

    // console.log(day);
    if (days[time] == "sunday") {
        sundaye.style.color = "red";
    }
    else{
        sundaye.style.color = "white";
    }
    if (days[time] == "monday") {
        mondaye.style.color = "red";
    }
    else{
        mondaye.style.color = "white";
    }
    if (days[time] == "thesday") {
        thueshdaye.style.color = "red";
    }
    else{
        thueshdaye.style.color = "white";
    }
    if (days[time] == "wenasday") {
        wenshdaye.style.color = "red";
    }
    else{
        wenshdaye.style.color = "white";
    }
    if (days[time] == "thurday") {
        thurdaye.style.color = "red";
    }
    else{
        thurdaye.style.color = "white";
    }
    if (days[time] == "friday") {
        fridaye.style.color = "red";
    }
    else{
        fridaye.style.color= "white";
    }
    if (days[time] == "staurday") {
        saturdaye.style.color = "red";
    }
    else{
        saturdaye.style.color = "white";
    }


}
displayday()

setInterval(displayTime,500)