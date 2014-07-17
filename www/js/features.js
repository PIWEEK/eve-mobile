// MENU RESPONSIVE
jQuery(document).ready(function() {



    $('#event-nav-icon').click(gui.showMenu);

    $('.icon-eve').click(gui.hideMenu);


    $(".eve-logo").click(function(){
        gui.clearSearch();
        data.updateEvents();
    });

    $(".search").keyup(function(){
        gui.findEvents($(this).val());
    })

    $(".event-nav-link-info").click(gui.drawEventInfo);
    $(".event-nav-link-talks").click(function(){data.showEventData(gui.drawEventTalks)});
    $(".event-nav-link-speakers").click(function(){data.showEventData(gui.drawEventSpeakers)});
    $(".event-nav-link-location").click(function(){data.showEventData(gui.drawEventLocation)});

    if (typeof cordova !== 'undefined' ) {
        $.getScript("js/comms.js", function(){
            $.getScript("js/index.js", function(){
                app.initialize();
            })
        })
    } else {
        $.getScript("js/comms-desktop.js", function(){
            $.getScript("js/index-desktop.js", function(){
                app.initialize();
                //app.desktop();
            })
        })
    }

});
