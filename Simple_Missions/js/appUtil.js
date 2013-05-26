/*global svgContainer, console, $ */

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
    

//TODO: add the spaceMission attributes with loop
function addPath(spaceMission){
	'use strict';
	svgContainer
	.append("path")
	.attr("d", line(spaceMission.path))
	.attr("name", spaceMission.name)
	.attr("country", spaceMission.country)
	.attr("duration", spaceMission.duration)
	.attr("year", spaceMission.year)
	//.attr("stroke", "silver")
	//.attr("stroke-width", 1)
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

//Capital letters are very important. Accept it as a naming convention!
function appendImage(countryWithCapitalLetters, x, y){
'use strict';
svgContainer.
	append("image")
    .attr("xlink:href", "img/flags/" + countryWithCapitalLetters + "_FLAG.png")
    .attr("x", x)
    .attr("y", y)
    .attr("width", 96)
    .attr("height", 50)
    .attr("country", countryWithCapitalLetters);
}



function getSelectedPath(){
	'use strict';
	//Time-line and flag
	
	//initialize an empty object with the desired filter Attributes
	var selected = {
		countries : '',
		minDate : '',
		maxDate : ''
	},
	
	//flags
	allImages = svgContainer.selectAll("image")[0],
	
	
	arrayCountries = [],
	
	obj;
	
	for(obj in allImages){
		if(allImages.hasOwnProperty(obj)){
			if(allImages[obj].getAttribute("clicked")==='true'){
				arrayCountries.push(allImages[obj].getAttribute("country"));
			}
		}
	}
	
	 selected.countries = arrayCountries;
	 
	 selected.minDate = $("#slider").dateRangeSlider("values").min.getFullYear();
	 selected.maxDate = $("#slider").dateRangeSlider("values").max.getFullYear();
	 
	 console.log(selected);
	 return selected;
}





