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
			numberOfDummySegments = IG.util.getRandomInt(1, 5);

			//create a loop, which generates dummy segments in a given range
			counter = 0;
			while (counter < numberOfDummySegments) {
				//define the range
				segment = {
					'x' : IG.util.getRandomInt(Math.min(startXcoordinate + 100,
							endXcoordinate + 100), Math.max(startXcoordinate + 100, 
							endXcoordinate + 100)),
					'y' : IG.util.getRandomInt(Math.min(startYcoordinate + 100, endYcoordinate + 100), 
					Math.max(startYcoordinate + 100, endYcoordinate + 100))
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

	planets : [
	{
		name : "Mars",
		color : "#e3794b",
		radius : 3400,
		positionFromSun : 4
	}, {
		name : "Erde",
		color : "#4da6b3",
		radius : 6035,
		positionFromSun : 3
	}, {
		name : "Venus",
		color : "#e8be8c",
		radius : 6050,
		positionFromSun : 2
	}, {
		name : "Merkur",
		color : "#b0a994",
		radius : 2440,
		positionFromSun : 1
	}],
	
	
	missions : [
	{
		path : IG.util.createRandomPath(600, 150, 400, 400),
		name : "Wostok",
		year : 1961,
		duration : "1:48 h.",
		country : "USSR"
	}, {
		path : IG.util.createRandomPath(600, 150, 200, 200),
		name : "Mercury-Atlas 6",
		year : 1962,
		duration : "4:55 h.",
		country : "USA"
	}, {
		path : IG.util.createRandomPath(600, 150, 800, 200),
		name : "Fobos",
		year : 1988,
		duration : "1 Jahr",
		country : "USSR"
	}, {
		path : IG.util.createRandomPath(600, 150, 350, 220),
		name : "Venus Express",
		year : 2005,
		duration : "6 Monate",
		country : "EU"
	}, {
		path : IG.util.createRandomPath(600, 150, 500, 220),
		name : "Shenzhou 5",
		year : 2003,
		duration : "21:23 h.",
		country : "CHINA"
	}, {
		path : IG.util.createRandomPath(600, 150, 800, 180),
		name : "Opportunity",
		year : 2003,
		duration : "10 Jahre",
		country : "USA"
	}, {
		path : IG.util.createRandomPath(600, 150, 200, 220),
		name : "Messanger",
		year : 2004,
		duration : "8 Jahre",
		country : "USA"
	}]
};

