var parentHeight = jQuery(window).height();
var childHeight = jQuery('.main').height();

jQuery(document).ready(function() {

	var textAnimation = {
		separate:function(widthOf){
			jQuery(".js-ln").each(function() {
				var word = jQuery(this).text();
				var letterW = word.charAt(0);

				var word_calc = '<span>' + word + '</span>';
				jQuery(this).html(word_calc);

				var wordWidth = jQuery(this).find('span:first').width();

				var letter_calc = '<span>' + letterW + '</span>';
				jQuery(this).html(letter_calc);

				var letterWidth = jQuery(this).find('span:first').width();

				jQuery(this).html(word);

				if(widthOf){
					jQuery(this).animate({'width':wordWidth+'px'}, 200);
				}else{					
					jQuery(this).animate({'width':letterWidth+'px'}, 200);
				}
				
			});
		},
		listener:function(widthOf){
			textAnimation.separate(widthOf);
		},
		init:function(widthOf){
			textAnimation.listener(widthOf);
        }
	}
	
	textAnimation.init();

	jQuery('h1').hover(function(){
		jQuery(".js-ln").each(function() {
			textAnimation.init('word');
		});
	},function(){
		jQuery(".js-ln").each(function() {
			textAnimation.init();
		});
	});

	jQuery(window).resize(function(){
		var parentHeight = jQuery(window).height();
		var childHeight = jQuery('.main').height();

		jQuery('.main').animate({'margin-top': (parentHeight - childHeight) / 2});
	});
});

jQuery(window).load(function(){
	jQuery('.main').animate({'margin-top': (parentHeight - childHeight) / 2});
});


