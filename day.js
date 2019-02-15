function see(){
  var one = parseInt(document.getElementById('sideOne').value);
  var two = parseInt(document.getElementById('sideTwo').value);
  var three = parseInt(document.getElementById('sideThree').value);

if((one+two>three)&&(one+three>two)&&(three+two>one)){
  if (one===two && two===three) {
    alert("equilateral");
  }
  else if (one===two || one===three || three===two) {
    alert("isosceles");
  }

  else{
    alert("scalene");
  };
}
else{
  alert("not triangle")
}
  var pro = document.getElementById('moon');
  var mote = pro.style.backgroundColor = "#2c3e50";
  var mon = document.getElementById("sideOne");
  var monday = mon.style.fontSize = "18px";
};
