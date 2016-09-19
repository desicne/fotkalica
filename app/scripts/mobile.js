function showDetail(menuItem) {

    console.log(menuItem + '  kliknut');
    var zIndexVal = 30;
    var context = document.getElementById(menuItem + 'Text');

    //main page parts, actually needed
    var home = document.getElementById('home');
    var other = document.getElementById('wedd');
    var other1 = document.getElementById('bday');
    var other2 = document.getElementById('corp');
    var other3 = document.getElementById('cont');

    
    // part where everything is defined, what we take or not
    if (menuItem === 'cont') {
        zIndexVal = 50;

        home.style.visibility = "hidden";
        other.style.visibility = "hidden";
        other.style.top = 0;   
        other1.style.visibility = "hidden";
        other1.style.top = 0;    
        other2.style.visibility = "hidden";
        other2.style.top = 0;    
        other3.style.visibility = "hidden";
        other3.style.top = 0;  

        home.style.opacity = 0;
        other.style.opacity = 0;
        other1.style.opacity = 0;
        other2.style.opacity = 0;
        other3.style.opacity = 0;  

        var mot = document.getElementById('weddText');
        var mot1 = document.getElementById('bdayText');
        var mot2 = document.getElementById('corpText');
        var mot3 = document.getElementById('wModal1Text');
        var mot5 = document.getElementById('bModal1Text');

        mot.style.visibility = "hidden";
        mot.style.opacity = 0;
        mot1.style.visibility = "hidden";
        mot1.style.opacity = 0;
        mot2.style.visibility = "hidden";
        mot2.style.opacity = 0;
        mot3.style.visibility = "hidden";
        mot3.style.opacity = 0;
        mot3.style.display = 'none';
        mot5.style.visibility = "hidden";
        mot5.style.opacity = 0;
        mot5.style.display = 'none';
        

    } else if (menuItem === 'wModal1' || menuItem === 'wModal2') {
        zIndexVal = 40;
        var mot = document.getElementById('weddText');
        mot.style.visibility = "hidden";
        mot.style.top = 0;  
        mot.style.opacity = 0;

        context.style.display = 'block';
    
    } else if (menuItem === 'bModal1' || menuItem === 'bModal2') {
        zIndexVal = 40;
        var mot = document.getElementById('bdayText');
        mot.style.visibility = "hidden";
        mot.style.top = 0;  
        mot.style.opacity = 0;

        context.style.display = 'block';
    
    } else if (menuItem === 'cModal1' || menuItem === 'cModal2') {
        zIndexVal = 40;
        var mot = document.getElementById('corpText');
        mot.style.visibility = "hidden";
        mot.style.top = 0;  
        mot.style.opacity = 0;

        context.style.display = 'block';

    };

    //show context
    context.style.WebkitAnimation = "fadeIn 1s 1";
    context.style.animation = "fadeIn 1s 1";
    context.style.visibility = "visible";

    context.style.opacity = 1;
    context.style.zIndex = zIndexVal;
    window.scrollTo(0, 0);
    
    //other from main page, hide
    if (menuItem === 'wedd' || menuItem === 'bday' || menuItem === 'corp'){
        home.style.visibility = "hidden";
        other.style.visibility = "hidden";
        other.style.top = 0;   
        other1.style.visibility = "hidden";
        other1.style.top = 0;    
        other2.style.visibility = "hidden";
        other2.style.top = 0;    
        other3.style.visibility = "hidden";
        other3.style.top = 0;  

        home.style.opacity = 0;
        other.style.opacity = 0;
        other1.style.opacity = 0;
        other2.style.opacity = 0;
        other3.style.opacity = 0;  
    }
};

function hideDetail(menuItem) {
    // dont forget to set top to the value before hiding it
    console.log(menuItem + '  kliknut');
    var context = document.getElementById(menuItem);

    //main page parts, actually needed
    var home = document.getElementById('home');
    var other = document.getElementById('wedd');
    var other1 = document.getElementById('bday');
    var other2 = document.getElementById('corp');
    var other3 = document.getElementById('cont');

    if (menuItem === 'wModal1Text') {
        var mot = document.getElementById('weddText');
        mot.style.visibility = "visible";  
        mot.style.opacity = 1;

        context.style.display = 'none';
    
    } else if (menuItem === 'bModal1Text') {
        var mot = document.getElementById('bdayText');
        mot.style.visibility = "visible";  
        mot.style.opacity = 1;

        context.style.display = 'none';

    } else if (menuItem === 'cModal1Text') {
        var mot = document.getElementById('corpText');
        mot.style.visibility = "visible";  
        mot.style.opacity = 1;

        context.style.display = 'none';

    } else {

        home.style.visibility = "visible";
        other.style.visibility = "visible";
        other.style.top = '75%';   
        other1.style.visibility = "visible";
        other1.style.top = '90%';    
        other2.style.visibility = "visible";
        other2.style.top = '105%';    
        other3.style.visibility = "visible";
        other3.style.top = '120%';  

        home.style.opacity = 1;
        other.style.opacity = 1;
        other1.style.opacity = 1;
        other2.style.opacity = 1;
        other3.style.opacity = 1;  

    };

    //show context
    context.style.WebkitAnimation = "fadeOut 1s 1";
    context.style.animation = "fadeOut 1s 1";
    context.style.visibility = "hidden";

    context.style.opacity = 0;
    window.scrollTo(0, 0);
}
