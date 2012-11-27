$(document).ready(function() {	

	$("div#notice").hide();	
	var score = 0;
	var sec = 30;
	var timer = setInterval(function() { 
		$('p.timer span').text(sec--);
		if (sec == -1) {
			alert('Masa yang diberikan sudah tamat! Sila mula kembali!');
			location.reload();
			clearInterval(timer);
		} 
		if(sec >= 10 && score == 4){
			var extraScore = 10;
			var finalScore = +score+extraScore;
			alert("Anda dapat menyiapkan aktiviti lebih awal dari masa yang ditetapkan! 10 markah lebih diberikan pada anda. Markah terkini: " +finalScore);
			clearInterval(timer);
			$("#score span").html(+finalScore);	
			$("li.s2").html("<a href='activity2.html?score="+finalScore+"'><span></span> Aktiviti 2</a>");
			$("div#notice").show('slow');
		}	
		if(sec <= 10 && score == 4){
			var extraScore = -1;
			var finalScore = +score+extraScore;
			alert("Anda hampir tidak dapat menyiapkan aktiviti dalam masa yang ditetapkan. 1 markah ditolak. Markah terkini: " +finalScore);
			clearInterval(timer);
			$("#score span").html(+finalScore);	
			$("li.s2").html("<a href='activity2.html?score="+finalScore+"'><span></span> Aktiviti 2</a>");
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
		$( "#bentukL, #bentukU, #bentukH, #bentukI" ).draggable({
			revert: 'invalid',
			scroll: false
			//stack: ".boxArt"
		});
		
		$( "#bentukLDrop" ).droppable({
			accept: "#bentukL",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 38;
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
		$( "#bentukUDrop" ).droppable({
			accept: "#bentukU",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 38;
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
		$( "#bentukIDrop" ).droppable({
			accept: "#bentukI",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 38;
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
		$( "#bentukHDrop" ).droppable({
			accept: "#bentukH",
			hoverClass: "",
			drop: function( event, ui ) {
				var drop_p = $(this).offset();
				var drag_p = ui.draggable.offset();
				var left_end = drop_p.left - drag_p.left + 1;
				var top_end = drop_p.top - drag_p.top + 38;
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