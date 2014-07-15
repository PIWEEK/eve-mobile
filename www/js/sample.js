var sample = JSON.parse('\
{ \
  "events": [ \
    { \
      "id": 1000, \
      "name": "Event 1000", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1000", \
      "logo": "http:\/\/app.com\/1000.png", \
      "tags": "groovy, cordova, html5", \
      "tracks": [ \
        { \
          "id": 2000, \
          "event_id": 1000, \
          "name": "Track 2000" \
        }, \
        { \
          "id": 2001, \
          "event_id": 1000, \
          "name": "Track 2001" \
        }, \
        { \
          "id": 2002, \
          "event_id": 1000, \
          "name": "Track 2002" \
        } \
      ], \
      "speakers": [ \
        { \
          "id": 3000, \
          "event_id": 1000, \
          "name": "John 3000", \
          "twitter": "john3000", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3000.png" \
        }, \
        { \
          "id": 3001, \
          "event_id": 1000, \
          "name": "John 3001", \
          "twitter": "john3001", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3001.png" \
        }, \
        { \
          "id": 3002, \
          "event_id": 1000, \
          "name": "John 3002", \
          "twitter": "john3002", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3002.png" \
        }, \
        { \
          "id": 3003, \
          "event_id": 1000, \
          "name": "John 3003", \
          "twitter": "john3003", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3003.png" \
        }, \
        { \
          "id": 3004, \
          "event_id": 1000, \
          "name": "John 3004", \
          "twitter": "john3004", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3004.png" \
        } \
      ], \
      "talks": [ \
        { \
          "id": 4000, \
          "event_id": 1000, \
          "name": "Talk 4000", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2000, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4000", \
          "speakers": "3000", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4001, \
          "event_id": 1000, \
          "name": "Talk 4001", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2000, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4001", \
          "speakers": "3001", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4002, \
          "event_id": 1000, \
          "name": "Talk 4002", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2000, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4002", \
          "speakers": "3002", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4003, \
          "event_id": 1000, \
          "name": "Talk 4003", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2000, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4003", \
          "speakers": "3003", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4004, \
          "event_id": 1000, \
          "name": "Talk 4004", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2000, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4004", \
          "speakers": "3004", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        } \
      ] \
    }, \
    { \
      "id": 1001, \
      "name": "Event 1001", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1001", \
      "logo": "http:\/\/app.com\/1001.png", \
      "tags": "groovy, cordova, html5", \
      "tracks": [ \
        { \
          "id": 2003, \
          "event_id": 1001, \
          "name": "Track 2003" \
        }, \
        { \
          "id": 2004, \
          "event_id": 1001, \
          "name": "Track 2004" \
        }, \
        { \
          "id": 2005, \
          "event_id": 1001, \
          "name": "Track 2005" \
        } \
      ], \
      "speakers": [ \
        { \
          "id": 3005, \
          "event_id": 1001, \
          "name": "John 3005", \
          "twitter": "john3005", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3005.png" \
        }, \
        { \
          "id": 3006, \
          "event_id": 1001, \
          "name": "John 3006", \
          "twitter": "john3006", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3006.png" \
        }, \
        { \
          "id": 3007, \
          "event_id": 1001, \
          "name": "John 3007", \
          "twitter": "john3007", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3007.png" \
        }, \
        { \
          "id": 3008, \
          "event_id": 1001, \
          "name": "John 3008", \
          "twitter": "john3008", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3008.png" \
        }, \
        { \
          "id": 3009, \
          "event_id": 1001, \
          "name": "John 3009", \
          "twitter": "john3009", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3009.png" \
        } \
      ], \
      "talks": [ \
        { \
          "id": 4005, \
          "event_id": 1001, \
          "name": "Talk 4005", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2003, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4005", \
          "speakers": "3005", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4006, \
          "event_id": 1001, \
          "name": "Talk 4006", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2003, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4006", \
          "speakers": "3006", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4007, \
          "event_id": 1001, \
          "name": "Talk 4007", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2003, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4007", \
          "speakers": "3007", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4008, \
          "event_id": 1001, \
          "name": "Talk 4008", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2003, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4008", \
          "speakers": "3008", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4009, \
          "event_id": 1001, \
          "name": "Talk 4009", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2003, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4009", \
          "speakers": "3009", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        } \
      ] \
    }, \
    { \
      "id": 1002, \
      "name": "Event 1002", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1002", \
      "logo": "http:\/\/app.com\/1002.png", \
      "tags": "groovy, cordova, html5", \
      "tracks": [ \
        { \
          "id": 2006, \
          "event_id": 1002, \
          "name": "Track 2006" \
        }, \
        { \
          "id": 2007, \
          "event_id": 1002, \
          "name": "Track 2007" \
        }, \
        { \
          "id": 2008, \
          "event_id": 1002, \
          "name": "Track 2008" \
        } \
      ], \
      "speakers": [ \
        { \
          "id": 3010, \
          "event_id": 1002, \
          "name": "John 3010", \
          "twitter": "john3010", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3010.png" \
        }, \
        { \
          "id": 3011, \
          "event_id": 1002, \
          "name": "John 3011", \
          "twitter": "john3011", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3011.png" \
        }, \
        { \
          "id": 3012, \
          "event_id": 1002, \
          "name": "John 3012", \
          "twitter": "john3012", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3012.png" \
        }, \
        { \
          "id": 3013, \
          "event_id": 1002, \
          "name": "John 3013", \
          "twitter": "john3013", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3013.png" \
        }, \
        { \
          "id": 3014, \
          "event_id": 1002, \
          "name": "John 3014", \
          "twitter": "john3014", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3014.png" \
        } \
      ], \
      "talks": [ \
        { \
          "id": 4010, \
          "event_id": 1002, \
          "name": "Talk 4010", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2006, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4010", \
          "speakers": "3010", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4011, \
          "event_id": 1002, \
          "name": "Talk 4011", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2006, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4011", \
          "speakers": "3011", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4012, \
          "event_id": 1002, \
          "name": "Talk 4012", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2006, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4012", \
          "speakers": "3012", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4013, \
          "event_id": 1002, \
          "name": "Talk 4013", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2006, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4013", \
          "speakers": "3013", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4014, \
          "event_id": 1002, \
          "name": "Talk 4014", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2006, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4014", \
          "speakers": "3014", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        } \
      ] \
    }, \
    { \
      "id": 1003, \
      "name": "Event 1003", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1003", \
      "logo": "http:\/\/app.com\/1003.png", \
      "tags": "groovy, cordova, html5", \
      "tracks": [ \
        { \
          "id": 2009, \
          "event_id": 1003, \
          "name": "Track 2009" \
        }, \
        { \
          "id": 2010, \
          "event_id": 1003, \
          "name": "Track 2010" \
        }, \
        { \
          "id": 2011, \
          "event_id": 1003, \
          "name": "Track 2011" \
        } \
      ], \
      "speakers": [ \
        { \
          "id": 3015, \
          "event_id": 1003, \
          "name": "John 3015", \
          "twitter": "john3015", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3015.png" \
        }, \
        { \
          "id": 3016, \
          "event_id": 1003, \
          "name": "John 3016", \
          "twitter": "john3016", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3016.png" \
        }, \
        { \
          "id": 3017, \
          "event_id": 1003, \
          "name": "John 3017", \
          "twitter": "john3017", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3017.png" \
        }, \
        { \
          "id": 3018, \
          "event_id": 1003, \
          "name": "John 3018", \
          "twitter": "john3018", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3018.png" \
        }, \
        { \
          "id": 3019, \
          "event_id": 1003, \
          "name": "John 3019", \
          "twitter": "john3019", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3019.png" \
        } \
      ], \
      "talks": [ \
        { \
          "id": 4015, \
          "event_id": 1003, \
          "name": "Talk 4015", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2009, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4015", \
          "speakers": "3015", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4016, \
          "event_id": 1003, \
          "name": "Talk 4016", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2009, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4016", \
          "speakers": "3016", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4017, \
          "event_id": 1003, \
          "name": "Talk 4017", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2009, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4017", \
          "speakers": "3017", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4018, \
          "event_id": 1003, \
          "name": "Talk 4018", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2009, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4018", \
          "speakers": "3018", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4019, \
          "event_id": 1003, \
          "name": "Talk 4019", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2009, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4019", \
          "speakers": "3019", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        } \
      ] \
    }, \
    { \
      "id": 1004, \
      "name": "Event 1004", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1004", \
      "logo": "http:\/\/app.com\/1004.png", \
      "tags": "groovy, cordova, html5", \
      "tracks": [ \
        { \
          "id": 2012, \
          "event_id": 1004, \
          "name": "Track 2012" \
        }, \
        { \
          "id": 2013, \
          "event_id": 1004, \
          "name": "Track 2013" \
        }, \
        { \
          "id": 2014, \
          "event_id": 1004, \
          "name": "Track 2014" \
        } \
      ], \
      "speakers": [ \
        { \
          "id": 3020, \
          "event_id": 1004, \
          "name": "John 3020", \
          "twitter": "john3020", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3020.png" \
        }, \
        { \
          "id": 3021, \
          "event_id": 1004, \
          "name": "John 3021", \
          "twitter": "john3021", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3021.png" \
        }, \
        { \
          "id": 3022, \
          "event_id": 1004, \
          "name": "John 3022", \
          "twitter": "john3022", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3022.png" \
        }, \
        { \
          "id": 3023, \
          "event_id": 1004, \
          "name": "John 3023", \
          "twitter": "john3023", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3023.png" \
        }, \
        { \
          "id": 3024, \
          "event_id": 1004, \
          "name": "John 3024", \
          "twitter": "john3024", \
          "bio": "asdf asdf asdf", \
          "photo": "http:\/\/app.com\/3024.png" \
        } \
      ], \
      "talks": [ \
        { \
          "id": 4020, \
          "event_id": 1004, \
          "name": "Talk 4020", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2012, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4020", \
          "speakers": "3020", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4021, \
          "event_id": 1004, \
          "name": "Talk 4021", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2012, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4021", \
          "speakers": "3021", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4022, \
          "event_id": 1004, \
          "name": "Talk 4022", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2012, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4022", \
          "speakers": "3022", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4023, \
          "event_id": 1004, \
          "name": "Talk 4023", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2012, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4023", \
          "speakers": "3023", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        }, \
        { \
          "id": 4024, \
          "event_id": 1004, \
          "name": "Talk 4024", \
          "startDate": "2014-07-15T12:02:06+0000", \
          "endDate": "2014-07-15T12:02:06+0000", \
          "track_id": 2012, \
          "description": "asdf asdf asdf", \
          "hashtag": "#talk4024", \
          "speakers": "3024", \
          "tags": "groovy, cordova, html5", \
          "roomName": "room01", \
          "maxAtendees": 100 \
        } \
      ] \
    } \
  ] \
}');
