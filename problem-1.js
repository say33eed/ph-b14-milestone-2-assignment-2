

function matchWinner(teamAGoals, teamBGoals) {
    if(
        !Number.isInteger(teamAGoals) ||
        teamAGoals < 0 ||
        !Number.isInteger(teamBGoals) ||
        teamBGoals < 0
    ){
        return "Invalid";
    }

    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }    

    if(teamBGoals > teamAGoals){
        return "Team B Won";
    }
    
    return "Draw";
}


// Works for all the probable Invalid Test Cases below

// "2"
// null
// undefined
// NaN
// Infinity
// 2.5
// true
// []
// {}

// -1
// -5
// -100



