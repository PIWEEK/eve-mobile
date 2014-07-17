var gui = {
    currentContent: 0,

    init: function(){
        gui.initSwipe();
    },
    showContent: function(selector){
        $(".content").addClass("hide");
        $(selector).removeClass("hide");
    },

    showEventContent: function(selector){
        gui.hideMenu();
        $(".event-content-data").addClass("hide");
        $(selector).removeClass("hide");
    },

    drawEvents: function(list){
        gui.showContent("#event-list");
        var grid = $(".home-grid");
        grid.html('<h1 class="full">Next events</h1>');


        for (i = 0; i < list.length; i++){
            var sizeClass = "quarter";
            if (i==0) {
                sizeClass = "half";
            }
            var div = $('<div></div>');
            div.data("eventId", list[i].id);
            div.click(function(){
                data.selectEvent($(this).data("eventId"));
            });
            div.addClass('event-home');
            div.addClass('inline-block');
            div.addClass(sizeClass);


            div.html('<div class="event-home-info"><a href="###">'+list[i].name+'</a><span class="event-home-date">'+list[i].startDate+'</span></div><a href="#"><img src="'+list[i].logo+'" border="0"/></a>');
            grid.append (div);
        }


    },

    selectEvent: function(event){
        gui.event = event;
        gui.showContent("#event-info");
        gui.drawEventInfo();
    },

    drawEventInfo: function(){
        gui.showEventContent(".event-content-data-info");

        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-info").addClass("current");


        $("#event-name").html(gui.event.name);
        $(".event-img").find("img").attr("src", gui.event.logo);


        $(".event-text p").html(gui.event.description);

        $(".tagline").html("");

        data.showTags(gui.event.id, gui.event.tags);
    },

    drawTag:function(tagName, tagColor){
        $(".tagline").append('<div class="tag ' + tagColor +'">'+tagName+'</div>')
    },

    drawEventTalks: function(){
        gui.showEventContent(".event-content-data-talks");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-talks").addClass("current");

        data.showTrack(gui.event.id);

    },

    drawEventSpeakers: function(){
        gui.showEventContent(".event-content-data-speakers");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-speakers").addClass("current");
    },

    drawEventLocation: function(){
        gui.showEventContent(".event-content-data-location");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-location").addClass("current");
    },

    drawTest: function(list){
        var html = "<ul>";
        for (i = 0; i < list.length; i++){
            html += "<li>"+list[i].id+" - "+list[i].currentUpdate+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-list").innerHTML = html;
    },

    drawTalks: function(list){
        var html = "TALKS<br /><ul>";
        for (i = 0; i < list.length; i++){
            html += "<li>"+list[i].name+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-talk-list").innerHTML = html;
    },
    initSwipe: function(){
        var mc = Hammer($('.event-content-data-talks')[0]);
        mc.on("swipeleft", function(){
            gui.swipe (1)
        });
        mc.on("swiperight", function(){
            gui.swipe (-1)
        });
    },
    swipe: function(dir){
        var index = -1;
        for (var i=0;i<dao.cachedTrackList.length;i++){
            if (gui.currentTrack.name == dao.cachedTrackList[i].name){
                index = i;
                break;
            }
        }
        index += dir;
        if ((index >= 0) && (index < dao.cachedTrackList.length)){
            data.showTrack(gui.event.id, dao.cachedTrackList[index].name);
        }
    },

    findEvents: function(text){
        var list = [];
        text = text.toLowerCase();
        for (var i=0; i<dao.eventList.length;i++){
            var name = dao.eventList[i].name.toLowerCase();
            if (name.indexOf(text) > -1){
                list.push(dao.eventList[i]);
            }
        }
        gui.drawEvents(list);
    },

    clearSearch: function(){
        $(".search").val("");
    },

    hideMenu: function(){
        $(".overlay-menu").remove();
        $('nav.event-mobile').hide();
    },

    showMenu: function(){
        var overlay = $('<div class="overlay-menu"/>');
        $("body").append(overlay);
        overlay.on("click", gui.hideMenu);
        $('nav.event-mobile').show();
    },

    drawTrack: function(track){
        gui.currentTrack = track;
        $(".talks-track-title h2").html(track.name);
        //TODO: day
        //$(".talks-day-title h3").html(track.name);

        $(".talks-day-title").remove();
        $(".talks-row").remove();

        gui.day = null;
    },

    drawTalk: function(talk){
        var date = gui.parseDate(talk.startDate);

        if (date[0] != gui.day) {
            gui.day = date[0];
            $(".event-content-data-talks").append('<div class="talks-day-title"><h3>'+gui.day+'</h3></div>');

        }

        var div = $('<div></div>');
        var speaker = dao.getCachedSpeakerForTalk(talk.id);
        div.addClass("talks-row");
        div.append('<div class="talks-row-hour">'+date[1]+'h</div>');
        div.append('<div class="talks-row-content"><span class="talk-title">'+talk.name+'</span><span class="talk-speaker">'+speaker.name+'</span><span class="talk-location">'+talk.roomName+'</span></div>');
        div.append('<div class="talks-row-btn modalLink"><i class="icon-plus"></i></div>');


        $(".event-content-data-talks").append(div);
    },

    parseDate: function(stringDate){
        //2014-01-01 09:00:00
        var d = stringDate.split(" ");
        d[1] = d[1].substring(0, 5);
        return d;
    }

};
