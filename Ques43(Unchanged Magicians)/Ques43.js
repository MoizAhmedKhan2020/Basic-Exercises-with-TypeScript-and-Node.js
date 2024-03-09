// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_name = ["Criss Angel", "Derren Brown", "Penn Jillette", "Doug Henning"];
function show_magicians(magicians) {
    magicians.forEach(function (magician_name) { return console.log(magician_name); });
}
function make_great(magicians_name) {
    return magicians_name.map(function (magicians_name) { return "The Great ".concat(magicians_name); });
}
var great_magician = make_great(__spreadArray([], magicians_name, true));
show_magicians(magicians_name);
show_magicians(great_magician);
