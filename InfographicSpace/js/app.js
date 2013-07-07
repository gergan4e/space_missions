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
					.attr('width', '100%')
					.attr('height', '100%')
					.attr('viewBox', '0 57 1600 600');
			
													

/**
 * PLANETS
 */

IG.spaceObjects  = {
	collection : [
                   
    ],
	
	setObject : function(planet){
		'use strict';
		IG.spaceObjectContainer
		.append('svg:image')
		.attr('class', 'planet')
		.attr('xlink:href', 
		'img/planets/' + planet.nameOfTheSpaceObject + '_BILD.png')
		.attr('x', planet.xCoordinate)
		.attr('y', planet.yCoordinate)
		.attr('width', planet.width)
		.attr('height', planet.height)
		.attr('name', planet.nameOfTheSpaceObject);
	}, 
	

	addZoomFunctionality : function() {'use strict';
			IG.spaceObjectContainer
				.attr("transform", "translate(" + d3.event.translate[0]
				+ ',' + d3.event.translate[1] + ") scale(" 
				+ d3.event.scale + ")");

	}

};

/**
 * The function provides simple functionality to add a navigation object 
 * to screen. E.g. flags, specials etc. 
 * @param imageName -> title
 * @param x, y, htmlTextAsComment
 * @param className -> specify the class of the image (very useful to 
 * diff. objects, e.g. image.flags)
 * @param imageSuffix -> the last part of the image file, e.g. _FLAGS.png
 *  
 */
IG.util.addScreenObject = function(parameters){
		'use strict';
		var output = IG.svgContainer
		.append('svg:image')
		.attr('class', parameters.className)
		.attr('xlink:href', 
		'img/' + parameters.folderName + '/' + parameters.imageName + parameters.imageSuffix)
		.attr('x', parameters.x)
		.attr('y', parameters.y)
		.attr('width', parameters.width)
		.attr('height', parameters.height)
		//.attr('country', parameters.imageName)
		.attr('clicked', false)
		.attr('rel', 'tooltip')
		.attr('data-html', true)
		.attr('opacity', 0.3)
		.attr('title', 
			function() {
				return parameters.htmlTextAsComment;
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
		
		return output;
	};


// the method creates a planet object and adds it to 
// the IG.spaceObjects.collection
IG.util.planetFactory = function(name, x, y, width, height){
	'use strict';
	var planet = {
		nameOfTheSpaceObject : name,
		xCoordinate : x,
		yCoordinate : y,
		width : width, 
		height : height
	};
	IG.spaceObjects.collection.push(planet);
};

//Create a container for the planets and add the zoom functionality
IG.spaceObjectContainer = IG.svgContainer.append('svg:g')
				            .call(d3.behavior 
				            .zoom() 
				            .scale(1) 
							.scaleExtent([1, 20])  // scale interval
							.on("zoom", IG.spaceObjects.addZoomFunctionality)); 



//create planets (or add planets)
IG.util.planetFactory('Sonne', -1000, -200, 1200, 1200);
IG.util.planetFactory('Merkur', 300, 300, 4.8, 4.8);
IG.util.planetFactory('Venus', 400, 280, 12.1, 12.1);
IG.util.planetFactory('Halley', 450, 200, 4.0, 4.0);
IG.util.planetFactory('Erde', 500, 270, 12.7, 12.7);
IG.util.planetFactory('Mond', 530, 250, 3.4, 3.4);
IG.util.planetFactory('Mars', 650, 280, 6.8, 6.8);
IG.util.planetFactory('Phobos', 680, 270, 1.5, 1.5);
IG.util.planetFactory('Asteroidenguertel', -1450, -850, 2500, 2500);
IG.util.planetFactory('Ceres', 820, 400, 0.97, 0.97);
IG.util.planetFactory('Hartley', 1000, 200, 4.0, 4.0);
IG.util.planetFactory('Jupiter', 1100, 200, 140.0, 140.0);
IG.util.planetFactory('Tempel1', 1200, 400, 4.0, 4.0);
IG.util.planetFactory('Saturn', 1400, 150, 280.0, 280.0);
IG.util.planetFactory('Titan', 1600, 200, 1.5, 1.5);
IG.util.planetFactory('Uranus', 1900, 240, 51.0, 51.0);
IG.util.planetFactory('Neptun', 2200, 250, 50.0, 50.0);
IG.util.planetFactory('Pluto', 2500, 300, 2.5, 2.5);

//draw the planets (IG.spaceObjects.collection)
IG.util.planetDrawer = function(){
	'use strict';
	var i, collection = IG.spaceObjects.collection; 
	for(i = 0; i < collection.length; i = i+1){
		IG.spaceObjects.setObject(collection[i]);
	}
};
//invoke
IG.util.planetDrawer();


/**
 * FLAGS 
 */
IG.flags = {
	appendFlag : function(countryWithCapitalLetters, x, y, htmlTextAsComment){
		'use strict';
		var suffix = '_FLAG.png',
			className = 'flag',
			width = '96',
			height = '50',
			folderName = 'flags',
			
		 parameters = {
			imageName : countryWithCapitalLetters,
			imageSuffix : suffix,
			x : x,
			y: y, 
			width : width,
			height : height,
			htmlTextAsComment : htmlTextAsComment,
			className : className,
			folderName : folderName
		};
		
		IG.util.addScreenObject(parameters)
				.attr('country', parameters.imageName);
	}
};

IG.flags.appendFlag('EU', 1000, 0, "<h6>Europäische Weltraumorganisation (ESA)</h6>");
IG.flags.appendFlag('USSR', 1035, 50, "<h6>Sowjetunion</h6>");
IG.flags.appendFlag('RUSSIA', 1100, 0, "<h6>Russland (ab 1992)</h6>");
IG.flags.appendFlag('USA', 1135, 50, "<h6>Vereinigte Staaten</h6>");
IG.flags.appendFlag('CHINA', 1200, 0, "<h6>Volksrepublik China</h6>");
IG.flags.appendFlag('JAPAN', 1235, 50, "<h6>Japan</h6>");
IG.flags.appendFlag('INDIA', 1300, 0, "<h6>Indien</h6>");

IG.specials = {
	addRecord : function(){
		'use strict';
		var imageName = 'Rekord',
			suffix = '_SPECIAL.png',
			className = 'record',
			folderName = 'specials',
			x = '1450',
			y ='0',
			width = '40',
			height = '40',
			htmlTextAsComment = 'Rekord',
				
		 parameters = {
			imageName : imageName,
			imageSuffix : suffix,
			x : x,
			y: y, 
			width : width,
			height : height,
			htmlTextAsComment : htmlTextAsComment,
			className : className,
			folderName : folderName
		};
		
		IG.util.addScreenObject(parameters)
				.attr('records', parameters.imageName);
	},
	
		addTourist : function(){
		'use strict';
		var imageName = 'Weltraumtourist',
			suffix = '_SPECIAL.png',
			className = 'tourist',
			folderName = 'specials',
			x = '1450',
			y ='50',
			width = '40',
			height = '40',
			htmlTextAsComment = 'Weltraumtourist',
				
		 parameters = {
			imageName : imageName,
			imageSuffix : suffix,
			x : x,
			y: y, 
			width : width,
			height : height,
			htmlTextAsComment : htmlTextAsComment,
			className : className,
			folderName : folderName
		};
		
		IG.util.addScreenObject(parameters)
				.attr('tourists', parameters.imageName);
	},
	
	addFalseStart : function(){
		'use strict';
		var imageName = 'Fehlstart',
			suffix = '_SPECIAL.png',
			className = 'falseStart',
			folderName = 'specials',
			x = '1450',
			y ='100',
			width = '40',
			height = '40',
			htmlTextAsComment = 'Fehlstart',
				
		 parameters = {
			imageName : imageName,
			imageSuffix : suffix,
			x : x,
			y: y, 
			width : width,
			height : height,
			htmlTextAsComment : htmlTextAsComment,
			className : className,
			folderName : folderName
		};
		
		IG.util.addScreenObject(parameters)
				.attr('falseStarts', parameters.imageName);
	},
	
	addDeath : function(){
		'use strict';
		var imageName = 'Tod',
			suffix = '_SPECIAL.png',
			className = 'death',
			folderName = 'specials',
			x = '1450',
			y ='150',
			width = '40',
			height = '40',
			htmlTextAsComment = 'Tödliches Unglück',
				
		 parameters = {
			imageName : imageName,
			imageSuffix : suffix,
			x : x,
			y: y, 
			width : width,
			height : height,
			htmlTextAsComment : htmlTextAsComment,
			className : className,
			folderName : folderName
		};
		
		IG.util.addScreenObject(parameters)
				.attr('deaths', parameters.imageName);
	}
	
};
IG.specials.addRecord();
IG.specials.addTourist();
IG.specials.addFalseStart();
IG.specials.addDeath();

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
		maxDate : '',
		//booleans
		isRecord: '',
		isFalseStart: '',
		isTourist: '',
		isLethal : ''
	}, allImages, arrayCountries = [], obj;
	
	/**
	 * NAME -> INPUT BOX 
	 */
	// name determination
	currentState.name = $('#ssmInput').val();

	/*
	 * COUNTRIES
	 */

	//flags determination
	allImages = IG.svgContainer.selectAll('image.flag')[0];
	for (obj in allImages) {
		if (allImages.hasOwnProperty(obj)) {
			if (allImages[obj].getAttribute('clicked') === 'true') {
				arrayCountries.push(allImages[obj].getAttribute('country'));
			}
		}
	}

	currentState.countries = arrayCountries;
	
	/*
	 * RECORD
	 */
	currentState.isRecord = IG.svgContainer.selectAll('image.record')[0][0]
								.getAttribute('clicked');
								
	/*
	 * TOURIST
	 */
	currentState.isTourist = IG.svgContainer.selectAll('image.tourist')[0][0]
								.getAttribute('clicked');
								
	/*
	 * FALSE START
	 */
	currentState.isFalseStart = IG.svgContainer.selectAll('image.falseStart')[0][0]
									.getAttribute('clicked');
									
	/*
	 * DEATH
	 */
	currentState.isLethal = IG.svgContainer.selectAll('image.death')[0][0]
								.getAttribute('clicked');
	
	/*
	 * SLIDER
	 */
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
		IG.spaceObjectContainer
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
			console.log(currentState);
			// whether the input box is empty
			if (currentState.name === '' 
			&& $.inArray(currentObj.country, currentState.countries) !== -1 
			&& currentState.minDate <= currentObj.year
			&& currentState.maxDate >= currentObj.year) {
				addPath(currentObj);				
			} 
			
			else if(currentState.name === currentObj.name 
			&& $.inArray(currentObj.country, currentState.countries) !== -1 
			&& currentState.minDate <= currentObj.year
			&& currentState.maxDate >= currentObj.year){
				addPath(currentObj);	
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
