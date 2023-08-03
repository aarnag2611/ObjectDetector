status= "";
objects=[];
function preload(){
dc=loadImage("football-ground.jpeg")
}
function setup(){
 canvas= createCanvas(640, 420);
 canvas.center();
 objdetector= ml5.objectDetector("cocossd",modelloaded);
 document.getElementById("status").innerHTML="status: detecting objects";
}
function draw(){
 image(dc,0,0,640,420);
 if(status!= ""){
   for(i=0;i<objects.length;i++){
      document.getElementById("status").innerHTML="status: objects detected";
      fill("palevioletred");
      stroke("blue");
      percent= floor(objects[i].confidence*100);
      text(objects[i].label+ " "+ percent+ "%", objects[i].x, objects[i].y);
      noFill();
      rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
   }
 }

}
function modelloaded(){
    console.log("model is loaded");
    status= true;
    objdetector.detect(dc,gotresults);
}
function gotresults(error, results){
 if(error){
    console.log(error)
 }
 else{
    console.log(results);
    objects= results;
 }
}