// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestList1 = ["Nana", "Nani", "Khala", "Chachhu", "taya"];
var guestCannot = "Chachhu";
console.log(guestCannot + " Cannot come to dinner due to illness");
var Newguest = "Mamu ";
guestList1[guestList1.indexOf(guestCannot)] = Newguest;
console.log(guestList1);
guestList1.map(function (items) { return console.log("Salam, ".concat(items, ". I would like to Invite you for a Dinner at Mandi House(Highway) at 8PM")); });
