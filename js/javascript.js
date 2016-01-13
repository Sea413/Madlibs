jQuery(document).ready(function() {

$("form").submit(function(event) {
var values = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

values.forEach(function(squid) {

  var newSquid = $('#' + squid).val();

  $('.' + squid).text(newSquid);

});

  // var person1Input = $("input#person1").val();
  // $("span.person1").text(person1Input);
  //
  // var person2Input = $("input#person2").val();
  // $("span.person2").text(person2Input);
  // //
  // var animalInput = $("input#animal").val();
  // $("span.animal").text(animalInput);
  // //
  // var exclamationInput = $("input#exclamation").val();
  // $("span.exclamation").text(exclamationInput);
  //
  // var verbInput = $("input#verb").val();
  // $("span.verb").text(verbInput);
  //
  // var nounInput = $("input#noun").val();
  // $("span.noun").text(nounInput);

  event.preventDefault();
})

})
