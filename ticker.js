var viewModel = {
  tickerText: ko.observable("NEU 1 - OSU 2: Game 4  |  LSU 0 - TAMU A 3: Final  |  Follow us on Twitter at @CollegeCarball  |  Soopy Sucks  |"),
}

$(document).ready(function() {
  // Retrieve the scoreboard data file
  $.getJSON("data.json", function(data) {
    // Set the team names from the data file
    viewModel.tickerText(data.tickerText);
  });

  ko.applyBindings(viewModel);
});
