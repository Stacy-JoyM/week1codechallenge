const readline = require("readline");
//create interface to read in terminal
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function generateGrade(number){

    // Check if the input is a valid number
    if (isNaN(number) || number < 0 || number > 100) {
        console.log("Please enter a valid number between 0 and 100.");
    } else {
        if (number >= 0 && number < 40){
            grade = "E";
        } else if (number >= 40 && number < 50){
            grade = "D";
        } else if (number >= 50 && number < 60){
            grade = "C"; 
        }else if (number >= 60 && number < 80){
            grade = "B" ;
        } else {
            grade = "A" ;
        }
        
        console.log(`Your grade is ${grade}`)
    }
}

rl.question("Enter your percentage mark between 0 and 100: ", (input) =>{
    let number = parseInt(input);
    generateGrade(number);

    //Close the readline interface
    rl.close();
})