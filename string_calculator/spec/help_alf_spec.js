describe('String Calculator', function() {
	beforeEach(function() {
		help_alf = new StringCalculator();
	});

	it('should return "Spaceship lost forever" if ship could not be found', function() {
		let map = "..........\n..........\n..........\n..........\n..........\n..........";
		expect(help_alf.find_ship(map)).toEqual("Spaceship lost forever");
	});

});
