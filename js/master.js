
jQuery(document).ready(function() {

	var textAnimation = {
		separate:function(widthOf){
			jQuery(".js-ln").each(function() {
				var word = jQuery(this).text();
				var letterW = word.charAt(0);

				if(widthOf){
					var word_calc = '<span>' + word + '</span>';
					jQuery(this).html(word_calc);

					var wordWidth = jQuery(this).find('span:first').width();

					jQuery(this).css({'width':wordWidth+'px'});
				}else{
					var letter_calc = '<span>' + letterW + '</span>';
					jQuery(this).html(letter_calc);

					var letterWidth = jQuery(this).find('span:first').width();

					jQuery(this).html(word);
					jQuery(this).css({'width':letterWidth+'px'});
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
});