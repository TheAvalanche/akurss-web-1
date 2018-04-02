var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {

  acc[i].onclick = openPanel;

}

function openPanel() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
