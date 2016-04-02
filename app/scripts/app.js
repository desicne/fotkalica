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

    var venc = document.getElementById("wedding-detail");
    var rodj = document.getElementById("bday-detail");
    var posl = document.getElementById("corp-detail");

    if (menuItem == nameOne){
        console.log('Ponude su kliknute');
        var main = document.getElementById("ponude");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("kontakt");

        var menuName = document.getElementById("ponudeMenu");
        var menuSibOne = document.getElementById("pitanjaMenu");
        var menuSibTwo = document.getElementById("kontaktMenu");

    } else if (menuItem == nameTwo){
        console.log('Pitanja su kliknuta');
        var main = document.getElementById("pitanja");
        var siblingOne = document.getElementById("ponude");
        var siblingTwo = document.getElementById("kontakt");

        var menuName = document.getElementById("pitanjaMenu");
        var menuSibOne = document.getElementById("ponudeMenu");
        var menuSibTwo = document.getElementById("kontaktMenu");

    } else if (menuItem == nameThree){
        console.log('Kontakt je kliknut');
        var main = document.getElementById("kontakt");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("ponude");

        var menuName = document.getElementById("kontaktMenu");
        var menuSibOne = document.getElementById("pitanjaMenu");
        var menuSibTwo = document.getElementById("ponudeMenu");

    } else {
        console.log('Nesto nije bas dobro, kao da nista nije kliknuto');
    };

    var venc = document.getElementById("wedding-detail");
    var rodj = document.getElementById("bday-detail");
    var posl = document.getElementById("corp-detail");

    if (venc.style.visibility === "visible") {
        venc.style.WebkitAnimation = "hideMove 2s 1";
        venc.style.animation = "hideMove 2s 1";
        venc.style.left = "0";

        setTimeout(function(){
            venc.style.visibility = "hidden";   
            venc.style.left = "20%";
        }, 1000);

    } else if (rodj.style.visibility === "visible"){
        rodj.style.WebkitAnimation = "hideMove 2s 1";
        rodj.style.animation = "hideMove 2s 1";
        rodj.style.left = "0";

        setTimeout(function(){
            rodj.style.visibility = "hidden";   
            rodj.style.left = "20%";
        }, 1000);
    } else if (posl.style.visibility === "visible"){
        posl.style.WebkitAnimation = "hideMove 2s 1";
        posl.style.animation = "hideMove 2s 1";
        posl.style.left = "0";

        setTimeout(function(){
            posl.style.visibility = "hidden";   
            posl.style.left = "20%";
        }, 1000);
    }

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

            menuName.style.color = "#888";

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
            menuSibOne.style.color = "#888";

            siblingTwo.style.WebkitAnimation = "hideMove 1s 1";
            siblingTwo.style.animation = "hideMove 1s 1";
            siblingTwo.style.left = "0";
            menuSibTwo.style.color = "#888";


            setTimeout(function(){

                console.log("Menja drugom elementu visibility na hidden, sa tajmautom");

                siblingOne.style.visibility = "hidden";   
                siblingOne.style.left = "20%";
                siblingTwo.style.visibility = "hidden";   
                siblingTwo.style.left = "20%"; 
            }, 1000);

        } else if(venc.style.visibility === "visible" || rodj.style.visibility === "visible" || posl.style.visibility === "visible"){

            venc.style.WebkitAnimation = "hideMove 1s 1";
            venc.style.animation = "hideMove 1s 1";
            venc.style.left = "0";

            rodj.style.WebkitAnimation = "hideMove 1s 1";
            rodj.style.animation = "hideMove 1s 1";
            rodj.style.left = "0";

            posl.style.WebkitAnimation = "hideMove 1s 1";
            posl.style.animation = "hideMove 1s 1";
            posl.style.left = "0";

            setTimeout(function(){

                console.log("Menja drugom elementu visibility na hidden, sa tajmautom");

                venc.style.visibility = "hidden";   
                venc.style.left = "20%";
                rodj.style.visibility = "hidden";   
                rodj.style.left = "20%";
                posl.style.visibility = "hidden";   
                posl.style.left = "20%";

            }, 1000);

        } else {
            console.log("Drugi meni nijedan nije vidljiv");
        
        };

        console.log("Stavlja visibility izabranog elementa na vidljiv, i animaciju pokrece");

        main.style.WebkitAnimation = "mymove 2s 1";
        main.style.animation = "mymove 2s 1";
        main.style.right = "0";
        main.style.visibility = "visible";
        
        if (menuItem == nameOne) {
            menuName.style.color = "#00aaff";
        } else if (menuItem === nameTwo) {
            menuName.style.color = "#aa84e9";
        } else {
            menuName.style.color = "#6a16df";
        };

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



function showDetailMenu(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);

    main.style.WebkitAnimation = "mymove 2s 1";
    main.style.animation = "mymove 2s 1";
    main.style.right = "0";
    main.style.visibility = "visible";
 
};


function closeDetailMenu(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);

    main.style.WebkitAnimation = "hideMove 2s 1";
    main.style.animation = "hideMove 2s 1";

    setTimeout(function(){
            main.style.visibility = "hidden";   
            main.style.left = "20%";
    }, 1000); 
};



function closeMenu() {
    
    var logoBig = document.getElementById("mainLogo");
    var head = document.getElementById("headline");
    var akc = document.getElementById("akcija");
    var logoSide = document.getElementById("sideLogo");

    var main = document.getElementById("ponude");
    var siblingOne = document.getElementById("pitanja");
    var siblingTwo = document.getElementById("kontakt");

    var menuName = document.getElementById("pitanjaMenu");
    var menuSibOne = document.getElementById("ponudeMenu");
    var menuSibTwo = document.getElementById("kontaktMenu");

    var venc = document.getElementById("wedding-detail");
    var rodj = document.getElementById("bday-detail");
    var posl = document.getElementById("corp-detail");


    if(main.style.visibility === "visible" || siblingOne.style.visibility === "visible" || siblingTwo.style.visibility === "visible"
        || venc.style.visibility === "visible" || rodj.style.visibility === "visible" || posl.style.visibility === "visible")
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
        } else if (siblingTwo.style.visibility === "visible"){
            siblingTwo.style.WebkitAnimation = "hideMove 2s 1";
            siblingTwo.style.animation = "hideMove 2s 1";
            siblingTwo.style.left = "0";
        };

        if (venc.style.visibility === "visible"){
            venc.style.WebkitAnimation = "hideMove 2s 1";
            venc.style.animation = "hideMove 2s 1";
            venc.style.left = "0";
        } else if (rodj.style.visibility === "visible"){
            rodj.style.WebkitAnimation = "hideMove 2s 1";
            rodj.style.animation = "hideMove 2s 1";
            rodj.style.left = "0";
        } else if(posl.style.visibility === "visible"){
            posl.style.WebkitAnimation = "hideMove 2s 1";
            posl.style.animation = "hideMove 2s 1";
            posl.style.left = "0";
        };

        menuName.style.color = "#888";
        menuSibOne.style.color = "#888";
        menuSibTwo.style.color = "#888";

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
            venc.style.visibility = "hidden";   
            venc.style.left = "20%";
            rodj.style.visibility = "hidden";   
            rodj.style.left = "20%";
            posl.style.visibility = "hidden";   
            posl.style.left = "20%";

            logoBig.style.opacity = 1;
            head.style.opacity = 1;
            akc.style.opacity = 1;
            logoSide.style.opacity = 0;

        }, 1000);
    } 
};

