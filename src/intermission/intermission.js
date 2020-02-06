var viewModel = {
  blueName: ko.observable("Blue Name"),
  orangeName: ko.observable("Orange Name"),
  blueColorPrimary: ko.observable("#000000"),
  orangeColorPrimary: ko.observable("#FFFFFF")
};

viewModel.blueTextColor = ko.pureComputed(function() {
  rgb = hexToRgb(viewModel.blueColorPrimary());
  contrast = getColorContrast(rgb);
  return contrast > 125 ? "#000000" : "#FFFFFF";
});

viewModel.orangeTextColor = ko.pureComputed(function() {
  rgb = hexToRgb(viewModel.orangeColorPrimary());
  contrast = getColorContrast(rgb);
  return contrast > 125 ? "#000000" : "#FFFFFF";
});

$(document).ready(function() {
  // Retrieve the scoreboard data file
  $.getJSON("../data.json", function(data) {
    processData(data);
  });

  ko.applyBindings(viewModel);
});

function processData(data) {
  // Set the team names from the data file
  viewModel.blueName(data.blueName);
  viewModel.orangeName(data.orangeName);
  viewModel.blueColorPrimary(data.bluePrimary);
  viewModel.orangeColorPrimary(data.orangePrimary);
}

var autoUpdateTime = 500; // in milliseconds

window.setInterval(function() {
  $.getJSON("../data.json", function(data) {
    processData(data);
  });
}, autoUpdateTime);

// Helper functions ------------------------------------------------------------

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function getColorContrast({ r, g, b }) {
  var colorContrast = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );
  return colorContrast;
}
