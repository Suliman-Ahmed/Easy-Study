function Time() {
  var time = new Date();
  var H = time.getHours();
  var M = time.getMinutes();
  var S = time.getSeconds();
  var AmPm;
  if (H < 10) {
    H = "0" + H;
  }
  if (M < 10) {
    M = "0" + M;
  }
  if (S < 10) {
    S = "0" + S;
  }

  if(H <= 12){
    AmPm = "AM";
  } else {
    AmPm = "PM";
    H = H -12;
  }
  if(H < 0){
    H = -H;
  }
  (H == 0) ? H=12 : H=H;

  document.getElementById("time").innerHTML = "<p style='justify-content: center;'>" + H + ":" + M + ":" + S + " " + AmPm + "<p>";
}

setInterval(Time, 1000);

document.getElementById("Main-Vid").controls = false;