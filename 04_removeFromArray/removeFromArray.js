const removeFromArray = function(array, ...exception) {
    // return array.filter((val) => !exception.includes(val)); Sol 1
    // sol 2 using for each
    const newArr = [];

    array.forEach(element => {
        if (!exception.includes(element)){
            newArr.push(element);
        }
    });
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
