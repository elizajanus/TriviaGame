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

    var correct;
    var incorrect;
    var unanswered;
    $('#submit').on('click',function(){ 
        $('#endpage').html($('#endpage').html()).show().siblings('div').hide();
      
    });





    });
});