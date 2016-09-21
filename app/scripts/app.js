// Get the screen size and nav to mobile/index.html
var width = window.innerWidth;
var height = window.innerHeight;

console.log('width: ' + width + ' px');
console.log('height: ' + height + ' px');


if ((width < 600) || (height < 550)) {
    window.location = "http://fotkalica.com/mobile/index.html";
}

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

if(isMobile) {
    window.location = "http://fotkalica.com/mobile/index.html"
}
// NEW FUNCTION FOR THE MENU

var hoverActive;

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

var phtMod = document.getElementById('phtModal');
var scpMod = document.getElementById('scpModal');
var phtSlideMod = document.getElementById('phtSlideModal');

function showMenu(menuItem) {
    
    var nameOne = 'ponude';
    var nameTwo = 'pitanja';
    var nameThree = 'kontakt';
    var nameFour = 'gallery';

    //modal removal
    if (phtMod.style.visibility === "visible") {
        phtMod.style.WebkitAnimation = "fadeOut 1s 1";
        phtMod.style.animation = "fadeOut 1s 1";
        setTimeout(function(){
            phtMod.style.visibility = "hidden";
        }, 800); 
    } else if (scpMod.style.visibility === "visible") {
        scpMod.style.WebkitAnimation = "fadeOut 1s 1";
        scpMod.style.animation = "fadeOut 1s 1";        
        setTimeout(function(){
            scpMod.style.visibility = "hidden";
        }, 800); 
    } else if (phtSlideMod.style.visibility === "visible") {
        phtSlideMod.style.WebkitAnimation = "fadeOut 1s 1";
        phtSlideMod.style.animation = "fadeOut 1s 1";
        setTimeout(function(){
            phtSlideMod.style.visibility = "hidden";
        }, 800); 
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
            }, 500);

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
    var main4 = document.getElementById(menuItem);
    
    //buttons should be edited here
    if (venc.style.visibility === "visible") {
        
        venc.style.WebkitAnimation = "hideMove 1s 1";
        venc.style.animation = "hideMove 1s 1";
        venc.style.left = "0"; 
        setTimeout(function(){

            console.log("Menja drugom elementu visibility na hidden, sa tajmautom");
            venc.style.left = "20%";
            venc.style.visibility = "hidden"; 
        }, 250);   

    } else if (posl.style.visibility === "visible") {

        posl.style.WebkitAnimation = "hideMove 1s 1";
        posl.style.animation = "hideMove 1s 1";
        posl.style.left = "0";  
            
        setTimeout(function(){
            posl.style.left = "20%";
            posl.style.visibility = "hidden"; 
        }, 250);

    } else if (rodj.style.visibility === "visible") {

        rodj.style.WebkitAnimation = "hideMove 1s 1";
        rodj.style.animation = "hideMove 1s 1";
        rodj.style.left = "0"; 
            
        setTimeout(function(){

            console.log("Menja drugom elementu visibility na hidden, sa tajmautom");
            rodj.style.left = "20%";
            rodj.style.visibility = "hidden";  
                     
        }, 250);        

    } else if (phtb.style.visibility === "visible") {

        phtb.style.WebkitAnimation = "hideMove 1s 1";
        phtb.style.animation = "hideMove 1s 1";
        phtb.style.left = "0";

        setTimeout(function(){

            console.log("Menja drugom elementu visibility na hidden, sa tajmautom");
            phtb.style.visibility = "hidden";   
            phtb.style.left = "20%";
                     
        }, 800);        

    } else if (scpt.style.visibility === "visible") {

        scpt.style.WebkitAnimation = "hideMove 1s 1";
        scpt.style.animation = "hideMove 1s 1";
        scpt.style.left = "0";

        setTimeout(function(){

            console.log("Menja drugom elementu visibility na hidden, sa tajmautom");
            scpt.style.visibility = "hidden";   
            scpt.style.left = "20%";
                     
        }, 800);        

    } else if (tsv.style.visibility === "visible") {

        tsv.style.WebkitAnimation = "hideMove 1s 1";
        tsv.style.animation = "hideMove 1s 1";
        tsv.style.left = "0";

        setTimeout(function(){

            console.log("Menja drugom elementu visibility na hidden, sa tajmautom");
            tsv.style.visibility = "hidden";   
            tsv.style.left = "20%";
                     
        }, 800);        

    }

    main4.style.WebkitAnimation = "mymove 2s 1";
    main4.style.animation = "mymove 2s 1";
    main4.style.right = "0";
    main4.style.visibility = "visible";

    if (logoSide.style.opacity !== 1) {
        logoSide.style.WebkitAnimation = "fadeIn 1s 1";
        logoSide.style.animation = "fadeIn 1s 1";
        logoSide.style.opacity = 1;
    }
 
};

function closeDetailMenu(menuItem) {

    console.log(menuItem + 'kliknut');
    var main1 = document.getElementById(menuItem);
    var dad = document.getElementById("ponude");

    main1.style.WebkitAnimation = "hideMove 2s 1";
    main1.style.animation = "hideMove 2s 1";

    setTimeout(function(){
            main1.style.visibility = "hidden";   
            main1.style.left = "20%";
            if (dad.style.visibility !== "visible") {
                logoSide.style.WebkitAnimation = "fadeOut 1s 1";
                logoSide.style.animation = "fadeOut 1s 1";
                logoSide.style.opacity = 0;
            }
    }, 1000); 
};


function showModal(menuItem) {

    console.log(menuItem + 'kliknut');
    var main2 = document.getElementById(menuItem);

    main2.style.WebkitAnimation = "fadeIn 1.4s 1";
    main2.style.animation = "fadeIn 1.4s 1";
    main2.style.visibility = "visible";
    
};

function closeModal(menuItem) {

    console.log(menuItem + 'kliknut');
    var main3 = document.getElementById(menuItem);

    main3.style.WebkitAnimation = "fadeOut 1.4s 1";
    main3.style.animation = "fadeOut 1.4s 1";

    setTimeout(function(){
            main3.style.visibility = "hidden";
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
    
    
    var main = document.getElementById("ponude");
    var siblingOne = document.getElementById("pitanja");
    var siblingTwo = document.getElementById("kontakt");
    var siblingThree = document.getElementById("gallery");

    var menuName = document.getElementById("pitanjaMenu");
    var menuSibOne = document.getElementById("ponudeMenu");
    var menuSibTwo = document.getElementById("kontaktMenu");
    var menuSibThree = document.getElementById("galleryMenu");

    //modal removal

    if (phtMod.style.visibility === "visible") {
        phtMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        phtMod.style.animation = "fadeOut 1.4s 1";
        setTimeout(function(){
            phtMod.style.visibility = "hidden";
        }, 1450); 
    } else if (scpMod.style.visibility === "visible") {
        scpMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        scpMod.style.animation = "fadeOut 1.4s 1";        
        setTimeout(function(){
            scpMod.style.visibility = "hidden";
        }, 1450); 
    } else if (phtSlideMod.style.visibility === "visible") {
        phtSlideMod.style.WebkitAnimation = "fadeOut 1.4s 1";
        phtSlideMod.style.animation = "fadeOut 1.4s 1";        
        setTimeout(function(){
            phtSlideMod.style.visibility = "hidden";
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

// Slideshow part

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
