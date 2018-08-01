var viewModel = {
  tickerText: ko.observable("NEU 1 - OSU 2: Game 4  |  LSU 0 - TAMU A 3: Final  |  Follow us on Twitter at @CollegeCarball  |  Soopy Sucks  |"),
}

$(document).ready(function() {
  // Retrieve the scoreboard data file
  $.getJSON("data.json", function(data) {
    // Set the team names from the data file
    viewModel.tickerText(data.tickerText + "  ");

    var tickerDuration = data.tickerDuration;

    $(".marquee span").css("animation-duration", (tickerDuration.toString() + "s"))
    $(".marquee2 span").css("animation-delay", ((tickerDuration / 2).toString() + "s"))
    console.log((tickerDuration / 2).toString() + "s");
    //$("#tickerText1").css("animation-duration")
  });

  ko.applyBindings(viewModel);
});
