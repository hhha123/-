//以及吸顶效果
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop>160){
		$(".nav_wrap").css({"position":"fixed","top":0,"z-index":30});
	}else{
        $(".nav_wrap").css({"position":"static"});
	}
})

//点击返回顶部---------------------------------------------------
function backTop(){
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop>500){
			$(".clickOn").css("display","block");
			$(".clickOn").click(function(){
				$("html,body").animate({"scrollTop":0},100);
			})
		}else{
			$(".clickOn").css("display","none");
		}
	})
}
backTop();

 //banner淡入淡出----------------------------------------------
function fadeBan(){
	var timer=null;
	var index=0;
	timer=setInterval(autoPlay,4000);
	function autoPlay(){
		index++;
		if(index==$(".ban img").size()){
			index=0;
		}
		$(".ban img").eq(index).fadeIn(1000)
		                    .siblings() 
		                    .fadeOut(1000);
	}
}
fadeBan();
