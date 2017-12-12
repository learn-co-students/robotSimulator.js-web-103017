'use strict';

function Robot() {
  // implement your solution here!

}

Robot.prototype.orient = function(currentDirection){
  const directions = [ 'east', 'west', 'north', 'south' ];
  if (directions.includes(currentDirection)) {
    this.bearing = currentDirection;
  }else {
    const error = new Error("Invalid Robot Bearing");
    throw error; //throw will return an error, but stops execution of program
  }
}

Robot.prototype.turnRight = function(){

  switch (this.bearing) {
    case "north":
      this.bearing = "east";
      break;
    case "east":
      this.bearing = "south";
      break;
    case "south":
      this.bearing = "west";
      break;
    case "west":
      this.bearing = "north";
      break;
  }

}

Robot.prototype.turnLeft = function(){
  switch (this.bearing) {
    case "north":
      this.bearing = "west";
      break;
    case "east":
      this.bearing = "north";
      break;
    case "south":
      this.bearing = "east";
      break;
    case "west":
      this.bearing = "south";
      break;
  }

}

Robot.prototype.at = function(x,y){
  // const array = [];
  // array.push(x);
  // array.push(y);
  this.coordinates = [x,y];
}

Robot.prototype.advance = function(){
  switch (this.bearing) {
    case "north":
      this.coordinates[1] += 1;
      // this.coordinates = [x,y+1]
      break;
    case "east":
      this.coordinates[0] += 1;
      break;
    case "south":
      this.coordinates[1] -= 1;
      break;
    case "west":
      this.coordinates[0] -= 1;
      break;
    }
}

Robot.prototype.instructions = function(letter){
  const output = []
  for (let element of letter){
    switch (element) {
      case "L":
        output.push("turnLeft");
        break;
      case "R":
        output.push("turnRight");
        break;
      case "A":
        output.push("advance");
        break;
      }
  }
  return output;
}

Robot.prototype.place = function(obj){
  // robot.place({x: -2, y: 1, direction: "east"});
  this.at(obj.x, obj.y);
  this.orient(obj.direction);
}

Robot.prototype.evaluate = function(letters){
  for (let letter of letters){
    switch (letter) {
      case "A":
        this.advance();
        break;
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
    }
  }
}
