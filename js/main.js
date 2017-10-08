$(document).ready(function() {
	$('.slides').slick({
		autoplay: true,
		autoplaySpeed: 3000
	});

// Magnific popout //
	$('.gallery-image-link').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});



var preloaderEl = document.querySelector('#preloader');

setTimeout(function() {
	preloaderEl.classList.add('preloader-hiding');
	
	preloaderEl.addEventListener('transitionend', function() {
		this.classList.add('preloader-hidden');									
		this.classList.remove('preloader-hiding');																							 
	});
}, 1000);