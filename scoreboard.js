var viewModel = {
  blueName: ko.observable("Blue Name"),
  orangeName: ko.observable("Orange Name")
}

$(document).ready(function() {
  var bestOf = 5;
  var blueWins = 2;
  var orangeWins = 2;

  // Retrieve the scoreboard data file
  $.getJSON("scoreboardData.json", function(data) {
    // Set the team names from the data file
    viewModel.blueName(data.blueName);
    viewModel.orangeName(data.orangeName);

    // Set the appropriate series length and # of wins for both team from the data file
    bestOf = data.bestOf;
    blueWins = data.blueWins;
    orangeWins = data.orangeWins;
  });


  showBestOf(bestOf);
  showBlueTicks(blueWins);
  showOrangeTicks(orangeWins);

  ko.applyBindings(viewModel);
});

// Helper functions to automatically hide & show the specified images

function showBestOf(bestOf) {
  var bo3 = $('#bo3');
  var bo5 = $('#bo5');
  var bo7 = $('#bo7');

  bo3.hide();
  bo5.hide();
  bo7.hide();

  switch (bestOf) {
    case 3:
      bo3.show();
      console.log("Best of 3");
      break;
    case 5:
      bo5.show();
      break;
    case 7:
      bo7.show();
      console.log("Best of 7");
      break;
  }
}

function showBlueTicks(wins) {
  var blue1 = $('#blue1');
  var blue2 = $('#blue2');
  var blue3 = $('#blue3');
  var blue4 = $('#blue4');

  blue1.hide();
  blue2.hide();
  blue3.hide();
  blue4.hide();

  switch (wins) {
    case 0:
      break;
    case 1:
      blue1.show();
      break;
    case 2:
      blue2.show();
      break;
    case 3:
      blue3.show();
      break;
    case 4:
      blue4.show();
      break;
  }
}

function showOrangeTicks(wins) {
  var orange1 = $('#orange1');
  var orange2 = $('#orange2');
  var orange3 = $('#orange3');
  var orange4 = $('#orange4');

  orange1.hide();
  orange2.hide();
  orange3.hide();
  orange4.hide();

  switch (wins) {
    case 0:
      break;
    case 1:
      orange1.show();
      break;
    case 2:
      orange2.show();
      break;
    case 3:
      orange3.show();
      break;
    case 4:
      orange4.show();
      break;
  }
}
