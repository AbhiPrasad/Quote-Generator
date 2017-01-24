$(document).ready(function() {
    var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="

    $("#getquote").on("click", function() {

        $.getJSON(quoteAPI, function(json) {
            $("#quote").html(JSON.stringify(json));
        });

    });

});