// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length;
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	const tab = filmingLocations.sort((a,b) => (a.fields.date_debut>b.fields.date_debut) ? 1:-1);
	return tab;

}
//console.log(sortFilmingLocationsByStartDate());
//console.log(sortFilmingLocationsByStartDate())

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	const tab = filmingLocations.filter((player) => player.fields.annee_tournage == 2020);
	return tab.length;

}
console.log(getFilmingLocationsNumber2020())

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	let counter = {}

	filmingLocations.forEach(function(obj) {
		var key = obj.fields.annee_tournage
		counter[key] = (counter[key] || 0) + 1
	})
	return counter
}
console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	let counter = {}

	filmingLocations.forEach(function(obj) {
		var key = obj.fields.ardt_lieu
		counter[key] = (counter[key] || 0) + 1
	})
	return counter
}
console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	let counter = {}
	for (var i=0; i<filmingLocations.length; i++) {
		var key = filmingLocations[i];
		if (!counter[key.fields.nom_tournage]){
			counter[key.fields.nom_tournage]=0
		}
		counter[key.fields.nom_tournage]+=1;

	}
	return [counter]
}
// console.log(filmingLocations)
console.log(getFilmLocationsByFilm())

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	const set1 = new Set();
	for (let i of filmingLocations) {
		var datum = i.fields.nom_tournage;
		set1.add(datum)
	}
	return set1.size;
}
console.log(getNumberOfFilms())
// console.log(filmingLocations)

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	const tab = []
	for (let i of filmingLocations){
		if (i.fields.nom_tournage=="LRDM - Patriot season 2") {
			tab.push(i.fields.adresse_lieu);
		}
	}
	return tab;
}

console.log(getArseneFilmingLocations());

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	const films = {}
	for (let i of filmingLocations) {
		let key = i.fields;
		if (favoriteFilms.includes(key.nom_tournage))
		{
			if (!films[key.nom_tournage]){
				films[key.nom_tournage]=[];
			}
			films[key.nom_tournage].push(key.ardt_lieu);
		}
	}
	return [films];
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

console.log(getFavoriteFilmsLocations());

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	let counter = {}
	for (var i=0; i<filmingLocations.length; i++) {
		var key = filmingLocations[i];
		if (!counter[key.fields.nom_tournage]){
			counter[key.fields.nom_tournage]=[]
		}
		counter[key.fields.nom_tournage].push(key.fields.adresse_lieu);

	}
	return counter
}

console.log(getFilmingLocationsPerFilm())

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	const counter = {}
	for (let i of filmingLocations) {
		let key = i.fields;
		if (!counter[key.type_tournage]) {
			counter[key.type_tournage]=0;
		}
		counter[key.type_tournage]+=1;
	}
	return counter
}

console.log(countFilmingTypes)

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	const counter = {}
	for (let i of filmingLocations) {
		let key = i.fields;
		if (!counter[key.type_tournage]) {
			counter[key.type_tournage]=0;
		}
		counter[key.type_tournage]+=1;
	}
	var items = Object.keys(counter).map(function(key) {
		return [key, counter[key]];
	  });
	  
	  // Sort the array based on the second element
	  items.sort(function(first, second) {
		return second[1] - first[1];
	  });
	return [items]
}

console.log(sortedCountFilmingTypes());

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
