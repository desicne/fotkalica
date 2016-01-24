function homeView(){
    var pon = document.getElementById("ponudaContent");
    var pit = document.getElementById("pitanjaContent");
    var kon = document.getElementById("kontaktContent");

    pon.style.visibility = "hidden";
    pit.style.visibility = "hidden";
    kon.style.visibility = "hidden";
}
// NEW FUNCTION FOR THE MENU

function showMenu(menuItem) {
    
    var nameOne = 'ponude';
    var nameTwo = 'pitanja';
    var nameThree = 'kontakt';

    if (menuItem == nameOne){
        console.log('Ponude su kliknute');
        var main = document.getElementById("ponude");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("kontakt");
    } else if (menuItem == nameTwo){
        console.log('Pitanja su kliknuta');
        var main = document.getElementById("pitanja");
        var siblingOne = document.getElementById("ponude");
        var siblingTwo = document.getElementById("kontakt");
    } else if (menuItem == nameThree){
        console.log('Kontakt je kliknut');
        var main = document.getElementById("kontakt");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("ponude");
    } else {
        console.log('Nesto nije bas dobro, kao da nista nije kliknuto');
    };

    if(main.style.visibility === "visible")
        {
            console.log("Usao u petlju da je izabrani meni vidljiv");
            
            main.style.WebkitAnimation = "hideMove 2s 1";
            main.style.animation = "hideMove 2s 1";
            main.style.left = "0";
            
            setTimeout(function(){
                console.log("sakriva ga - glavni izabrani meni, sa tajmautom");
                main.style.visibility = "hidden";   
                main.style.left = "20%"; 
            }, 1000);
    } else {

        console.log("Izabrani meni nije vidljiv , prosao inicijalno ok");

        if(siblingOne.style.visibility === "visible" || siblingTwo.style.visibility === "visible"){

            console.log("Usao u dodatnu petlju, drugi element neki je otvoren, sklanja ga animacijom");

            siblingOne.style.WebkitAnimation = "hideMove 1s 1";
            siblingOne.style.animation = "hideMove 1s 1";
            siblingOne.style.left = "0";

            siblingTwo.style.WebkitAnimation = "hideMove 1s 1";
            siblingTwo.style.animation = "hideMove 1s 1";
            siblingTwo.style.left = "0";
            
            setTimeout(function(){

                console.log("Menja drugom elementu visibility na hidden, sa tajmautom");

                siblingOne.style.visibility = "hidden";   
                siblingOne.style.left = "20%";
                siblingTwo.style.visibility = "hidden";   
                siblingTwo.style.left = "20%"; 
            }, 1000);
        } else {
            console.log("Drugi meni nijedan nije vidljiv");
        
        };

        console.log("Stavlja visibility izabranog elementa na vidljiv, i animaciju pokrece");

        main.style.WebkitAnimation = "mymove 2s 1";
        main.style.animation = "mymove 2s 1";
        main.style.right = "0";
        main.style.visibility = "visible";
    } 
};


/*

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
};*/