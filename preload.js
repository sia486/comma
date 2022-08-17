function preloading (imageArray) {

	let n = imageArray.length;

	for (let i = 0; i < n; i++) {

		let img = new Image();

		img.src = imageArray[i];

	}

};



preloading([

	"./img_/news_on.jpg",
    "./img_/com_on.jpg",
    "./img_/ser_on.jpg",
    "./img_/por_on.jpg",
    "./img_/cb4.jpg",
    "./img_/news.jpg",
    "./img_/com.jpg",
    "./img_/ser.jpg",
    "./img_/por.jpg",
    "./img_/msb.png",
    "./img_/msw.png",
    "./img_/por.jpg",
    "./img_/comma.png"

]);