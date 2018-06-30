var blueName = $("#blueName");
var blueP1 = $("blueP1");
var blueP2 = $("blueP2");
var blueP3 = $("blueP3");
var blueP4 = $("blueP4");
var blueP5 = $("blueP5");

$(document).ready(function() {
  $.getJSON("http://prod.collegecarball.net/data.json", function(data) {

  })

  $("#submitButton").click(function() {
    var jsonData = ko.toJS(viewModel);

    $.post("data.json", data, function(returnedData) {
      console.log("Sucessfully saved JSON data");
    })
  });

  //ko.applyBindings(viewModel);
});

var observableArray = ko.observableArray([
  {caster1: "Bdawg"},
  {caster2: "Xotic"}
])

// var viewModel = {
//   // Default values for the fields?
//   caster1: ko.observable("Caster 1"),
//   caster2: ko.observable("Caster 2"),
//   blueName: ko.observable("Blue Team Name"),
//   blueP1: ko.observable("Blue Player 1"),
//   blueP2: ko.observable("Blue Player 2"),
//   blueP3: ko.observable("Blue Player 3"),
//   blueP4: ko.observable("Blue Player 4"),
//   blueP5: ko.observable("Blue Player 5"),
//   orangeName: ko.observable("Orange Team Name"),
//   orangeP1: ko.observable("Orange Player 1"),
//   orangeP2: ko.observable("Orange Player 2"),
//   orangeP3: ko.observable("Orange Player 3"),
//   orangeP4: ko.observable("Orange Player 4"),
//   orangeP5: ko.observable("Orange Player 5"),
// }
