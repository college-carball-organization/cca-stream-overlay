var viewModel = {
  tickerText: ko.observable("There should be more text here"),
}

$(document).ready(function() {
  // Retrieve the scoreboard data file
  $.getJSON("data.json", function(data) {
    // Set the team names from the data file
    viewModel.tickerText(data.tickerText);
  });

  ko.applyBindings(viewModel);
});
