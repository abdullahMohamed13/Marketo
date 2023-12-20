var icon = document.getElementsById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark_mood");
    if(document.body.classList.contains("dark_mood")) {
        icon.src="./images/darkmood/sun.png";
    } else{
        icon.src="./images/darkmood/sun.png"
    }
}
