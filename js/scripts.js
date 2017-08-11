$(document).ready(init);

function init(){
	$('select').material_select();
	// $('.btn').on('click', grabAnswer);
}

function grabAnswer(){
	var questions = ["1", "2", "3", "4", "5"];
	questions.forEach(function(q){
		var answers = $(".select" +  q + " option:selected").val();
	});
}

function nextQuestion(){
	grabAnswer();
	$('.btn').on('click', function(){
		$('.current').removeClass('current').hide().next().show().addClass('current');
	})
}

$('.btnSubmit').click(function(e){
	e.preventDefault();
	console.log('submitted:');
});
     