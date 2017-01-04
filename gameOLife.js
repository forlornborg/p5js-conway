console.log("in main.js");


const windowWidth = innerWidth;
const windowHeight = innerHeight;
var numWidth, numHeight, w, h;

class cell{
    constructor(){
        //constructor will give each cell the rect() arguments and make it alive
        this.alive = true,
        this.height = h,
        this.width = w;
        this.x;
        this.y; 
    }
    display(){
        for(var i = 0; i < numHeight; i++){
            for(var j = 0; j < numWidth; j++){
                rect(j*this.width, i*this.height, this.width, this.height);
            }
        }
    }
}

//will need an array of cells to represent all of the cells.
//the cellSystem variable will contain the display() function
//and the update() function;
//the cell variables will only contain their own positions and alive state
//the cellSystem will contain the height and width
//the "this" keyword will be different for the cell objects within the cellSystem object.

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0);
    numWidth = 20;
    numHeight = 20;

    w = windowWidth/numWidth;
    h = windowHeight/numHeight;
    
}

function draw(){


}