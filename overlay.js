$(document).ready(function() {
  // Get all of the data from the Editor
  // And fill in all of the forms

  var table = getUrlVars();

  $("#caster1").text(table["caster1"]);
  $("#caster2").text(table["caster2"]);

  $("#blueName").text(table["blueName"]);
  $("#blueP1").text(table["blueP1"]);
  $("#blueP2").text(table["blueP2"]);
  $("#blueP3").text(table["blueP3"]);
  $("#blueP4").text(table["blueP4"]);
  $("#blueP5").text(table["blueP5"]);

  $("#orangeName").text(table["orangeName"]);
  $("#orangeP1").text(table["orangeP1"]);
  $("#orangeP2").text(table["orangeP2"]);
  $("#orangeP3").text(table["orangeP3"]);
  $("#orangeP4").text(table["orangeP4"]);
  $("#orangeP5").text(table["orangeP5"]);

});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
