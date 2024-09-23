


let ampm = prompt("Enter AM or PM");
let time = prompt("Enter time in 12-hour format");

if(ampm === 'AM' && time >= 5 && ampm === 'AM' && time <= 12){
    document.write("Good morning..!");
}else if(ampm === 'PM' && time >= 1 && ampm === 'PM' && time <= 5){
    document.write("Good afternoon..!");
}else if(ampm === 'PM' && time >= 6 && ampm === 'PM' && time <= 8){
    document.write("Good evening..!");
}else if(ampm === 'PM' && time >= 9 && ampm === 'PM' && time <= 11){
    document.write("Good night..!");
}else if(ampm === 'AM' && time >= 1 && ampm === 'AM' && time <= 4){
    document.write("Mid night..!");
}else{
    document.write("Invalid time or AM/PM entered....");
}

