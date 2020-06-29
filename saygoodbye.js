(function(window){
  var byeSpeaker={};
  var speakWord = "Good Bye"; 
  byeSpeaker.speakBye=function speak(name) {
    console.log(speakWord + " " + name);
  }   

  window.byeSpeaker=byeSpeaker;
})(window);
