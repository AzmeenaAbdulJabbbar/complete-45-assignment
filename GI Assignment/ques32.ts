// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// array of current users
let current_users = ['sana ', 'Sara ', 'aiza ', 'faiZa ', 'shaiza ' ,'maida ' , 'aida '];
//array of  new users
let new_users = ['hani ' , 'umaima ' , 'sara ' , 'rahila ', ' maida ']
 // loop through newuser to check for user name avaibility
 new_users.forEach((new_users)=>{
    if (
        current_users.some(
            (current_users)=>current_users.toLocaleLowerCase()===new_users.toLocaleLowerCase()
    )
    ){
        console.log(new_users+ " "+'will need to enter new user name')
    }
    else{
        console.log(new_users+'is availiable')
    }
 })

 