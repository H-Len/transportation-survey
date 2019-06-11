$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("#rec-responses").show()
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTransportationMode = $(this).val();
      $("#work-responses").append(workTransportationMode + "<br>");
    });
    $("input:checkbox[name=recreational-transit]:checked").each(function() {
      var recTransitMode = $(this).val();
      $("#rec-responses").append(recTransitMode + "<br>");

    });

    $("#transportation_survey").hide();
  });
});
