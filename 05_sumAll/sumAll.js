const sumAll = function(num1, num2) {
    // declare sum variable
    let sum = 0
    // check if num1 and num2 are numbers
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        // check if num1 and num2 are greater or equal to 0
        if (num1 >= 0 && num2 >= 0) {
            // check which num parameter is higher, based on that
            // create for loop that increments lower num everytime its added to sum untill its equal to higher num
            if (num1 < num2) {
                for (;num1 <= num2; num1++) {sum += num1}
            } else if (num2 < num1) {
                for (;num2 <= num1; num2++) {sum += num2}
            }

        } else { return("ERROR") }

    } else { return("ERROR") }
    return(sum)
};

// Do not edit below this line
module.exports = sumAll;
