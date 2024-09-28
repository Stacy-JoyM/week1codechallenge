const readline = require("readline");

//create interface to read in terminal
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
//function that checks speed and output points for every 5km/s
function speedCalculator(speed){

    if (isNaN(speed) || speed <0 || speed > 180){
        console.log("Enter a valid number ")
    }else {
        if (speed>0 && speed <=70){
            console.log('Ok')
        }else if (speed > 70 && speed <= 130) {
            let points = Math.ceil((speed - 70) / 5); 
            console.log(`Point: ${points}`);
        } else {
            console.log("License suspended");
        }
    }
}

//prompt for user speed 
rl.question("Enter the speed:", (input) => {
    let speed=parseInt(input);
    speedCalculator(speed);

    //close interface after processing input
    rl.close();
})