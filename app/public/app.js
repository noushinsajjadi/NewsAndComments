// Grab the newss as a json
$.getJSON("/News", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#News").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    console.log(data[i]._id);
    $("#News").append("<button data-id='" + data[i]._id + "' id='ShowComments'>Show Comments</button>");

  }
});


// Whenever someone clicks a p tag
$(document).on("click", "p", function() {
  // Empty the Comments from the Comment section
  $("#Comments").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the news
  $.ajax({
    method: "GET",
    url: "/News/" + thisId
  })
    // With that done, add the Comment information to the page
    .done(function(data) {
      console.log(data);
      // The title of the news
      $("#Comments").append("<h2>" + data.title + "</h2>");
      // An input to enter a new title
      $("#Comments").append("<input id='titleinput' name='title' >");
      // A textarea to add a new Comment body
      $("#Comments").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new Comment, with the id of the news saved to it
      $("#Comments").append("<button data-id='" + data._id + "' id='saveComments'>Save Comment</button>");

      // If there's a Comment in the news
      if (data.Comments) {
        // Place the title of the Comment in the title input
        $("#titleinput").val(data.Comments.title);
        // Place the body of the Comment in the body textarea
        $("#bodyinput").val(data.Comments.body);
      }
    });
});

// When you click the saveComment button
$(document).on("click", "#saveComments", function() {
  // Grab the id associated with the news from the submit button
  var thisId = $(this).attr("data-id");
  console.log("the id is :" + thisId);
  // Run a POST request to change the Comment, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/News/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from Comment textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the Comments section
      $("#Comments").empty();
    });

  // Also, remove the values entered in the input and textarea for Comment entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

// When you click the showComment button
$(document).on("click", "#ShowComments", function() {
  // Grab the id associated with the news from the submit button
  var thisId = $(this).attr("data-id");
  console.log("the id is :" + thisId);
  top.location.href = "./News/" + thisId;
      
});
