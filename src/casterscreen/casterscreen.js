var viewModel = {
  caster1: ko.observable(),
  caster2: ko.observable(),

  blueName: ko.observable(),
  blueP1: ko.observable(),
  blueP2: ko.observable(),
  blueP3: ko.observable(),
  blueP4: ko.observable(),
  blueP5: ko.observable(),
  blueWins: ko.observable("0"),
  blueStanding: ko.observable("0-0"),
  blueColorPrimary: ko.observable("#000000"),
  blueColorSecondary: ko.observable("#FFFFFF"),

  orangeName: ko.observable(),
  orangeP1: ko.observable(),
  orangeP2: ko.observable(),
  orangeP3: ko.observable(),
  orangeP4: ko.observable(),
  orangeP5: ko.observable(),
  orangeWins: ko.observable("0"),
  orangeStanding: ko.observable("0-0"),
  orangeColorPrimary: ko.observable("#FFFFFF"),
  orangeColorSecondary: ko.observable("#000000"),

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

  seriesLength: ko.observable("BEST OF 0"),
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

viewModel.gameCount = ko.pureComputed(function () {
  return (
    "" + (parseInt(viewModel.blueWins()) + parseInt(viewModel.orangeWins()))
  );
});

viewModel.blueName.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }

  const uppercase_name = newValue.toUpperCase();

  // Update score card
  const score_card_font_size = calculateIdealScoreCardTeamNameFontSize(uppercase_name);
  $('#blue-team-score-card-name').css('font-size', `${score_card_font_size}px`);

  // Update roster card
  const roster_card_font_size = calculateIdealRosterCardTeamNameFontSize(uppercase_name);
  $('#blue-team-name-text').css('font-size', `${roster_card_font_size}px`);
});

viewModel.orangeName.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }

  const uppercase_name = newValue.toUpperCase();

  // Update score card
  const score_card_font_size = calculateIdealScoreCardTeamNameFontSize(uppercase_name);
  $('#orange-team-score-card-name').css('font-size', `${score_card_font_size}px`);

  // Update roster card
  const roster_card_font_size = calculateIdealRosterCardTeamNameFontSize(uppercase_name);
  $('#orange-team-name-text').css('font-size', `${roster_card_font_size}px`);
});

viewModel.gameCount.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }
  buildScoreCard(newValue);
});

$(function () {
  // Get all of the data from the Editor
  // And fill in all of the forms
  $.getJSON("../data.json", function (data) {
    processData(data);
  });

  ko.applyBindings(viewModel);
  buildScoreCard(viewModel.gameCount());
});

function processData(data) {
  // Update casters
  viewModel.caster1(data.caster1);
  viewModel.caster2(data.caster2);

  // Update Team Names
  viewModel.blueName(data.blueName);
  viewModel.orangeName(data.orangeName);

  // Update Blue team players
  viewModel.blueP1(data.blueP1);
  viewModel.blueP2(data.blueP2);
  viewModel.blueP3(data.blueP3);
  viewModel.blueP4(data.blueP4);
  viewModel.blueP5(data.blueP5);

  // Update orange team players
  viewModel.orangeP1(data.orangeP1);
  viewModel.orangeP2(data.orangeP2);
  viewModel.orangeP3(data.orangeP3);
  viewModel.orangeP4(data.orangeP4);
  viewModel.orangeP5(data.orangeP5);

  // Update colors
  viewModel.blueColorPrimary(data.bluePrimary);
  viewModel.blueColorSecondary(data.blueSecondary);
  viewModel.orangeColorPrimary(data.orangePrimary);
  viewModel.orangeColorSecondary(data.orangeSecondary);

  // Update wins
  viewModel.blueWins(data.blueWins);
  viewModel.orangeWins(data.orangeWins);

  // Update standings
  viewModel.blueStanding(data.blueStanding);
  viewModel.orangeStanding(data.orangeStanding);

  // Update scores
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

  // Update series length
  viewModel.seriesLength("BEST OF " + data.bestOf);
}

var autoUpdateTime = 1000; // in milliseconds

window.setInterval(function () {
  $.getJSON("../data.json", function (data) {
    processData(data);
  });
}, autoUpdateTime);

function buildScoreCard(gameCount) {
  var MAX_COLUMNS = 7;

  // Hide everything
  for (var i = 1; i <= MAX_COLUMNS; ++i) {
    $(`#scorecard-gamescores-header-${i}`).css({ position: "absolute", visibility: "hidden" });
    $(`#game-score-${i}`).css({
      position: "absolute",
      visibility: "hidden",
    });
  }
  $('#score-card').css({ visibility: "hidden" });

  // Show only necessary scores
  if (parseInt(gameCount) > 0) {
    $('#score-card').css({ visibility: "visible" });
  }
  for (var i = 1; i <= parseInt(gameCount); ++i) {
    $(`#scorecard-gamescores-header-${i}`).css({ position: "relative", visibility: "visible" });
    $(`#game-score-${i}`).css({
      position: "relative",
      visibility: "visible",
    });
  }
}

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

/*******************************************************************************
 * Text resizing
 ******************************************************************************/

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

function calculateIdealScoreCardTeamNameFontSize(text) {
  const MAX_LENGTH = 200; // pixels
  const INITIAL_FONT_SIZE = 45; // pixels
  const FONT_FAMILY = 'Uni Sans Heavy';
  return getOptimalFontSize(text, MAX_LENGTH, INITIAL_FONT_SIZE, FONT_FAMILY);
}

function calculateIdealRosterCardTeamNameFontSize(text) {
  const MAX_LENGTH = 750; // pixels
  const INITIAL_FONT_SIZE = 46; // pixels
  const FONT_FAMILY = 'Uni Sans Heavy';
  return getOptimalFontSize(text, MAX_LENGTH, INITIAL_FONT_SIZE, FONT_FAMILY);
}