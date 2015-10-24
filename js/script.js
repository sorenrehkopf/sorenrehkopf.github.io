$(function(){

	$('.scroll').css({'height':$('.pScroll').height()/2,'margin-top':$('.pScroll').height()/6});

	
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
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()-10},300);
		}else{
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()},300);
		}
		$('#mobNav').animate({'right':'-60vh'},300)
	});

	$('.contact').on('click',function(e){
		e.preventDefault();
		if($(window).width() > 1000){
		$('body,html').animate({scrollTop:$('.header').height()+$('#about').height()+$('#projects').height()},300);
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
			$('#nav .about').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .projects').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .contact').css({'background-color':'rgba(20,20,20,.5)'});
		}else if($('body').scrollTop()>($('.header').height()+$('#about').height()-200)||$('html').scrollTop()>($('.header').height()+$('#about').height()-200)){
			$('#nav').fadeIn(600);
			$('#nav .about').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .projects').css({'background-color':'rgba(20,20,20,.5)'});
			$('#nav .contact').css({'background-color':'rgba(150,150,150,0)'});
		}else if($('body').scrollTop()>($('.header').height()-200)||$('html').scrollTop()>($('.header').height()-200)){
			if($('#nav').css('right')=='-300px' && $(window).width() > 1000){
			$('#nav').animate({'right':'30px'},300);
			};
			$('#nav .about').css({'background-color':'rgba(20,20,20,.5)'});
			$('#nav .projects').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .contact').css({'background-color':'rgba(150,150,150,0)'});
		}else{
			if($('#nav').css('right')=='30px' && $(window).width() > 1000){
			$('#nav').animate({'right':'-300px'},300);
			};
			$('#nav .about').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .projects').css({'background-color':'rgba(150,150,150,0)'});
			$('#nav .contact').css({'background-color':'rgba(150,150,150,0)'});
		}
	});
	var scrollYes = 0;
	$('#lscroll').on('mouseover',function(){
		var scroll = $('.pCont').scrollLeft();
		$(this).css('background-color','rgba(230,230,230,.6)');
		scrollYes = setInterval(function(){
			$('.pCont').animate({'scrollLeft':scroll-=100},300,'linear');	
		},300);
	});
	$('#lscroll').on('mouseout',function(){
		$(this).css('background-color','rgba(200,200,200,.4)');
		clearInterval(scrollYes);
	});
	$('#rscroll').on('mouseover',function(){
		var scroll = $('.pCont').scrollLeft();
		$(this).css('background-color','rgba(230,230,230,.6)');
		scrollYes = setInterval(function(){
			$('.pCont').animate({'scrollLeft':scroll+=100},300,'linear');	
		},300);
	});
	$('#rscroll').on('mouseout',function(){
		$(this).css('background-color','rgba(200,200,200,.4)');
		clearInterval(scrollYes);
	});

	$('#rscroll').on('click',function(){
		clearInterval(scrollYes);
		$('.pCont').animate({'scrollLeft':$('.pCont').width()},700);
		$(this).animate({'background-color':'rgba(200,200,200,0)'},500);
		$('#lscroll').animate({'background-color':'rgba(200,200,200,.4)'},500);
	});

	$('#lscroll').on('click',function(){
		clearInterval(scrollYes);
		$('.pCont').animate({'scrollLeft':0},700);
		$(this).animate({'background-color':'rgba(200,200,200,0)'},500);
		$('#rscroll').animate({'background-color':'rgba(200,200,200,.4)'},500);
	});

	$('.resume').on('click','a',function(e){
		e.preventDefault();
		$('body,html').css('overflow','hidden');	
		$('#resClose').css('display','block');
		// $('#resDL').css('display','block');
		$('#modalBlock').css('display','block');
		$('#resShow').css('display','block');	
	});	
	$('#resClose').on('click',function(e){
		e.preventDefault();
		$('body,html').css('overflow','auto');
		$('#resClose').css('display','none');
		// $('#resDL').css('display','none');	
		$('#modalBlock').css('display','none');
		$('#resShow').css('display','none');	
	});	

});