/*global  */

//Width and height
var width = 1000;
var height = 500;

var data = [1, 4, 9, 17];

//Create SVG element
var svg = d3
	.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);
	
	svg
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
