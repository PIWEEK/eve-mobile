var comms = {
    urlBase: "http://eveapp.ctrlz.es",
    checkConnection: function() {
        var networkState = navigator.network.connection.type;
        comms.online = (networkState != Connection.NONE);
        return comms.online;
    },

    ajaxGet: function(url, success){
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 ) {
               if(xmlhttp.status == 200){
                   success(xmlhttp.responseText);
               }
               else if(xmlhttp.status == 400) {
                  alert('There was an error '+xmlhttp.status);
               }
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },

    syncGet: function(url){
         var xhReq = new XMLHttpRequest();
         xhReq.open("GET", url, false);
         xhReq.send();
         var serverResponse = xhReq.responseText;
         return serverResponse;
    },

    getEventList: function(success) {
        return comms.ajaxGet(comms.urlBase+"/event", success);
    },

    getEventData: function(eventId, success) {
        return comms.ajaxGet(comms.urlBase+"/event/"+eventId+"/complete", success);
    }
};
