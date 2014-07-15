var comms = {
    checkConnection: function() {
        var networkState = navigator.connection.type;
        comms.online = (networkState != Connection.NONE);
        return comms.online;
    }
};
