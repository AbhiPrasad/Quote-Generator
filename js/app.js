$(document).ready(function() {

    var quoteAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

    $('#getquote').click(function() {
        $.getJSON(quoteAPI).done(update).fail(handleErr);
    });

    function update(json) {
        $('#quotetext').html(JSON.stringify(json));
    }

    function handleErr(jqxhr, textStatus, err) {
        console.log("Request Failed: " + textStatus + ", " + err);
    }

});