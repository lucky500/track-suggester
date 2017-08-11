$(document).ready(init);
var values;

function init(){
	$('select').material_select();
	$('#nextBtn').on('click', pageNext);
	$('#submitBtn').on('click', totalAnswer);
}


function grabAndPushAnswer(e){
	answers = $("select option:checked");
	values = $.map(answers ,function(option) {
  		return option.value;
	});
	return values;
	console.log('values: ', values);
};


function pageNext(){
	grabAndPushAnswer();
	$('.current').removeClass('current').hide().next().show().addClass('current');
	if ($('.current').hasClass('last')){
		$('#nextBtn').hide();
		$('#submitBtn').show();
	};
};

function totalAnswer(){
	values = values.map(function(item) {
    return parseInt(item, 10);
	});
	var grandTotal = values.reduce(function(a,b){
	 	return a + b;
	}, 0);
	console.log(grandTotal);
	if(grandTotal <= 4){
		$("#html").css('display', 'block');
	} else if (grandTotal > 5 && grandTotal >= 7){
		$("#javascript").css('display', 'block');
	} else {
		$("#c").css('display', 'block');
	}
};

     