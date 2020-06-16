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

  bestOf: ko.observableArray([3, 5, 7]),
  selectedBestOf: ko.observable(),
  blueWins: ko.observableArray([0, 1, 2, 3, 4]),
  selectedBlueWins: ko.observable(),
  orangeWins: ko.observableArray([0, 1, 2, 3, 4]),
  selectedOrangeWins: ko.observable(),

  game1BlueScore: ko.observable("0"),
  game1OrangeScore: ko.observable("0"),
  game2BlueScore: ko.observable("0"),
  game2OrangeScore: ko.observable("0"),
  game3BlueScore: ko.observable("0"),
  game3OrangeScore: ko.observable("0"),
  game4BlueScore: ko.observable("0"),
  game4OrangeScore: ko.observable("0"),
  game5BlueScore: ko.observable("0"),
  game5OrangeScore: ko.observable("0"),
  game6BlueScore: ko.observable("0"),
  game6OrangeScore: ko.observable("0"),
  game7BlueScore: ko.observable("0"),
  game7OrangeScore: ko.observable("0"),

  bluePrimary: ko.observable("#000000"),
  blueSecondary: ko.observable("#000000"),
  orangePrimary: ko.observable("#000000"),
  orangeSecondary: ko.observable("#000000"),

  tickerSpeed: ko.observable(40),
  tickerText: ko.observable("Ticker text"),
};

$(document).ready(function () {
  // Set the view model(and thus the intial form text)
  //  from the previous data
  $.getJSON("../data.json", function (data) {
    processData(data);
  });

  ko.applyBindings(viewModel);
});

function processData(data) {
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
  //viewModel.bestOf(data.bestOf);
  viewModel.selectedBestOf(data.bestOf);
  viewModel.selectedBlueWins(data.blueWins);
  viewModel.selectedOrangeWins(data.orangeWins);

  viewModel.game1BlueScore(data.game1BlueScore);
  viewModel.game1OrangeScore(data.game1OrangeScore);
  viewModel.game2BlueScore(data.game2BlueScore);
  viewModel.game2OrangeScore(data.game2OrangeScore);
  viewModel.game3BlueScore(data.game3BlueScore);
  viewModel.game3OrangeScore(data.game3OrangeScore);
  viewModel.game4BlueScore(data.game4BlueScore);
  viewModel.game4OrangeScore(data.game4OrangeScore);
  viewModel.game5BlueScore(data.game5BlueScore);
  viewModel.game5OrangeScore(data.game5OrangeScore);
  viewModel.game6BlueScore(data.game6BlueScore);
  viewModel.game6OrangeScore(data.game6OrangeScore);
  viewModel.game7BlueScore(data.game7BlueScore);
  viewModel.game7OrangeScore(data.game7OrangeScore);

  viewModel.tickerText(data.tickerText);
  viewModel.tickerSpeed(data.tickerSpeed);
}

var autoUpdateTime = 1000; // in milliseconds

// Submit form data using AJAX instead of normal html form submit
$(function () {
  $("#control-panel-form").on("submit", function (e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr("action");

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function (data) {
        alert(data); // show response from the php script.
      },
    });
  });
});
