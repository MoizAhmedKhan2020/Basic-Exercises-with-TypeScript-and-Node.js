// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. 
var magician_name = ["Criss Angel", "Derren Brown", "Penn Jillette", "Doug Henning"];
function show_magicians(magician_name) {
    magician_name.forEach(function (magician_name) { return console.log(magician_name); });
}
show_magicians(magician_name);
