var blueName = $("#blueName");
var blueP1 = $("blueP1");
var blueP2 = $("blueP2");
var blueP3 = $("blueP3");
var blueP4 = $("blueP4");
var blueP5 = $("blueP5");

$(document).ready(function() {
  $.getJSON("http://prod.collegecarball.net/data.json", function(data) {
    viewModel.caster1(data.caster1.name);
    viewModel.caster2(data.caster2.name);
    viewModel.blueName(data.blueName.name);
    viewModel.blueP1(data.blueP1.name);
    viewModel.blueP2(data.blueP2.name);
    viewModel.blueP3(data.blueP3.name);
    viewModel.blueP4(data.blueP4.name);
    viewModel.blueP5(data.blueP5.name);
    viewModel.orangeName(data.orangeName.name);
    viewModel.orangeP1(data.orangeP1.name);
    viewModel.orangeP2(data.orangeP2.name);
    viewModel.orangeP3(data.orangeP3.name);
    viewModel.orangeP4(data.orangeP4.name);
    viewModel.orangeP5(data.orangeP5.name);

  })

  $("#submitButton").click(function() {
    var jsonData = ko.toJS(viewModel);

    $.post("data.json", data, function(returnedData) {
      console.log("Sucessfully saved JSON data");
    })
  });

  ko.applyBindings(viewModel);
});

// var observableArray = ko.observableArray([
//   {caster1: "Bdawg"},
//   {caster2: "Xotic"}
// ])

var viewModel = {
   // Default values for the fields?
   caster1: ko.observable("Bdawg"),
   caster2: ko.observable("Xotic"),
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
