/*global $, console, d3, drawSpecificPaths */
function changeTooltipColorTo(color) {'use strict';
	$('.tooltip-inner').css('background-color', color);
	$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
	$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
	$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
	$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
}

function createHover(attribute) {'use strict';
	$(attribute).hover(function() {
		//change font color
		$('.tooltip-inner').css('color', 'black');
		changeTooltipColorTo('silver');
	});

}

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
	drawSpecificPaths(false);	
});

$(document).ready(function() {'use strict';
	$("[rel=tooltip]").tooltip({
		'container' : 'body',
		'placement' : 'top'
	});

	createHover('circle');
	createHover('path');
	createHover('image');
});