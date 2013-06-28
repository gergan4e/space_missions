/* global IG, console */

/***********************************************************
 *
 *					Application database
 *
 ***********************************************************/

/*
 * Functions needed for project initialization
 */

var IG = {};
IG.util = {};

IG.util.getRandomInt = function(min, max) {'use strict';
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

IG.util.createRandomPath = function(startXcoordinate, startYcoordinate, endXcoordinate, endYcoordinate) {
			'use strict';
			//Variable declaration (JSLint suggestion)
			var path, initialPosition, numberOfDummySegments, counter, segment, endPosition;
			//initialize an empty array
			path = [];

			//define start coordinates
			initialPosition = {
				'x' : startXcoordinate,
				'y' : startYcoordinate
			};
			//add the initial position to the path array
			path.push(initialPosition);

			// the number of segments in the line interpolation (between 1 and 5)
			numberOfDummySegments = IG.util.getRandomInt(1, 3);

			//create a loop, which generates dummy segments in a given range
			counter = 0;
			while (counter < numberOfDummySegments) {
				//define the range
				segment = {
					'x' : IG.util.getRandomInt(Math.min(startXcoordinate + 50,
							endXcoordinate + 50), Math.max(startXcoordinate + 50, 
							endXcoordinate + 50)),
					'y' : IG.util.getRandomInt(Math.min(startYcoordinate + 50, endYcoordinate + 50), 
					Math.max(startYcoordinate + 50, endYcoordinate + 50))
				};

				path.push(segment);

				counter = counter + 1;
			}
			//add the end position to close the path
			endPosition = {
				'x' : endXcoordinate,
				'y' : endYcoordinate
			};

			path.push(endPosition);

			return path;
		};




IG.data = {

	
	missions : [
	{
		path : IG.util.createRandomPath(500, 270, 520, 280),
		name : "Wostok",
		year : 1961,
		duration : "1:48 h.",
		country : "USSR"
	}, {
		path : IG.util.createRandomPath(500, 270, 330, 300),
		name : "Mercury-Atlas 6",
		year : 1962,
		duration : "4:55 h.",
		country : "USA"
	}, {
		path : IG.util.createRandomPath(500, 270, 680, 280),
		name : "Fobos",
		year : 1988,
		duration : "1 Jahr",
		country : "USSR"
	}, {
		path : IG.util.createRandomPath(500, 270, 430, 280),
		name : "Venus Express",
		year : 2005,
		duration : "6 Monate",
		country : "EU"
	}, {
		path : IG.util.createRandomPath(500, 270, 500, 220),
		name : "Shenzhou 5",
		year : 2003,
		duration : "21:23 h.",
		country : "CHINA"
	}, {
		path : IG.util.createRandomPath(500, 270, 650, 280),
		name : "Opportunity",
		year : 2003,
		duration : "10 Jahre",
		country : "USA"
	}, {
		path : IG.util.createRandomPath(500, 270, 300, 330),
		name : "Messanger",
		year : 2004,
		duration : "8 Jahre",
		country : "USA"
	}]
};

