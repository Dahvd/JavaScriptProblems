// Daily Coding Problem # 418
// MegaCorp wants to give bonuses to its employees based on 
// how many lines of codes they have written. They would like
//  to give the smallest positive amount to each worker 
//  consistent with the constraint that if a developer has 
//  written more lines of code than their neighbor, they 
//  should receive more money.

// Given an array representing a line of seats 
// of employees at MegaCorp, determine how much each one 
// should get paid.

// For example, given [10, 40, 200, 1000, 60, 30], 
// you should return [1, 2, 3, 4, 2, 1].

const megaCheap = (seating) => {
    const bonus = [];
    bonus.length = seating.length;
    let currentBonus = 1;

    for(let i = 0; i < seating.length - 1; i++){
        if(seating[i] < seating[i + 1]){
            bonus[i] = currentBonus;
            bonus[i + 1] = currentBonus + 1;
            currentBonus += 1;
        }
        else{
            if(i == 0) currentBonus = 2;
            bonus[i] = currentBonus;
            bonus[i + 1] = currentBonus - 1;
            currentBonus -= 1;
        }
    }

    //now we have to make sure that it is the 
    // smallest possible increments from the right hand side

    let i = bonus.length - 1;
    let endNumber = Math.abs(1 - bonus[i]), secFromEnd = Math.abs(1- bonus[i - 1]);
    let x = Math.min(endNumber, secFromEnd);
    //know how many numbers at the end have to be subtracted
    for(let j = 0; j <= x  ; i--, j++) {
        bonus[i] -= x;

    }

    
    //if there are 0 or negative in the array now then we need to fix 
    //that by adding the amount they are away from one to everything 
    let containesBelowOne = false;
    let lowestNumber = 0, fromZero = 1;
    
    for(let i = 0; i < bonus.length; i++) {
        if(bonus[i] < 1) {
            containesBelowOne = true;
            if(bonus[i] < lowestNumber) {
                lowestNumber = bonus[i];
                fromZero = 1 - lowestNumber;
            }
        }
    }
    if(containesBelowOne){
        for(let i = 0; i < bonus.length; i++) {
            bonus[i] += fromZero;
        }
    }

    console.log(bonus);
}


megaCheap([10, 40, 200, 1000, 60, 30]);
megaCheap([1000, 200, 400, 200, 4, 500 ,600]);