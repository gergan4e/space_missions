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

/*global $, console, d3*/

// define application width (SVG)
IG.width = window.innerWidth;

// define application height (SVG)
IG.height = window.innerHeight;


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
	},
	
		addManned : function(){
		'use strict';
		var imageName = 'Bemannt',
			suffix = '_SPECIAL.png',
			className = 'manned',
			folderName = 'specials',
			x = '1450',
			y ='200',
			width = '40',
			height = '40',
			htmlTextAsComment = 'Bemannt',
				
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
IG.specials.addManned();

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
		isLethal : '',
		isManned : ''
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
	 * MANNED
	 */
	currentState.isManned= IG.svgContainer.selectAll('image.manned')[0][0]
								.getAttribute('clicked');
	
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
		.attr('name', spaceMission.mission)
		.attr('country', spaceMission.country)
		.attr('year', spaceMission.start)
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
