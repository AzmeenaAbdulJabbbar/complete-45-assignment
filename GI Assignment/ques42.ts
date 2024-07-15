// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician = ['harry poter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function make_great(magician_array:string[]){
magician_array.forEach(magician=>{
    console.log('the great '+ magician)
})
}




function show_magicians(magicians:string[]){
    magicians.forEach(magician=>{
console.log(magician)
    })
}
make_great(magician)
show_magicians(magician);