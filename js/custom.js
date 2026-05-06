/*
Template Name: ebasket - eCommerce Website Template Using Bootstrap 
Author: Webartinfo
Version: 1.0
*/

(function ($) {
	"use strict"; // Start of use strict
	
	
    $(document).keydown(function(e){
         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
           return false;
         }
         if(e.which === 123){
             return false;
         }
         if(e.metaKey){
             return false;
         }
         //document.onkeydown = function(e) {
         // "I" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
             return false;
         }
         // "J" key
         if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
             return false;
         }
         // "S" key + macOS
         if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
             return false;
         }
         // "U" key
         if (e.ctrlKey && e.keyCode == 85) {
            return false;
         }
         // "F12" key
         if (event.keyCode == 123) {
            return false;
         }
    });
	

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-120909275-1', 'auto');
ga('send', 'pageview');

	var Popular = {
		init: function () {
			this.Basic.init();
		},

		Basic: {
			init: function () {

				this.ListSlider();
				this.VerticleSlider();

			},

			// list_slider
			ListSlider: function () {
				$('.list_slider').slick({
					dots: false,
					arrows: true,
					infinite: true,
					slidesToShow: 4,
					speed: 400,
					autoplay: true,
					slidesToScroll: 1,
					responsive: [{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			},

			// verticle_slider
			VerticleSlider: function () {
				$('.verticle_slider').slick({
					dots: true,
					arrows: true,
					infinite: true,
					slidesToShow: 1,
					speed: 300,
					autoplay: true,
					slidesToScroll: 1
				});
			},

		}
	}
	jQuery(document).ready(function () {
		Popular.init();
	});

})(jQuery); // End of use strict