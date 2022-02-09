var heatingImage = document.createElement("img")
heatingImage.src = "http://static.gigapan.com/gigapans0/73790/images/73790-936x360.jpg";
document.getElementById("imageHover").appendChild(heatingImage);

function changeColor (v1,v2,v3,v4,v5,v6,v7){
    v1.style.color = "red";
    v1.style.fontWeight = "bold"
    v2.style.color = "black";
    v2.style.fontWeight = "normal"
    v3.style.color = "black";
    v3.style.fontWeight = "normal"
    v4.style.color = "black";
    v4.style.fontWeight = "normal"
    v5.style.color = "black";
    v5.style.fontWeight = "normal"
    v6.style.color = "black";
    v6.style.fontWeight = "normal"
    v7.style.color = "black";
    v7.style.fontWeight = "normal"
}

var homeTitle = document.getElementById("home")
var heatingTitle = document.getElementById("heating")
var ventilationTitle = document.getElementById("ventilation")
var airContioningTitle = document.getElementById("airConditioning")
var lightingTitle = document.getElementById("lighting")
var buildingInfoTitle = document.getElementById("buildingInfo")
var infoTitle = document.getElementById("info")

document.getElementById("home").onclick = function(){
    changeColor(homeTitle, heatingTitle, ventilationTitle, airContioningTitle, lightingTitle, buildingInfoTitle, infoTitle)
    window.location.href = "Display.html"
}
document.getElementById("heating").onclick = function(){
    changeColor(heatingTitle,homeTitle, ventilationTitle, airContioningTitle, lightingTitle, buildingInfoTitle, infoTitle)
    window.location.href = "Heating.html"
}
document.getElementById("ventilation").onclick = function(){
    changeColor(ventilationTitle, homeTitle, heatingTitle, airContioningTitle, lightingTitle, buildingInfoTitle, infoTitle)
    window.location.href = "Ventilation.html"
}
document.getElementById("airConditioning").onclick = function(){
    changeColor(airContioningTitle, homeTitle, heatingTitle, ventilationTitle, lightingTitle, buildingInfoTitle, infoTitle)
    window.location.href = "AirConditioning.html"
}
document.getElementById("lighting").onclick = function(){
    changeColor(lightingTitle, homeTitle, heatingTitle, ventilationTitle, airContioningTitle,buildingInfoTitle, infoTitle)
    window.location.href = "lighting page.html"
}

document.getElementById("buildingInfo").onclick = function(){
    changeColor(buildingInfoTitle, infoTitle, homeTitle, heatingTitle, ventilationTitle, airContioningTitle, lightingTitle)
    window.location.href = "BuildingInfo.html"
}

document.getElementById("info").onclick = function(){
    changeColor(infoTitle, homeTitle, heatingTitle, ventilationTitle, airContioningTitle, buildingInfoTitle, lightingTitle)
    window.location.href = "Info.html"
}

// var xD = 0
// var yD = 0
// var rectD = 0

document.getElementById("imageHover").onmousemove = function(e){
    var rectD = e.target.getBoundingClientRect();
    var xD = e.clientX - rectD.left; //x position within the element.
    var yD = e.clientY - rectD.top;  //y position within the element.
    if (xD>=231 && xD<=271 && yD>=233 && yD<= 336) {
    document.getElementById("manI").innerHTML = "Chair"
}
    else if (xD>=272 && xD<=401 && yD>=16 && yD<= 56) {
    document.getElementById("manI").innerHTML = "Window"
    }
    else {document.getElementById("manI").innerHTML = "Standby"}
    // if (231<=x<=271 && 239<=y<=321)
}
/////////////////////////////

// document.getElementById("conFig").onclick = function(){
//     window.location.href = "Mag.html"
// }

var magControl = 1
document.getElementById("magOn").onclick = function(){
    magControl = 2
    magnify("conFig", 1.5)
    console.log("yes")
}

document.getElementById("magOff").onclick = function(){
    magControl = 1
    window.location.href = "Heating.html"
    console.log("no")
}

function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    function moveMagnifier(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        if (x > img.width - (w / zoom)) {
            x = img.width - (w / zoom);
        }
        if (x < w / zoom) {
            x = w / zoom;
        }
        if (y > img.height - (h / zoom)) {
            y = img.height - (h / zoom);
        }
        if (y < h / zoom) {
            y = h / zoom;
        }
        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x: x, y: y};
    }
}

//https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
