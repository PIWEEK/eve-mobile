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
    $(".event-nav-link-talks").click(gui.drawEventTalks);
    $(".event-nav-link-speakers").click(gui.drawEventSpeakers);
    $(".event-nav-link-location").click(gui.drawEventLocation);
});
