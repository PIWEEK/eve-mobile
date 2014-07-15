var gui = {
    drawEvents: function(list){
        var html = "<ul>";
        for (i = 0; i < list.length; i++){
            html += "<li onclick='data.updateTalks(" + list[i].id+ ")'>"+list[i].name+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-list").innerHTML = html;
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
    }
};
