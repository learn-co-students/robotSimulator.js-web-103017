'use strict';

class Robot {
  constructor(bearing, coordinates){
    if (this.constructor.directions.includes(bearing)) {
      return this.bearing = bearing;
    }
    this.coordinates = coordinates;
  }

  orient(currentDirection){
    if (this.constructor.directions.includes(currentDirection)) {
      return this.bearing = currentDirection;
    }else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  turnRight(){
    this.orient(this.constructor.directions[(this.constructor.directions.indexOf(this.bearing) + 1) % 4]);
  }
  turnLeft(){
    if (this.constructor.directions.indexOf(this.bearing) - 1 === -1) {
      this.orient("west");

    }else {
      this.orient(this.constructor.directions[(this.constructor.directions.indexOf(this.bearing) - 1) % 4]);
    }
  }
  at(x, y){
    this.coordinates = [x, y];
  }
  advance(){
    switch(this.bearing){
      case "north":
          this.coordinates[1] += 1;
        break;
      case "south":
          this.coordinates[1] -= 1;
        break;
      case "east":
          this.coordinates[0] += 1;
        break;
      case "west":
          this.coordinates[0] -= 1;
        break;
    }
  }
  instructions(string){
    const arr = [];
    string.split("").forEach(function(ele) {
      switch (ele) {
        case "L":
            arr.push("turnLeft");
          break;
        case "R":
            arr.push("turnRight");
          break;
        case "A":
            arr.push("advance");
          break;
      }
    })
    return arr;
  }
  place(hash){
    this.coordinates = [hash["x"], hash["y"]];
    this.bearing = hash["direction"];
  }
  evaluate(string){
    this.instructions(string).forEach(function (instruction) {
      this[instruction]();
    }.bind(this))
  }
}
Robot.directions = [ 'north', 'east', 'south', 'west' ];
