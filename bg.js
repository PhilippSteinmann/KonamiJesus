<!doctype html>
<html>
  <body>
    <script type="text/javascript">
      //var url = "http://translate.google.com/translate_tts?tl=en&q=Background";
      var audio = new Audio("HS.mp3");
      audio.autoplay = true;
    </script>
  </body>
</html>
/*var audioElement = document.createElement('audio');
 audioElement.setAttribute("preload", "auto");
 audioElement.autobuffer = true;

 var source1 = document.createElement('source');
 source1.type= 'audio/mpeg';
 source1.src= 'HS.mp3';
 audioElement.appendChild(source1);

 chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "play"){
          audioElement.load;
          audioElement.play();
      }
});*/
