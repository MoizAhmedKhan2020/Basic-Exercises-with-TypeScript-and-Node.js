// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


let favorite_fruits: string[]=["Mango","Apple","Grape","Orange"];

if (favorite_fruits.includes("banana"))
{
    console.log("You Really like Banana")
}
if (favorite_fruits.includes("Mango"))
{
    console.log("You Really like Mango")
}
if (favorite_fruits.includes("Melon"))
{
    console.log("You Really like Melon")
}
if (favorite_fruits.includes("Apricot"))
{
    console.log("You Really like Apricot")
}
if (favorite_fruits.includes("orange"))
{
    console.log("You Really like Orange")
}