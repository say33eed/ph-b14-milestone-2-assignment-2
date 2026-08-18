//Problem-01: Match Winner
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





//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }

    let totalWeight = 0;
    for(const weight of weights){
        if(weight < 0 || !Number.isFinite(weight)){
            return "Invalid";}
        totalWeight += weight;
    }

    return totalWeight <= 400;

}


//Problem-03: AI Token Cost Calculator
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


//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0)
    {
        return "Invalid"
    }
    
    let topRated = restaurants[0];
    // console.log(topRated);
    // console.log(restaurants[0].name);
    for(let i = 1; i < restaurants.length; i++){
        // console.log("i ->", i, "Name, Rating ->", restaurants[i].name, restaurants[i].rating);
        if(typeof restaurants[i] !== "object"){
            return "Invalid";
        }

        if(restaurants[i].rating > topRated.rating){

            topRated = restaurants[i];
        }
    }

    return topRated.name.toUpperCase();
}


//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";
   }
   
   
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        //console.log("i ->>", i, "times ->>", times[i]);
        if(times[i] < 0 || !Number.isFinite(times[i])){
            return "Invalid";}
        total += times[i];
    }
   
  return total / times.length;

}


