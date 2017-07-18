
$(function(){
	$('#btn_smenu').click(function(){
				$('#smenu').slideToggle();
	});
	$(window).resize(function(){
		var tw = $('#contents').width();
		if(640 < tw) {
			$('#smenu').css('display','none');
		}
	});
});