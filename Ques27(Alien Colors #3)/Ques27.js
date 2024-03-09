// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color:string= "green";
// let alien_color:string="yellow";
var alien_color = "red";
if (alien_color === "green") {
    console.log("color is green: Player earned 5 points.");
}
// if(alien_color === "yellow"){
//     console.log("color is Yellow: Player earned 10 points.")
// }
// if(alien_color === "red"){
//     console.log("color is red: Player earned 15 points.")
// }
else if (alien_color === "yellow") {
    console.log("color is Yellow: Player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("color is red: Player earned 15 points.");
}
