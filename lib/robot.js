'use strict';

class Robot{
  constructor(){

  };

  orient(string){
    var directions = [ 'east', 'west', 'north', 'south' ]
    if (directions.includes(string)){
      this.bearing = string;
    }
    else {
      throw new Error ("Invalid Robot Bearing")
    }
  };

  turnRight(){
    switch (this.bearing){
      case 'north':
        this.bearing = 'east';
        break
      case 'east':
        this.bearing = 'south';
        break
      case 'south':
        this.bearing = 'west';
        break
      case 'west':
        this.bearing = 'north';
        break
    }
  };

  turnLeft(){
    switch (this.bearing){
      case 'north':
        this.bearing = 'west';
        break
      case 'west':
        this.bearing = 'south';
        break
      case 'south':
        this.bearing = 'east';
        break
      case 'east':
        this.bearing = 'north';
        break
    }

  };

  at(num1, num2){
    this.coordinates = [num1, num2]
  };

  advance(){
    switch (this.bearing){
      case 'north':
        this.coordinates[1] += 1;
        break
      case 'east':
        this.coordinates[0] += 1;
        break
      case 'south':
        this.coordinates[1] -= 1;
        break
      case 'west':
        this.coordinates[0] -= 1;
        break
    }
  };


  instructions(input){
    let arr = input.split("");
    let output = []
    arr.forEach(el =>{
      switch (el){
        case 'L':
          output.push('turnLeft');
          break;
        case 'R':
          output.push('turnRight');
          break;
        case 'A':
          output.push('advance');
          break;
        default:
          break;
        }
    })
    return output;
  }

  place(object){
    this.bearing = object.direction;
    this.coordinates = [object.x, object.y];
  }

  evaluate(string){
    let arr = string.split("");
    let output = []
    arr.forEach(el =>{
      switch (el){
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
        default:
          break;
        }
    })
    return output;
  }


}
