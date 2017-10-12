
// //business logic
// function Movie(title, year, budget, boxoffice, imdb, rotten) {
//   this.title = title;
//   this.year = year;
//   this.budget = budget;
//   this.boxoffice = boxoffice;
//   this.imdb = imdb;
//   this.rotten = rotten;
// }

var movieArray = [];

// Movie.prototype.displaymovie = function () {
//   var title = this.title
//   return title;
// };
//user interface logic
function resetFields() {
  $("input#movie-title").val("");
  $("input#movie-year").val("");
  $("input#movie-budget").val("");
  $("input#movie-boxoffice").val("");
  $("input#movie-imdb").val("");
  $("input#movie-rotten").val("");
}


// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var inMovieTitle = $("input#movie-title").val();
//     var inYear = $("input#movie-year").val();
//     var inBudget = $("input#movie-budget").val();
//     var inBoxoffice = $("input#movie-boxoffice").val();
//     var inImdb = $("input#movie-imdb").val();
//     var inRotten = $("input#movie-rotten").val();
//     var newMovie = new Movie(inMovieTitle, inYear, inBudget, inBoxoffice, inImdb, inRotten);
//     console.log(newMovie);
//
//     // $("#output").text(Movie.values(this));
//     resetFields();
//   });
// });
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    newMovie = [$("input#movie-title").val(), $("input#movie-year").val(),  $("input#movie-budget").val(), $("input#movie-boxoffice").val(), $("input#movie-rotten").val(), $("input#movie-imdb").val()];
    movieArray.push(newMovie)
    resetFields();
    $("#output").text("");
    // if (newMovie[4] > movieArray[0][4]) {
    //
    //     }
    movieArray.forEach(function(movie) {
      var output = "";
      movie.forEach(function(value) {
        output = output + "<td>" + value + "</td>";
      });
      $("#output").append(output);
    });
  });
});

// for each array in our movie array, check to see which index(4) is biggest. sort accordingly.
