'use strict';

var directions = [ 'north','east', 'south', 'west' ];

var coordChange = { north: [0,  1],
                    south: [0, -1],
                    east: [1,   0],
                    west: [-1,  0]}

function Robot() {

}

Robot.prototype.orient = function (direction) {
  if (directions.includes(direction)) {
    this.bearing = direction
  } else {
    throw Error ("Invalid Robot Bearing")
  }

}

Robot.prototype.turnRight = function () {
  this.bearing = directions[(directions.indexOf(this.bearing) + 1) % 4]
}

Robot.prototype.turnLeft = function () {
  this.bearing = directions[(directions.indexOf(this.bearing) + 3) % 4]
}

Robot.prototype.at = function (x, y) {
  this.coordinates = [x, y]
}

Robot.prototype.advance = function () {
  this.coordinates =
}
