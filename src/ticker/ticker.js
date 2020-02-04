var viewModel = {
  //tickerText: ko.observable("NEU 1 - OSU 2: Game 4  |  LSU 0 - TAMU A 3: Final  |  Follow us on Twitter at @CollegeCarball  |  Soopy Sucks  | Follow Bdawg on twitter. @Bdawg8RL | "),
  tickerText: ko.observable("")
}

$(document).ready(function() {
  $.getJSON("../data.json", function(data) {
    processData(data)
  });

  ko.applyBindings(viewModel);
});

function processData(data) {
  viewModel.tickerText(data.tickerText);

  var tickerDuration = calcDuration(data.tickerSpeed);

  $(".marquee span").css("animation-duration", (tickerDuration.toString() + "s"))
  $(".marquee2 span").css("animation-delay", ((tickerDuration / 2).toString() + "s"))
}

var autoUpdateTime = 5 * 100 // in milliseconds

window.setInterval(function() {
  $.getJSON("../data.json", function(data) {
    processData(data)
  });
}, autoUpdateTime)

function calcDuration(speed) {
  var spanSelector = $("#tickerText2")
  var spanLength = spanSelector.width()
  var timeTaken = spanLength / speed

  return timeTaken
}
