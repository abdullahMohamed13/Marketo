let dropMenu = document.querySelector(".drop-menu")
let dropDown = document.querySelector(".drop-down")

dropMenu.onclick = function (){
    dropDown.style.top = "75px";
}

document.addEventListener("click", function (event) {
    if (!dropMenu.contains(event.target)) {
      dropDown.style.top = "-150px";
    }
  });
