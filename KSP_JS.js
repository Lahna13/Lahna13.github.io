//KPS JAVASCRIPT BY LAHNA//


	let pelaajanPisteet = 0;
	let tietokoneenPisteet = 0;
	const pelaajanPiste_span = document.getElementById("pelajan-pisteet");
	const tietokoneenPiste_span = document.getElementById("tietokoneen-pisteet");
	const pisteTaulu_div = document.querySelector(".piste-taulu");
	const tulos_div = document.querySelector(".tulos");
	const kivi_div = document.getElementById("r");
	const paperi_div = document.getElementById("p");
	const sakset_div = document.getElementById("s");
	
	
	function haeTietokoneenValinta() {
		const vaihtoehdot = ['r', 'p', 's'];
		const randomNumero = Math.floor(Math.random() * 3);
		return vaihtoehdot[randomNumero];
	}
	
	function convertToWord(letter) {
	  if (letter === "r") return "Rock";
	  if (letter === "p") return "Paper";
	  return "Scissors";
	}
	
		function voitto(pelaajanValinta, tietokoneenValinta) {
		pelaajanPisteet++;
		pelaajanPiste_span.innerHTML = pelaajanPisteet;
		tietokoneenPiste_span.innerHTML = tietokoneenPisteet;
		const pieniKayttajanSana = "Gamer".fontsize(3).sup();
		const pieniTietokoneenSana = "Enemy".fontsize(3).sup();
		tulos_div.innerHTML = `${convertToWord(pelaajanValinta)}${pieniKayttajanSana} beats ${convertToWord(tietokoneenValinta)}${pieniTietokoneenSana}. You win!`
	}
	
	function havio(pelaajanValinta, tietokoneenValinta) {
		tietokoneenPisteet++;
		pelaajanPiste_span.innerHTML = pelaajanPisteet;
		tietokoneenPiste_span.innerHTML = tietokoneenPisteet;
		const pieniKayttajanSana = "Gamer".fontsize(3).sup();
		const pieniTietokoneenSana = "Enemy".fontsize(3).sup();
		tulos_div.innerHTML = `${convertToWord(pelaajanValinta)}${pieniKayttajanSana} loses to ${convertToWord(tietokoneenValinta)}${pieniTietokoneenSana}. You lose!`
	}
	
	function tasaPeli(pelaajanValinta, tietokoneenValinta) {
		const pieniKayttajanSana = "Gamer".fontsize(3).sup();
		const pieniTietokoneenSana = "Enemy".fontsize(3).sup();
		tulos_div.innerHTML = `${convertToWord(pelaajanValinta)}${pieniKayttajanSana} equals ${convertToWord(tietokoneenValinta)}${pieniTietokoneenSana}. Draw!`
	}
	
		function peli(pelaajanValinta) {
		const tietokoneenValinta = haeTietokoneenValinta();
		switch (pelaajanValinta + tietokoneenValinta) {
			case "rs":
			case "pr":
			case "sp":
				voitto(pelaajanValinta, tietokoneenValinta);
				break;
				
			case "rp":
			case "ps":
			case "sr":
				havio(pelaajanValinta, tietokoneenValinta);
				break;
				
			case "rr":
			case "pp":
			case "ss":
				tasaPeli(pelaajanValinta, tietokoneenValinta);
				break;	
		}
	}
	
	function main() {
			kivi_div.addEventListener('click', function() {
				peli("r");
			})
		
			paperi_div.addEventListener('click', function() {
				peli("p");
		})
		
			sakset_div.addEventListener('click', function() {
				peli("s");
		})
	}
	
	main();
	
		
