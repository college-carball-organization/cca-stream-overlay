$(function() {
  // Get all of the data from the Editor
  // And fill in all of the forms

  $.getJSON("data.json", function(data) {
    viewModel.caster1(data.caster1.name);
    viewModel.caster2(data.caster2.name);
    // viewModel.blueName(data.blueName.name);
    // viewModel.blueP1(data.blueP1.name);
    // viewModel.blueP2(data.blueP2.name);
    // viewModel.blueP3(data.blueP3.name);
    // viewModel.blueP4(data.blueP4.name);
    // viewModel.blueP5(data.blueP5.name);
    // viewModel.orangeName(data.orangeName.name);
    // viewModel.orangeP1(data.orangeP1.name);
    // viewModel.orangeP2(data.orangeP2.name);
    // viewModel.orangeP3(data.orangeP3.name);
    // viewModel.orangeP4(data.orangeP4.name);
    // viewModel.orangeP5(data.orangeP5.name);

    //var viewModel = ko.mapping.fromJS(data);
    //ko.applyBindings(viewModel);
  })

  ko.applyBindings(viewModel);
});


var viewModel = {
   caster1: ko.observable(),
   caster2: ko.observable()
}
