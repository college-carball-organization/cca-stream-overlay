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
  blueColorPrimary: ko.observable("#000000"),
  blueColorSecondary: ko.observable("#FFFFFF"),

  orangeName: ko.observable(),
  orangeP1: ko.observable(),
  orangeP2: ko.observable(),
  orangeP3: ko.observable(),
  orangeP4: ko.observable(),
  orangeP5: ko.observable(),
  orangeWins: ko.observable("0"),
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

viewModel.blueColorSecondary.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }
  updateBlueTeamSquiggle(newValue);
});

viewModel.orangeColorSecondary.subscribe(function (newValue) {
  if (!newValue) {
    return;
  }
  updateOrangeTeamSquiggle(newValue);
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

  updateBlueTeamSquiggle(viewModel.blueColorSecondary());
  updateOrangeTeamSquiggle(viewModel.orangeColorSecondary());
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

  console.log("gameCount: " + gameCount);

  for (var i = 1; i <= MAX_COLUMNS; ++i) {
    $(`#game-header-${i}`).css({ position: "absolute", visibility: "hidden" });
    $(`#blue-game-score-${i}`).css({
      position: "absolute",
      visibility: "hidden",
    });
    $(`#orange-game-score-${i}`).css({
      position: "absolute",
      visibility: "hidden",
    });
  }

  for (var i = 1; i <= parseInt(gameCount); ++i) {
    $(`#game-header-${i}`).css({ position: "relative", visibility: "visible" });
    $(`#blue-game-score-${i}`).css({
      position: "relative",
      visibility: "visible",
    });
    $(`#orange-game-score-${i}`).css({
      position: "relative",
      visibility: "visible",
    });
  }
}

// Helper functions ------------------------------------------------------------

function updateBlueTeamSquiggle(hexColor) {
  var { r, g, b } = hexToRgb(hexColor);
  const color = new Color(r, g, b);
  const solver = new Solver(color);
  const result = solver.solve();
  $("#blue-team-squiggle").attr("style", result.filter);
}

function updateOrangeTeamSquiggle(hexColor) {
  var { r, g, b } = hexToRgb(hexColor);
  const color = new Color(r, g, b);
  const solver = new Solver(color);
  const result = solver.solve();
  $("#orange-team-squiggle").attr("style", result.filter);
}

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

// COLOR SOLVER
class Color {
  constructor(r, g, b) {
    this.set(r, g, b);
  }

  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(
      this.b
    )})`;
  }

  set(r, g, b) {
    this.r = this.clamp(r);
    this.g = this.clamp(g);
    this.b = this.clamp(b);
  }

  hueRotate(angle = 0) {
    angle = (angle / 180) * Math.PI;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    this.multiply([
      0.213 + cos * 0.787 - sin * 0.213,
      0.715 - cos * 0.715 - sin * 0.715,
      0.072 - cos * 0.072 + sin * 0.928,
      0.213 - cos * 0.213 + sin * 0.143,
      0.715 + cos * 0.285 + sin * 0.14,
      0.072 - cos * 0.072 - sin * 0.283,
      0.213 - cos * 0.213 - sin * 0.787,
      0.715 - cos * 0.715 + sin * 0.715,
      0.072 + cos * 0.928 + sin * 0.072,
    ]);
  }

  grayscale(value = 1) {
    this.multiply([
      0.2126 + 0.7874 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 + 0.2848 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 + 0.9278 * (1 - value),
    ]);
  }

  sepia(value = 1) {
    this.multiply([
      0.393 + 0.607 * (1 - value),
      0.769 - 0.769 * (1 - value),
      0.189 - 0.189 * (1 - value),
      0.349 - 0.349 * (1 - value),
      0.686 + 0.314 * (1 - value),
      0.168 - 0.168 * (1 - value),
      0.272 - 0.272 * (1 - value),
      0.534 - 0.534 * (1 - value),
      0.131 + 0.869 * (1 - value),
    ]);
  }

  saturate(value = 1) {
    this.multiply([
      0.213 + 0.787 * value,
      0.715 - 0.715 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 + 0.285 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 - 0.715 * value,
      0.072 + 0.928 * value,
    ]);
  }

  multiply(matrix) {
    const newR = this.clamp(
      this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]
    );
    const newG = this.clamp(
      this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]
    );
    const newB = this.clamp(
      this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]
    );
    this.r = newR;
    this.g = newG;
    this.b = newB;
  }

  brightness(value = 1) {
    this.linear(value);
  }
  contrast(value = 1) {
    this.linear(value, -(0.5 * value) + 0.5);
  }

  linear(slope = 1, intercept = 0) {
    this.r = this.clamp(this.r * slope + intercept * 255);
    this.g = this.clamp(this.g * slope + intercept * 255);
    this.b = this.clamp(this.b * slope + intercept * 255);
  }

  invert(value = 1) {
    this.r = this.clamp((value + (this.r / 255) * (1 - 2 * value)) * 255);
    this.g = this.clamp((value + (this.g / 255) * (1 - 2 * value)) * 255);
    this.b = this.clamp((value + (this.b / 255) * (1 - 2 * value)) * 255);
  }

  hsl() {
    // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: h * 100,
      s: s * 100,
      l: l * 100,
    };
  }

  clamp(value) {
    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }
    return value;
  }
}

class Solver {
  constructor(target, baseColor) {
    this.target = target;
    this.targetHSL = target.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }

  solve() {
    const result = this.solveNarrow(this.solveWide());
    return {
      values: result.values,
      loss: result.loss,
      filter: this.css(result.values),
    };
  }

  solveWide() {
    const A = 5;
    const c = 15;
    const a = [60, 180, 18000, 600, 1.2, 1.2];

    let best = { loss: Infinity };
    for (let i = 0; best.loss > 25 && i < 3; i++) {
      const initial = [50, 20, 3750, 50, 100, 100];
      const result = this.spsa(A, a, c, initial, 1000);
      if (result.loss < best.loss) {
        best = result;
      }
    }
    return best;
  }

  solveNarrow(wide) {
    const A = wide.loss;
    const c = 2;
    const A1 = A + 1;
    const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
    return this.spsa(A, a, c, wide.values, 500);
  }

  spsa(A, a, c, values, iters) {
    const alpha = 1;
    const gamma = 0.16666666666666666;

    let best = null;
    let bestLoss = Infinity;
    const deltas = new Array(6);
    const highArgs = new Array(6);
    const lowArgs = new Array(6);

    for (let k = 0; k < iters; k++) {
      const ck = c / Math.pow(k + 1, gamma);
      for (let i = 0; i < 6; i++) {
        deltas[i] = Math.random() > 0.5 ? 1 : -1;
        highArgs[i] = values[i] + ck * deltas[i];
        lowArgs[i] = values[i] - ck * deltas[i];
      }

      const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
      for (let i = 0; i < 6; i++) {
        const g = (lossDiff / (2 * ck)) * deltas[i];
        const ak = a[i] / Math.pow(A + k + 1, alpha);
        values[i] = fix(values[i] - ak * g, i);
      }

      const loss = this.loss(values);
      if (loss < bestLoss) {
        best = values.slice(0);
        bestLoss = loss;
      }
    }
    return { values: best, loss: bestLoss };

    function fix(value, idx) {
      let max = 100;
      if (idx === 2 /* saturate */) {
        max = 7500;
      } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
        max = 200;
      }

      if (idx === 3 /* hue-rotate */) {
        if (value > max) {
          value %= max;
        } else if (value < 0) {
          value = max + (value % max);
        }
      } else if (value < 0) {
        value = 0;
      } else if (value > max) {
        value = max;
      }
      return value;
    }
  }

  loss(filters) {
    // Argument is array of percentages.
    const color = this.reusedColor;
    color.set(0, 0, 0);

    color.invert(filters[0] / 100);
    color.sepia(filters[1] / 100);
    color.saturate(filters[2] / 100);
    color.hueRotate(filters[3] * 3.6);
    color.brightness(filters[4] / 100);
    color.contrast(filters[5] / 100);

    const colorHSL = color.hsl();
    return (
      Math.abs(color.r - this.target.r) +
      Math.abs(color.g - this.target.g) +
      Math.abs(color.b - this.target.b) +
      Math.abs(colorHSL.h - this.targetHSL.h) +
      Math.abs(colorHSL.s - this.targetHSL.s) +
      Math.abs(colorHSL.l - this.targetHSL.l)
    );
  }

  css(filters) {
    function fmt(idx, multiplier = 1) {
      return Math.round(filters[idx] * multiplier);
    }
    return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(
      2
    )}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(
      5
    )}%);`;
  }
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
  const MAX_LENGTH = 300; // pixels
  const INITIAL_FONT_SIZE = 64; // pixels
  const FONT_FAMILY = 'Uni Sans Heavy';
  return getOptimalFontSize(text, MAX_LENGTH, INITIAL_FONT_SIZE, FONT_FAMILY);
}

function calculateIdealRosterCardTeamNameFontSize(text) {
  const MAX_LENGTH = 630; // pixels
  const INITIAL_FONT_SIZE = 108; // pixels
  const FONT_FAMILY = 'Uni Sans Heavy';
  return getOptimalFontSize(text, MAX_LENGTH, INITIAL_FONT_SIZE, FONT_FAMILY);
}