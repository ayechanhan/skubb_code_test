// Sort the people by name and return as a comma separated string. 

	// $people = array( 'Mary' => 17, 'Bob' => 62, 'John' => 32, ); 
	// function list_people($people) {


function list_people(people) {
    let name_list = Object.keys(Object.assign({}, ...people))
    name_list.sort((a, b) => {
        return a.localeCompare(b)
    })
    return name_list.join(",")
}

const people = [{"Mary": 17}, {"Bob": 62}, {"John": 32}]
console.log(list_people(people))