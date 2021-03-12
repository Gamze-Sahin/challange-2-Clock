window.onload = function() {

//klok
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	
	var day =  date.getDate();
	var month = date.getMonth() + 1; 
	var year = date.getFullYear();
	
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
	
	var date = day + "-" + month + "-" + year;
	document.getElementById("dateDisplay").innertext = date;
	document.getElementById("dateDisplay").textContent = date;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//verandering achtergrond en tijd van de klok
var background = document.getElementById('sky');
var currentTime = new Date().getHours();

function backgroundSky() {
    
    if (0 <= currentTime&&currentTime < 5) {
      background.style.backgroundImage= 'url("images/bgavond.jpg")';
    } else if (5 <= currentTime&&currentTime < 12) {
       background.style.backgroundImage= 'url("images/bgdag.jpg")';
    } else if (12 <= currentTime&&currentTime < 18) {
      background.style.backgroundImage= 'url("images/bgmiddag.jpg")';
    } else if (18 <= currentTime&&currentTime < 21) {
      background.style.backgroundImage= 'url("images/bgevening.jpg")';
    } else if (21 <= currentTime&&currentTime < 24){
      background.style.backgroundImage= 'url("images/bgavond.jpg")';
    }

}

backgroundSky();

}