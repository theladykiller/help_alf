function help_alf_function() {}
help_alf_function.prototype.find_ship = function(map) {
	let lines = map.split("\n")
	
	let fixed_x = null
	let fixed_y = null
	let position_y = 5
	for (let line of lines){
		let position_x = 0
		for (let char of line){
			if (char == "X"){
				fixed_x = position_x
				fixed_y = position_y
			}
			position_x++
		}
		position_y--
	}

	if(fixed_y == null || fixed_x == null)
		return "Spaceship lost forever"
	else
		return fixed_x + "," + fixed_y

};
