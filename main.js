function setup(){
    c1 = createCanvas(640, 420)
    c1.center()
    myModel = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "detecting objects"
}
i1 = ""
status = ""
objects = []
function modelLoaded(){
    console.log("cocossd has loaded");
    status = true;
    myModel.detect(i1, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
console.log(results)
objects = results
    }
}
function preload(){
    i1 = loadImage('dog_cat.jpg');
}
function draw(){
    image(i1, 0, 0, 640, 420)
if(status != ""){
for(i = 0; i<objects.length; i++){
document.getElementById("status").innerHTML = "objects detected!!"
persent = floor(objects[i].confidence * 100)
fill("black")
text(objects[i].label + "   " + persent + " %", objects[i].x, objects[i].y)
noFill()
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

}


}


}
