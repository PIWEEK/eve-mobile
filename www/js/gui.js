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

            var date = gui.parseDate(list[i].startDate);
            div.html('<div class="event-home-info"><a href="###">'+list[i].name+'</a><span class="event-home-date">'+date[0]+'</span></div><a href="#"><img src="'+list[i].logo+'" border="0"/></a>');
            grid.append (div);
        }


    },

    selectEvent: function(event){
        gui.event = event;
        gui.showContent("#event-info");
        gui.drawEventInfo();
    },

    drawEventInfo: function(){
        $(".icon-bubbles").hide();
        gui.showEventContent(".event-content-data-info");

        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-info").addClass("current");


        $("#event-name").html(gui.event.name);
        $(".event-img").find("img").attr("src", gui.event.logo);


        $(".event-text p").html(gui.event.description);

        $(".event-content-data-info .tagline").html("");

        data.showTags($(".event-content-data-info"), gui.event.id, gui.event.tags);
    },

    drawEventTalks: function(){
        $(".icon-bubbles").show();
        gui.showEventContent(".event-content-data-talks");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-talks").addClass("current");

        $(".talks-mobile").html('<ul><li class="talks-img-menu"><div class="talks-mobile-info"><p>'+gui.event.name+'</p></div><img src="'+gui.event.logo+'" border="0"></li></ul>')

        for (var i=0; i<dao.cachedTrackList.length;i++) {
            var li = $("<li></li>");
            var a = $('<a href="#">'+dao.cachedTrackList[i].name+'</a>');
            a.click(function(){
                gui.hideMenu();
                data.showTrack(gui.event.id, $(this).html());
            });
            li.append(a);
            $(".talks-mobile ul").append(li);
        }

        data.showTrack(gui.event.id);

    },

    drawUserAgenda: function() {
        $(".talks-track-title h2").html("My agenda");
        $(".talks-day-title").remove();
        $(".talks-row").remove();
        $(".icon-bubbles").hide();
        gui.showEventContent(".event-content-data-talks");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-myagenda").addClass("current");

        for (var i=0; i<dao.cachedTalkList.length;i++) {
            var talk = dao.cachedTalkList[i];
            var favoriteTalk = dao.getCachedItemById(dao.cachedFavoriteTalkList, talk.id);
            if (favoriteTalk.id !== undefined){
                gui.drawTalk(talk, true);
            }
        }
    },

    drawEventSpeakers: function(){
        $(".icon-bubbles").hide();
        gui.showEventContent(".event-content-data-speakers");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-speakers").addClass("current");

        $(".event-content-data-speakers").html("");

        for (var i=0; i<dao.cachedSpeakerList.length;i++){
            gui.drawSpeaker(dao.cachedSpeakerList[i]);
        }
    },

    drawEventLocation: function(){
        $(".icon-bubbles").hide();
        gui.showEventContent(".event-content-data-location");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-location").addClass("current");

        $(".event-location-img").find("img").attr("src", gui.event.location);
        $(".event-location-text p").html(gui.event.location_description);
    },

    drawTest: function(list){
        var html = "<ul>";
        for (i = 0; i < list.length; i++){
            html += "<li>"+list[i].id+" - "+list[i].currentUpdate+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-list").innerHTML = html;
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
        $('nav.talks-mobile').hide();
    },

    showMenu: function(){
        var overlay = $('<div class="overlay-menu"/>');
        $("body").append(overlay);
        overlay.on("click", gui.hideMenu);
        $('nav.event-mobile').show();
    },

    showTracksMenu: function(){
        var overlay = $('<div class="overlay-menu"/>');
        $("body").append(overlay);
        overlay.on("click", gui.hideMenu);
        $('nav.talks-mobile').show();
    },

    drawTrack: function(track){
        gui.currentTrack = track;
        $(".talks-track-title h2").html(track.name);

        $(".talks-day-title").remove();
        $(".talks-row").remove();

        gui.day = null;
    },

    drawTalk: function(talk, hideStar){
        var date = gui.parseDate(talk.startDate);

        if (date[0] != gui.day) {
            gui.day = date[0];
            $(".event-content-data-talks").append('<div class="talks-day-title"><h3>'+gui.day+'</h3></div>');

        }

        var current = "";
        var favoriteTalk = dao.getCachedItemById(dao.cachedFavoriteTalkList, talk.id);
        if (favoriteTalk.id !== undefined){
            current = "current";
        }

        var div = $('<div></div>');
        var speaker = dao.getCachedSpeakerForTalk(talk.id);
        div.addClass("talks-row");
        div.addClass("talks-row-"+talk.id);
        div.append('<div class="talks-row-hour">'+date[1]+'h</div>');
        div.append('<div class="talks-row-content"><span class="talk-title">'+talk.name+'</span><span class="talk-speaker">'+speaker.name+'</span><span class="talk-location">'+talk.roomName+'</span><div class="tagline"></div></div>');
        if (hideStar !== true){
            div.append('<div class="talks-row-btn star '+current+'" data-talkid="'+talk.id+'"><i class="icon-star"></i></div>');
        }
        div.append('<div class="talks-row-btn modalLink" data-talkid="'+talk.id+'"><i class="icon-plus"></i></div>');

        data.showTags(div, talk.event_id, talk.tags);

        div.css("max-height", "5000px");

        var min = (parseInt(talk.minutes,10)*4);

        div.css("height", min+"px");

        div.find(".talks-row-hour").css("height", (min-20)+"px")
        div.find(".talks-row-content").css("height", (min-20)+"px")



        $(".event-content-data-talks").append(div);
    },

    drawTag:function(talk, tagName, tagColor){
        talk.find(".tagline").append('<div class="tag ' + tagColor +'">'+tagName+'</div>')
    },

    parseDate: function(stringDate){
        //2014-01-01 09:00:00
        var d = stringDate.split(" ");
        d[1] = d[1].substring(0, 5);
        return d;
    },

    showTalkDetail: function(talkId){
        var talk=dao.getCachedItemById(dao.cachedTalkList, talkId);
        var overlay = $('<div class="overlay-menu"/>');
        overlay.height($("body").height());
        $("body").append(overlay);
        overlay.on("click", gui.hideDetail);

        var speaker = dao.getCachedSpeakerForTalk(talkId);


        $(".modal .modal-title").html(talk.name);
        $(".modal .modal-speaker").html(speaker.name);
        $(".modal .modal-text p").html(talk.description);
        $(".modal  img").attr('src', speaker.photo);
        $(".modal .modal-share a").data('twittermessage', gui.event.hashtag+' '+talk.hashtag+' @'+speaker.twitter);

        $(".modal .tagline").html("");
        data.showTags($(".modal"), talk.event_id, talk.tags);


        $(".modal").css('top', $(window).scrollTop() + 100 + 'px');

        $(".modal").show();
    },

    showSpeakerDetail: function(speakerId){
        var speaker=dao.getCachedItemById(dao.cachedSpeakerList, speakerId);
        var overlay = $('<div class="overlay-menu"/>');
        overlay.height($("body").height());
        $("body").append(overlay);
        overlay.on("click", gui.hideDetail);


        $(".modal .modal-title").html(speaker.name);
        $(".modal .modal-speaker").html(speaker.position);
        $(".modal .modal-text p").html(speaker.bio);
        $(".modal  img").attr('src', speaker.photo);
        $(".modal .modal-share a").data('twittermessage', gui.event.hashtag+' @'+speaker.twitter);

        $(".modal .tagline").html("");

        data.showTags($(".modal"), speaker.event_id, speaker.tags);


        $(".modal").css('top', $(window).scrollTop() + 100 + 'px');

        $(".modal").show();
    },

    drawSpeaker: function(speaker){
       var div = $('<div></div>');
       div.addClass('speaker-row');
       div.append('<div class="speaker-row-img"><img src="'+speaker.photo+'" alt="'+speaker.name+'" border="0"></div>');
       div.append('<div class="speaker-row-content"><span class="speaker-name">'+speaker.name+'</span><span class="speaker-title">'+speaker.position+'</span><div class="tagline"></div></div><div class="speaker-row-btn modalLink" data-speakerid="'+speaker.id+'"><i class="icon-plus"></i></div></div>');
       $(".event-content-data-speakers").append(div);

       data.showTags(div, speaker.event_id, speaker.tags);

    },

    hideDetail: function(){
        $(".overlay-menu").remove();
        $(".modal").hide();
    },

    markAsFavorite: function(element, favorite){
        if (favorite) {
            element.addClass("current");
        } else {
            element.removeClass("current");
        }
    }

};
