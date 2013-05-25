/*global $, console */

function changeTooltipColorTo(color) {'use strict';
	$('.tooltip-inner').css('background-color', color);
	$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
	$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
	$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
	$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
}

function createHover(attribute) {
	'use strict';
	$(attribute).hover(function() {
		//change font color
		$('.tooltip-inner').css('color', 'black');
		changeTooltipColorTo('silver');
	});

}


$(document).ready(function() {'use strict';
	$("[rel=tooltip]").tooltip({
		'container' : 'body',
		'placement' : 'top'
	});

	createHover('circle');
	createHover('path');
	createHover('image');
});
