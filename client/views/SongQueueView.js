// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
// renders when add or remove event fires from the song queue collection
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
// creates SongQueueEntryViews for each queued song & renders them
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }




});
