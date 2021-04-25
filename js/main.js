jQuery(document).ready(function($) {	
	$('.services__item-spoiler').click(function(){
		var string = $(this).parent().children('.services__item-paragraph').css("display");
	  	var flag = string == "block"?1:0;
	  $(this).parent().children('.services__item-paragraph').slideToggle('normal');
	  if (flag==0) {
	  	$(this).children('.services__item-arrow').animate(
		    { deg: -90 },
		    {
		      duration: 400,
		      step: function(now) {
		        $(this).css({ transform: 'rotate(' + now + 'deg)' });
		      }
		    }
		  );
	  }
		else {
			$(this).children('.services__item-arrow').animate(
		    { deg: 0 },
		    {
		      duration: 400,
		      step: function(now) {
		        $(this).css({ transform: 'rotate(' + now + 'deg)' });
		      }
		    }
		  );
		}
	  return false;
	});
});