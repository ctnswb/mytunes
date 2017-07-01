// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    var endpoint = 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs';
    var serverSongData;

    var settings = {
      url: endpoint,
      method: 'GET',
      dataType: 'json',
      complete: (function(data) {
        serverSongData = data.responseJSON.results;
        this.saveData(serverSongData);
      }).bind(this)
    };

    var test = $.ajax(settings);

  },

  saveData: function(data){
    this.reset(data);

  }

});
