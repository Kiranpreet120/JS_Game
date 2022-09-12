var count=0;
var score=0;
var tickAudio = new Audio('./audio/tick.mp3');
var bombAudio = new Audio('./audio/bomb.mp3');
var tadaAudio = new Audio('./audio/tada.mp3');
bombAudio.volume = 0.3;

function welcome_game() 
{ 
$("#gameholder").hide();
$("#clear").hide();
$("#num").hide();
$("#welcome").on("click", function() 
{
	tickAudio.play();
    $(this).fadeOut(500,function()
	{
	$("#gameholder").show();
	$("#clear").show();
	$("#num").show();
    });
});
}
function random()
{	
penguins = ["./images/penguin_1.png",
            "./images/penguin_2.png",
            "./images/penguin_3.png", 
            "./images/penguin_4.png", 
            "./images/penguin_5.png",
			"./images/penguin_6.png",
            "./images/penguin_7.png", 
			"./images/penguin_8.png", 
			"./images/yeti.png"];
var i = 0,
j = 0,
temp = null;
for (i = penguins.length - 1; i > 0; i -= 1) 
  {
     j = Math.floor(Math.random() * (i ));
     console.log(j);
     temp = penguins[i];
     penguins[i] = penguins[j];
     penguins[j] = temp;
     welcome_game();
   }
}
function view_image(i)
{
   if(penguins[i]!="./images/yeti.png")
    {
      tickAudio.play();
	  score += 10;
      $(".score").text("Your Score:" +score);
      highscore = score;
      $(".score1").text("High Score:" +highscore);
	   document.getElementById("penguin" + i).src = penguins[i];	
    }
   else
    {  
      bombAudio.play();
      yetiscore = 0;
      console.log(yetiscore);
      $(".score").text("Your Score:" +yetiscore );
      document.getElementById("penguin" + i).src = penguins[i];
	  $("#winLoss").text("Yaaaarrrr!");
	  $(".popup-image").attr("src", "./images/yeti.png");
      $("#goodNews").text("Game over!!!");
      $("#winLoss").css( "color", "white" );
      $("#goodNews").css( "color", "white" );
      $(".popup-overlay, .popup-content").addClass("active");
      if(count!=8)
      setTimeout(myFunction, 20000);
      else
       {  
	     tadaAudio.play();
	     $("#winLoss").text("Congratulations!");
	     $(".popup-image").attr("src", "./images/yeti.png");
         $("#goodNews").text("You Won the game");
         $("#winLoss").css( "color", "white" );
	     $("#goodNews").css( "color", "white" );
         $(".popup-overlay, .popup-content").addClass("active");
	     $("#clear").show();
	     $("#num").show();
         fullscore=100;
         $(".score").text("Your Score:" +fullscore);
	     console.log(fullscore);
	     high_score=100;
	     console.log(high_score);
         $(".score1").text("High Score:" +high_score);
         setTimeout(myscore, 20000);
      }
   }
count++;
}
function myscore() 
{ 	
window.location.reload();
}
function myFunction() 
{ 	
window.location.reload();
}
$(document).ready(function(){
	$("#clear").on("click", function() 
    {
       window.location.reload();
    })
	$("#clear1").on("click", function() 
    {

       window.location.reload();
    })
});