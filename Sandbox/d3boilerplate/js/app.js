/*global  */

var width = 1000;
var height = 500;

var data = [1, 4, 9, 17];

//Create SVG element
var svg = d3
	.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);
	
var circleGroup = svg.append('g'); //group the elements
	
	circleGroup
	.selectAll("circle")
	.data(data)
	.enter()
	.append("circle")//create a circle element
	.attr("cx", function(d) {
		'use strict';
	return d * 42;
	})
	.attr("cy", 200)
	//set radius
	.attr("r", function(d) {
		'use strict';
		return d * 10;
	})
	//set color
	.attr("fill", function(d) {
		'use strict';
		return "blue";
	});

circleGroup.call(d3.behavior.zoom()
.scale(1)
.scaleExtent([1, 20])
.on("zoom", redraw));


function redraw() {'use strict';
	circleGroup.attr("transform", "translate(" +
	 d3.event.translate[0] + ',' + d3.event.translate[1] + ") scale(" 
	 + d3.event.scale + ")");
}







