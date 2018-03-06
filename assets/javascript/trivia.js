$(document).ready(function() {
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clicked = 0;

function score() {
  $(".question").each(function() {
    var submitted = $(this).find('input:checked').val();
    if (submitted == "correct") {
      correct++;
      console.log(correct);
    } else if (submitted == "incorrect") {
        incorrect++;
        console.log(incorrect);
      } else if (submitted == undefined){
        unanswered++;
        console.log(unanswered);
      }
    });
};

$('#start').on('click',function(){
  
    if($('#startpage').css('display')!='none') {
        $('#maincontent').html($('#maincontent').html()).show().siblings('div').hide();
    } else if($('#maincontent').css('display')!='none') {
   $('#startpage').show().siblings('div').hide();
    };
    countdown();
    var number = 30;
    var intervalId;
    function countdown() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
      number--;
      $("#countdown").html("<h2> Time Remaining: " + number + "</h2>");
      if (number === 0 && clicked === 0) {
        $('#endpage').html($('#endpage').html()).show().siblings('div').hide();
        score();
        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
      } if (number === 0 && clicked === 1) {

      }
    } 
   
    $('#submit').on('click',function(){ 
      clicked++;
      console.log("clicked submit");
      $('#endpage').html($('#endpage').html()).show().siblings('div').hide();
      score();
      $("#correct").text("Correct: " + correct);
      $("#incorrect").text("Incorrect: " + incorrect);
      $("#unanswered").text("Unanswered: " + unanswered);
    });
    
        
    });
  });




    
