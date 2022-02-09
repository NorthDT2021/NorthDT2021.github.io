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
//
//
// const h1 = document.createElement("h1");
// // const underline = document.createElement("u");
// // underline.innerText = "Hello World";
// // h1.append(underline)
// // document.body.append(h1)
// h1.innerHTML = "Hey hey people";
// document.body.append(h1)
//
// const bruh1 = document.createElement("button")
// bruh1.setAttribute("id", "bruh11")
// bruh1.innerHTML = "Bruh"
// document.body.append(bruh1)
//
// document.querySelector("#bruh11").onclick = function(){
//     let audio = new Audio('https://mingosounds.com/wp-content/uploads/2020/07/Bruh-Sound-Effect.mp3');
//     audio.play()
// }
//
// const lB = document.createElement("br");
// document.body.append(lB)
//
// const changeStyle = document.createElement("button")
// changeStyle.setAttribute("id", "cS")
// changeStyle.innerHTML = "Change the style"
// document.body.append(changeStyle)
//
// document.querySelector("#cS").onclick = function() {
//     h1.style.backgroundColor = "grey";
//     h1.style.color = "gold";
//     h1.style.textAlign = "center";
//     h1.style.border = "4px solid";
//     h1.style.borderColor = "green";
// }
//
// const lB1 = document.createElement("br");
// document.body.append(lB1)
//
// // const dpD = document.createElement("dropbtn");
// // dpD.setAttribute("id","dpD1")
// // dpD.innerHTML = "Dropdown list"
// // document.body.append(dpD)
//
// const nDiv = document.createElement("div")
// nDiv.setAttribute("id", "myDiv")
// document.body.append(nDiv)
// nDiv.style.backgroundColor = "grey"
// nDiv.style.width = "200px"
// nDiv.style.height = "200px"
// nDiv.addEventListener("click", e => {nDiv.style.backgroundColor = "green"})
//
// const lB2 = document.createElement("br");
// document.body.append(lB2)
//
// const clickToView = document.createElement("button")
// clickToView.setAttribute("id", "cTV")
// clickToView.innerHTML = "Click to View"
// document.body.append(clickToView)
//
// const anotherDiv = document.createElement("div")
// anotherDiv.setAttribute("id", "dropDown")
// anotherDiv.innerHTML = "Click to change words"
// anotherDiv.style.backgroundColor = "white"
// anotherDiv.style.width = "200px"
// anotherDiv.style.height = "100x"
// anotherDiv.style.color = "white"
// document.body.append(anotherDiv)
//
// const anotherDiv1 = document.createElement("div")
// anotherDiv1.setAttribute("id", "dropDown1")
// anotherDiv1.innerHTML = "Click to change words 2"
// anotherDiv1.style.backgroundColor = "white"
// anotherDiv1.style.width = "200px"
// anotherDiv1.style.height = "100x"
// anotherDiv1.style.color = "white"
// document.body.append(anotherDiv1)
//
// document.querySelector("#cTV").onclick = function() {
//     anotherDiv.style.backgroundColor = "grey"
//     anotherDiv.style.color = "black"
//     anotherDiv.style.border = "2px solid";
//     anotherDiv.style.borderColor = "white"
//     anotherDiv.style.textAlign = "center"
//
//     anotherDiv1.style.backgroundColor = "grey"
//     anotherDiv1.style.color = "black"
//     anotherDiv1.style.border = "2px solid";
//     anotherDiv1.style.borderColor = "white"
//     anotherDiv1.style.textAlign = "center"
//  }
//
// document.querySelector("#dropDown").onclick = function() {
//     anotherDiv.style.backgroundColor = "white"
//     anotherDiv.style.color = "white"
//     clickToView.innerHTML = document.getElementById("dropDown").innerHTML
//     anotherDiv1.style.backgroundColor = "white"
//     anotherDiv1.style.color = "white"
//  }
//
//  document.querySelector("#dropDown1").onclick = function() {
//     anotherDiv.style.backgroundColor = "white"
//     anotherDiv.style.color = "white"
//     anotherDiv1.style.backgroundColor = "white"
//     anotherDiv1.style.color = "white"
//     clickToView.innerHTML = document.getElementById("dropDown1").innerHTML
//  }