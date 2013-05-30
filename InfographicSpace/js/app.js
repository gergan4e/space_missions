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

/*global $*/

// define application width (SVG)
IG.width = 1400;

// define application height (SVG)
IG.height = 700;

// define a SVG container
IG.svgContainer = d3.select('body')
					// correct _namespace definition
					.append('svg:svg')
					.attr('width', IG.width)
					.attr('height', IG.height);

/**
 * PLANETS
 */
IG.svgContainer.selectAll('circle')
			.data(IG.data.planets) // source
			.enter() // does not exist yet
			.append('svg:circle') // for each represented by d (in functions)
			//styling
			.attr('cx', function(d) { // x axis is variable
				'use strict';
				return d.positionFromSun * 200;
			})
			.attr('cy', 200) // y axis is fix	
			//set radius
			.attr('r', function(d) {
				'use strict';
				return d.radius / 100;
			})
			//set color
			.attr('fill', function(d) {
				'use strict';
				return d.color;
			})

			//set _tooltip options
			.attr('rel', 'tooltip')
			.attr('data-html', true)
			.attr('data-original-title', function(d) {
				'use strict';
				var htmlText = '<div style = "color:' + d.color + '"><h6>' + 
				'Mein Name ist ' + d.name + '</h6> </div>';
				return htmlText;
			});


/**
 * FLAGS 
 */

IG.flags = {
	
};



/**
 * Utility functions 
 */

IG.util = {
	
	changeTooltipColorTo : 
	function(color) {'use strict';
		$('.tooltip-inner').css('background-color', color);
		$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
		$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
		$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
		$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
	},

	createHover : function(attribute){
		'use strict';
		$(attribute).hover(function() {
		//change font color
		$('.tooltip-inner').css('color', 'black');
		IG.util.changeTooltipColorTo('silver');
	});
	}
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
}); 


