$(document).ready(function() {
  $("form#groceries_input").submit(function(event) {
    event.preventDefault();
    $("form#groceries_input").hide();
    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    var item4 = $("#item4").val();
    var item5 = $("#item5").val();
  var results = [item1, item2, item3, item4, item5]
  results.sort();
  console.log(results);
  var upperCaseResults = results.map(function(result) {
    return result.charAt(0).toUpperCase()+result.slice(1);
  });
  console.log(upperCaseResults);
  upperCaseResults.forEach(function(upperCaseResult) {
    $(".results").append("<li>" + upperCaseResult + "</li>");
  });
  });
});
