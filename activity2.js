$(document).ready(function() {	

	var succesSound = document.createElement('audio');
	succesSound.preload = "auto";
	succesSound.controls = true;
	succesSound.src = 'sounds/success.mp3';
	
	function playSuccess(){
		succesSound.play();
	}

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

	$("div#notice").hide();	
	$(".notice span#tahniah").hide();
	var score = getQueryVariable("score");
	$("#score span").html(score);	

	var activityScore = 0;
	
	function ScoreRight(){
		activityScore++; 
	}
	function ScoreWrong(){
		activityScore-1;   
	}

	$(".submit").click(function() {
		
		$.each($('input[type=text]'), function(i,v){
		   var answersGiven = $(this).val();  
		   var answers = ["pengudaraan", "guru", "kad kerja", "kitar semula", "surat khabar", "wayar", "bateri", "berkarat", "diperiksa", "thinner"]; 
			
			if(answersGiven == answers[i])
			{
				$(this).addClass("correct");
				ScoreRight();
			}else{
				$(this).addClass("wrong");
				ScoreWrong();
			}
			$(".notice span#activityScore").html(+activityScore);
			$("#score span").html(+score+activityScore);
		 })	  
		 $(".submit").hide("slow");
		 $("div#notice").show('slow');
		 $(function() {
			$(document).scrollTop( $(".wrapper").offset().top );  
		});
		
		if(activityScore == 10){ 
			playSuccess();	
			$(".notice span#tahniah").show();			
		}

		var finalScore = +score+activityScore
		$("li.s3").html("<a href='activity3.html?score="+finalScore+"'><span></span> Aktiviti 3</a>");
		
		
	});	 
	
});