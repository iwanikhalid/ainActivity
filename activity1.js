$(document).ready(function() {	

	$("div#notice").hide();	
	var score = 0;
	var sec = 30;
	var timer = setInterval(function() { 
		$('p.timer span').text(sec--);
		if (sec == -1) {
			alert('Masa sudah tamat! Sila mula kembali!');
			location.reload();
			clearInterval(timer);
		} 
		if(sec >= 10 && score == 4){
			var extraScore = 10;
			var finalScore = +score+extraScore;
			alert("You made it before the time ends! Extra 10 points for you! Current score:" +finalScore);
			clearInterval(timer);
			$("#score span").html(+finalScore);	
			$("li.s2").html("<a href='activity2.html'><span></span> Aktiviti 2</a>");
			$("div#notice").show('slow');
		}	
		if(sec <= 10 && score == 4){
			var extraScore = -1;
			var finalScore = +score+extraScore;
			alert("Time almost ran out! Minus 1 point for you! Current score:" +finalScore);
			clearInterval(timer);
			$("#score span").html(+finalScore);	
			$("li.s2").html("<a href='activity2.html'><span></span> Aktiviti 2</a>");
			$("div#notice").show('slow');
		}			
	}, 1000);	
		
	var succesSound = document.createElement('audio');
	succesSound.preload = "auto";
	succesSound.controls = true;
	succesSound.src = 'sounds/success.mp3';
	
	function playSuccess(){
		succesSound.play();
		succesSound.currentTime=0;
	}
	
	function showScore(){
		score++;
		$("#score span").html(+score);	
	}
	
	$(function() {
		$( "#benang, #paku, #tukul, #gergaji, #paku" ).draggable({
			revert: 'invalid',
			scroll: false
			//stack: ".boxArt"
		});
		
		$( "#pakuDrop" ).droppable({
			accept: "#paku",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 1;
				ui.draggable.animate({
					top: '+=' + top_end,
					left: '+=' + left_end
				});			
				$( this )
					.addClass( "ui-state-highlight" )
					.find( "#pakuDrop p" )
						.html( "Betul!" );
					playSuccess();	
					showScore();
			}
		});
		$( "#tukulDrop" ).droppable({
			accept: "#tukul",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 1;
				ui.draggable.animate({
					top: '+=' + top_end,
					left: '+=' + left_end
				});			
				$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
						.html( "Betul!" );
					playSuccess();
					showScore();
			}
		});		
		$( "#gergajiDrop" ).droppable({
			accept: "#gergaji",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 1;
				ui.draggable.animate({
					top: '+=' + top_end,
					left: '+=' + left_end
				});			
				$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
						.html( "Betul!" );
					playSuccess();
					showScore();
			}
		});
		$( "#benangDrop" ).droppable({
			accept: "#benang",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 1;
				ui.draggable.animate({
					top: '+=' + top_end,
					left: '+=' + left_end
				});			
				$( this )
					.addClass( "ui-state-highlight" )
					.find( "p" )
						.html( "Betul!" );
					playSuccess();
					showScore();
			}
		});			
	});
});