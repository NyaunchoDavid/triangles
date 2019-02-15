function see(){
  var one = parseInt(document.getElementById('sideOne').value);
  var two = parseInt(document.getElementById('sideTwo').value);
  var three = parseInt(document.getElementById('sideThree').value);
  if (one===two && two===three) {
    alert("equilateral");
  }
  else if (one===two || one===three || three===two) {
    alert("isosceles");
  }
  else{
    alert("scalene");
  }
  var tone = document.getElementById('he');
  var none = tone.style.fontSize = "24px";
  var none = tone.style.color = "#c0392b";
  var pro = document.getElementById('moon');
  var mote = pro.style.backgroundColor = "#2c3e50";
};
