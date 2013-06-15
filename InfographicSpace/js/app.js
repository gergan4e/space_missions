/***************************************
 * Information visualization: Seminar
 *
 * author: Gergana_Pantcheva
 *
 *			SS 2013
 *
 ***************************************/

/**
 * Application initialization
 */

/*global $, console*/


// define application width (SVG)
IG.width = window.innerWidth;

// define application height (SVG)
IG.height = window.innerHeight;

// define a SVG container - the place where the SVG are drawn
IG.svgContainer = d3.select('body')
					// correct _namespace definition
					.append('svg:svg')
					    .attr("width", "100%")
						.attr("height", "100%")
						.attr("viewBox", "0 0 1400 600");


/**
 * PLANETS
 */
IG.spaceObjects = {
	setObject : function(nameSpaceObject, x, y, width, height){
		'use strict';
		IG.svgContainer
		.append('svg:image')
		.attr('xlink:href', 
		'img/planets/' + nameSpaceObject + '_BILD.png')
		.attr('x', x)
		.attr('y', y)
		.attr('width', width)
		.attr('height', height)
		.attr('name', nameSpaceObject);
	}
};

IG.spaceObjects.setObject('Sonne', -500, -200, 1200, 1200);
IG.spaceObjects.setObject('Merkur', 200, 300, 4.8, 4.8);
IG.spaceObjects.setObject('Venus', 230, 270, 12.1, 12.1);
IG.spaceObjects.setObject('Erde', 260, 260, 12.7, 12.7);
IG.spaceObjects.setObject('Mond', 300, 250, 3.4, 3.4);
IG.spaceObjects.setObject('Mars', 330, 280, 6.8, 6.8);
IG.spaceObjects.setObject('Asteroidenguertel', 360, 60, 100, 400);
IG.spaceObjects.setObject('Ceres', 380, 400, 0.97, 0.97);
IG.spaceObjects.setObject('Jupiter', 500, 200, 140.0, 140.0);
IG.spaceObjects.setObject('Saturn', 750, 180, 280.0, 280.0);



/**
 * FLAGS 
 */
IG.flags = {
	appendFlag : function(countryWithCapitalLetters, x, y){
		'use strict';
		IG.svgContainer
		.append('svg:image')
		.attr('xlink:href', 
		'img/flags/' + countryWithCapitalLetters + '_FLAG.png')
		.attr('x', x)
		.attr('y', y)
		.attr('width', 96)
		.attr('height', 50)
		.attr('country', countryWithCapitalLetters)
		.attr('clicked', false)
		.attr('rel', 'tooltip')
		.attr('data-html', true)
		.attr('opacity', 0.3)
		.attr('title', 
			function() {
				var htmlOutput = "<h6>Click me!</h6>";
				return htmlOutput;
			}
		)
		
		
		.on('click', function(){
			if(this.getAttribute('clicked') === 'false') {
				this.style.opacity = 1.0;
				this.setAttribute('clicked', true);
			} else {
				this.style.opacity = 0.3;
				this.setAttribute('clicked', false);
			}
			IG.util.drawPaths(IG.util.getCurrentView());
			
		});
		
	}

};

IG.flags.appendFlag('EU', 900, 0);
IG.flags.appendFlag('USSR', 1000, 0);
IG.flags.appendFlag('CHINA', 1100, 0);
IG.flags.appendFlag('USA', 1200, 0);


/**
 * Utility functions 
 */


IG.util.changeTooltipColorTo = function(color) {'use strict';
	$('.tooltip-inner').css('background-color', color);
	$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
	$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
	$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
	$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
};

IG.util.createHover = function(attribute) {'use strict';
	$(attribute).hover(function() {
		//change font color
		$('.tooltip-inner').css('color', 'black');
		IG.util.changeTooltipColorTo('silver');
	});
};

IG.util.getCurrentView = function() {
	'use strict';
	var currentState = {
		name : '',
		countries : [],
		minDate : '',
		maxDate : ''
	}, allImages, arrayCountries = [], obj;

	// name determination
	currentState.name = $('#ssmInput').val();

	//countries

	//flags determination
	allImages = IG.svgContainer.selectAll('image')[0];
	for (obj in allImages) {
		if (allImages.hasOwnProperty(obj)) {
			if (allImages[obj].getAttribute('clicked') === 'true') {
				arrayCountries.push(allImages[obj].getAttribute('country'));
			}
		}
	}

	currentState.countries = arrayCountries;

	// get the date of the _timeline
	currentState.minDate = $("#slider").dateRangeSlider("values").min.getFullYear();
	currentState.maxDate = $("#slider").dateRangeSlider("values").max.getFullYear();

	return currentState;
};

IG.util.drawPaths = function(currentState) {
	'use strict';
	
	//delete all of the paths
	IG.svgContainer
			.selectAll('path')
			.remove();

	


	// you can define different line interpolations
	//  "linear", "step-before", "step-after", "basis",
	// "basis-closed", "cardinal", "cardinal-closed" ...
	// See http://www.dashingd3js.com/svg-paths-and-d3js
	var line = d3.svg.line()
	.x(function(d) {
		return d.x;
	})
	.y(function(d) {
		return d.y;
	}).interpolate('basis'), selected, obj, currentObj;


	function addPath(spaceMission) {
		IG.svgContainer
		.append('path')
		.attr('d', line(spaceMission.path))
		.attr('name', spaceMission.name)
		.attr('country', spaceMission.country)
		.attr('duration', spaceMission.duration)
		.attr('year', spaceMission.year)
		.attr('stroke', 'silver')
		.attr('stroke-width', 1)
		.attr('fill', 'none')
		.on("mouseover", function(){
			d3.select(this).style("stroke", 'white').style("stroke-width", "3");
		})
		.on("mouseout", function(){	
			//default values
			d3.select(this).style("stroke", 'silver').style("stroke-width", "1");
		})
		
		//set _tooltip options
		.attr("rel","tooltip")
		.attr("data-html", "true")
		.attr("title", function(){
				var htmlOutput = "<h6>Hallo! Mein Name ist " + this.getAttribute("name") + "." +
				" Ich habe "  + this.getAttribute("duration") + " gedauert. Ich komme aus " + 
				this.getAttribute("country") + "!</h6>";
			return htmlOutput;
		});
		
		
	}
	
	
	
	for (obj in IG.data.missions) {

		if (IG.data.missions.hasOwnProperty(obj)) {

			currentObj = IG.data.missions[obj];
			// whether the input box is empty
			if (currentState.name === '' 
			&& $.inArray(currentObj.country, currentState.countries) !== -1 
			&& currentState.minDate <= currentObj.year
			&& currentState.maxDate >= currentObj.year) {
				console.log("It's done! Input box was empty!");
				addPath(currentObj);				
			} else if(currentState.name === currentObj.name 
			&& $.inArray(currentObj.country, currentState.countries) !== -1 
			&& currentState.minDate <= currentObj.year
			&& currentState.maxDate >= currentObj.year){
				console.log("It's done! Input box was not empty!");
				addPath(currentObj);	
			} else {
				console.log('Nothing to do here!');
			}

		}

	}
	
	$("[rel=tooltip]").tooltip({
		'container' : 'body',
		'placement' : 'top'
	});

	IG.util.createHover('path');
	
}; 


/**
 * Post _scriptum
 */

$(document).ready(function() {
	'use strict';
	// select all elements, which have a _tooltip attribute
	$("[rel=tooltip]").tooltip({
		'container' : 'body',
		'placement' : 'top'
	});

	IG.util.createHover('circle');
	IG.util.createHover('image');
});

//Initialize slider

$("#slider").dateRangeSlider({
	bounds : {
		min : new Date(1912, 0, 1),
		max : new Date(2052, 11, 31)
	},
	defaultValues : {
		min : new Date(1960, 1, 10),
		max : new Date(2012, 4, 22)

	},

	formatter : function(val) {
		'use strict';
		//JS initial month = 0...
		var year = val.getFullYear();
		return year;
	}
});

$("#slider").bind("valuesChanged", function(e, data){
	'use strict';
	IG.util.drawPaths(IG.util.getCurrentView());
});