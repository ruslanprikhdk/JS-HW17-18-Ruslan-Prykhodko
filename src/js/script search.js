$(function () {
    $("#getItem").click(function Start() {
      var $title = $("#title").val();
      var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $title + "&locale=en_US&safesearch=moderate";
      console.log($url);
      $.ajax({
        type: "GET",
        url: $url,
        dataType: 'json',
        success: Render
      });
    });

    $("#title").on("keypress", function(event) {
      if(event.which==13) {
        event.preventDefault();
        var $title = $("#title").val();
        var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $title + "&locale=en_US&safesearch=moderate";
        console.log($url);
        $.ajax({
          type: "GET",
          url: $url,
          dataType: 'json',
          success: Render
        });
      }
    });

});
