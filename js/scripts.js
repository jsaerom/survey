

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
    $("#switzerland").hide();
    $("#nepal").hide();
    $("#capetown").hide();

    if (place === "Africa" && envir === "Mountains") {
      $("#kenya").show();
      
    } else if (place === "Asia" && envir === "Beach") {
      $("#thailand").show();
    } else if (place === "Europe" && envir === "City") {
      $("#france").show();
    } else if (place === "Asia" && envir === "Mountains") {
      $("#nepal").show();
    } else if (place === "Europe" && envir === "Mountains") {
      $("#switzerland").show();
    } else if (place === "Africa" && envir === "City") {
      $("#capetown").show();
    } else {
      $("#stay-home").show();
    };

    $(".jumbotron").css("background", "color");

    event.preventDefault();
  });
});
