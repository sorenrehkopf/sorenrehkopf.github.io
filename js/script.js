$(function(){

	
	$('.about').on('click',function(e){
		e.preventDefault();
		if($(window).width() > 1000){
		$('body,html').animate({scrollTop:$('.header').height()-20},300);
		}else{
		$('body,html').animate({scrollTop:$('.header').height()},300);
		}
		$('#mobNav').animate({'right':'-60vh'},300)
	});

	$('.projects').on('click',function(e){
		e.preventDefault();
		if($(window).width() > 1000){
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()-20},300);
		}else{
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()},300);
		}
		$('#mobNav').animate({'right':'-60vh'},300)
	});

	$('.contact').on('click',function(e){
		e.preventDefault();
		if($(window).width() > 1000){
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()+$('#projects').height()-20},300);
		}else{
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()+$('#projects').height()},300);
		}
		$('#mobNav').animate({'right':'-60vh'},300)
	});

	$('#navLogo').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:0},400);
	});
	$('.top').on('click',function(e){
		e.preventDefault();
		$('body,html').animate({scrollTop:0},400);
		$('#mobNav').animate({'right':'-60vh'},300)
	});

	$('#mobNavMenu').on('click',function(e){
		e.preventDefault();
		$('#mobNav').animate({'right':'0px'},200)
	})
	$('#mobNavClose').on('click',function(e){
		e.preventDefault();
		$('#mobNav').animate({'right':'-60vh'},300)
	})

	$(window).on('scroll',function(){
		if($('body').scrollTop()>($('.header').height()+$('#about').height()+$('#projects').height()-200)||$('html').scrollTop()>($('.header').height()+$('#about').height()+$('#projects').height()-200)){
			$('#nav').fadeIn(600);
			$('.about').css({'border-left':'none','font-size':'19px'});
			$('.projects').css({'border-left':'none','font-size':'19px'});
			$('.contact').css({'border-left':'1px solid white','font-size':'19px'});
		}else if($('body').scrollTop()>($('.header').height()+$('#about').height()-200)||$('html').scrollTop()>($('.header').height()+$('#about').height()-200)){
			$('#nav').fadeIn(600);
			$('.about').css({'border-left':'none','font-size':'19px'});
			$('.projects').css({'border-left':'1px solid white','font-size':'19px'});
			$('.contact').css({'border-left':'none','font-size':'19px'});
		}else if($('body').scrollTop()>($('.header').height()-200)||$('html').scrollTop()>($('.header').height()-200)){
			if($('#nav').css('right')=='-300px' && $(window).width() > 1000){
			$('#nav').animate({'right':'30px'},300);
			};
			$('.about').css({'border-left':'1px solid white','font-size':'19px'});
			$('.projects').css({'border-left':'none','font-size':'19px'});
			$('.contact').css({'border-left':'none','font-size':'19px'});
		}else{
			if($('#nav').css('right')=='30px' && $(window).width() > 1000){
			$('#nav').animate({'right':'-300px'},300);
			};
			$('.about').css({'border-left':'none','font-size':'19px'});
			$('.projects').css({'border-left':'none','font-size':'19px'});
			$('.contact').css({'border-left':'none','font-size':'19px'});
		}
	});

	$('.resume').on('click','a',function(e){
		e.preventDefault();
		console.log('click')
		$('body,html').css('overflow','hidden');	
		$('#resClose').css('display','block');
		// $('#resDL').css('display','block');
		$('#modalBlock').css('display','block');
		$('#resShow').css('display','block');	
	});	
	$('#resClose').on('click',function(e){
		e.preventDefault();
		console.log('click')
		$('body,html').css('overflow','auto');
		$('#resClose').css('display','none');
		// $('#resDL').css('display','none');	
		$('#modalBlock').css('display','none');
		$('#resShow').css('display','none');	
	});	

});