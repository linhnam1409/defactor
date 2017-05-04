$(function(){
	/* set min-height for section */
	fnSetMinHeightSection();
	fnScrollSection();
	setTimeout(function(){fnCheckCurrentSection();},1);

	/* tabs */
	fnChangeTabs();
});

function fnSetSectionNav(url){
	var navLength = $("#content .mainCnt .section").length;
	var wrapNav = $("#content .sectionNav ul");
	var navBtn = "";
	for(var i = 0; i<navLength ; i++){
		navBtn += "<li><a href='#"+ url + (i+1) +"'></a></li>";
	}
	wrapNav.html(navBtn);
}

/*function fnClickSectionNav(e){
	$("#content .sectionNav ul li a").removeClass("active");
	$(this).addClass("active");
}*/

function fnScrollSection(){
	$(".section").each(function(i,e){
		var h = "";
		if(i>0){
			h = $(this).outerHeight() + +$(".section").eq(i-1).attr("data-scroll-position");
		} else {
			h = $(this).outerHeight();
		}
		$(this).attr("data-scroll-position",h);
	});
	$(window).on("scroll",function(){
		fnCheckCurrentSection();
	});
}

function fnCheckCurrentSection(){
	var curPosition = $(window).scrollTop();
	var linit = "";
	$(".section").each(function(i,e){
		if(i==0 && curPosition<+$(this).attr("data-scroll-position")){
			$("#content .sectionNav ul li a").removeClass("active");
			$("#content .sectionNav ul li").eq(i).find("a").addClass("active");
			return;
		}
		if(curPosition>=+$(this).attr("data-scroll-position") && curPosition<+$(".section").eq(i+1).attr("data-scroll-position")){
			$("#content .sectionNav ul li a").removeClass("active");
			$("#content .sectionNav ul li").eq(i+1).find("a").addClass("active");
			return;
		}
	});
}


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

function fnSetMinHeightSection(){
	var wh = $(window).height();
	$("#content .mainCnt .section").css({"min-height":wh});
}

/* tabs */
function fnChangeTabs(){
	$(document).on("click",".tab",function(){
		var li = $(".tabs ul li");
		var idx = $(this).parent().index();
		$(".wrapTabCnt .tabCnt").removeClass("active");
		$(".wrapTabCnt .tabCnt").eq(idx).addClass("active");
		$(".tab").removeClass("active");
		li.eq(idx).find(".tab").addClass("active");
	});
}