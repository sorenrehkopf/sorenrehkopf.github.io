$(function(){

	
	$('.about').on('click',function(e){

		e.preventDefault();
		// console.log('wow!!')
		$('body').scrollTop($('.header').height()-20);
		$('.about').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
		$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
	});

	$('.projects').on('click',function(e){
		e.preventDefault();
		// console.log('wow!!')
		$('body').scrollTop($('.header').height()+$('#about').height()-20);
		$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.projects').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
		$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
	});

	$('.contact').on('click',function(e){
		e.preventDefault();
		// console.log('wow!!')
		$('body').scrollTop($('.header').height()+$('#about').height()+$('#contact').height()-20);
		$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.contact').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
		$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
	});

	$('.top').on('click',function(e){
		e.preventDefault();
		// console.log('wow!!')
		$('body').scrollTop(0);
		$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		$('.top').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
	});

	$(window).on('scroll',function(){
		if($('body').scrollTop()>($('.header').height()+$('#about').height()+$('#projects').height()-200)){
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else if($('body').scrollTop()>($('.header').height()+$('#about').height()-200)){
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else if($('body').scrollTop()>($('.header').height()-200)){
			$('.about').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else{
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
		}
	});

});