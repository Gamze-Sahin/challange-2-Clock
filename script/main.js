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

//verandering kleuren en tijd van de klok
function backgroundColor() {
    var background = document.getElementsByTagName('body')[0];
      var currentTime = new Date().getHours();

      //nacht
    if (0 <= currentTime&&currentTime < 5) {
        document.body.style.backgroundColor = "#ffd1c1";
        document.getElementById("clockDisplay").style.color = "#FFFFFF";
        document.getElementById("dateDisplay").style.color = "#FFFFFF";
      }
      
      //ochtend
    if (5 <= currentTime&&currentTime < 11) {
        document.body.style.backgroundColor = "#ffd1c11";
        document.getElementById("clockDisplay").style.color = "#FFFFFF";
        document.getElementById("dateDisplay").style.color = "#FFFFFF";
      }
      
      //middag
    if (11 <= currentTime&&currentTime < 17) {
        document.body.style.backgroundColor = "#ffd1c1";
        document.getElementById("clockDisplay").style.color = "#FFFFFF";
        document.getElementById("dateDisplay").style.color = "#FFFFFF";
      }
      
      //avond
    if (17 <= currentTime&&currentTime < 24) {
       document.body.style.backgroundColor = "#ffd1c1";
       document.getElementById("clockDisplay").style.color = "#FFFFFF";
       document.getElementById("dateDisplay").style.color = "#FFFFFF";
      }
}

backgroundColor();