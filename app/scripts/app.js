// NEW FUNCTION FOR THE MENU

var hoverActive;

function showMenu(menuItem) {
    
    var nameOne = 'ponude';
    var nameTwo = 'pitanja';
    var nameThree = 'kontakt';

    var logoBig = document.getElementById("mainLogo");
    var head = document.getElementById("headline");
    var akc = document.getElementById("akcija");
    var logoSide = document.getElementById("sideLogo");

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

            logoSide.style.WebkitAnimation = "fadeOut 1s 1";
            logoSide.style.animation = "fadeOut 1s 1";
            
            logoBig.style.WebkitAnimation = "fadeIn 2s 1";
            logoBig.style.animation = "fadeIn 2s 1";
            head.style.WebkitAnimation = "fadeIn 2s 1";
            head.style.animation = "fadeIn 2s 1";
            akc.style.WebkitAnimation = "fadeIn 2s 1";
            akc.style.animation = "fadeIn 2s 1";

            setTimeout(function(){
                console.log("sakriva ga - glavni izabrani meni, sa tajmautom");
                main.style.visibility = "hidden";   
                main.style.left = "20%"; 

                logoBig.style.opacity = 1;
                head.style.opacity = 1;
                akc.style.opacity = 1;
                logoSide.style.opacity = 0;

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

        logoBig.style.WebkitAnimation = "fadeOut 2s 1";
        logoBig.style.animation = "fadeOut 2s 1";
        head.style.WebkitAnimation = "fadeOut 2s 1";
        head.style.animation = "fadeOut 2s 1";
        akc.style.WebkitAnimation = "fadeOut 2s 1";
        akc.style.animation = "fadeOut 2s 1";

        logoSide.style.WebkitAnimation = "fadeIn 1s 1";
        logoSide.style.animation = "fadeIn 1s 1";

        setTimeout(function(){
            logoBig.style.opacity = 0;
            head.style.opacity = 0;
            akc.style.opacity = 0;
            logoSide.style.opacity = 1;
        }, 1000)
        


    } 
};

function closeMenu() {
    
    var logoBig = document.getElementById("mainLogo");
    var head = document.getElementById("headline");
    var akc = document.getElementById("akcija");
    var logoSide = document.getElementById("sideLogo");

    var main = document.getElementById("ponude");
    var siblingOne = document.getElementById("pitanja");
    var siblingTwo = document.getElementById("kontakt");

    if(main.style.visibility === "visible" || siblingOne.style.visibility === "visible" || siblingTwo.style.visibility === "visible")
        {
        console.log("Usao u petlju da je izabrani meni vidljiv");
        
        if (main.style.visibility === "visible"){
            main.style.WebkitAnimation = "hideMove 2s 1";
            main.style.animation = "hideMove 2s 1";
            main.style.left = "0";
        } else if (siblingOne.style.visibility === "visible"){
            siblingOne.style.WebkitAnimation = "hideMove 2s 1";
            siblingOne.style.animation = "hideMove 2s 1";
            siblingOne.style.left = "0";
        } else {
            siblingTwo.style.WebkitAnimation = "hideMove 2s 1";
            siblingTwo.style.animation = "hideMove 2s 1";
            siblingTwo.style.left = "0";
        };


        logoSide.style.WebkitAnimation = "fadeOut 1s 1";
        logoSide.style.animation = "fadeOut 1s 1";
        
        logoBig.style.WebkitAnimation = "fadeIn 2s 1";
        logoBig.style.animation = "fadeIn 2s 1";
        head.style.WebkitAnimation = "fadeIn 2s 1";
        head.style.animation = "fadeIn 2s 1";
        akc.style.WebkitAnimation = "fadeIn 2s 1";
        akc.style.animation = "fadeIn 2s 1";

        setTimeout(function(){
            console.log("sakriva ga - glavni izabrani meni, sa tajmautom");
            main.style.visibility = "hidden";   
            main.style.left = "20%";
            siblingOne.style.visibility = "hidden";   
            siblingOne.style.left = "20%";
            siblingTwo.style.visibility = "hidden";   
            siblingTwo.style.left = "20%"; 

            logoBig.style.opacity = 1;
            head.style.opacity = 1;
            akc.style.opacity = 1;
            logoSide.style.opacity = 0;

        }, 1000);
    } 
};

