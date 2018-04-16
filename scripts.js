$(document).ready(function(){
  

//SECTION OF MAKING A GRID 
//getting a button to var
var submitButton = $("#submit");
//function to save current value of inputs in vars and use them to make a grid
function getValue() {
  //getting the height of a grid
  var height = $("#inputHeight").val();

  //getting the width of a grid
  var width = $("#inputWidth").val();

  //getting a table to var
  var table = $("table");

  //reset table when user set new size
  table.empty();

  //loop to make a grid
  for (var i = 0; i < height; i++) {
    table.append("<tr></tr>");
    var tr = $("tr:last-child");
    for (var j = 0; j < width; j++) {
      tr.append("<td></td>")
    }
  }

  //event listener with function to change color of cells or remove color if eraser is active
  table.on("mousedown mouseenter", "td", function(e) {
    e.preventDefault();
    if (e.which == 1) {
      //if eraser isn't active
      if (!isEraserActive) {
        //Get color from color picker
        var color = $("#color").val();
        //Apply color to cell
        $(this).css("background-color", color);
        //if eraser is active
      } else {
        $(this).css("background-color", "white");
      }
    }
  });

  //reset #hideGrid button
  $("#hideGrid").removeClass("active");
  
} //end getValue function 
//event listener on button
submitButton.on("click", getValue);
//END OF MAKING GRIND SECTION

//Toogle 'active' class and true/false to eraser
var isEraserActive;

$("#eraser").on("click", function () {
  $("#eraser").toggleClass("active");
  if ($("#eraser").hasClass("active")) {
    isEraserActive = true;
  } else {
    isEraserActive = false;
  }
});

//function to clear a grid
$("#clearGrid").on("click", function () {
    $("td").css("background-color", "white");
  });
//function to hide a grid
$("#hideGrid").on("click", function () {
  $("#hideGrid").toggleClass("active");
  if ($("#hideGrid").hasClass("active")){
    $("td").addClass("noneGrid");
  } else {
    $("td").removeClass("noneGrid");
  }
  
  
  
});
});