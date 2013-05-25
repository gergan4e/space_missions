/*global svgContainer, console */

// you can define different line interpolations
//  "linear", "step-before", "step-after", "basis",
// "basis-closed", "cardinal", "cardinal-closed" ...
// See http://www.dashingd3js.com/svg-paths-and-d3js
var line = d3.svg.line()
    .x(function(d) { 
		'use strict';
		return d.x; 
    })
    .y(function(d) {
		'use strict'; 
		return d.y; 
    })
    .interpolate("basis");

function addPath(lineData){
	'use strict';
	svgContainer
	.append("path")
	.attr("country", "EU")
	.attr("d", line(lineData))
	.attr("stroke", "silver")
	.attr("stroke-width", 1)
	.attr("fill", "none");
}


//TODO: Organize the code!

/**
 * Returns a random number between min and max
 */
function getRandomInt (min, max) {
	'use strict';
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// the function creates a random path between two points
function createRandomPath(startXcoordinate, startYcoordinate, endXcoordinate, endYcoordinate) {
	'use strict';
	//Variable declaration (JSLint suggestion)
	var path, initialPosition, numberOfDummySegments, counter, segment, endPosition;
	//initialize an empty array
	path = [];
	
	//define start coordinates
	initialPosition = {"x" : startXcoordinate, "y" : startYcoordinate};
	//add the initial position to the path array
	path.push(initialPosition);
	
	// the number of segments in the line interpolation (between 1 and 50)
	numberOfDummySegments = getRandomInt(1, 5);
		
	//create a loop, which generates dummy segments in a given range
	counter = 0;
	while(counter < numberOfDummySegments){		
		//define the range
		segment = {
			"x" : getRandomInt(Math.min(startXcoordinate + 100, endXcoordinate + 100), 
							   Math.max(startXcoordinate + 100, endXcoordinate + 100)),
			"y" : getRandomInt(Math.min(startYcoordinate + 100, endYcoordinate + 100), 
							   Math.max(startYcoordinate + 100, endYcoordinate + 100))
		};

		path.push(segment);
		
		counter = counter + 1;
	}
	//add the end position to close the path
	endPosition = {"x": endXcoordinate, "y": endYcoordinate};
	
	path.push(endPosition);
	
	return path;
}















