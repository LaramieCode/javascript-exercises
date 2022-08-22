// add parameters for array, and the values given
const removeFromArray = function(array, ...params) {
// loop through params with for of
// loop through array with for
// if val of params and i of array are equal, splce it

    for (val of params) {

        for (i = 0; i < array.length; i++) {

            if (val === array[i]) {
                array.splice(i, 1)
            }
        }
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
