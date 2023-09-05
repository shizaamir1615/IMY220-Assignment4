$(document).ready(function() {
    $(".submit").on("click", function() 
    {
      
      var messageText = $("#message").val();
  
     
      if (messageText.trim() !== "") 
      {
       
        var messageDiv = $("<div>").addClass("col-4 rounded-bottom mb-3 offset-4").text(messageText);
        messageDiv.append("<br>");

        var clickedButtonId = $(this).attr('id');

        if (clickedButtonId === "right") 
        {
            messageDiv.css("background-color", "#90EE90");
        }
        else 
        {
            messageDiv.css("background-color", "#ADD8E6");
        }

        $(".messages").append(messageDiv);

        
        $("#message").val("");

    
        if (isYouTubeLink(messageText)) 
        {
            var youtubeEmbed = createYouTubeEmbed(messageText);
            messageDiv.append(youtubeEmbed);
        }
      }
    });
  
   
    function isYouTubeLink(message) {

      var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
      return youtubeRegex.test(message);
      
    }
  
   
    function createYouTubeEmbed(link) {
     
      var videoID = getYouTubeVideoID(link);
  
      
      var iframe = $("<iframe>").attr({
        src: "https://www.youtube.com/embed/" + videoID,
        width: "100%",
        height: "315",
        frameborder: "0",
        allowfullscreen: true

      });
  
      return iframe;
    }
  
   
    function getYouTubeVideoID(link) 
    {
      var videoID = "";

      if (link.indexOf("youtube.com") !== -1) {
        
        var params = link.split("?")[1].split("&");

        for (var i = 0; i < params.length; i++) 
        {
          var param = params[i].split("=");
          if (param[0] === "v") {
            videoID = param[1];
            break;
          }
        }
      }

      else if (link.indexOf("youtu.be") !== -1) 
      {
      
        videoID = link.split("/").pop();
      }
  
      return videoID;
    }
  });
  