var content = document.querySelectorAll(".popuptext");
var contentBtn = document.querySelectorAll("li");

for (var i = 0; i < contentBtn.length; i++){
	contentBtn[i].addEventListener("click", function(){
		contentBtn[0].classList.remove("active");
		contentBtn[1].classList.remove("active");
		contentBtn[2].classList.remove("active");
		contentBtn[3].classList.remove("active");

		this.classList.add("active");
		// content[0].style.display = "none";
		// content[1].style.display = "none";
		// content[2].style.display = "none";

		// content[contentBtn.indexOf(this)] = "block";
	})
	// var curr_index = contentBtn.indexOf(this).toString()
	//
	// var popup = document.getElementById("myPopup" + curr_index);
	// popup.classList.toggle("show");
}

function hidePopup() {
	content.forEach(function(popup) {
		popup.classList.remove("show")
	})
}

function myFunction() {
		hidePopup()
    var popup = document.getElementById("myPopup0");
    popup.classList.toggle("show");
}

function myFunction1() {
		hidePopup()
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}

function myFunction2() {
		hidePopup()
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

// for (var i = 0; i < contentBtn.length; i++){
// 	contentBtn[i].addEventListener("click", function(){
// 		content[0].style.display = "none";
// 		content[1].style.display = "none";
// 		content[2].style.display = "none";
//
// 		this.style.display = "block";
// 	})
// }
