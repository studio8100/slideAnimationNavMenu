$("#navMenu a").on("click", function() {
    var position = $(this)
      .parent().position();
    var width = $(this)
      .parent().width();
    $("#navMenu .slideOver").css({ opacity: 1, left: +position.left, width: width });
  });
  
  $("#navMenu a").on("mouseover", function() {
    var position = $(this)
      .parent().position();
    var width = $(this)
      .parent().width();
    $("#navMenu .slideUnder").css({ 
      opacity: 1, left: +position.left, width: width })
      .addClass("squeeze");
  });
  
  $("#navMenu a").on("mouseout", function() {
    $("#navMenu .slideUnder").css({ opacity: 0 }).removeClass("squeeze");
  });
  
  var currentWidth = $("#navMenu")
    .find("li:nth-of-type(3) a")
    .parent("li")
    .width();
  var current = $("li:nth-of-type(3) a").position();
  $("#navMenu .slideOver").css({ left: +current.left, width: currentWidth });