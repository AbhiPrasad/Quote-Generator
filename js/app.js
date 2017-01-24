var quoteAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

$('#getquote').click(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
});

$(document).ready(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
})

function updateQuote(json) {
    var quoteTxt = json.quoteText;
    var quoteAut = json.quoteAuthor;

    var quoteTweet = quoteTxt + "-" + quoteAut;

    gettweetData(quoteTweet);

    if (quoteAut === "") {
        quoteAut = "Anonymous";
    }

    $('#quotetext').html(JSON.stringify(quoteTxt));
    $('#quoteauthor').html(JSON.stringify(quoteAut));
}

function errMsg(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
}

function gettweetData(quote) {
    $('#tweet').empty();

    var clone = $('.twitter-share-button-template').clone();

    clone.removeAttr("style"); // unhide the clone
    // clone.attr("data-url", someDynamicUrl);
    // clone.attr("data-counturl", someDynamicCountUrl);
    clone.attr("class", "twitter-share-button");

    // copy cloned button into div that we can clear later
    $('#tweet').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript("http://platform.twitter.com/widgets.js");
}

//  <a href="http://twitter.com/share" class="twitter-share-button" data-text="This is what we want to change dynamically" data-count="none" data-via="chris_camps">Tweet</a>