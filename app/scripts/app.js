// Get the screen size and nav to mobile/index.html
var width = window.innerWidth;
var height = window.innerHeight;

console.log('width: ' + width + ' px');
console.log('height: ' + height + ' px');


if ((width < 600) || (height < 550)) {
    window.location = "./mobile/index.html";
}

// NEW FUNCTION FOR THE MENU

var hoverActive;

function showMenu(menuItem) {
    
    var nameOne = 'ponude';
    var nameTwo = 'pitanja';
    var nameThree = 'kontakt';
    var nameFour = 'gallery';

    var logoBig = document.getElementById("mainLogo");
    var head = document.getElementById("headline");
    var subhead = document.getElementById("subhead");
    var akc = document.getElementById("akcija");
    var logoSide = document.getElementById("sideLogo");
    var shortcut = document.getElementById("linkDetailCont");

    var venc = document.getElementById("wedding-detail");
    var rodj = document.getElementById("bday-detail");
    var posl = document.getElementById("corp-detail");

    var phtb = document.getElementById("photobooth-detail");
    var scpt = document.getElementById("socialprint-detail");
    var tsv = document.getElementById("threesix-detail");

    //modal removal
    var wedMod = document.getElementById("wedModal");
    var wedMod2 = document.getElementById("wedModal2");
    var bdaMod = document.getElementById("bdaModal");
    var bdaMod2 = document.getElementById("bdaModal2");
    var corMod = document.getElementById("corModal");
    var corMod2 = document.getElementById("corModal2");

    if (wedMod.style.visibility === "visible" || wedMod2.style.visibility === "visible") {
        wedMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        wedMod.style.animation = "fadeOut 1.4s 1";
        wedMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        wedMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            wedMod.style.visibility = "hidden";
            wedMod2.style.visibility = "hidden";
        }, 1450); 
    } else if (bdaMod.style.visibility === "visible" || bdaMod2.style.visibility === "visible") {
        bdaMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        bdaMod.style.animation = "fadeOut 1.4s 1";
        bdaMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        bdaMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            bdaMod.style.visibility = "hidden";
            bdaMod2.style.visibility = "hidden";
        }, 1450); 
    } else if (corMod.style.visibility === "visible" || corMod2.style.visibility === "visible") {
        corMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        corMod.style.animation = "fadeOut 1.4s 1";
        corMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        corMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            corMod.style.visibility = "hidden";
            corMod2.style.visibility = "hidden";
        }, 1450); 
    };
    // modal removal end

    if (menuItem == nameOne){
        console.log('Ponude su kliknute');
        var main = document.getElementById("ponude");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("kontakt");
        var siblingThree = document.getElementById("gallery");

        var menuName = document.getElementById("ponudeMenu");
        var menuSibOne = document.getElementById("pitanjaMenu");
        var menuSibTwo = document.getElementById("kontaktMenu");
        var menuSibThree = document.getElementById("galleryMenu");

    } else if (menuItem == nameTwo){
        console.log('Pitanja su kliknuta');
        var main = document.getElementById("pitanja");
        var siblingOne = document.getElementById("ponude");
        var siblingTwo = document.getElementById("kontakt");
        var siblingThree = document.getElementById("gallery");

        var menuName = document.getElementById("pitanjaMenu");
        var menuSibOne = document.getElementById("ponudeMenu");
        var menuSibTwo = document.getElementById("kontaktMenu");
        var menuSibThree = document.getElementById("galleryMenu");

    } else if (menuItem == nameThree){
        console.log('Kontakt je kliknut');
        var main = document.getElementById("kontakt");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("ponude");
        var siblingThree = document.getElementById("gallery");

        var menuName = document.getElementById("kontaktMenu");
        var menuSibOne = document.getElementById("pitanjaMenu");
        var menuSibTwo = document.getElementById("ponudeMenu");
        var menuSibThree = document.getElementById("galleryMenu");

    } else if (menuItem == nameFour){
        console.log('Gallery je kliknut');
        var main = document.getElementById("gallery");
        var siblingOne = document.getElementById("pitanja");
        var siblingTwo = document.getElementById("ponude");
        var siblingThree = document.getElementById("kontakt");

        var menuName = document.getElementById("galleryMenu");
        var menuSibOne = document.getElementById("pitanjaMenu");
        var menuSibTwo = document.getElementById("ponudeMenu");
        var menuSibThree = document.getElementById("kontaktMenu");

    } else {
        console.log('Nesto nije bas dobro, kao da nista nije kliknuto');
    };


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

    if (phtb.style.visibility === "visible") {
        phtb.style.WebkitAnimation = "hideMove 2s 1";
        phtb.style.animation = "hideMove 2s 1";
        phtb.style.left = "0";

        setTimeout(function(){
            phtb.style.visibility = "hidden";   
            phtb.style.left = "20%";
        }, 1000);

    } else if (scpt.style.visibility === "visible"){
        scpt.style.WebkitAnimation = "hideMove 2s 1";
        scpt.style.animation = "hideMove 2s 1";
        scpt.style.left = "0";

        setTimeout(function(){
            scpt.style.visibility = "hidden";   
            scpt.style.left = "20%";
        }, 1000);
    } else if (tsv.style.visibility === "visible"){
        tsv.style.WebkitAnimation = "hideMove 2s 1";
        tsv.style.animation = "hideMove 2s 1";
        tsv.style.left = "0";

        setTimeout(function(){
            tsv.style.visibility = "hidden";   
            tsv.style.left = "20%";
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
            subhead.style.WebkitAnimation = "fadeIn 2s 1";
            subhead.style.animation = "fadeIn 2s 1";
            akc.style.WebkitAnimation = "fadeIn 2s 1";
            akc.style.animation = "fadeIn 2s 1";
            shortcut.style.WebkitAnimation = "fadeIn 2s 1";
            shortcut.style.animation = "fadeIn 2s 1";

            menuName.style.color = "#888";

            setTimeout(function(){
                console.log("sakriva ga - glavni izabrani meni, sa tajmautom");
                main.style.visibility = "hidden";   
                main.style.left = "20%"; 

                logoBig.style.opacity = 1;
                head.style.opacity = 1;
                subhead.style.opacity = 1;
                akc.style.opacity = 1;
                shortcut.style.opacity = 1;
                logoSide.style.opacity = 0;

            }, 1000);
    } else {

        console.log("Izabrani meni nije vidljiv , prosao inicijalno ok");


        if(siblingOne.style.visibility === "visible" || siblingTwo.style.visibility === "visible" || siblingThree.style.visibility === "visible"){

            console.log("Usao u dodatnu petlju, drugi element neki je otvoren, sklanja ga animacijom");

            siblingOne.style.WebkitAnimation = "hideMove 1s 1";
            siblingOne.style.animation = "hideMove 1s 1";
            siblingOne.style.left = "0";
            menuSibOne.style.color = "#888";

            siblingTwo.style.WebkitAnimation = "hideMove 1s 1";
            siblingTwo.style.animation = "hideMove 1s 1";
            siblingTwo.style.left = "0";
            menuSibTwo.style.color = "#888";

            siblingThree.style.WebkitAnimation = "hideMove 1s 1";
            siblingThree.style.animation = "hideMove 1s 1";
            siblingThree.style.left = "0";
            menuSibThree.style.color = "#888";


            setTimeout(function(){

                console.log("Menja drugom elementu visibility na hidden, sa tajmautom");

                siblingOne.style.visibility = "hidden";   
                siblingOne.style.left = "20%";
                siblingTwo.style.visibility = "hidden";   
                siblingTwo.style.left = "20%"; 
                siblingThree.style.visibility = "hidden";   
                siblingThree.style.left = "20%"; 
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

        } else if(phtb.style.visibility === "visible" || scpt.style.visibility === "visible" || tsv.style.visibility === "visible"){

            phtb.style.WebkitAnimation = "hideMove 1s 1";
            phtb.style.animation = "hideMove 1s 1";
            phtb.style.left = "0";

            scpt.style.WebkitAnimation = "hideMove 1s 1";
            scpt.style.animation = "hideMove 1s 1";
            scpt.style.left = "0";

            tsv.style.WebkitAnimation = "hideMove 1s 1";
            tsv.style.animation = "hideMove 1s 1";
            tsv.style.left = "0";

            setTimeout(function(){

                console.log("Menja drugom elementu visibility na hidden, sa tajmautom");

                phtb.style.visibility = "hidden";   
                phtb.style.left = "20%";
                scpt.style.visibility = "hidden";   
                scpt.style.left = "20%";
                tsv.style.visibility = "hidden";   
                tsv.style.left = "20%";

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
        } else if (menuItem === nameTwo || menuItem === nameFour) {
            menuName.style.color = "#0088cc";
        } else {
            menuName.style.color = "#6a16df";
        };

        logoBig.style.WebkitAnimation = "fadeOut 2s 1";
        logoBig.style.animation = "fadeOut 2s 1";
        head.style.WebkitAnimation = "fadeOut 2s 1";
        head.style.animation = "fadeOut 2s 1";
        subhead.style.WebkitAnimation = "fadeOut 2s 1";
        subhead.style.WebkitAnimation = "fadeOut 2s 1";
        akc.style.WebkitAnimation = "fadeOut 2s 1";
        akc.style.animation = "fadeOut 2s 1";
        shortcut.style.WebkitAnimation = "fadeOut 2s 1";
        shortcut.style.animation = "fadeOut 2s 1";

        logoSide.style.WebkitAnimation = "fadeIn 1s 1";
        logoSide.style.animation = "fadeIn 1s 1";

        setTimeout(function(){
            logoBig.style.opacity = 0;
            head.style.opacity = 0;
            subhead.style.opacity = 0;
            akc.style.opacity = 0;
            shortcut.style.opacity = 0;
            logoSide.style.opacity = 1;
        }, 1000)
    } 
};

function showDetailMenu(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);
    var logoSide = document.getElementById("sideLogo");

    main.style.WebkitAnimation = "mymove 2s 1";
    main.style.animation = "mymove 2s 1";
    main.style.right = "0";
    main.style.visibility = "visible";

    if (logoSide.style.opacity !== 1) {
        logoSide.style.WebkitAnimation = "fadeIn 1s 1";
        logoSide.style.animation = "fadeIn 1s 1";
        logoSide.style.opacity = 1;
    }
 
};

function closeDetailMenu(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);
    var logoSide = document.getElementById("sideLogo");
    var dad = document.getElementById("ponude");

    main.style.WebkitAnimation = "hideMove 2s 1";
    main.style.animation = "hideMove 2s 1";

    setTimeout(function(){
            main.style.visibility = "hidden";   
            main.style.left = "20%";
            if (dad.style.visibility !== "visible") {
                logoSide.style.WebkitAnimation = "fadeOut 1s 1";
                logoSide.style.animation = "fadeOut 1s 1";
                logoSide.style.opacity = 0;
            }
    }, 1000); 
};


function showModal(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);

    main.style.WebkitAnimation = "fadeIn 1.4s 1";
    main.style.animation = "fadeIn 1.4s 1";
    main.style.visibility = "visible";
    
};

function closeModal(menuItem) {

    console.log(menuItem + 'kliknut');
    var main = document.getElementById(menuItem);

    main.style.WebkitAnimation = "fadeOut 1.4s 1";
    main.style.animation = "fadeOut 1.4s 1";

    setTimeout(function(){
            main.style.visibility = "hidden";
    }, 650); 
};

function toggleAnswer(question, answer){
    console.log(question + ' kliknuto');

    var que = document.getElementById(question);
    var ans = document.getElementById(answer);   

    if(ans.style.display === "block") {
        que.style.color = "#888";
        ans.style.WebkitAnimation = "fadeOut 1.4s 1";
        ans.style.animation = "fadeOut 1.4s 1";
        ans.style.display = "none";
    } else {
        que.style.color = "#006699";
        ans.style.WebkitAnimation = "fadeIn 1.4s 1";
        ans.style.animation = "fadeIn 1.4s 1";
        ans.style.display = "block";
    }
};

function closeMenu() {
    
    var logoBig = document.getElementById("mainLogo");
    var head = document.getElementById("headline");
    var subhead = document.getElementById("subhead");
    var akc = document.getElementById("akcija");
    var logoSide = document.getElementById("sideLogo");
    var shortcut = document.getElementById("linkDetailCont");

    var main = document.getElementById("ponude");
    var siblingOne = document.getElementById("pitanja");
    var siblingTwo = document.getElementById("kontakt");
    var siblingThree = document.getElementById("gallery");

    var menuName = document.getElementById("pitanjaMenu");
    var menuSibOne = document.getElementById("ponudeMenu");
    var menuSibTwo = document.getElementById("kontaktMenu");
    var menuSibThree = document.getElementById("galleryMenu");

    var venc = document.getElementById("wedding-detail");
    var rodj = document.getElementById("bday-detail");
    var posl = document.getElementById("corp-detail");

    var phtb = document.getElementById("photobooth-detail");
    var scpt = document.getElementById("socialprint-detail");
    var tsv = document.getElementById("threesix-detail");

    //modal removal
    var wedMod = document.getElementById("wedModal");
    var wedMod2 = document.getElementById("wedModal2");
    var bdaMod = document.getElementById("bdaModal");
    var bdaMod2 = document.getElementById("bdaModal2");
    var corMod = document.getElementById("corModal");
    var corMod2 = document.getElementById("corModal2");

    if (wedMod.style.visibility === "visible" || wedMod2.style.visibility === "visible") {
        wedMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        wedMod.style.animation = "fadeOut 1.4s 1";
        wedMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        wedMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            wedMod.style.visibility = "hidden";
            wedMod2.style.visibility = "hidden";
        }, 1450); 
    } else if (bdaMod.style.visibility === "visible" || bdaMod2.style.visibility === "visible") {
        bdaMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        bdaMod.style.animation = "fadeOut 1.4s 1";
        bdaMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        bdaMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            bdaMod.style.visibility = "hidden";
            bdaMod2.style.visibility = "hidden";
        }, 1450); 
    } else if (corMod.style.visibility === "visible" || corMod2.style.visibility === "visible") {
        corMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        corMod.style.animation = "fadeOut 1.4s 1";
        corMod2.style.WebkitAnimation = "fadeOut 1.4s 1";
        corMod2.style.animation = "fadeOut 1.4s 1";
        
        setTimeout(function(){
            corMod.style.visibility = "hidden";
            corMod2.style.visibility = "hidden";
        }, 1450); 
    };
    // modal removal end

    if(main.style.visibility === "visible" || siblingOne.style.visibility === "visible" || siblingTwo.style.visibility === "visible" || siblingThree.style.visibility === "visible"
        || venc.style.visibility === "visible" || rodj.style.visibility === "visible" || posl.style.visibility === "visible"
        || phtb.style.visibility === "visible" || scpt.style.visibility === "visible" || tsv.style.visibility === "visible")
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
        } else if (siblingThree.style.visibility === "visible"){
            siblingThree.style.WebkitAnimation = "hideMove 2s 1";
            siblingThree.style.animation = "hideMove 2s 1";
            siblingThree.style.left = "0";
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

        if (phtb.style.visibility === "visible"){
            phtb.style.WebkitAnimation = "hideMove 2s 1";
            phtb.style.animation = "hideMove 2s 1";
            phtb.style.left = "0";
        } else if (scpt.style.visibility === "visible"){
            scpt.style.WebkitAnimation = "hideMove 2s 1";
            scpt.style.animation = "hideMove 2s 1";
            scpt.style.left = "0";
        } else if(tsv.style.visibility === "visible"){
            tsv.style.WebkitAnimation = "hideMove 2s 1";
            tsv.style.animation = "hideMove 2s 1";
            tsv.style.left = "0";
        };

        menuName.style.color = "#888";
        menuSibOne.style.color = "#888";
        menuSibTwo.style.color = "#888";
        menuSibThree.style.color = "#888";

        logoSide.style.WebkitAnimation = "fadeOut 1s 1";
        logoSide.style.animation = "fadeOut 1s 1";
        
        logoBig.style.WebkitAnimation = "fadeIn 2s 1";
        logoBig.style.animation = "fadeIn 2s 1";
        head.style.WebkitAnimation = "fadeIn 2s 1";
        head.style.animation = "fadeIn 2s 1";
        subhead.style.WebkitAnimation = "fadeIn 2s 1";
        subhead.style.animation = "fadeIn 2s 1";
        akc.style.WebkitAnimation = "fadeIn 2s 1";
        akc.style.animation = "fadeIn 2s 1";
        shortcut.style.WebkitAnimation = "fadeIn 2s 1";
        shortcut.style.animation = "fadeIn 2s 1";

        setTimeout(function(){
            console.log("sakriva ga - glavni izabrani meni, sa tajmautom");
            main.style.visibility = "hidden";   
            main.style.left = "20%";
            siblingOne.style.visibility = "hidden";   
            siblingOne.style.left = "20%";
            siblingTwo.style.visibility = "hidden";   
            siblingTwo.style.left = "20%";
            siblingThree.style.visibility = "hidden";   
            siblingThree.style.left = "20%";
            venc.style.visibility = "hidden";   
            venc.style.left = "20%";
            rodj.style.visibility = "hidden";   
            rodj.style.left = "20%";
            posl.style.visibility = "hidden";   
            posl.style.left = "20%";

            phtb.style.visibility = "hidden";   
            phtb.style.left = "20%";
            scpt.style.visibility = "hidden";   
            scpt.style.left = "20%";
            tsv.style.visibility = "hidden";   
            tsv.style.left = "20%";

            logoBig.style.opacity = 1;
            head.style.opacity = 1;
            subhead.style.opacity = 1;
            akc.style.opacity = 1;
            shortcut.style.opacity = 1;
            logoSide.style.opacity = 0;

        }, 1000);
    } 
};
