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

   bestOf: ko.observable(),
   selectedBestOf: ko.observable(),
   blueWins: ko.observableArray([0, 1, 2, 3, 4]),
   selectedBlueWins: ko.observable(),
   orangeWins: ko.observableArray([0, 1, 2, 3, 4]),
   selectedOrangeWins: ko.observable(),
   bluePrimary: ko.observable("#000000"),
   blueSecondary: ko.observable("#000000"),
   orangePrimary: ko.observable("#000000"),
   orangeSecondary: ko.observable("#000000"),
   tickerDuration: ko.observable(20),
   tickerText: ko.observable("Ticker text")
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

    viewModel.bluePrimary(data.bluePrimary);
    viewModel.blueSecondary(data.blueSecondary);
    viewModel.orangePrimary(data.orangePrimary);
    viewModel.orangeSecondary(data.orangeSecondary);
    viewModel.bestOf(data.bestOf);
    viewModel.selectedBestOf(data.bestOf);
    viewModel.selectedBlueWins(data.blueWins);
    viewModel.selectedOrangeWins(data.orangeWins);
    viewModel.tickerText(data.tickerText);
    viewModel.tickerDuration(data.tickerDuration);
  })

  ko.applyBindings(viewModel);

});
