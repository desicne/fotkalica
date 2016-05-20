function showDetail(menuItem) {

    console.log(menuItem + '  kliknut');
    var zIndexVal = 30;

    // part where everything is defined, what we take or not
    if (menuItem === 'wedd') {
        var context = document.getElementById('weddText');

    } else if (menuItem === 'bday') {
        var context = document.getElementById('bdayText');

    } else if (menuItem === 'corp') {
        var context = document.getElementById('corpText');

    } else if (menuItem === 'cont') {
        zIndexVal = 50;
        var context = document.getElementById('contText');
    };
    //show context

    context.style.WebkitAnimation = "fadeIn 1s 1";
    context.style.animation = "fadeIn 1s 1";
    context.style.visibility = "visible";

    context.style.opacity = 1;
    context.style.zIndex = zIndexVal;
    window.scrollTo(0, 0);
    
   
};

function hideDetail(menuItem) {
    // dont forget to set top to the value before hiding it
}
