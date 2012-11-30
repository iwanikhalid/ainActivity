$(document).ready(function() {	
	
// Essentials
	var activityScore = 0;
	var succesSound = document.createElement('audio');
	succesSound.preload = "auto";
	succesSound.controls = true;
	succesSound.src = 'sounds/success.mp3';
	
	function playSuccess(){ succesSound.play(); }

	function getQueryVariable(variable)
	{
		   var query = window.location.search.substring(1);
		   var vars = query.split("&");
		   for (var i=0;i<vars.length;i++) {
				   var pair = vars[i].split("=");
				   if(pair[0] == variable){return pair[1];}
		   }
		   return(false);
	}

	$("div#notice, .notice span#tahniah, .bluebox").hide();	
	var score = getQueryVariable("score");
	if(getQueryVariable("score") == "") { score = 0; }
	$("#score span").html(score);	
	
	function ScoreRight(){ activityScore++;  }
	function ScoreWrong(){ activityScore-1; }

// Game only	
	
	$("input#submit").click(function() {

		if($("input[name=q1]:checked").attr("id") == "q1a"){
			$("input[name=q1]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q1]:checked").parent('label').addClass('wrong');
		}
		
		if($("input[name=q2]:checked").attr("id") == "q2d"){
			$("input[name=q2]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q2]:checked").parent('label').addClass('wrong');
		}	

		if($("input[name=q3]:checked").attr("id") == "q3c"){
			$("input[name=q3]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q3]:checked").parent('label').addClass('wrong');
		}		
	
		if($("input[name=q4]:checked").attr("id") == "q4d"){
			$("input[name=q4]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q4]:checked").parent('label').addClass('wrong');
		}	

		if($("input[name=q5]:checked").attr("id") == "q5a"){
			$("input[name=q5]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q5]:checked").parent('label').addClass('wrong');
		}	

		if($("input[name=q6]:checked").attr("id") == "q6b"){
			$("input[name=q6]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q6]:checked").parent('label').addClass('wrong');
		}	
	
		if($("input[name=q7]:checked").attr("id") == "q7c"){
			$("input[name=q7]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q7]:checked").parent('label').addClass('wrong');
		}		
	
		if($("input[name=q8]:checked").attr("id") == "q8b"){
			ScoreRight();
		}else{
			
		}	

		if($("input[name=q9]:checked").attr("id") == "q9a"){
			$("input[name=q9]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q9]:checked").parent('label').addClass('wrong');
		}	
	
		if($("input[name=q10]:checked").attr("id") == "q10b"){
			$("input[name=q10]:checked").parent('label').addClass('correct');
			ScoreRight();
		}else{
			$("input[name=q10]:checked").parent('label').addClass('wrong');
		}
	
		// Ending game
		$(".notice span#activityScore").html(+activityScore);
		$(".submit").hide("slow");
		$("div#notice, .bluebox").show('slow');
		$(function() {
			$(document).scrollTop( $(".wrapper").offset().top );  
		});
		var finalScore = +score+activityScore;
		
		if(activityScore == 10){ 
			playSuccess();	
			$(".notice span#tahniah").show();		
		}	

		$("p#score").html("<strong>Jumlah markah keseluruhan <span>"+finalScore+"</span></strong>");
		$("li.s1").html("<a href='index.html'><span></span> Aktiviti 1</a>");
		$("li.s2").html("<a href='activity2.html'><span></span> Aktiviti 2</a>");
		$("li.s3").html("<a href='activity3.html'><span></span> Aktiviti 3</a>");
		$("li.s4").html("<a href='activity4.html'><span></span> Aktiviti 4</a>");
		$("li.s5").html("<a href='activity5.html'><span></span> Aktiviti 5</a>");
		$("li.s6").html("<a href='activity6.html'><span></span> Aktiviti 6</a>");
	
	});	
	
});