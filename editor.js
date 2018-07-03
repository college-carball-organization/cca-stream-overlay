var blueName = $("#blueName");
var blueP1 = $("blueP1");
var blueP2 = $("blueP2");
var blueP3 = $("blueP3");
var blueP4 = $("blueP4");
var blueP5 = $("blueP5");

$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
  console.log(thrownError);
})

$(document).ready(function() {
  //http://prod.collegecarball.net/testing/data.json
  $.getJSON("data.json", function(data) {
    viewModel.caster1(data.caster1);
    viewModel.caster2(data.caster2);
    viewModel.blueName(data.blueName);
    viewModel.blueP1(data.blueP1);
    viewModel.blueP2(data.blueP2);
    viewModel.blueP3(data.blueP3);
    viewModel.blueP4(data.blueP4);
    viewModel.blueP5(data.blueP5);
    viewModel.orangeName(data.orangeName);
    viewModel.orangeP1(data.orangeP1);
    viewModel.orangeP2(data.orangeP2);
    viewModel.orangeP3(data.orangeP3);
    viewModel.orangeP4(data.orangeP4);
    viewModel.orangeP5(data.orangeP5);

  })

  $("#submitButton").click(function() {
    var jsonData = ko.toJSON(viewModel);
    console.log(jsonData);

    // $.ajax({
    //     type:"POST",
    //     dataType: "html",
    //     async: false,
    //     url: "save_json.php",
    //     data: {data: jsonData},
    //     success: function() {alert("Saved Successfully!"); },
    //     error: function(request, status, error) {
    //       console.log(error);
    //       alert("ERROR!");
    //     },
    //     failure: function(something) { alert("Error!"); }
    // }).done(function() {
    //   alert("Done AJAX");
    // });

    // $.post("data.json", jsonData, function(returnedData) {
    //   console.log("Sucessfully saved JSON data");
    // })
    //   .done(function() {
    //     alert("second success");
    //
    //     console.log(jsonData);
    //   }).fail(function(jqXHR, textStatus, errorThrown) {
    //     alert("Error: " + jqXHR.responseText);
    //   })
  });

  ko.applyBindings(viewModel);
});

var viewModel = {
   // Default values for the fields?
   caster1: ko.observable("Caster 1"),
   caster2: ko.observable("Caster 2"),
   blueName: ko.observable("Blue Team Name"),
   blueP1: ko.observable("Blue Player 1"),
   blueP2: ko.observable("Blue Player 2"),
   blueP3: ko.observable("Blue Player 3"),
   blueP4: ko.observable("Blue Player 4"),
   blueP5: ko.observable("Blue Player 5"),
   orangeName: ko.observable("Orange Team Name"),
   orangeP1: ko.observable("Orange Player 1"),
   orangeP2: ko.observable("Orange Player 2"),
   orangeP3: ko.observable("Orange Player 3"),
   orangeP4: ko.observable("Orange Player 4"),
   orangeP5: ko.observable("Orange Player 5"),
}
