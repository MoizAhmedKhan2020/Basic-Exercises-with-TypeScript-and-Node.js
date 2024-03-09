var nameCase = "Moiz AHmed KhAn";
console.log("To UpperCase: ", nameCase.toUpperCase());
console.log("To LowerCase: ", nameCase.toLowerCase());
function titleCase(nameCase) {
    var name = nameCase.toLowerCase().split(" ");
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].slice(1);
    }
    console.log("To TitleCase: ", name.join(" "));
    return name;
}
titleCase(nameCase);
console.log(titleCase);
