// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_maker(manufacturer:string, model:string, color:string, optional:string): void{

    console.log(`Manafacture is '${manufacturer}', color ${color}, model ${model}, Optional feature: ${optional}`);
}
 car_maker("BMW", "i7(2024)", "Sparkling Copper Metallic", "Electronic throttle control")
 car_maker("Ferrari","Sf90 Stradale(2022)","Red","16-inch curved display & Wing Spoiler");
 car_maker("Audi","A7(2023)","Glacier White Metallic","Driver Assistance Remote park assist plus");