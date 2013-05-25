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
	
//set _tooltip options
.attr("rel","tooltip")
.attr("data-html", "true")
.attr("data-original-title", function(d){
	'use strict';
	
	var htmlText = '<div style = "color:' + d.color + '"><h6>' +
					'Mein Name ist ' + d.name + '</h6>';
	return htmlText;
})
	
	
//stroke
.on("mouseover", function(){
	'use strict';
	d3.select(this)
	.style("stroke", 'white')
	.style("stroke-width", "3");
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
// for each mission and add the mission specific information. 
var obj;
for(obj in spaceMissions){
	// hasOwnProperty is a routine check. Ignore it!
	if(spaceMissions.hasOwnProperty(obj)){
		// the addPath function is an utility function 
		// => appUtil.js
		addPath(spaceMissions[obj]);
	}
}

/*
 *  Select all path elements.
 *  .attr("stroke", "silver")
 *  .attr("stroke-width", 1)
 *  are the default values! See appUtil.js addPath()
 * 
 */
svgContainer.selectAll("path")

.on("mouseover", function(){
		'use strict';
		d3.select(this)
		.style("stroke", 'white')
		.style("stroke-width", "3");
})

.on("mouseout", function(){
		'use strict';
		//default values
		d3.select(this)
		.style("stroke", 'silver')
		.style("stroke-width", "1");
	
})

//set _tooltip options
.attr("rel","tooltip")
.attr("data-html", "true")
.attr("title", function(){
	'use strict';
	var htmlOutput = "<h6>Hallo! Mein Name ist " + this.getAttribute("name") + "." +
	" Ich habe "  + this.getAttribute("duration") + " gedauert. Ich komme aus " + 
	 this.getAttribute("country") + "!</h6>";
	return htmlOutput;
});

appendImage("EU", 950, 100);
appendImage("USSR", 1050, 100);
appendImage("CHINA", 1150, 100);
appendImage("USA", 1250, 100);


svgContainer
.selectAll("image")
.attr("rel","tooltip")
.attr("data-html", "true")
.attr("title", function(){
	'use strict';
	var htmlOutput = "<h6>Click me, baby!</h6>";
	return htmlOutput;
})

.on("click", function(){
	'use strict';
	//first this => image
	var flagCountry = this.getAttribute("country");
	d3.selectAll("path")
	.filter(function(d){
		//second this is a level deeper 
		//=> path! Look at .selectAll
		console.log(this);
		return this.getAttribute("country") === flagCountry;
	})
	.attr("stroke", "silver")
	.attr("stroke-width", 1);
});


	
	