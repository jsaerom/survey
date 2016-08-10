$(document).ready(function(){
  $("#travel-survey form").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var place = $("#place").val();
    var envir = $("input:radio[name=optionsRadios]:checked").val();
    var when = $("input#when").val();
    var color = $("input#color").val();

    event.preventDefault();
  });
});
