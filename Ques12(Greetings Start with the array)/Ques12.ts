// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



let personname:string[]=["Siraj", "Salman", "Shayan", "Kamran"];
let Newmessage:string="Greetings from ";

for(let i:number =0; i<=3; i++)
{
    console.log(Newmessage + personname[i]);
}
