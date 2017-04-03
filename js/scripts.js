//Business Logic//

function Place(name, location, landmark, season, notes) {
  this.name = name;
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

Place.prototype.fullPlace = function() {
  return this.name + " " +
  this.location + " " +
  this.landmark + " " +
  this.season + " " +
  this.notes;
}

function resetFields() {
    $("input#name").val("");
    $("input#location").val("");
    $("input#landmark").val("");
    $("input#season").val("");
    $("input#notes").val("");
}


<!-- User Logic  -->

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmark, inputtedSeason, inputtedNotes);


    $("ul#places").append("<li><span class='place'>" + newPlace.fullPlace() + "</span></li>");

    $(".place").last().click(function() {
      alert("hsiughiu");
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $("#show-place").text(newPlace.fullPlace());
    });

    resetFields();

  });
});
