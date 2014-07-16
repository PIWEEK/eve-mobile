var gui = {
    currentContent: 0,

    init: function(){

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
        var grid = document.getElementsByClassName("home-grid")[0];
        grid.innerHTML = '<h1 class="full">Next events</h1>';

        for (i = 0; i < list.length; i++){
            var sizeClass = "quarter";
            if (i==0) {
                sizeClass = "half";
            }
            var div = document.createElement('div');
            div.dataset.eventId = list[i].id;
            div.addEventListener("click", function(){
                data.selectEvent(this.dataset.eventId);
            });
            div.className = 'event-home inline-block ' + sizeClass;


            div.innerHTML = '<div class="event-home-info"><a href="###">'+list[i].name+'</a><span class="event-home-date">'+list[i].startDate+'</span></div><a href="#"><img src="'+list[i].logo+'" border="0"/></a>';


            grid.appendChild (div);
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
    },

    drawEventTalks: function(){
        gui.showEventContent(".event-content-data-talks");
        $(".event-nav-link").removeClass("current");
        $(".event-nav-link-talks").addClass("current");
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
        var body = document.getElementById("body");
        var mc = Hammer(body);
        mc.on("swipeleft", function(){
            gui.swipe (1)
        });
        mc.on("swiperight", function(){
            gui.swipe (-1)
        });
    },
    swipe: function(dir){
            var nextContent = gui.currentContent + dir;
            var nextElement = document.getElementById("content"+nextContent);
            if (nextElement) {
                document.getElementById("content"+gui.currentContent).className = "content hide";
                nextElement.className = "content";
                gui.currentContent = nextContent;
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
        $(".overlay").remove();
        $('nav.event-mobile').hide();
    },

    showMenu: function(){
        var overlay = $('<div class="overlay"/>');
        $("body").append(overlay);
        overlay.on("click", gui.hideMenu);
        $('nav.event-mobile').show();
    }

};
