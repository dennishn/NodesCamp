jQuery(document).ready(function($) {
	//Handle navigation
	var currentPage = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
	if(currentPage) {
		$('.side-nav > li').removeClass('active').find('a[href="' + currentPage + '"]').parent().addClass('active');
	}
});
