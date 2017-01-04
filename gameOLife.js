console.log("in main.js");


const windowWidth = innerWidth;
const windowHeight = innerHeight;
var numWidth, numHeight;

class Cell{
    constructor(x_, y_, width_, height_, alive_){
        //constructor will give each cell the rect() arguments and make it alive
        this.alive = alive_,
        this.x = x_;
        this.y = y_;
        this.numLivingNeighbors = 0; 
    }
}

//will need an array of cells to represent all of the cells.
//the cellSystem variable will contain the display() function
//and the update() function;
//the cell variables will only contain their own positions and alive state
//the cellSystem will contain the height and width
//the "this" keyword will be different for the cell objects within the cellSystem object.
var cellSystem = {};

function setup(){
    createCanvas(windowWidth,windowHeight);
    noStroke();
    background(255);
    numWidth = 20;
    numHeight = 20;

    cellSystem = {
        w: windowWidth/numWidth,
        h: windowHeight/numHeight,
        cellArr: [],
        genCells: function(){
            for(var i = 0; i < numHeight; i++){
                for(var j = 0; j < numWidth; j++){
                    this.cellArr.push(new Cell(j*this.w, i*this.h, this.w, this.h, int(random(2))));
                }
            }
        },
        displayCells: function(){
            for(var i = 0; i < this.cellArr.length; i++){
                if(this.cellArr[i].alive){
                    fill(0);
                }else{
                    fill(175);
                }
                ellipse(this.cellArr[i].x, this.cellArr[i].y, this.w, this.h);
            }
        },
        getNeighbors: function(){
            for(var i = 0; i < this.cellArr.length; i++){
                var numLivingNeighbors = 0;
                //todo protect against wrapping around the edge in the future
                var topNeighbor = this.cellArr[i-numWidth];
                var rightNeighbor = this.cellArr[i+1];
                var bottomNeighbor = this.cellArr[i+numWidth];
                var leftNeighbor = this.cellArr[i-1];
                var topLeftNeighbor = this.cellArr[i-numWidth-1];
                var topRightNeighbor = this.cellArr[i-numWidth+1];
                var bottomRightNeighbor = this.cellArr[i+numWidth+1];
                var bottomLeftNeighbor = this.cellArr[i+numWidth-1];
                var neighbors = [topNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor, topRightNeighbor, topLeftNeighbor, bottomLeftNeighbor, bottomRightNeighbor];
                for(var j = 0; j < neighbors.length; j++){
                    if(neighbors[j] && neighbors[j].alive){
                        numLivingNeighbors++;
                    }
                    this.cellArr[i].numLivingNeighbors = numLivingNeighbors;
                }
            }
        },
        update: function(){
            for(var i = 0; i < this.cellArr.length; i++){
                if(this.cellArr[i].alive){
                    if(this.cellArr[i].numLivingNeighbors < 2){
                        this.cellArr[i].alive = false;
                    }else if(this.cellArr[i].numLivingNeighbors > 3){
                        this.cellArr[i].alive = false;
                    }
                }else{
                    if(this.cellArr[i].numLivingNeighbors == 3){
                        this.cellArr[i].alive = true;
                    }
                }
            }
        }
    }
    cellSystem.genCells();
}

function draw(){
    cellSystem.displayCells();
    cellSystem.getNeighbors();
    cellSystem.update();
}