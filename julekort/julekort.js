function setup() {
    let divSky = document.getElementById("sky");
    let stars = divSky.querySelectorAll(".star");
    stars.forEach( stjerne => {
        stjerne.style.left = -120 + Math.floor(Math.random()*240) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random()*160) + "px";  
    })
}