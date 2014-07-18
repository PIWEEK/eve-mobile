var dao = {

    execute: function(tx, sql) {
        tx.executeSql(sql, [], dao.successCB, dao.errorCB);
    },

    createTables: function(tx) {
         //dao.execute(tx, 'DROP TABLE IF EXISTS TRACK');
         //dao.execute(tx, 'DROP TABLE IF EXISTS SPEAKER');
         //dao.execute(tx, 'DROP TABLE IF EXISTS TALK');
         //dao.execute(tx, 'DROP TABLE IF EXISTS TALK_FAVORITE');

         dao.execute(tx, 'DROP TABLE IF EXISTS EVENT');
         //dao.execute(tx, 'DROP TABLE IF EXISTS TAG');

         //TODO: Remove, only for test
         dao.execute(tx, 'DROP TABLE IF EXISTS EVENT_UPDATE');



         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS EVENT (id unique, name, startDate, endDate, hashtag, logo, tags, lastUpdate, description, location, location_description)');

         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TALK_FAVORITE (id unique, event_id)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS EVENT_UPDATE (id unique, currentUpdate)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TAG (eventId, name, color)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS USER_AGENDA (talk_id, track_name, color)');
    },

    updateDatabaseEventsWithJSON: function(json, success){
        dao.db.transaction(
            dao.createTables,
            dao.errorCB,
            function(){
                dao.db.transaction(
                    function(tx) {
                        //Events
                        for (i=0; i<json.events.length;i++) {
                            dao.createEvent(tx, json.events[i]);
                        }
                    },
                    dao.errorCB,
                    success
                );
            }
        );
    },

    setTagColor: function(eventId, tagName, tagColor){
        dao.db.transaction(
            function(tx) {
                dao.execute(tx, 'INSERT INTO TAG(eventId, name, color) VALUES("'+eventId+'", "'+tagName+'", "'+tagColor+'")');
            }
        );
    },

    getTags: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * from TAG where eventId="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    updateDatabaseEventDataWithJSON: function(event, json, success){
        //alert("updateDatabaseEventDataWithJSON");
        dao.db.transaction(
            function(tx) {
                var sql = 'INSERT OR REPLACE INTO EVENT_UPDATE(id, currentUpdate) VALUES("'+event.id+'", "' + event.lastUpdate +'")';
                //alert(sql);
                dao.execute(tx, sql);
                dao.updateEventData(tx, json.event);
            },
            dao.errorCB,
            success
        );
    },

    createEvent: function(tx, eventJson) {
        dao.insertJSON(tx, 'EVENT', eventJson);
    },

    updateEventData: function(tx, eventJson) {
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TRACK (id unique, name, event_id)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS SPEAKER (id unique, talk_id, event_id, name, twitter, bio, photo, position, tags)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TALK (id unique, name, startDate, minutes, event_id, track_id, description, hashtag, tags, roomName, maxAtendees, favorite)');

         dao.execute(tx, 'DELETE FROM TRACK WHERE event_id="'+eventJson.id+'"');
         dao.execute(tx, 'DELETE FROM SPEAKER WHERE event_id="'+eventJson.id+'"');
         dao.execute(tx, 'DELETE FROM TALK WHERE event_id="'+eventJson.id+'"');


        for (var i=0; i<eventJson.tracks.length;i++) {
            dao.insertJSON(tx, 'TRACK', eventJson.tracks[i]);
        }

        for (var i=0; i<eventJson.speakers.length;i++) {
            dao.insertJSON(tx, 'SPEAKER', eventJson.speakers[i]);
        }

        for (var i=0; i<eventJson.talks.length;i++) {
            dao.insertJSON(tx, 'TALK', eventJson.talks[i]);
        }

    },

    insertJSON: function(tx, table, json){
        var keys = [];
        var values = [];

        for (key in json) {
            if ((key != 'tracks') &&
                (key != 'speakers') &&
                (key != 'talks')) {
                    keys.push(key);
                    values.push('"' + json[key] + '"');
                }
        }


        var sql = 'INSERT OR REPLACE INTO ' + table;
        sql += '(' + keys.join() +')';
        sql += ' VALUES (' + values.join() + ')';

        //alert(sql);

        dao.execute(tx, sql);
    },

    errorCB: function(err) {
        alert("Error processing SQL: "+err.message);
    },

    successCB: function(t, err) {
        //alert("Success");
    },

    test: function(id) {

    },

    getEvent: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT EVENT.*,  EVENT_UPDATE.currentUpdate FROM EVENT LEFT JOIN EVENT_UPDATE ON EVENT.id = EVENT_UPDATE.id WHERE EVENT.id="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listEventsUpdate: function(querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM EVENT_UPDATE',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listEvents: function(querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM EVENT',
                [],
                function(tx, results){
                    dao.querySuccess(results, function(list){
                        dao.eventList = list;
                        querySuccess(list);
                    });
                },
                dao.errorCB
            );
        });
    },

    listTalks: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TALK WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listFavoriteTalks: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TALK_FAVORITE WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listTalksByTrack: function(eventId, trackId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TALK WHERE EVENT_ID="'+eventId+'" and TRACK_ID="'+trackId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listTracks: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TRACK WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    getTrack: function(eventId, trackName, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TRACK WHERE EVENT_ID="'+eventId+'" and name="'+trackName+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listSpeakers: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM SPEAKER WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },




    queryDB: function(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], dao.querySuccess, dao.errorCB);
    },

    querySuccess:function(results, querySuccess) {

        var len = results.rows.length;
        var list = []

        for (i = 0; i < len; i++){
            var item = results.rows.item(i);
            list.push(item);
        }

        querySuccess(list);


    },

    databaseStart: function(){
        dao.db = window.openDatabase("evedb", "1.0", "Eve DB", 1000000);
    },


    getCachedItemById: function(list, id){
        for (var i=0; i<list.length;i++){
            if (list[i].id == id) {
                return (list[i]);
            }
        }
        return {};
    },

    getCachedSpeakerForTalk: function(talkId){
        for (var i=0; i<dao.cachedSpeakerList.length;i++){
            if (dao.cachedSpeakerList[i].talk_id == talkId) {
                return (dao.cachedSpeakerList[i]);
            }
        }
        return {};
    },

    setTalkAsFavorite: function(talkId, eventId, favorite){
         dao.db.transaction(
            function(tx) {
                if (favorite) {
                    dao.execute(tx, 'INSERT INTO TALK_FAVORITE(id, event_id) VALUES("'+talkId+'", "'+eventId+'")');
                } else {
                    dao.execute(tx, 'DELETE FROM TALK_FAVORITE  WHERE id="'+talkId+'" AND event_id="'+eventId+'"');
                }
            }
        );
    }
};
