var paper = 100;
var keyNumber = 0;

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(220);
	// console.log(paper);
	// console.log(keyNumber);
	fill(150)
	rect(width/3,paper, 200, -paper*5);

	}

function keyTyped() {
	if (	
		key === 'f'

		// key === 'q' ||	key === 'w' ||	key === 'a' ||	key === 's' ||	key === 'z'

		&&	keyNumber === 0) {
			keyNumber ++;
			console.log("f 				" + keyNumber);
	} else if (
		key === 'g'

		// key === 'e' ||	key === 'r' ||	key === 'd' ||	key === 'f' ||	key === 'x' ||	key === 'c'
		
		&& keyNumber === 1) {
		keyNumber ++;
		console.log("f, g			" + keyNumber);
	} else if (
			key === 'h'

			// key === 't' ||	key === 'y' ||	key === 'g' ||	key === 'h' ||	key === 'v'||	key === 'b'

		 && keyNumber === 2) {
		keyNumber ++;
		console.log("f, g, h 		" + keyNumber);
		
		// paper --;
		// keyNumber = 0;
		// console.log(paper + "	pages left");

	} 
	else if (
			key === 'j'

			// key === 't' ||	key === 'i' ||	key === 'o' ||	key === 'p' ||	key === 'j' ||	key === 'k' ||	key === 'l' ||	key === 'n' ||	key === 'm'

		&& keyNumber === 3) {
		keyNumber ++;
		console.log("f, g, h, j	" + keyNumber);
		paper --;
		keyNumber = 0;
		console.log(paper + "	pages left");
	} 
	else if (paper === 0){
		console.log ("YAY! NO MORE PAPER")
	}
}
