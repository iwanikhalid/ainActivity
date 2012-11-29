$(document).ready(function() {	

	var answers = ["Berehat", "keluarga", "membaca", "menonton", "tetamu", "berbincang", "selera", "istirehat", "tamu", "penyediaan", "penyimpanan", "Menyimpan", "pembersihan", "penyelenggaraan", "meletak", "Dapur", "Garaj", "berehat", "menyimpan", "Membersih", "mengemas", "tidur", "mandi", "Tandas"];
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

	$("div#notice, .mulaAktiviti, #aktiviti, .notice span#tahniah").hide();	
	var score = getQueryVariable("score");
	if(getQueryVariable("score") == "") { score = 0; }
	$("#score span").html(score);		
	
	function ScoreRight(){ activityScore++; }
	function ScoreWrong(){ activityScore-1; }
	
	$("#mula").click(function() {
		$("#nota, #mula, .arahan").hide();
		$("#aktiviti, .mulaAktiviti").show();
		$(function() {
			$(document).scrollTop( $(".wrapper").offset().top );  
		});		
	});	
	
	$("#score span").html(+score);  

	$("#submit").click(function() {
		$.each($('input'), function(i,v){
			var self = $(this);
			var answersGiven = self.val();
			
			if(answersGiven == answers[i])
			{
				self.addClass("correct");
				ScoreRight();
			}else{
				self.addClass("wrong");
				self.val(answers[i]);
			}
			
			$(".notice span#activityScore").html(+activityScore);
			$("#score span").html(+score+activityScore);
			$(".submit").hide("slow");
			$("div#notice").show('slow');
			$(function() {
				$(document).scrollTop( $(".wrapper").offset().top );  
			});
			var finalScore = +score+activityScore
			$("li.s4").html("<a href='activity4.html?score="+finalScore+"'><span></span> Aktiviti 4</a>");
			
			if(activityScore == 24){ 
				playSuccess();	
				$(".notice span#tahniah").show();			
			}			
		 })
	});	 	
});