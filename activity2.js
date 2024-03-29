$(document).ready(function() {	

window.onload = init;
 
function init() {
  disableDraggingFor(document.getElementById("draggingDisabled"));
}
 
function disableDraggingFor(element) {
  // this works for FireFox and WebKit in future according to http://help.dottoro.com/lhqsqbtn.php
  element.draggable = false;
  // this works for older web layout engines
  element.onmousedown = function(event) {
                event.preventDefault();
                return false;
              };
}

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
	if(getQueryVariable("score") == "") { score = 0; }
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
		   var answers = ["perlindungan", "keselamatan", "sosial", "kekisi", "matahari", "lampu", "tahan lasak", "pencuci", "Pembersihan harian", "kaca", "Ruang dapur", "lampu meja"];
			
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
		
		if(activityScore == 12){ 
			playSuccess();	
			$(".notice span#tahniah").show();			
		}

		var finalScore = +score+activityScore
		$("li.s3").html("<a href='activity3.html?score="+finalScore+"'><span></span> Aktiviti 3</a>");
		
		
	});	 
	
});