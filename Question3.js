//Script should print "Go outside" only if: it is NOT raining AND it is warm OR it is daytime. 

	// $raining = FALSE;  $warm = TRUE;  $daytime = FALSE; 

function check_weather(raining, warm, daytime){
    if(!raining && (warm || daytime)){
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