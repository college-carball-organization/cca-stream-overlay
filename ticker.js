var viewModel = {
  tickerText: ko.observable("NEU 1 - OSU 2: Game 4  |  LSU 0 - TAMU A 3: Final  |  Follow us on Twitter at @CollegeCarball  |  Soopy Sucks  | Follow Bdawg on twitter. @Bdawg8RL | "),
}

$(document).ready(function() {
  $.getJSON("data.json", function(data) {
    console.log(viewModel.tickerText)

    viewModel.tickerText(data.tickerText);

    console.log(viewModel.tickerText)

    var tickerDuration = data.tickerDuration;

    $(".marquee span").css("width", width)
    $(".marquee span").css("animation-duration", (tickerDuration.toString() + "s"))
    $(".marquee2 span").css("animation-delay", ((tickerDuration / 2).toString() + "s"))
    //console.log((tickerDuration / 2).toString() + "s");
    //$("#tickerText1").css("animation-duration")
  });

  ko.applyBindings(viewModel);
});
