$(function(){


var bkgrnd=Math.random();
var gameState=0;
var playerScore=0;
var qText=$('#question')

if(bkgrnd>=.8){
	$('body').addClass('bkgrnd1');
// }else if(bkgrnd>=.6){
// 	$('body').addClass('bkgrnd2');
}else if(bkgrnd>=.4){
	$('body').addClass('bkgrnd3');
}else if(bkgrnd>=.2){
	$('body').addClass('bkgrnd4');
}else if(bkgrnd>=.0){
	$('body').addClass('bkgrnd5');
}



$('#startbtn').on('click',function(e){
	e.preventDefault();
	playerScore=0;
	qText.text("Great! This simple quiz will help you find out!").delay(3000);
	$('#startbtn').text('The world needs to know...').delay(2000);
	$('#startbtn').fadeOut(2000);
	$('#board').delay(3000).animate({top:'15px',height:'650px'},2000,function(){
		$('#answers1').addClass('slideInRight');
		$('#answers1').fadeIn(1400);
		$('#answers1').children().animate({width:"60%"},1000,function(){
			qText.text("First! What is the answer to this question?");
			$('.progress').fadeIn(1500);
			// gameState ++;
		});
	});

});

});