// let teamGoals = 5;
// console.log(typeof teamGoals);

function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals === "number"){
        return "Valid";
    }
    else{
        return "Invalid";
    }
}

console.log(matchWinner("2", 3));

if(teamAGoals > teamBGoals){
            return "Team A Won";
        }
        else if(teamBGoals > teamAGoals){
            return "Team B Won";
        }
        else{
            return "Draw";
        }
    }
    else{