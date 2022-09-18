function preloading (imageArray) {

	let n = imageArray.length;

	for (let i = 0; i < n; i++) {

		let img = new Image();

		img.src = imageArray[i];

	}

};



preloading([
	"../img_/display3.png",
	"../img_/display4.png"
]);