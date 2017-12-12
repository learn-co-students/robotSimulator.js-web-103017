'use strict';

function Robot() {

  this.bearing = ' '
  this.coordinates = [0,0]
  // implement your solution here!

}

Robot.prototype.orient = function(direction){
  const directions = [ 'east', 'west', 'north', 'south' ];
  if (directions.includes(direction)){
    this.bearing = direction;
  }
  else {
    throw new Error("Invalid Robot Bearing");
  }

}

Robot.prototype.turnRight = function(){
  if (this.bearing === 'east'){
    this.orient('south');
  }

  else if (this.bearing === 'north'){
    this.orient('east');
  }
  else if (this.bearing === 'south'){
    this.orient('west');
  }
  else if (this.bearing === 'west'){
    this.orient('north');
  }

}

Robot.prototype.turnLeft = function(){
  if (this.bearing === 'east'){
    this.orient('north');
  }

  else if (this.bearing === 'north'){
    this.orient('west');
  }
  else if (this.bearing === 'south'){
    this.orient('east');
  }
  else if (this.bearing === 'west'){
    this.orient('south');
  }

}

Robot.prototype.at = function(x,y){
  this.coordinates = [x,y]

}

Robot.prototype.advance = function(){
  if (this.bearing === 'north' ){
    this.coordinates[1] += 1
  }
  else if (this.bearing === 'east' ){
    this.coordinates[0] += 1
  }
  else if (this.bearing === 'south' ){
    this.coordinates[1] -= 1
  }
  else if (this.bearing === 'west' ){
    this.coordinates[0] -= 1
  }
}

Robot.prototype.instructions = function(string){
  let array = []
  let arr = string.split("")
  arr.forEach(function(element){
    if (element === 'R'){
      array.push('turnRight')
    }
    else if (element === 'L'){
      array.push('turnLeft')
    }
    else if (element === 'A'){
      array.push('advance')
    }
  })
  return array
}

Robot.prototype.place = function(object){
  this.coordinates = [object.x, object.y];
  this.bearing = object.direction;
}

Robot.prototype.evaluate = function(string){
  let arr = this.instructions(string)
  arr.forEach(function(element){
    this[element]()
  }, this)

}
