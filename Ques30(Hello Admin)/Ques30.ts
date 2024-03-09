// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let members:string[]=["Ahmed", "Salman", "Kamran","admin", "Ali", "Mustafa"];

for(let i=1; i<members.length;i++){
    if(members[i] === "admin"){
        console.log(`Hello admin, would you like to see a status report`);
    }

else
    console.log(`${members[i]}, thank you for logging in again`)
}