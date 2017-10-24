// //$(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput= $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var nounInput = $("input#noun").val();
//
//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(nounInput);
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  var inputsAfter = [];
  for (var index = 0; index < inputs.length; index++){
    var inputVal = $("input#" + inputs[index]).val();
    inputsAfter.push(inputVal);
    $("." + inputs[index]).text(inputsAfter[index]);
    $("#story").show();

    console.log(inputsAfter)
    };
  event.preventDefault();
  });
});
