// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  //enqueue method triggers enqueue event
  enqueue: function() {
    this.trigger('enqueue', this);
  },

  //dequeue methode triggers dequeue event
  dequeue: function() {
    this.trigger('dequeue', this);
  },

  //ended method that triggers ended event
  ended: function() {
    this.trigger('ended', this);
  }

});
