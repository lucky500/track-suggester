$(document).ready(init);
var answersTotal = [];
var answers;
var answers1;
var answer;

function init(){
	$('select').material_select();
	$('#nextBtn').on('click', grabAnswer);
	// $('#nextBtn').on('click', grabAnswer);
}

// function grabAnswer(){
// 	var questions = ["1"];
// 	answer1 = questions.forEach(function(q){
// 		// answers = $(".select" +  q + " option:selected").val();
// 		console.log('answer from for each method: ', answers);
// 		var testanswer = answersTotal.push(answers1);
// 		console.log('testanswer: ', testanswer);
// 	});
// 	console.log('foreach method: ', answer1);
// 	console.log('answers: ', answers);
// 	console.log(answersTotal);
// }

function grabAnswer(){
	$('#nextBtn').on('click', function(){
		answers = $("select option:selected");

		var values = $.map(answers ,function(option) {
    	return option.value;
		});
		console.log('values: ', values);

		answersTotal.push(answers);
		console.log(answersTotal);
		$('.current').removeClass('current').hide().next().show().addClass('current');
		if ($('.current').hasClass('last')){
			$('#nextBtn').hide();
			$('#submitBtn').show();
		};
	});
}




// var options = $('#selectBox option');

// var values = $.map(options ,function(option) {
//     return option.value;
// });


// $('.btnSubmit').click(function(e){
// 	e.preventDefault();
// 	console.log('submitted:');
// });
     