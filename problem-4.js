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


//console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8},{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]));




// probable invalid cases
// topRatedRestaurant([1])
// topRatedRestaurant(["KFC"])
// topRatedRestaurant([true])
// topRatedRestaurant([null])
// topRatedRestaurant([undefined])
// topRatedRestaurant([[]])
// topRatedRestaurant([{}])
// topRatedRestaurant([{ name: "KFC" }])
// topRatedRestaurant([{ rating: 4.5 }])
// topRatedRestaurant([{ name: 123, rating: 4.5 }])
// topRatedRestaurant([{ name: "KFC", rating: "4.5" }])
// topRatedRestaurant([{ name: "KFC", rating: NaN }])
// topRatedRestaurant([{ name: "KFC", rating: Infinity }])