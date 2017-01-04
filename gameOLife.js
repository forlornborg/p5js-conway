console.log("in main.js");


const windowWidth = innerWidth;
const windowHeight = innerHeight;
var numWidth;
var numHeight;

class cell{
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);

    numWidth = 20;
    numHeight = 20;

    const w = windowWidth/numWidth;
    const h = windowHeight/numHeight;
    for(var i = 0; i < numHeight; i++){
        for(var j = 0; j < numWidth; j++){
            //initial cell creation will go here
            rect(j*w, i*h, w, h);
        }
    }
    
}

function draw(){

}