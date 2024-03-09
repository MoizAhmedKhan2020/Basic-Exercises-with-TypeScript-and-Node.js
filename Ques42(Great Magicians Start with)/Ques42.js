// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_name = ["Criss Angel", "Derren Brown", "Penn Jillette", "Doug Henning"];
function make_great(magician_name) {
    magician_name.forEach(function (magician_name) { return console.log("Great Magician are, ", magician_name); });
}
make_great(magician_name);
console.log(magician_name);
