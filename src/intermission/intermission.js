var viewModel = {
  blueName: ko.observable("Blue Name"),
  orangeName: ko.observable("Orange Name"),
  blueColorPrimary: ko.observable("#000000"),
  orangeColorPrimary: ko.observable("#FFFFFF"),
  blueStanding: ko.observable(""),
  orangeStanding: ko.observable(""),
};

viewModel.blueTextColor = ko.pureComputed(function () {
  rgb = hexToRgb(viewModel.blueColorPrimary());
  contrast = getColorContrast(rgb);
  return contrast > 125 ? "#000000" : "#FFFFFF";
});

viewModel.orangeTextColor = ko.pureComputed(function () {
  rgb = hexToRgb(viewModel.orangeColorPrimary());
  contrast = getColorContrast(rgb);
  return contrast > 125 ? "#000000" : "#FFFFFF";
});

viewModel.blueName.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }

  const uppercase_name = newValue.toUpperCase();
  const font_size = calculateIdealTeamNameFontSize(uppercase_name);
  $('#blue-team-name').css('font-size', `${font_size}px`);
});

viewModel.orangeName.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }

  const uppercase_name = newValue.toUpperCase();
  const font_size = calculateIdealTeamNameFontSize(uppercase_name);
  $('#orange-team-name').css('font-size', `${font_size}px`);
});

$(document).ready(function () {
  // Retrieve the scoreboard data file
  $.getJSON("../data.json", function (data) {
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
  viewModel.blueStanding(data.blueStanding);
  viewModel.orangeStanding(data.orangeStanding);
}

var autoUpdateTime = 1000; // in milliseconds

window.setInterval(function () {
  $.getJSON("../data.json", function (data) {
    processData(data);
  });
}, autoUpdateTime);

// Helper functions ------------------------------------------------------------

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function getColorContrast({ r, g, b }) {
  var colorContrast = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );
  return colorContrast;
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

function getOptimalFontSize(content, max_width, initial_font_size, font_family) {
  let font_size = initial_font_size;
  while( getTextWidth(content, `${font_size}px ${font_family}`) > max_width) {
      font_size -= 1;
  }
  return font_size;
}

function calculateIdealTeamNameFontSize(text) {
  const MAX_LENGTH = 650; // pixels
  const INITIAL_FONT_SIZE = 108; // pixels
  const FONT_FAMILY = 'Uni Sans Heavy';
  return getOptimalFontSize(text, MAX_LENGTH, INITIAL_FONT_SIZE, FONT_FAMILY);
}