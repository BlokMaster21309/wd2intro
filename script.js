const favicon = document.querySelector("link[rel~='icon']");
if (localStorage.getItem("theme") === "dull") {document.body.classList.add("dull"); if (favicon) favicon.href = "dull.png";}
document.getElementById("mode-toggle").addEventListener("click", () => {document.body.classList.toggle("dull");
	if (document.body.classList.contains("dull")) {localStorage.setItem("theme", "dull"); if (favicon) favicon.href = "dull.png";} 
	else {localStorage.removeItem("theme"); if (favicon) favicon.href = "bright.png";}});

// the rest of this by gemini because i didnt feel like writing js for ts (prompt:"javascript that on page launch selects the file to show in each <stars> <img src="./Stars/star1.gif" id="star1"> <img src="./Stars/star8.gif" id="star2"> <img src="./Stars/star4.gif" id="star3"> <img src="./Stars/star6.gif" id="star4"> <img src="./Stars/chaos.gif" id="star5"> </stars> from a list with weighted chances")
		// 1. Define your file list and their respective weights
		const starPool = [
		{ src: "./Stars/armstrong.gif", weight: 1 },
		{ src: "./Stars/beam.gif", weight: 1 },
		{ src: "./Stars/contentaware.gif", weight: 1 },
		{ src: "./Stars/contentgloop.gif", weight: 1 },
		{ src: "./Stars/fidget.gif", weight: 1 },
		{ src: "./Stars/shockwave.gif", weight: 1 },
		{ src: "./Stars/shutter.gif", weight: 1 },
		{ src: "./Stars/spin.gif", weight: 1 },
		{ src: "./Stars/swirl.gif", weight: 1 },
		{ src: "./Stars/chaos.gif", weight: 0.1 }
		];

		// Helper function to pick one file based on weighted chances
		function getRandomStar(pool) {
			// Calculate total weight dynamically
			const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
			
			// Pick a random number between 0 and totalWeight
			let random = Math.random() * totalWeight;
			
			// Find which bucket the random number falls into
			for (const item of pool) {
				if (random < item.weight) {
					return item.src;
				}
				random -= item.weight;
			}
			return pool[0].src; // Fallback
		}

		// 2. Run the logic immediately on page launch
		window.addEventListener('DOMContentLoaded', () => {
			// Target all image elements inside the <stars> tag
			const starImages = document.querySelectorAll('stars img');
			
			// Loop through each image and assign a weighted random source
			starImages.forEach(img => {
				img.src = getRandomStar(starPool);
			});
		});