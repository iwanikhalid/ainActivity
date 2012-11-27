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

	$("img.iron, img.paku, img.periuk, img.pisautv, img.pisaushelf, img.cerek, img.barangatascarpet, img.kuali, img.sudip, img.mesinjahit").click(function() {
		$(this).hide('slow');
		ScoreRight();
		$(".notice span#activityScore").html(+activityScore);
		$("#score span").html(+score+activityScore);
		
		if(activityScore == 10){ 
			playSuccess();			
			$("div#notice").show('slow');
		}

		var finalScore = +score+activityScore
		$("li.s6").html("<a href='activity6.html?score="+finalScore+"'><span></span> Aktiviti 6</a>");
		
	});
	
});