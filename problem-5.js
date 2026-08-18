function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";
   }
   
   
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        console.log("i ->>", i, "times ->>", times[i]);
        if(times[i] < 0 || !Number.isFinite(times[i])){
            return "Invalid";}
        total += times[i];
    }
   
  return total / times.length;

}

console.log("Average ->>", averageResponseTime([120, 200, 150, 130]));

// // Probable Invalid Test Cases
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