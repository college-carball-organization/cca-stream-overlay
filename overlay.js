var viewModel = {
   caster1: ko.observable(),
   caster2: ko.observable(),
   blueName: ko.observable(),
   blueP1: ko.observable(),
   blueP2: ko.observable(),
   blueP3: ko.observable(),
   blueP4: ko.observable(),
   blueP5: ko.observable(),
   orangeName: ko.observable(),
   orangeP1: ko.observable(),
   orangeP2: ko.observable(),
   orangeP3: ko.observable(),
   orangeP4: ko.observable(),
   orangeP5: ko.observable(),
}

$(function() {
  // Get all of the data from the Editor
  // And fill in all of the forms
  //http://prod.collegecarball.net/testing/data.json
  $.getJSON("http://prod.collegecarball.net/testing2/data.json", function(data) {
    console.log("Data: " + data);
    viewModel.caster1(data.caster1);
    viewModel.caster2(data.caster2);
    viewModel.blueName(data.blueName);
    viewModel.orangeName(data.orangeName);
    viewModel.blueP1(data.blueP1);
    viewModel.blueP2(data.blueP2);
    viewModel.blueP3(data.blueP3);
    viewModel.blueP4(data.blueP4);
    viewModel.blueP5(data.blueP5);

    viewModel.orangeP1(data.orangeP1);
    viewModel.orangeP2(data.orangeP2);
    viewModel.orangeP3(data.orangeP3);
    viewModel.orangeP4(data.orangeP4);
    viewModel.orangeP5(data.orangeP5);
  })

  ko.applyBindings(viewModel);
});
