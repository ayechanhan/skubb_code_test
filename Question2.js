// Sum all integers from $start to $end (included) and print the result. 

// 	 $start = 1; $end = 3; 

function sum_start_end(start, end) {
    if (start < 0 || end < 0 || end < start){
        return "Invalid"
    }
    total = 0
    for (let i = start; i < end + 1; i++) {
        total += i
    }
    return total
}

let start = 1
let end = 3
console.log(sum_start_end(start, end))