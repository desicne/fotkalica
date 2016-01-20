function getContentP() {
    
	var pon = document.getElementById("ponudaContent");

    if (pon.style.visibility === "hidden") {
        pon.style.visibility = "visible";
    } else {
    	pon.style.visibility = "hidden";
    }
};

function getContentPt() {
    
	var pit = document.getElementById("pitanjaContent");

    if (pit.style.visibility === "hidden") {
        pit.style.visibility = "visible";
    } else {
    	pit.style.visibility = "hidden";
    }
};