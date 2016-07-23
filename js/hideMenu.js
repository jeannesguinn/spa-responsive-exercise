$(document).ready(function(){
  $(function(){
    $('#showPhoneNav').click(function(){
      $('#myNav').slideToggle('normal', function(){ //shows nav area
        if ($('#myNav').is(':visible')){
          $('#showPhoneNav').text('Hide Navigation');
        } else {
          $('#showPhoneNav').text('Show Navigation');
        } //end of if
      });//end of slideToggle
    });//end of myNav
  });//end of showPhoneNav
}); //end of document ready
