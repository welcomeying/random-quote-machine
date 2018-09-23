function getQuote() {
$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {
  $("#text").html(a.quoteText);
	$("#author").html("&mdash; " + a.quoteAuthor);
	if (a.quoteAuthor === "") {
		$("#author").html("&mdash; Unknown");
	}
	$("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + a.quoteText + '" - ' + a.quoteAuthor));
});
};

$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote);
});