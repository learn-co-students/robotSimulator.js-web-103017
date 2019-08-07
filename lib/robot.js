'use strict';

function Robot() {
  this.bearing = 'north';
  this.coordinates = [0, 0];

}

Robot.prototype.orient = function(dir){
  if ([ 'east', 'west', 'north', 'south' ].includes(dir))
    this.bearing = dir
  else {
    throw new Error("Invalid Robot Bearing")
  }
};

Robot.prototype.turnRight = function(){
  let directions = [ 'north', 'east', 'south', 'west' ]
  this.orient(directions[(directions.indexOf(this.bearing) + 1) % 4])
};

Robot.prototype.turnLeft = function(){
  let directions = [ 'north', 'west', 'south', 'east'  ]
  this.orient(directions[(directions.indexOf(this.bearing) + 1) % 4])
};

Robot.prototype.at = function(x,y){
    this.coordinates[0] = x
    this.coordinates[1] = y
};

Robot.prototype.advance = function(){
  let directions = [ 'north', 'east', 'south', 'west' ]
  switch (this.bearing){
    case 'north':
      this.coordinates[1] += 1
      break;
    case 'south':
      this.coordinates[1] -= 1
      break;
    case 'west':
      this.coordinates[0] -= 1
      break;
    case 'east':
      this.coordinates[0] += 1
      break;
  }
};

Robot.prototype.instructions = function(string){
    return string.split("").map(function(char) {
      switch (char){
        case 'R':
          return 'turnRight'
          break;
        case 'L':
          return 'turnLeft'
          break;
        case 'A':
          return 'advance'
          break;
      }
    })
};

Robot.prototype.place = function(obj){
  this.orient(obj.direction)
  this.at(obj.x, obj.y)
};

Robot.prototype.evaluate = function(string){
    this.instructions(string).forEach(function(char) {
      switch (char){
        case 'turnRight':
          this.turnRight()
          break;
        case 'turnLeft':
          this.turnLeft()
          break;
        case 'advance':
          this.advance()
          break;
      }
    }.bind(this))
};
