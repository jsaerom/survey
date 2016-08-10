

$(document).ready(function(){
  $("#travel-survey form").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var place = $("#place").val();
    var envir = $("input:radio[name=optionsRadios]:checked").val();
    var when = $("input#when").val();
    var color = $("input#color").val();

    $("#kenya").hide();
    $("#thailand").hide();
    $("#france").hide();
    $("#stay-home").hide();

    if (place === "Africa" && envir === "Mountains") {
      $("#kenya").show();
    } else if (place === "Asia" && envir === "Beach") {
      $("#thailand").show();
    } else if (place === "Europe" && envir === "City") {
      $("#france").show();
    } else {
      $("#stay-home").show();
    };


    event.preventDefault();
  });
});
