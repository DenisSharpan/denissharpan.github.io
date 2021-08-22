$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});