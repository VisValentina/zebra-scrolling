var $zebra = $("path#zebra");
var height = $(window).height();
var body= document.querySelector("body");
//var stroke = $(zebra).css("stroke");


$(window).on("scroll", function() {  
	var color = $(body).css("background-color");
	//var stroke = $(zebra).css("stroke");
	//console.log(window.scrollY);
  	// var height = 500
  	// var height = $(window).height();
  	// console.log(height);
  	var percentScrolled = window.scrollY / height
  	//console.log(window.scrollY);
  	//console.log(percentScrolled);
	// console.log(percentScrolled)
	$zebra.css("animation-delay", "-" + percentScrolled * .5 + "s");	

	if(window.scrollY >= 16500) {
		console.log("Done")
		if(color === "rgb(255, 255, 255)") {
			$('html,body').scrollTop(0);
			$(body).css("background-color","black");
			$(zebra).css("stroke","white");
			//console.log("The current color is: " + color);
			// color = "rgb(255, 0, 0)";
		}
		if(color === "rgb(0, 0, 0)") {
			$('html,body').scrollTop(0);
			$(body).css("background-color","white");
			$(zebra).css("stroke","black");
			//console.log("The current color is: " + color);
			// color = "rgb(255, 255, 255)";
		}
	}	

});

// $zebra.css("animation-delay", "-1s");