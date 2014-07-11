// var title;
// etsyitems.results.forEach(function (a) {
//   //$('.hero-unit').append(a.title);

//  title = '<p>' + a.title + '</p>' + images ;

//  $('.imgbox').append(title);


// })
// //with an image variable I query for pictures matching the images string
// var images;
// etsyitems.results.forEach(function (a) {
// 	images = '<div class=“images”><img src="' + a.Images[0].url_570xN + '" style="width: 250px; height: 200px;"/></div>';

// 	$('.imgbox').append('<div class="box">' + images + '</div>');

// })

var item = '';
	etsyitems.results.forEach (function (a) {
	item = '<div class="imgbox"><img src="' + a.Images[0].url_170x135 + '" /><h1>' + a.title + '</h1><h2>' + a.user_id + '</h2><a href="#">' + '$' + a.price + ' ' + a.currency_code +'</a>';
	item += '</div>';
	$('.imgbox').append(item);

});