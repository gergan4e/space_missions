/*
 * Please use English variables and comments. 
 * Exception: Variables, that will be shown as view. 
 */

//Width and height
var width = 1400;
var height = 700;


//planets information
var planets = [
	//name in words (German), color in colors, radius in kilometers, position relative to sun
	{name: "Love planet", color: "pink", radius: "12000", positionFromSun: "5"},
	{name: "Mars", color: "red", radius: "3400", positionFromSun: "4" },
	{name: "Erde", color: "blue", radius: "6035", positionFromSun: "3" },
    {name: "Venus", color: "orange", radius: "6050", positionFromSun: "2"},
    {name: "Merkur", color: "grey", radius: "2440", positionFromSun: "1"}
];

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
    
    //draw the planets     
	svg 
	.selectAll("circle") //do not exist yet
	.data(planets)
	.enter() //for each planet do
	.append("circle")
	.attr("cx", function(d){
		'use strict';
		return d.positionFromSun * 200;
	})
	.attr("cy", 200)
	//set radius
	.attr("r", function(d){
		'use strict';
		return d.radius/100;
	})
	//set color
	.attr("fill", function(d){
		'use strict';
		return d.color;
	})
	
	.on("mouseover", function(){
		'use strict';
		d3.select(this).style("fill", 'black');
	})
	
	.on("mouseout", function(){
		'use strict';
		/*jslint nomen: true*/
		var d = this.__data__, 
		c = d.color;
		/*jslint nomen: false*/
	
		d3.select(this).style("fill", c);
	});
	
	
	//JQUERY
	 $('svg circle').tipsy({ 
        gravity: 'w', 
        html: true, 
        title: function() {
			'use strict';
			// hide the ugliness of the framework
			
			/*jslint nomen: true*/
			var d = this.__data__, 
			c = d.color;
			/*jslint nomen: false*/
	
			return 'My color was <span style="color:' + c + '">' + c + '</span>'; 
        }
      });
	
	