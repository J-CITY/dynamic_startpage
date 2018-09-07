function splitWords() {
	let quote = document.getElementById("hellow_text");
	quote.innerText.replace(/(<([^>]+)>)/ig,"");
	quotewords = quote.innerText.split(" ");
	console.log(quotewords)

	wordCount = quotewords.length;
	quote.innerHTML = "";
	for (let i=0; i < wordCount; i++) {
		quote.innerHTML += "<span id=\"word"+ i +"\">"+quotewords[i]+"</span>";
		if (i < quotewords.length - 1) {
		quote.innerHTML += " ";
		}
	}
	quotewords = []
		for (let i=0; i < wordCount; i++) {
			quotewords.push(document.getElementById("word"+i));
		}
		//quotewords = document.querySelectorAll("blockquote q span");
		fadeWords(quotewords);
	}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
	Array.prototype.forEach.call(quotewords, function(word) {
		let animate = word.animate([{
			opacity: 0,
			filter: "blur("+getRandom(2,5)+"px)"
		}, {
			opacity: 1,
			filter: "blur(0px)"
		}], { 
			duration: 1000,
			delay: getRandom(500,3300),
			fill: 'forwards'
		})
	})
}