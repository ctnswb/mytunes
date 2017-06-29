// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

  //when a song is added
  this.on('add', function() {
  //plays it if it is the only song in the song queue
    if(this.length === 1){
      this.playFirst();
    };

  //does nothing if it is not the only song in the song queue

    }, this);



//when a song ends
  this.on('ended', function() {

//removes the song from the queue
  this.remove(this.at(0));
//plays the first song in the queue if there are any songs left
  if(this.length > 0) {
    this.playFirst();
  }
//does nothing if there are no songs left in the queue

    }, this);



//when a song is dequeued
  this.on('dequeue', function() {
//removes the song
    this.remove(this);
    }, this);

  },

//playFirst
  playFirst : function() {
//plays the first song in the queue
    this.at(0).play();
  }



});