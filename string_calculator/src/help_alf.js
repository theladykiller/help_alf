function help_alf_function() {}
help_alf_function.prototype.find_ship = function(map) {
	let result
	let lines = map.split("\n")
	
	let x_coordinate = null
	let y_coordinate = null

	let position_y = lines.length - 1 
	for (let line of lines){
		let position_x = 0
		for (let char of line){
			if (char == "X"){
				if(!result){
					x_coordinate = position_x
					y_coordinate = position_y
					result = x_coordinate + "," + y_coordinate
					break;
				}else{
					result = "Can not identify ship"
				}
			}
			position_x++
		}
		position_y--
	}
	if(!result)
		result = "Spaceship lost forever"

	return result
};
