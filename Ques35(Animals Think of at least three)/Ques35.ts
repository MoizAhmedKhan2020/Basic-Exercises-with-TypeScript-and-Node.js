// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:string[]=["Cat" , "Dog", "Fish", "Birds", "Horse"];

for(let i=0; i<animals.length; i++){
    console.log("Here are some pets: ",animals[i] );
}
for(let i=0; i<animals.length; i++){
    // console.log("Here are some pets: ",animals[i] );


    if(animals[i] === "Cat"){
        console.log("\nCats are Loving Companionship, Low Maintenance, They Don't Need to be Walked");
    }
    else if(animals[i] === "Dog"){
        console.log("Dogs makes you feel less alone, Encoruge you to move, keeps you healty");
    }
    else if(animals[i] === "Fish"){
        console.log("Fish are quiet and calm creatures, Odor-Free, Therapeutic and Calming");
    }
}
console.log("\nThese pets are easily accessible & they make you happy");
