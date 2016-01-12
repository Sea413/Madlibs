jQuery(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#left").prepend("<li>Hello</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#left").prepend("<li>Goodbye</li>");
  });

  $("button#stop").click(function() {
    $("ul#right").prepend("<li>Stop!</li>");
    $("ul#right").children("li").first().click(function() {
      alert('hi');
    });

  });




  })
