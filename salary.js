const readline = require("readline")
//create interface to read in terminal
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout

})

//function to calculate tax
function calculateIncomeTax(basicSalary , benefits){
    //Check if the inputted basicSalary & benefits are valid values
    if (basicSalary===null || isNaN(basicSalary) || isNaN(benefits) || basicSalary <0 || benefits <0 || benefits ===null){
        console.log("Please enter a valid number. Retry")
    } else {
        let grossSalary = basicSalary + benefits; 
        console.log(`Your gross salary is ${grossSalary}`)
        let tax;
        if (grossSalary >0 && grossSalary <=24000){
            tax = 0.1 * grossSalary
        }
        else if (grossSalary > 24000 && grossSalary <= 32333){
            tax = (0.1 * grossSalary) + (0.25  * (grossSalary -24000))
        }
        else if (grossSalary > 32333 && grossSalary <= 500000){
            tax = (0.1 * grossSalary) + (0.25 * (32333 - 24000) + (0.3 * (grossSalary - 32333)))
        }
        else if (grossSalary > 500000 && grossSalary <= 800000){
            tax = (0.1 * grossSalary)+ (0.25 * (32333-24000)) + (0.3 * (500000-32333)) +(0.325* (grossSalary - 500000))
        } 
        else {
            tax = (0.1 * grossSalary)+ (0.25 * (32333-24000)) + (0.3 * (500000-32333)) +(0.325* (800000 - 500000)) + (0.35 * (grossSalary - 800000))
        }
        //parse tax to whole number value
        console.log(`Your income tax is: ${parseInt(tax)}`)
    }

}



//prompt for salary
rl.question("Enter your basic salary:", (basicInput) =>{
    let basicSalary = parseInt(basicInput);
    
    rl.question("Enter the total amount of your benefits:", (benefitInput) =>{
        let benefits= parseInt(benefitInput)

       //call function that calculates income tax
       calculateIncomeTax(basicSalary, benefits);

    //close the readline interface
    rl.close();
    })
});