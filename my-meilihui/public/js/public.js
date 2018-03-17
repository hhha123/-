//vav导航移入移出
function navMouse(id){
    $(id).mouseenter(function(){
	   var index = $(this).index();
	   if(index>0){
	   	  $(".pop_up_menu").eq(index-1).show();
	   }
	}).mouseleave(function(){
       var index = $(this).index();
       if(index>0){
       	 $(".pop_up_menu").eq(index-1).hide();
       }
	  
	})
}
navMouse(".nav-li");