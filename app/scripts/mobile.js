function showDetail(menuItem) {

    console.log(menuItem + '  kliknut');
    var main = document.getElementById(menuItem);
    var home = document.getElementById('home');
    var zIndexVal = 30;

    // part where everything is defined, what we take or not
    if (menuItem === 'wedd') {
        var context = document.getElementById('weddText');

        var other1 = document.getElementById('bday');
        var other2 = document.getElementById('corp');
        var other3 = document.getElementById('cont');

    } else if (menuItem === 'bday') {
        var context = document.getElementById('bdayText');

        var other1 = document.getElementById('wedd');
        var other2 = document.getElementById('corp');
        var other3 = document.getElementById('cont');

    } else if (menuItem === 'corp') {
        var context = document.getElementById('corpText');

        var other1 = document.getElementById('bday');
        var other2 = document.getElementById('wedd');
        var other3 = document.getElementById('cont');
        
    } else if (menuItem === 'cont') {
        zIndexVal = 50;
        var context = document.getElementById('contText');

        var other1 = document.getElementById('bday');
        var other2 = document.getElementById('corp');
        var other3 = document.getElementById('wedd');

    };
    //show context

    context.style.WebkitAnimation = "fadeIn 1.5s 1";
    context.style.animation = "fadeIn 1.5s 1";
    context.style.visibility = "visible";

    // hide animation for home and others
    home.style.WebkitAnimation = "fadeOut 1s 1";
    home.style.animation = "fadeOut 1s 1";
    main.style.WebkitAnimation = "fadeOut 1s 1";
    main.style.animation = "fadeOut 1s 1";
    main.style.visibility = "hidden";
    main.style.top = 0;
    other1.style.WebkitAnimation = "fadeOut 1s 1";
    other1.style.animation = "fadeOut 1s 1";
    other1.style.visibility = "hidden";
    other1.style.top = 0;    
    other2.style.WebkitAnimation = "fadeOut 1s 1";
    other2.style.animation = "fadeOut 1s 1";
    other2.style.visibility = "hidden";
    other2.style.top = 0;    
    other3.style.WebkitAnimation = "fadeOut 1s 1";
    other3.style.animation = "fadeOut 1s 1";
    other3.style.visibility = "hidden";
    other3.style.top = 0;    
    
    setTimeout(function(){
        home.style.opacity = 0;
        main.style.opacity = 0;
        other1.style.opacity = 0;
        other2.style.opacity = 0;
        other3.style.opacity = 0;
        context.style.opacity = 1;
        context.style.zIndex = zIndexVal;
        window.scrollTo(0, 0);
    }, 1000);
};

function hideDetail(menuItem) {
    // dont forget to set top to the value before hiding it
}
