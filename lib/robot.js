'use strict';

class Robot {
	constructor(bearing, coordinates){
		this.bearing = bearing
		this.coordinates = []
	}
	orient(bearing) {
		switch(bearing){
			case "east":
				this.bearing = "east"
				break;
			case "west":
				this.bearing = "west"
				break;
			case "north":
				this.bearing = "north"
				break;
			case "south":
				this.bearing = "south"
				break;
			default:
				throw new Error("Invalid Robot Bearing");
		}
	}
	turnRight(){
		const clockwise = [ "north", "east", "south", "west" ];
		if (clockwise.indexOf(this.bearing) < 3) {
			this.bearing = clockwise[clockwise.indexOf(this.bearing) + 1];
		} else {
			this.bearing = "north";
		}
	}
	turnLeft(){
		const counterclockwise = [ "north", "west", "south", "east" ];
		if (counterclockwise.indexOf(this.bearing) < 3) {
			this.bearing = counterclockwise[counterclockwise.indexOf(this.bearing) + 1];
		} else {
			this.bearing = "north";
		}
	}
	at(x,y){
		this.coordinates[0] = x;
		this.coordinates[1] = y;
	}
	advance(){
		switch(this.bearing){
			case "east":
				this.coordinates[0]++
				break;
			case "west":
				this.coordinates[0]--
				break;
			case "north":
				this.coordinates[1]++
				break;
			case "south":
				this.coordinates[1]--
				break;
		}
	}
	instructions(instructionString){
		let instructionArray = []
		let stringArray = instructionString.split("")
		for (const i in stringArray){
			switch(stringArray[i]){
				case "R":
					instructionArray.push("turnRight")
					break;
				case "L":
					instructionArray.push("turnLeft")
					break;
				case "A":
					instructionArray.push("advance")
					break;
			}
		}
		return instructionArray;
	}
	place(directions){
		this.coordinates[0] = directions.x;
		this.coordinates[1] = directions.y;
		this.bearing = directions.direction;
	}
	evaluate(instructionString){
		let instructionArray = this.instructions(instructionString);
		console.log(instructionArray)
		for (const i in instructionArray){
			this[instructionArray[i]]();
			console.log(instructionArray[i])
			console.log(this.coordinates)
			console.log(this.bearing)
		}
	}
}
