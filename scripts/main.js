var itemgal = '';

etsyitems.results.forEach (function (a) {
	item = '<li><img src="' + a.Images[0].url_170x135 + '"/><p id="p1">' + a.title + '</p><p id="p2">' + a.user_id + '</p><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
	item += '</li>';
	$('.imgbox').append(item);
});