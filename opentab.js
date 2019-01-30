function openTab(tabName, element) {
  var i;
  var x = document.getElementsByClassName("img-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  element.style.borderColor = "#333";
  
}