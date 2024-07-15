// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ['harry poter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function copy_array(arr :string[]){
    return [...arr]
}

function make_great(magician_array) {
    magician_array.forEach(magician => {
        console.log('the great ' + magician);
    });
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const cpoy_magician_array = copy_array(magician);
console.log('\n\nthis is my modfied copy of the array  ')
make_great( cpoy_magician_array);
console.log('\n\nthis is my orignal array ')
show_magicians(magician);
// console.log('\n\nthis is my modfied copy of the array  ')
// show_magicians(cpoy_magician_array);

