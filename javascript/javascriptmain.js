let btn = document.getElementById("maniu");
		
		function hide() {
			if (window.matchMedia("(orientation: portrait)").matches) {
   // you're in PORTRAIT mode

			var text ;
		text = document.getElementById("hide").innerHTML ;
			if (text == "True"){
				
		document.getElementById("hide").innerHTML = "False" ;
						document.getElementById("maniu").style.height = "9pc" ;
						document.getElementById("maniu").style.backgroundColor = "rgba(0,0,0,1.00)" ;

			}else{

		document.getElementById("hide").innerHTML = "True" ;
		document.getElementById("maniu").style.height = "50vh" ;
		document.getElementById("maniu").style.backgroundColor = "rgba(166,71,0,1.00)" ;

			}
		}

		}

			
				btn.onclick = hide;

