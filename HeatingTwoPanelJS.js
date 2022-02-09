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
    window.location.href = "HeatingTwoPanel.html"
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

