$(function(){

	$('#nav').fadeOut(0);
	
	$('.about').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:$('.header').height()-20},300);
	});

	$('.projects').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()-20},300);
	});

	$('.contact').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()+$('#contact').height()-20},300);
	});

	$('.top').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:0},400);
	});

	$(window).on('scroll',function(){
		if($('body').scrollTop()>($('.header').height()+$('#about').height()+$('#projects').height()-200)||$('html').scrollTop()>($('.header').height()+$('#about').height()+$('#projects').height()-200)){
			$('#nav').fadeIn(600);
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else if($('body').scrollTop()>($('.header').height()+$('#about').height()-200)||$('html').scrollTop()>($('.header').height()+$('#about').height()-200)){
			$('#nav').fadeIn(600);
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else if($('body').scrollTop()>($('.header').height()-200)||$('html').scrollTop()>($('.header').height()-200)){
			$('#nav').fadeIn(600);
			$('.about').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
		}else{
			$('#nav').fadeOut();
			$('.about').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.projects').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.contact').css({'text-shadow':'0px 0px 0px','font-size':'17px'});
			$('.top').css({'text-shadow':'7px 0px 5px','font-size':'19px'});
		}
	});

	$('.resume').on('click','a',function(e){
		e.preventDefault();
		console.log('click')
		$('body,html').css('overflow','hidden');	
		$('#resClose').css('display','block');
		$('#modalBlock').css('display','block');
		$('#resShow').css('display','block');	
	});	
	$('#resClose').on('click',function(e){
		e.preventDefault();
		console.log('click')
		$('body,html').css('overflow','auto');
		$('#resClose').css('display','none');	
		$('#modalBlock').css('display','none');
		$('#resShow').css('display','none');	
	});	

});