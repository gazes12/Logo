$('.works__toggles button').click(function(){
	const this_id = this.id;
	const this_image = $('.works__gallery .' + this_id);

	$('.works__button').not(this).removeClass('active');
	$(this).toggleClass('active');

	$('.works__image').not(this_image).hide(500);
	this_image.show(500);

	$('#showAll').click(function(){
		$('.works__image').show(500);
	})
})