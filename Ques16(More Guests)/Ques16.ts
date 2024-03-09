// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 

//• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestArr:string[]=["Nana", "Nani", "Khala", "Chachhu"];

let guestCannotAttend: string= "Chachhu"
//console.log(guestCannotAttend + " Cannot come to dinner due to illness");

let Newguest1:string="Mamu";
guestArr[guestArr.indexOf(guestCannotAttend)] =Newguest1;

console.log(guestArr);

//guestArr.map((items) =>  console.log(`Salam ${items}, I would like to Invite you for a Dinner at Mandi House(Highway) at 8PM`))

let guestStart: string= "Phupoo"
guestArr.unshift(guestStart);
console.log(guestArr);

let guestMiddle: string="Dada";
let middleIndex= guestArr.length/2;
guestArr.splice(middleIndex,0,guestMiddle);
console.log(guestArr);


let guestLast: string="Mother in Law"
guestArr.push(guestLast);
console.log(guestArr);

guestArr.map((items) =>  console.log(`Salam ${items}, You are invited for dinner at Mandi House(Highway)`))
