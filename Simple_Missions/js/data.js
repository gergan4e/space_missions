//planets information

var planets = [
//name in words (German), color in colors, radius in kilometers, position relative to sun
{
	name : "Mars",
	color : "red",
	radius : 3400,
	positionFromSun : 4
}, {
	name : "Erde",
	color : "blue",
	radius : 6035,
	positionFromSun : 3
}, {
	name : "Venus",
	color : "purple",
	radius : 6050,
	positionFromSun : 2
}, {
	name : "Merkur",
	color : "grey",
	radius : 2440,
	positionFromSun : 1
}];


//TODO: duration is ambiguous and EU is not a country
// NB Capital letters!
var spaceMissions = [
{
	path : createRandomPath(600, 200, 400, 400),
	name : "Wostok",
	year : 1961,
	duration : "1:48 h.",
	country : "USSR"
}, {
	path : createRandomPath(600, 200, 200, 200),
	name : "Mercury-Atlas 6",
	year : 1962,
	duration : "4:55 h.",
	country : "USA"
}, {
	path : createRandomPath(600, 200, 800, 200),
	name : "Fobos",
	year : 1988,
	duration : "1 Jahr",
	country : "USSR"
}, {
	path : createRandomPath(600, 200, 630, 220),
	name : "Venus Express",
	year : 2005,
	duration : "6 Monate",
	country : "EU"
}, {
	path : createRandomPath(500, 150, 130, 220),
	name : "Shenzhou 5",
	year : 2003,
	duration : "21:23 h.",
	country : "CHINA"
}, {
	path : createRandomPath(600, 200, 400, 220), 
	name : "Opportunity",
	year : 2003,
	duration : "10 Jahre",
	country : "USA"
}, {
	path :  createRandomPath(600, 200, 200, 220), 
	name : "Messanger",
	year : 2004,
	duration : "8 Jahre",
	country : "USA"
}];








