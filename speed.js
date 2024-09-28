const readline = require("readline");

//create interface to read in terminal
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
//function that checks speed and output points for every 5km/s above 70 km/s
function speedCalculator(speed){
    //Checks if the inputted speed is a valid number from 0 -180 km/s
    if (isNaN(speed) || speed <0 || speed > 180){
        console.log("Please enter speed from 0 to 180. Retry")
    }else {
        if (speed>0 && speed <=70){
            console.log('Ok')
        // For every 5km/s above 70km/s , prints points total till 12 points
        }else if (speed > 70 && speed <= 130) {
            let points = Math.ceil((speed - 70) / 5); 
            console.log(`Point:${points}`);
        // Past 12 points, prints license suspended
        } else {
            console.log("License suspended");
        }
    }
}

//prompt for user speed 
rl.question("Enter the speed:", (input) => {
    let speed=parseInt(input);
    //call function that calculates net salary
    speedCalculator(speed);

    //close interface after processing input
    rl.close();
})