function homeView(){
    var pon = document.getElementById("ponudaContent");
    var pit = document.getElementById("pitanjaContent");
    var kon = document.getElementById("kontaktContent");

    pon.style.visibility = "hidden";
    pit.style.visibility = "hidden";
    kon.style.visibility = "hidden";
}
// NEW FUNCTION FOR THE MENU

function myFunction() {
    document.getElementById("myDIV").style.visibility = "visible"; // Code for Chrome, Safari and Opera
    document.getElementById("myDIV").style.WebkitAnimation = "mymove 2s 1"; // Code for Chrome, Safari and Opera
    document.getElementById("myDIV").style.animation = "mymove 2s 1";
    document.getElementById("myDIV").style.right = "0";
}




function getContentP() {
    
	var pon = document.getElementById("ponudaContent");
    var pit = document.getElementById("pitanjaContent");
    var kon = document.getElementById("kontaktContent");

    pit.style.visibility = "hidden";
    kon.style.visibility = "hidden";

    if (pon.style.visibility === "visible") {
        pon.style.visibility = "hidden";
    } else {
    	pon.style.visibility = "visible";
    }
};

function getContentPt() {
    
	var pon = document.getElementById("ponudaContent");
    var pit = document.getElementById("pitanjaContent");
    var kon = document.getElementById("kontaktContent");

    pon.style.visibility = "hidden";
    kon.style.visibility = "hidden";

    if (pit.style.visibility === "visible") {
        pit.style.visibility = "hidden";
    } else {
    	pit.style.visibility = "visible";
    }
};

function getContentK() {
    
    var kon = document.getElementById("kontaktContent");
    var pon = document.getElementById("ponudaContent");
    var pit = document.getElementById("pitanjaContent");

    pit.style.visibility = "hidden";
    pon.style.visibility = "hidden";


    if (kon.style.visibility === "visible") {
        kon.style.visibility = "hidden";
    } else {
        kon.style.visibility = "visible";
    }
};