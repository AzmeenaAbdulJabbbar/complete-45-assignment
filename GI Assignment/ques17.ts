let guestListt =["Hareez ","Areesha", "Preena"];
 //for (let i = 0 ;i<guestListt.length; i++){
   //console.log("respectd mdm", guestListt [i], " ", "invited you on dinner tomorrow");
// }
 let notPrresent = 'hareez';
let newwGuest ='erum';
guestListt[0] = newwGuest;
//for (let i = 0 ;i<guestListt.length; i++){
//    console.log("respectd mdm \n", guestListt[i],"\n", "invited you on dinner tomorrow");
//  }
 guestListt.unshift("iqra","hoor","waqar");
guestListt.push("zubaida");
guestListt.splice(guestListt.length/2 ,1,"arshi")
// for (let i = 0 ;i<guestListt.length; i++){
//     console.log("respectd mdm\n ",guestListt[i], " \n", "invited you on dinner tomorrow \n we found a big dinner table \n so we decide to invite 3 more guest");
// }
console.log("\n \n Unfortunately we are out of space ,so we have space for two guests only \n\n");
while(guestListt.length >2) {
    let removed_guest = guestListt.pop()
    console.log('Sorry ,Dear',removed_guest,'you are not invited for tommorow dinner')
}
for (let i = 0 ;i<guestListt.length; i++){
        console.log("rDear ",guestListt[i], " \n", " still invited you on dinner tomorrow \n ");
     }
     guestListt.splice(0,2);
     console.log(guestListt);
