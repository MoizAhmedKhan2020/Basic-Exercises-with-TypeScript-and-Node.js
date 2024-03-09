// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var userNames = ["Ahmed", "Haris", "Anoshia", "Hamza", "Mustafa", "asra"];
var newUsernames = ["Kamran", "ANOSHIA", "Siraj", "ahmed", "Shayan", "Asra"];
for (var _i = 0, newUsernames_1 = newUsernames; _i < newUsernames_1.length; _i++) {
    var newUsername = newUsernames_1[_i];
    var isAvailable = true;
    for (var _a = 0, userNames_1 = userNames; _a < userNames_1.length; _a++) {
        var userName = userNames_1[_a];
        if (newUsername.toLowerCase() === userName.toLowerCase()) {
            console.log("Username \"".concat(newUsername, "\" is already taken. Please choose another username."));
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("Username \"".concat(newUsername, "\" is available"));
    }
}
// for(let i=0; i<=5; i++){
// if(userName[i] !== newUserName[i]){
//     console.log("person will need to enter a new username.");
// }
// else{
//     console.log("username is available.");
// }
// }
