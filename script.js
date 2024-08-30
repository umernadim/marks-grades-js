let usrName = prompt("Enter your name");
console.log(`Congratulation! ${usrName}`);

let studentMarks = prompt("Enter your obtained marks");

if (studentMarks >= `80%`) {
    console.log('You got A-One grade🎉')
}
else if (studentMarks >= `70%`) {
    console.log('You got A grade🎉')
}
else if (studentMarks >= `60%`) {
    console.log('You got B grad🎉')
}
else if (studentMarks >= `50%`) {
    console.log('You got C grade🎉')
}
else if (studentMarks >= `40%`) {
    console.log('You got C grade🎉')
}
else {
    console.log('Ohhh! you got failed 😥😣')
}