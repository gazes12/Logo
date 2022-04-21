const button = $('.header__button');
const menu = $('.header__list');
const mobileMenu = $('.header__menu-mobile');

button.click(function(){
	menu.toggleClass('active');
	if(!menu.hasClass('active')){
		button.text('Открыть меню');
		$('body').removeClass('lock');
	} else{
		button.text('Закрыть меню');
		menu.appendTo(mobileMenu);
		$('body').addClass('lock');
	}
})