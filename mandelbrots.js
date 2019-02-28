let escapeRadius = 10.0;
let mandelbrotColor = [0, 0, 0, 255];
let colors = [[0,0,0,0]];
var magnificationFactor = 200;
var posX = 0;
var posY = 0;

let canvas = document.getElementById("mandelbrot");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
let width  = canvas.width;
let height = canvas.width;
let ctx = canvas.getContext('2d');

function iterate(r,i,iterations) {
	var z = new Complex(0,0);
	var c = new Complex(r,i);
	var n = 0;
	while(n < iterations && z.abs <= escapeRadius) {
		n++; 
		z = Complex.add(Complex.power(z,2),c);
	}

	return n;
}
function render() {
	
	for(let x=0; x < width; x++) {
		for(let y=0; y < height; y++) {
			let n = iterate(x/magnificationFactor+width/2/magnificationFactor+posX,y/magnificationFactor-posY+height/2/magnificationFactor+posY,100);
			if(n === 100) {
				ctx.fillStyle = "rgb(0,0,0)";
			} else {
				ctx.fillStyle = "rgb(" + Math.floor(n*255/100) + ",0,0)";
			}
			ctx.fillRect(x,y, 1,1);
		} 
	}
}
