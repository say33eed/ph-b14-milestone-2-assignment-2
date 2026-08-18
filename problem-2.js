
// Solution -1

function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }

    let totalWeight = 0;
    for(const weight of weights){
        if(times[i] < 0 || !Number.isFinite(times[i])){
            return "Invalid";
        }
        
        totalWeight += weight;
    }

    return totalWeight <= 400;

}

//console.log(isElevatorSafe(Infinity));



// Works for all the probable Invalid Test Cases below
// [60, "75", 50]