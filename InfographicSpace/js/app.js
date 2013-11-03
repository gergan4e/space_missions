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
/*jslint nomen: true*/
/*global $, console, d3, jLinq, _*/
/*jslint nomen: false*/
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

IG.flags.appendFlag('EU', 750, 0, "<h5>Europäische Weltraumorganisation (ESA)</h5>");
IG.flags.appendFlag('UdSSR', 785, 50, "<h5>Sowjetunion</h5>");
IG.flags.appendFlag('Russland', 850, 0, "<h5>Russland (ab 1992)</h5>");
IG.flags.appendFlag('USA', 885, 50, "<h5>Vereinigte Staaten</h5>");
IG.flags.appendFlag('China', 950, 0, "<h5>Volksrepublik China</h5>");
IG.flags.appendFlag('Japan', 985, 50, "<h5>Japan</h5>");
IG.flags.appendFlag('Indien', 1050, 0, "<h5>Indien</h5>");

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
			htmlTextAsComment = '<h5>Rekord</h5>',
				
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
			htmlTextAsComment = '<h5>Weltraumtourist</h5>',
				
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
			htmlTextAsComment = '<h5>Fehlstart</h5>',
				
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
			htmlTextAsComment = '<h5>Tödliches Unglück</h5>',
				
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
			x = '1250',
			y ='0',
			width = '80',
			height = '80',
			htmlTextAsComment = '<h5>Bemannt</h5>',
				
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
	
	addUnmanned : function(){
		'use strict';
		var imageName = 'Unbemannt',
			suffix = '_SPECIAL.png',
			className = 'unmanned',
			folderName = 'specials',
			x = '1300',
			y ='0',
			width = '80',
			height = '80',
			htmlTextAsComment = '<h5>Unbemannt</h5>',
				
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
				.attr('undeath', parameters.imageName);
	}
	
	
	
};
IG.specials.addRecord();
IG.specials.addTourist();
IG.specials.addFalseStart();
IG.specials.addDeath();
IG.specials.addManned();
IG.specials.addUnmanned();

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


IG.util.parseYear = function(date){
	'use strict';
	return date.substring(6);
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
		isManned : '', 
		isUnmanned : ''
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
	 * UNMANNED
	 */
	currentState.isUnmanned = IG.svgContainer.selectAll('image.unmanned')[0][0]
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
	
	var interpolation, line, selected, obj, currentObj, activated, lineX;
	
	
	// you can define different line interpolations
	//  "linear", "step-before", "step-after", "basis",
	// "basis-closed", "cardinal", "cardinal-closed" ...
	// See http://www.dashingd3js.com/svg-paths-and-d3js
	line = d3.svg.line()
	.x(function(d) {
		return d.x;
	})
	.y(function(d) {
		return d.y;
	});
	
	interpolation = 'step-after';
	
	line.interpolate(interpolation);

	function addPath(spaceMission) {
		IG.spaceObjectContainer
		.append('path')
		.attr('d', line(spaceMission.path))
		.attr('name', spaceMission.mission)
		.attr('country', spaceMission.country)
		.attr('start', spaceMission.start)
		.attr('end', spaceMission.landing)
		.attr('target', spaceMission.target)
		.attr('result', spaceMission.result)
		.attr('people', spaceMission.people)
		.attr('comment', spaceMission.comment)
		.attr('stroke', 'silver')
		.attr('stroke-width', 0.3)
		//monkey it out
		.attr('fill', 'rgba(10, 150, 20, 0)')
		.on("mouseover", function(){
			d3.select(this).style("stroke", 'white').style("stroke-width", "0.5");
		})
		.on("mouseout", function(){	
			//default values
			d3.select(this).style("stroke", 'silver').style("stroke-width", "0.3");
		})
		
		//set _tooltip options
		.attr("rel","tooltip")
		.attr("data-html", "true")
		.attr("title", function(){
				var htmlOutput = "<h5><b>Mission: </b>" + this.getAttribute("name") + "<br>" +
				"<b>Start: </b>" + this.getAttribute("start") + "<br>" + 
				"<b>Ende: </b>" + this.getAttribute("end") + "<br>" + 
				"<b>Zielobjekt: </b>" + this.getAttribute("target") + "<br>" + 
				"<b>Ergebnis: </b>" + this.getAttribute("result") + "<br>" +
				"<b>Astronauten: </b>" + this.getAttribute("people") + "<br>" + "<hr size=1>" +
				this.getAttribute("comment") + "<br>" + "<h5>";
			return htmlOutput;
		});
		
		
	}
	

	function specialsDeliverer() {
		var specialsArray, specialAndCounter, state, specials, obj,  output, isVirgin;
		isVirgin = true;
		state = IG.util.getCurrentView();
		specialsArray = [{
			name : "falseStart",
			clicked : state.isFalseStart
		}, {
			name : "death",
			clicked : state.isLethal
		}, {
			name : "records",
			clicked : state.isRecord
		}, {
			name : "spaceTourist",
			clicked : state.isTourist
		}];

		specials = jLinq.from(IG.data.missions);
		specialAndCounter = 0;
		for (obj in specialsArray) {
			if (specialsArray.hasOwnProperty(obj)) {
				if (specialsArray[obj].clicked === "true") {
					isVirgin = false;
					if (specialAndCounter === 0) {
						specials.starts(specialsArray[obj].name, specialsArray[obj].clicked);
					} else {
						specials.and().starts(specialsArray[obj].name, specialsArray[obj].clicked);
					}
					specialAndCounter = specialAndCounter + 1;
				}
			}
		}

				
				
		if (isVirgin){
			output = "empty";
		} else {
			output = specials = specials.select();
		}
		

		return output;
	}

	
	function countryDeliverer(){
		var state, i, countries, isVirgin, output;
		state = IG.util.getCurrentView();
		isVirgin = true;
		countries = jLinq.from(IG.data.missions);
		
		for(i = 0; i < state.countries.length; i = i + 1){
			isVirgin = false;
			if (i === 0){
				countries.starts("country", state.countries[i]);
			} else {
				countries.or().starts("country", state.countries[i]);
			}
		}
		
		if (isVirgin){
			output = "empty";
		} else {
			output = countries.select();
		}
		
		return output;
	}
	
	
	function drawer(){	
		var specials, countries, manned, name, time,
		state, specialsArray, specialAndCounter, common, commonObj, mannedChecked,
		intersectionCand;
		
		state = IG.util.getCurrentView();
		specials = specialsDeliverer();					
		countries = countryDeliverer();		
	
			
		manned = jLinq.from(IG.data.missions);
		mannedChecked = false;
		if (state.isUnmanned === "true"){
			mannedChecked = true;
			manned.starts("manned", "false");
		}
		if (state.isManned === "true" && state.isUnmanned === "true"){
			mannedChecked = true;
			manned.or().starts("manned", "true");
		} else if (state.isManned === "true"){
			mannedChecked = true;
			manned.starts("manned", "true");
		}
		
		if (mannedChecked){
			manned = manned.select();
		} else {
			manned = "empty";
		}
		
		intersectionCand = [];
		
		if (manned !== "empty"){
			intersectionCand.push(manned);
		}
		
		if (specials !== "empty"){
			intersectionCand.push(specials);
		}
		
		if(countries !== "empty") {
			intersectionCand.push(countries);
		}
		
		
		/*jslint nomen: true*/
		common = _.intersection.apply(_, intersectionCand);
		/*jslint nomen: false*/
		
		
		for (commonObj in common) {
			if(common.hasOwnProperty(commonObj)){
				      // whether the input box is empty
						if (state.name === '' 
                        && state.minDate <= IG.util.parseYear(common[commonObj].start)
                        && state.maxDate >= IG.util.parseYear(common[commonObj].start)) {
                                addPath(common[commonObj]);
                        } else if (state.name === common[commonObj].mission 
                        && state.minDate <= IG.util.parseYear(common[commonObj].start)
                        && state.maxDate >= IG.util.parseYear(common[commonObj].start)){
                                addPath(common[commonObj]);
                        }
			}
		}
		
	
	}
	
	drawer();
	
	$("[rel=tooltip]").tooltip({
		'container' : 'body',
		'placement' : 'right'
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
	IG.util.createHover('image');
});

//Initialize slider

$("#slider").dateRangeSlider({
	bounds : {
		min : new Date(1950, 0, 1),
		max : new Date(2020, 11, 31)
	},
	defaultValues : {
		min : new Date(1960, 1, 10),
		max : new Date(2013, 4, 22)

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