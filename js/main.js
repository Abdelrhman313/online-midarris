$(()=>{
    // Edit Navbar on Scroll page
    if(window.pageYOffset >= 40){
        $('.navbar').addClass('scrolled-navbar');
    }else{
        $('.navbar').removeClass('scrolled-navbar');
    }
    window.onscroll = ()=>{
        if(window.pageYOffset >= 40){
            $('.navbar').addClass('scrolled-navbar');
            $('.go-to-top').addClass('displayed');
        }else{
            $('.navbar').removeClass('scrolled-navbar');
            $('.go-to-top').removeClass('displayed');
        }
    }

    // run Counter 
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    // go-to-top button
    $('.go-to-top button').click(() => { 
        $('html, body').animate({
            scrollTop: 0,
            behavior: 'smooth'
        });;
    });

    //Active WoW js
    new WOW().init();
});