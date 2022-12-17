var modelStatus = "";

function preload(){

}

function setup(){
    canvas = createCanvas(350,350)
    canvas.center()
    video  = createCapture(VIDEO)
    video.hide()
}

function start(){
cocossd = ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML = "Status: Detecting objects...";
 inputValue = document.getElementById("textInput").value;
}

function modelLoaded(){
    console.log("The model has loaded!")
    modelStatus = true;
}

function draw(){
    image(video,0,0,350,350)
}