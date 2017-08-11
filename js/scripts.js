$(document).ready(init);
var values;

function init(){
	$('select').material_select();
	$('#nextBtn').on('click', pageNext);
	$('#submitBtn').on('click', totalAnswer);
}


function grabAndPushAnswer(){
	answers = $("select option:checked");
	values = $.map(answers ,function(option) {
  		return option.value;
	});
	return values;
};


function pageNext(){
	$('.current').removeClass('current').hide().next().show().addClass('current');
	console.log('values: ', values);
	console.log('function: ', grabAndPushAnswer());
	if ($('.current').hasClass('last')){
		$('#nextBtn').hide();
		$('#submitBtn').show();
	};
};

function totalAnswer(){
	grabAndPushAnswer();
	values = values.map(function(item) {
    return parseInt(item, 10);
	});
	var grandTotal = values.reduce(function(a,b){
	 	return a + b;
	}, 0);
	console.log(grandTotal);
	if(grandTotal <= 4){
		$("#html").css('display', 'block');
	} else if (grandTotal > 5 && grandTotal <= 9){
		$("#javascript").css('display', 'block');
	} else if (grandTotal > 10 && grandTotal <= 15){
		$("#php").css('display', 'block');
	} else {
		$("#c").css('display', 'block');
	}
};

     