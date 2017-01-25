var quoteAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
var twitterquote = "";

$('#getquote').click(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
});

$('#twitterbutton').click(function() {
    console.log(twitterquote);
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + twitterquote);
});

$(document).ready(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
})

function updateQuote(json) {
    var quoteTxt = json.quoteText;
    var quoteAut = json.quoteAuthor;

    var quoteTweet = quoteTxt + "-" + quoteAut;

    if (quoteAut === "") {
        quoteAut = "Anonymous";
    }

    var jsontext = JSON.stringify(quoteTxt).replace(/"/g, "");
    var jsonauthor = JSON.stringify(quoteAut).replace(/"/g, "");

    $('#quotetext').html(jsontext);
    $('#quoteauthor').html(jsonauthor);

    twitterquote = jsontext + " - " + jsonauthor;
}

function errMsg(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
}

//  <a href="http://twitter.com/share" class="twitter-share-button" data-text="This is what we want to change dynamically" data-count="none" data-via="chris_camps">Tweet</a>