function showDetail(menuItem) {

    console.log(menuItem + '  kliknut');
    var main = document.getElementById(menuItem);
    var home = document.getElementById('home');

    //move transition
    main.style.zIndex = "30";
    main.style.WebkitAnimation = "moveUpWed 2.5s 1";
    main.style.animation = "moveUpWed 2.5s 1";

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
        var context = document.getElementById('contText');

        var other1 = document.getElementById('bday');
        var other2 = document.getElementById('corp');
        var other3 = document.getElementById('wedd');

    };
    //show context

    context.style.WebkitAnimation = "fadeInCol 2.5s 1";
    context.style.animation = "fadeInCol 2.5s 1";
    context.style.visibility = "visible";

    // hide animation for home and others
    home.style.WebkitAnimation = "fadeOut 1s 1";
    home.style.animation = "fadeOut 1s 1";
    other1.style.WebkitAnimation = "fadeOut 1s 1";
    other1.style.animation = "fadeOut 1s 1";
    other2.style.WebkitAnimation = "fadeOut 1s 1";
    other2.style.animation = "fadeOut 1s 1";
    other3.style.WebkitAnimation = "fadeOut 1s 1";
    other3.style.animation = "fadeOut 1s 1";


    setTimeout(function(){
        home.style.opacity = 0;
        other1.style.opacity = 0;
        other1.style.top = 0;
        other2.style.opacity = 0;
        other2.style.top = 0;
        other3.style.opacity = 0;
        other3.style.top = 0;
        context.style.opacity = 1;
        context.style.zIndex = 20;
    }, 1000);

    setTimeout(function(){
        main.style.top = 0;
    }, 2500);
};

function hideDetail(menuItem) {
    // dont forget to set top to the value before hiding it
}
