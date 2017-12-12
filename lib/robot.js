'use strict';

var directions = [ 'north','east', 'south', 'west' ];

var coordChange = { north: [0,  1],
                    south: [0, -1],
                    east:  [1,  0],
                    west: [-1,  0]}

var instructTable = { L: "turnLeft",
                      R: "turnRight",
                      A: "advance"
                    }

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
  this.coordinates[0] += coordChange[this.bearing][0]
  this.coordinates[1] += coordChange[this.bearing][1]
}

Robot.prototype.instructions = function (instruction) {
  const output = []
  for (let element of instruction) {
    output.push(instructTable[element])
  }
  return output
}

Robot.prototype.place = function (hash) {
  this.at(hash['x'], hash['y'])
  this.orient(hash['direction'])
}

Robot.prototype.evaluate = function(string){
  const instructions = this.instructions(string) // ["turnRight", "advance", "advance", "turnLeft"]
  // turn the above into actual instructions
  instructions.forEach((instruction) => {
    // this.instruction
    // console.log(`this.${instruction}`)
    const x = `this.${instruction}()`
    eval(x)
    // switch(instruction)
  })
}
