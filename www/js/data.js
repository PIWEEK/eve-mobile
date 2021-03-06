var data = {
    test: function() {
        dao.listEventsUpdate(function(list){
            gui.drawTest(list);
        });
    },

    updateEvents: function(){
        if (comms.online) {
            //alert("Starting on online mode");
            //TODO: Ask JSON to server
            comms.getEventList(function(text){
                var eventList = JSON.parse(text);
                dao.updateDatabaseEventsWithJSON(eventList,
                    function(){
                        dao.listEvents(gui.drawEvents);
                    }
                );


            });
        } else {
            dao.listEvents(function(list){
                if (list.length == 0) {
                    alert("Sorry, you need an internet connection to continue");
                } else {
                    alert("Starting on offline mode");
                    gui.drawEvents(list);
                }
            })
        }
    },

    updateEventData: function(eventId){
        if (comms.online) {
            data.updating = true;
            //Check if we need to update the event data
            dao.getEvent(
                eventId,
                function(list){
                    var event = list[0];
                    if (event.lastUpdate != event.currentUpdate) {
                        comms.getEventData(
                            eventId,
                            function(text){
                                var eventContent = JSON.parse(text);
                                dao.updateDatabaseEventDataWithJSON(event, eventContent, function(){
                                    data.cacheEventData(eventId);
                                    data.updating = false;
                                });
                            }
                        );



                    } else {
                        data.cacheEventData(eventId);
                        data.updating = false;

                    }
                }
            )

        } else {
            data.cacheEventData(eventId);
        }
    },

    cacheEventData: function(eventId){
        dao.listTracks(eventId, function(list){
            dao.cachedTrackList = list;
        });

        dao.listSpeakers(eventId, function(list){
            dao.cachedSpeakerList = list;
        });

        dao.listTalks(eventId, function(list){
            dao.cachedTalkList = list;
        });

        dao.listFavoriteTalks(eventId, function(list){
            dao.cachedFavoriteTalkList = list;
        });
    },

    selectEvent: function(eventId){
        for (var i=0; i<dao.eventList.length;i++){
            if (eventId == dao.eventList[i].id) {
                gui.selectEvent(dao.eventList[i]);
                data.updateEventData(eventId);
                break;
            }
        }
    },

    showEventData: function(show){
        if (data.updating) {
            window.setTimeout(function(){data.showEventData(show)}, 200);
        } else {
            show()
        }
    },


    showTags: function(guiElement, eventId, tags){
        dao.getTags(eventId, function(list){
            var freeTags = ["tag-green", "tag-pink", "tag-cyan", "tag-lime", "tag-purple", "tag-yellow", "tag-red", "tag-brown", "tag-orange", "tag-black"];
            for (var i=0; i<list.length; i++){
                var index = freeTags.indexOf(list[i].color);
                freeTags.splice(index, 1);
            }


            var tagList = tags.split(", ");
            for (var i=0; i<tagList.length;i++){
                var tagName = tagList[i];
                var color = null;
                for (var j=0; j<list.length; j++){
                    if (list[j].name == tagName){
                        color = list[j].color;
                        break;
                    }
                }

                if (!color){
                    color = freeTags[Math.floor(Math.random()*freeTags.length)];
                    var index = freeTags.indexOf(color);
                    freeTags.splice(index, 1);
                    dao.setTagColor(eventId, tagName, color);
                }
                gui.drawTag(guiElement, tagName, color);

            }
        });
    },

    showTrack: function(eventId, trackName){
        if (!trackName) {
            trackName = dao.cachedTrackList[0].name;
        }
        dao.getTrack(eventId, trackName, function(list){
            var track = list[0];

            gui.drawTrack(track);
            dao.listTalksByTrack(eventId, track.id, function(list){
                for (var i=0; i<list.length;i++){
                    gui.drawTalk(list[i]);
                }
            });
        });
    },

    talkFavoriteToogle: function(element, talkId){
        //Update cache
        var favoriteTalk = dao.getCachedItemById(dao.cachedFavoriteTalkList, talkId);

        if (favoriteTalk.id !== undefined){
            dao.setTalkAsFavorite(talkId, gui.event.id, false);
            gui.markAsFavorite(element, false);
        } else {
            dao.setTalkAsFavorite(talkId, gui.event.id, true);
            gui.markAsFavorite(element, true);
        }

        dao.listFavoriteTalks(gui.event.id, function(list){
            dao.cachedFavoriteTalkList = list;
        });


    }


};
