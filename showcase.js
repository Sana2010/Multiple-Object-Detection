img = "";

status = "";

objects = [];

function preload()
{
img = loadImage('showcase.jpeg');
}

function setup()
{
canvas = createCanvas(600,350);
canvas.position(300,210);

objectDetector = ml5.objectDetector('cocoassd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
console.log("Model Loaded")
status = true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
if(error)
{
console.log(error);
}

console.log(results);

objects = results;
}

function draw()
{
if(status != "")
{
image(img,0,0,640,420);

for(i = 0; i < objects.length; i++)
{
document.getElementById("status").innerHTML = "Status : Object Detected";

fill("#FF0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%",objects[i].x , objects[i].y);
noFill();
stroke("#FF0000");
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}
}
}

function back()
{
window.location = "index.html";
}