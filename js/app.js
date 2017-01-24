var quoteAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

$('#getquote').click(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
});

$(document).ready(function() {
    $.getJSON(quoteAPI).done(updateQuote).fail(errMsg);
})

function updateQuote(json) {
    var quoteTxt = json.quoteText.replace(/"/g, "");
    var quoteAut = json.quoteAuthor.replace(/"/g, "");

    if (quoteAut === "") {
        quoteAut = "Anonymous";
    }

    $('#quotetext').html(JSON.stringify(quoteTxt));
    $('#quoteauthor').html(JSON.stringify(quoteAut));
}

function errMsg(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
}