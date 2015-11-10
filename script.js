//Add a popover trigger for seats that aren't reserved
$(".seat:not(.na)").popover({
    html: true, 
	title: 'Reserve Your Seat',
	trigger: 'click',
	placement: 'bottom',
	content: function() {
		return $('#seat-form-content').html();
	}
});

//Hide the other popovers when you select another
$('.seat:not(.na)').on('click', function (e) {
    $('.seat:not(.na)').not(this).popover('hide');
});

$(".seat:not(.na)").on("click",function (e){
	$("main").popovers("hide");
})
