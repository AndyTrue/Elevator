    'use strict';

//Scroll Elevator

    let offset = 300;
    let move_to_up =  $('.arrow-up');
    let move_to_down =  $('.arrow-down');
    
    //make arrow-up visible 
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ?
        move_to_up.addClass('arrow-is-visible') :
        move_to_up.removeClass('arrow-is-visible')
    });
    //make arrow-down visible
    $(window).scroll(function() {
        ($(this).scrollTop() < $('.container').height()-800) ?
        move_to_down.addClass('arrow-is-visible') :
        move_to_down.removeClass('arrow-is-visible')
    });
    //scroll up
    move_to_up.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    //scroll down
    move_to_down.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $('.container').prop('scrollHeight')
        }, 800);
    });

   
