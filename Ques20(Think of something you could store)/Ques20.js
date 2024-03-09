// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountain = ["Mount Everest", "K2", "Nanga Parbat", "Kangchenjunga", "Lhotse"];
//mountain.map((items) =>  console.log(`List of highest mountains, ${items}. `));
console.log("Lists of HIghest Mountains in the World:\n");
mountain.forEach(function (mountain) { return console.log("Here are some Highest mountains int he world:", mountain); });
// mountain.forEach(mountain=> console.log(mountain));
