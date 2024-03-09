// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians_name:string[]=["Criss Angel", "Derren Brown", "Penn Jillette", "Doug Henning"];


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician_name => console.log(magician_name));

}

function make_great(magicians_name:string[]): string[]{
    return magicians_name.map(magicians_name => `The Great ${magicians_name}`);
}
let great_magician:string[]=make_great([...magicians_name]);
show_magicians(magicians_name);
show_magicians(great_magician);