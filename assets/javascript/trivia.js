$( document ).ready(function() {
    

$('#start').on('click',function(){
  
    if($('#startpage').css('display')!='none') {
        $('#maincontent').html($('#maincontent').html()).show().siblings('div').hide();
    } else if($('#maincontent').css('display')!='none') {
   $('#startpage').show().siblings('div').hide();
    }
    countdown();
    var number = 30;
    var intervalId;
    function countdown() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 30000);
    }
    function decrement() {
      number--;
      $("#countdown").html("<h2> Time Remaining: " + number + "</h2>");
      if (number === 0) {
        $('#endpage').html($('#endpage').html()).show().siblings('div').hide();
      }
    }

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    $('#submit').on('click',function(){ 
        $('#endpage').html($('#endpage').html()).show().siblings('div').hide();
        $("#question").each(function() {
          var submitted = $('input[name=answer]:checked').val();
          if (submitted == "correct") {
            correct++;
            console.log(correct);
          } else if (submitted == "incorrect") {
              incorrect++;
              console.log(incorrect);
            } else {
              unanswered++;
              console.log(unanswered);
            }
            $("#correct").text("Correct: " + correct);
            $("#incorrect").text("Incorrect: " + incorrect);
            $("#unanswered").text("Unanswered: " + unanswered);
          });
        
    });
  });




    });
