describe('String Calculator', function() {
	beforeEach(function() {
		help_alf = new help_alf_function();
	});

	it('should return "Spaceship lost forever" if ship could not be found', function() {
		let map = "..........\n..........\n..........\n..........\n..........\n..........";
		expect(help_alf.find_ship(map)).toEqual("Spaceship lost forever");
	});

	it('should return "0,0" if ship is at coordinates: 0,0', function() {
		let map = "..........\n..........\n..........\n..........\n..........\nX.........";
		expect(help_alf.find_ship(map)).toEqual("0,0");
	});

});
