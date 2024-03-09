// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let nameCase = "Moiz AHmed KhAn";
console.log("To UpperCase: ",nameCase.toUpperCase());
console.log("To LowerCase: ",nameCase.toLowerCase());

function titleCase(nameCase:string){
    let name= nameCase.toLowerCase().split(" ")
    for(let i = 0; i < name.length; i++){
    name[i] = name[i][0].toUpperCase() + name[i].slice(1);
    }
    console.log("To TitleCase: ",name.join(" "));
    return name;
}
titleCase(nameCase);
console.log(titleCase);
