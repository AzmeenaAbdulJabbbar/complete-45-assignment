// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// let guestList_1 =["Hareez ","Areesha", "preena"];
// //console.log(guestListt)
// let notComne ='preena';
// //console.log(notComne , "can't join us for dinner");
// let newGuest = "erum";
// let indexOfNotCome = guestList_1.indexOf(notComne)
// // console.log(indexOfNotCome);
// if(indexOfNotCome !== -1){
//     guestList_1[indexOfNotCome] = newGuest
// }
// console.log(guestList_1[2])

//new methood
 let guestList =["Hareez ","Areesha", "Preena"];
 for (let i = 0 ;i<guestList.length; i++){
    //console.log("respectd mdm", guestListt [i], " ", "invited you on dinner tomorrow");
 }
 let notPresent = 'hareez';
 let newGuest ='erum';
 guestList[0] = newGuest;
 for (let i = 0 ;i<guestList.length; i++){
    console.log("respectd mdm", guestList[i], " ", "invited you on dinner tomorrow");
 }
 console.log("mr" , notPresent , "will not come");
