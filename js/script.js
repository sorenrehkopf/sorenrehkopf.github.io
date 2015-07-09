$(function(){


var bkgrnd=Math.random();
var gameState=0;
var playerScore=0;
var qText=$('#question')
var transOut=function(elem){
	elem.fadeOut(500);
	elem.addClass('slideOutLeft');
};
var transIn=function(elem,del){
	elem.delay(del).addClass('slideInRight');
	elem.delay(del).fadeIn(1400);
	elem.children().delay(del).animate({width:"60%"},500);
}


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
	qText.text("Great! This simple quiz will help you find out!").delay(2200);
	$('#startbtn').text('The world needs to know...').delay(1000);
	$('#startbtn').fadeOut(2000);
	$('#board').delay(3000).animate({top:'15px',height:'650px'},2000,function(){
		transIn($('#answers1'),0);
		qText.text("First! What is the answer to this question?");
		$('.progress').fadeIn(1500);
	});

});

$('#board').on('click','.btn',function(){
	 if($(this).attr('id')==="ans3"){
		playerScore+=5;
		qText.text("Hmmmm interesting first choice...");
		transOut($('#answers1'));
		transIn($('#answers2'),800);
	}else if($(this).attr('id')==="ans8"){
		playerScore+=5;
		qText.text("Hmmmm interesting second choice...");
		transOut($('#answers2'));
		transIn($('#answers3'),800);
	}else if($(this).attr('id')==="ans13"){
		playerScore+=5;
		qText.text("Hmmmm interesting third choice...");
		transOut($('#answers3'));
		transIn($('#answers4'),800);
	}else if($(this).attr('id')==="ans18"){
		playerScore+=5;
		qText.text("Hmmmm interesting fourth choice...");
		transOut($('#answers4'));
		transIn($('#answers5'),800);
	}else if($(this).attr('id')==="ans23"){
		playerScore+=5;
		qText.text("Hmmmm interesting fifth choice...");
		transOut($('#answers5'));
		transIn($('#answers6'),800);
	}else if($(this).attr('id')==="ans28"){
	playerScore+=5;
	qText.text(playerScore)
	transOut($('#answers6'));
	};

});

});