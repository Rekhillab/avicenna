var searchnumber = 1;
$("#searchbtn").click(function () {
	searchnumber++;
	if (searchnumber % 2 == 0) {
		$("#searchbar").stop(true).slideDown(500);
	}else{
		$("#searchbar").stop(true).slideUp(500);
	}
});

var hovering = false;

$("#searchbar").hover(function () {
	hovering = true;
}, function () {
	hovering = false;
});

$("html").mouseup(function(){
	if (!hovering) {
		$("#searchbar").slideUp(500);
		if ($("#searchbar").css("display") == "none") {
			searchnumber = 1;
		}
	}
});

/*============================*/

//theSlideShowContainerHere
var nextSLide = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("nextSLide1");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    nextSLide++;
    if (nextSLide > slides.length) {nextSLide = 1}
    slides[nextSLide-1].style.display = "block";
	$(".slide-title").show();
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}



//fortesting2 only

