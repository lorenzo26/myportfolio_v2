var link = window.location.href.split("#")[1]
if(link != undefined){
	$(document).find(".current").removeClass("current");
	$(document).find("#"+link).addClass("current");
}
$(document).on("click",".toggle",function(){
	$(".wrapper aside").stop().toggle(500);
});
$(document).on("click",".nav_bar .drop > a", function(e){
	event.preventDefault();
	var page= $(this).attr("data-id");
	$(document).find(".current").removeClass("current")
	$(document).find("#"+page).addClass("current")
	$(document).find(".current").attr("class","fade-page current")
	if (page == "about") {
		setTimeout(function(){
			$(document).find("#about").scrollTop(0);
		}, 2);
	}
})

$(document).on("click",".page-scroll", function(e){
	event.preventDefault();
	$(document).find(".current").removeClass("current")
	$(document).find("#about").addClass("current")
	$(document).find(".current").attr("class","fade-page current")
})
