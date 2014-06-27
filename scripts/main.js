var title;
etsyitems.results.forEach(function (a) {
  //$('.hero-unit').append(a.title);

 title = '<p>' + a.title + '</p>';

 $('.hero-unit').append(title);


})
//with an image variable I query for pictures matching the images string
var images;
etsyitems.results.forEach(function (a) {
	images = '<div class=“images”><img src="' + a.Images[0].url_570xN + '" style="width: 250px; height: 200px;"/></div>';

	$('.imgbox').append('<div class="box">' + images + '</div>');

})
