// MENU RESPONSIVE
jQuery(document).ready(function() {
    $(".eve-logo").click(function(){
        gui.clearSearch();
        data.updateEvents();
    });

    $(".search").keyup(function(){
        gui.findEvents($(this).val());
    });

    $(".event-nav-link-info").click(gui.drawEventInfo);
    $(".event-nav-link-talks").click(function(){data.showEventData(gui.drawEventTalks)});
    $(".event-nav-link-speakers").click(function(){data.showEventData(gui.drawEventSpeakers)});
    $(".event-nav-link-location").click(function(){data.showEventData(gui.drawEventLocation)});


    $( "body" ).on( "click", ".modalLink", function() {
        gui.showTalkDetail($(this).data('talkid'));
    });

    $(".closeBtn").click(function(e){
        e.preventDefault();
        gui.hideDetail();
    });

    $(".modal-share a").click(function(e) {
        e.preventDefault();
        var twitterMessage = $(this).data('twittermessage');
        window.plugins.socialsharing.shareViaTwitter(twitterMessage);
    });

    if (typeof cordova !== 'undefined' ) {
        $.getScript("js/comms.js", function(){
            $.getScript("js/index.js", function(){
                app.initialize();
                $('#event-nav-icon').click(gui.showMenu);
                $('.icon-eve').click(gui.hideMenu);
                $('#talks-nav-icon').click(gui.showTracksMenu);
                $.rloader([{src:'css/style-mobile.css'}]);
            })
        })
    } else {
        $.getScript("js/comms-desktop.js", function(){
            $.getScript("js/index-desktop.js", function(){
                app.initialize();
                //app.desktop();

                $('#event-nav-icon').click(function() {
                    $('nav.event-mobile').slideToggle("fast");
                    $('body').toggleClass('translate-3d-menu');
                });
                $('.icon-eve').click(function() {
                    $('nav.event-mobile').slideToggle("fast");
                    $('body').removeClass('translate-3d-menu');
                });
                $('#talks-nav-icon').click(function() {
                    $('nav.talks-mobile').slideToggle("fast");
                    $('body').toggleClass('translate-3d-menu-left');
                });

                gui.hideMenu = function(){
                    if ($('nav.event-mobile').is(":visible")){
                        $('nav.event-mobile').slideToggle("fast");
                        $('body').toggleClass('translate-3d-menu');
                    }

                    if ($('nav.talks-mobile').is(":visible")){
                        $('nav.talks-mobile').slideToggle("fast");
                        $('body').toggleClass('translate-3d-menu-left');
                    }
                }



            })
        })
    }
});
