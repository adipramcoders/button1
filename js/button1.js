$(document).ready(function(){
	var b2pos="left";
	$(".b2bdr").click(function(){
		if(b2pos=="left")
		{
			$(".b2bdr").css({"transition":"1s","background-color":"#7fff00"});
			$(".b2btn").addClass("btn2move mymove");
			setTimeout(function(){ $(".b2btn").removeClass("btn2move mymove");},100)
			$(".b2btn").css({transform:"translateX(3rem)"});
			b2pos="right";
		}
		else{
			$(".b2btn").css({transform:"translateX(0rem)"});
			$(".b2bdr").css({"transition":"0.3s","background-color":"white"});
			b2pos="left";
		}
				 
	});
});