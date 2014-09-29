console.time('test');
// Set up canvas

var canvas = document.getElementById('select');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var bars = [], numberOfBars = 1365;

// Push bars to array

for (var i = 0; i < numberOfBars; i++) {
	bars.push({
		w: 2,
		h: Math.floor(Math.random() * (canvas.height - 100) + 20), // generate random height for bars
	});
}

// Draw all the bars by looping through them

function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for (var i = 0, x = bars.length; i < x; i++) {
		var b = bars[i];

		ctx.fillStyle = '#2f2f2f';
		ctx.fillRect(1 * i, 0, b.w, b.h);

		ctx.strokeStyle = 'white';
		ctx.strokeRect(1 * i, 0, b.w, b.h);
	}
}

// Sort all the bars

function sort(array) {
	for (var i = 0, x = array.length; i < x; i++) {
		var b = array[i];
		var bIndex = i;
		for (var j = i; j < x; j++){
			if (array[j].h > b.h){
				b = array[j];
				bIndex = j;
			}
		}
		array[bIndex] = array[i];
		array[i] = b;
	}
	draw();
}

// Start everything up
sort(bars);

console.timeEnd('test');