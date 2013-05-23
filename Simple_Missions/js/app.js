/*
 * Please use English variables and comments. 
 * Exception: Variables, that will be shown as view. 
 */

/*global console */

//Width and height
var width = 1400;
var height = 700;


//Create SVG element
var svgContainer = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
    
//draw the planets and add events (planets only)
svgContainer 
	.selectAll("circle") //do not exist yet
	.data(planets) // use the data defined in the "planets" array
	.enter() //for each planet 
	.append("circle") //create a circle element
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
		d3.select(this)
		.style("stroke", 'silver')
		.style("stroke-width", "2");
	})
	
	.on("mouseout", function(){
		'use strict';
		d3.select(this)
		.style("stroke", '')
		.style("stroke-width", '');
		
		/*jslint nomen: true*/
		var d = this.__data__, 
		c = d.color;
		/*jslint nomen: false*/
	
		d3.select(this).style("fill", c);
	});

//It is a workaround, not in the spirit of .d3, but anyway...
// loop over all missions (look at data.js) and draw the path 
// for each mission.
var obj;
for(obj in spaceMissions){
	// hasOwnProperty is a routine check. Ignore it!
	if(spaceMissions.hasOwnProperty(obj)){
		// the addPath function is an utility function 
		// => appUtil.js
		addPath(spaceMissions[obj].path);
	}
}


//FB style pop-up
$('svg circle').tipsy({
	gravity : 'w',
	html : true,
	title : function() {'use strict';
		// hide the ugliness of the framework
		/*jslint nomen: true*/
		var d = this.__data__, color = d.color, planetName = d.name;
		/*jslint nomen: false*/
		return '<span style="color:' + color + '">' + planetName + '</span>';
	}
}); 



    

	
	
	