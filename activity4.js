/*
1- Initiate the boards with N images. Each image has a corresponding paired image.
2- Shuffle Image Location.
3- When User Clicks One Image
  3.1- The image opened before the previous image will be closed
  3.2- Will check to see if the new image is a match with the opened image. If it is, grey out both images.
4- When all of these are completed, show results.
*/

var boxopened = "";
var imgopened = "";
var imgopened2 = "";
var count = 0;
var found = 0;
var activityScore = 0;	


function randomFromTo(from, to){
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function shuffle() {
  var children = $("#boxcard").children();
  var child = $("#boxcard div:first-child");
  var array_img = [];
  
  for (i=0; i<children.length; i++) {
    array_img[i] = $("#"+child.attr("id")+" img").attr("src");
    child = child.next();
  }
  
  child = $("#boxcard div:first-child");
  
  for (z=0; z<children.length; z++) {
    randIndex = randomFromTo(0, array_img.length - 1);
    
    // set new image
    $("#"+child.attr("id")+" img").attr("src", array_img[randIndex]);
    array_img.splice(randIndex, 1);
    
    child = child.next();
  }
}

function initImg(pair) {
  var i = 1;
  var pairCount = Object.keys(pair).length;
  
  $.each(pair, function(key, val) {
    var j = parseInt(i, 10) + parseInt(pairCount, 10);

    var tempImg = $('<img>').attr('src', key);
    var temp = $('<div>').attr('id', 'card'+i).append(tempImg);
    $('#boxcard').append(temp);
    tempImg = $('<img>').attr('src', val);
    temp = $('<div>').attr('id', 'card'+j).append(tempImg);
    $('#boxcard').append(temp);
    i++;
  });
  
}

$(document).ready(function() {


	var succesSound = document.createElement('audio');
	var failSound = document.createElement('audio');
	succesSound.preload = "auto";
	succesSound.controls = true;
	failSound.preload = "auto";
	failSound.controls = true;
	succesSound.src = 'sounds/success.mp3';
	failSound.src = 'sounds/fail.mp3';
	
	function playSuccess(){
		succesSound.play();
		succesSound.currentTime=0;
	}
	function playFail(){
		failSound.play();
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
	
/*
Here are the settings you can adjust:
1- Put the image paths in pair (one for image, and one for text) in the following format: 'image_file_path':'text_image_path'. So if you put the files in images folder and the file name is img1.jpg, then the path will be 'images/img1.jpg'
2- All the adjustable text are in msg and link
*/
  var pair = {
    'images/activity4/dapur.jpg': 		'images/activity4/geng/dapur.jpg',
    'images/activity4/ruangtamu.jpg': 	'images/activity4/geng/ruangtamu.jpg',
    'images/activity4/biliktidur.jpg': 	'images/activity4/geng/biliktidur.jpg',
    'images/activity4/bathroom.jpg': 	'images/activity4/geng/bathroom.jpg',
    'images/activity4/storeroom.jpg': 	'images/activity4/geng/storeroom.jpg',
    'images/activity4/garage.jpg': 		'images/activity4/geng/garage.jpg'
  };
  msg = '<span id="msg">Tahniah! Anda berjaya menyiapkan semua dalam </span>';
  var link;

  initImg(pair);
  $("img").hide();
  $("#boxcard div").click(openCard);
  shuffle();
  
  function openCard() {
    
	

	
	
	function getFileName(path) {
	return path.match(/[-_\w]+[.][\w]+$/i)[0];
	}
	
    id = $(this).attr("id");
    
    if ($("#"+id+" img").is(":hidden")) {
      $("#boxcard div").unbind("click", openCard);
      
      $("#"+id+" img").slideDown('fast');
      
      if (imgopened === "") {
        boxopened = id;
        imgopened2 = $("#"+id+" img").attr("src");
		imgopened = getFileName(imgopened2)
        setTimeout(function() {
          $("#boxcard div").bind("click", openCard);
        }, 300);
      } else {
        currentopened2 = $("#"+id+" img").attr("src");
		currentopened = getFileName(currentopened2)
        if (imgopened != currentopened) {
          // close again
          setTimeout(function() {
            $("#"+id+" img").slideUp('fast');
            $("#"+boxopened+" img").slideUp('fast');
			playFail();
            boxopened = "";
            imgopened = "";
          }, 400);
        } else {
          // found
          $("#"+id+"").addClass("success");
          $("#"+boxopened+"").addClass("success");
		  $("#"+boxopened+" img").addClass("opacity");
		   $("#"+id+" img").addClass("opacity");
		  playSuccess();
          found++;
          boxopened = "";
          imgopened = "";
        }
        
        setTimeout(function() {
          $("#boxcard div").bind("click", openCard);
        }, 400);
      }
      
      
      count++;
      $("#count").html("" + count);
      
      if (found == Object.keys(pair).length) {
        $("span.link").prepend(msg);
        console.log(link);
        $("#boxbutton").append(link);
		$("div#notice").show('slow');
		$(function() {
			$(document).scrollTop( $(".wrapper").offset().top );  
		});
		if(count <= 25) { activityScore = 100; }
		if(count >= 25) { activityScore = 50; }
		if(count >= 30) { activityScore = 10; }
		if(count >= 40) { activityScore = 0; alert("Maaf! Anda membuat terlalu banyak klik. Tiada markah untuk anda!"); }
		
		$(".notice span#activityScore").html(+activityScore);
		$("#score span").html(+score+activityScore);		
		var finalScore = +score+activityScore;
		$("li.s5").html("<a href='activity5.html?score="+finalScore+"'><span></span> Aktiviti 5</a>");
					
		
      }
    }
  }
});
