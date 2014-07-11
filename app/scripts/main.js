// var title;
// etsyitems.results.forEach(function (a) {
//   //$('.hero-unit').append(a.title);

//  title = '<p>' + a.title + '</p>' + images ;

//  $('.imgbox').append(title);


// })
// //with an image variable I query for pictures matching the images string
var itemgal = '';

etsyitems.results.forEach (function (a) {
	item = '<li><img src="' + a.Images[0].url_170x135 + '"/><p id="p1">' + a.title + '</p><p id="p2">' + a.user_id + '</p><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
	item += '</li>';
	$('.imgbox').append(item);
});

// var item = '';
// 	etsyitems.results.forEach (function (a) {
// 	item = '<div class="imgbox"><img src="' + a.Images[0].url_170x135 + '" /><h1>' + a.title + '</h1><h2>' + a.user_id + '</h2><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
// 	item += '</div>';
// 	$('.imgbox').append(item);

// });