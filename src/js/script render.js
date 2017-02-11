function Render(response)
{

        var ul = $("#items");
        ul.empty();
        var arr = response.results;
        var $title = $("#title").val();
        var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $title + "&locale=en_US&safesearch=moderate";
        for (i = 0; i < arr.length; i++)
          {
          var data = arr[i];
          var result = data.title;
          var image = data.media[0].gif.preview;
          var p = $("<p>").append(result);
          var li = $("<li>").append(p);
          $("<img>")
            .attr("src", image)
            .appendTo(li);
              ul.append(li);
          }

}
