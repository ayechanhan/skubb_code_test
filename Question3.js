//Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime. 

	// $raining = FALSE;  $warm = TRUE;  $daytime = FALSE; 

function check_weather(isRaining, isWarming, isDaytime){
    if(!isRaining && (isWarming || isDaytime)){
        return "Go outside"
    }
    else{
        return "Don't go outside"
    }
}

let raining = false
let warm = true
let daytime = false
console.log(check_weather(raining, warm, daytime))