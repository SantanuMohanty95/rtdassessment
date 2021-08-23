var acc = document.getElementsByClassName("accordion");
var animationContainer=document.getElementById("animi");
var crossBtn=document.querySelector(".crossBtn");
const secondImage = document.getElementById("second-image");
var i;

const xhttp = new XMLHttpRequest();

for (i = 0; i < 1; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function handelClick() {
        animationContainer.style.display="none";
}


xhttp.onload = function () {
    let data = JSON.parse(xhttp.responseText);
    secondImage.innerHTML = `<img class="img-fluid rounded" width=640px id="second-image" src=${data.download_url} />`;
};

xhttp.open("GET", "https://picsum.photos/id/0/info", true);
xhttp.send();