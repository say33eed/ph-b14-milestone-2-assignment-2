function calculateAiCost(tokensUsed) {
    if(!Number.isFinite(tokensUsed) || tokensUsed < 0)
    {
        return "Invalid";
    }

    if(tokensUsed <= 500){
        return 0;
    }

    return Math.floor((tokensUsed - 500) / 100) * 5;
}


// Works for all the probable Invalid Test Cases below
// NaN
// Infinity
