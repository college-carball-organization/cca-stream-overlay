var viewModel = {
  blueName: ko.observable("Blue Name"),
  orangeName: ko.observable("Orange Name"),
}

$(document).ready(function() {
  // Retrieve the scoreboard data file
  $.getJSON("../data.json", function(data) {
    processData(data)
  });

  ko.applyBindings(viewModel);
});

function processData(data) {
  // Set the team names from the data file
  viewModel.blueName(data.blueName);
  viewModel.orangeName(data.orangeName);

  $('#divBluePrimary').css("border-top-color", data.bluePrimary);
  $('#divBlueSecondary').css("border-bottom-color", data.blueSecondary);
  $('#divOrangePrimary').css("border-top-color", data.orangePrimary);
  $('#divOrangeSecondary').css("border-bottom-color", data.orangeSecondary);
  $('#markerBluePrimary').css("background-color", data.bluePrimary);
  $('#markerOrangePrimary').css("background-color", data.orangePrimary);
}

var autoUpdateTime = 5 * 100 // in milliseconds

window.setInterval(function() {
  $.getJSON("../data.json", function(data) {
    processData(data)
  });
}, autoUpdateTime)