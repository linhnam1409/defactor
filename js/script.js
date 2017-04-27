$(function(){
	var navLength = $("#content .mainCnt .section").length;
	var wrapNav = $("#content .sectionNav ul");
	var navBtn = "";
	for(var i = 1; i<navLength ; i++){
		navBtn += "<li><a href='#'></a></li>";
	}
	wrapNav.html(navBtn);
});

function fnShowSubNav(e){
	var isActive = false;
	if ($(e).parent().hasClass("active")){
		isActive = true;
	}
	$(window).on("mouseup",function(){
		if($(".subNav").parent().hasClass("active")){
			$(".subNav").parent().removeClass("active");
		}
	});
	$(".subNav").parent().removeClass("active");
	if (!isActive) {
		$(e).parent().addClass("active");
	}
}