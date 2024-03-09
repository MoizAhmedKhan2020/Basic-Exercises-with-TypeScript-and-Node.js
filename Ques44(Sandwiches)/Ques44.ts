// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

let items:string[]=["Chicken", "Beef", "Fish","Cheese"]

function make_sandwich(... items:string[]):void{
    items.forEach(item => console.log("Items for Sandwich_ " + item));
    console.log()

}

make_sandwich("Chicken", "Jalpanos", "cheese", "Mustard");
make_sandwich("Fried Chicken", "Tomato", "Pickles");
make_sandwich("Beef", "Thousand Island Dressing");