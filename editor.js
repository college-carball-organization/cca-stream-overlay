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
   bestOf: ko.observable(2),
   blueWins: ko.observable("0"),
   orangeWins: ko.observable("0")
}

$(document).ready(function() {
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

  $.getJSON("scoreboardData.json", function(data) {
    viewModel.blueName(data.blueName);
    viewModel.orangeName(data.orangeName);
    viewModel.bestOf(data.bestOf);
    viewModel.blueWins(data.blueWins);
    viewModel.orangeWins(data.orangeWins);

    console.log(data.orangeWins, " ", data.blueWins, " ", data.bestOf);
  })

  ko.applyBindings(viewModel);
});
