const sumAll = function(no1, no2) {
    let  total = 0;
    if (!Number.isInteger(no1) || !Number.isInteger(no2)) return "ERROR";

    if (no1 <0 || no2 <0 ){
        return "ERROR";
    } else if (no1<no2){
        for (let i = no1; i <= no2; i++) {
            total +=i;
            
        }
    } else {
        for (let i = no2; i <= no1; i++) {
            total +=i;
            
        }
    }
    
    return total;

};

// Do not edit below this line
module.exports = sumAll;
