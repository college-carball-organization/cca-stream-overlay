$(function() {
  // Get all of the data from the Editor
  // And fill in all of the forms


  ko.applyBindings(c1ViewModel);
});


var c1ViewModel = {
  caster1: ko.observable('BDawg'),
  caster2: ko.observable('Greek Mech')
}

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
