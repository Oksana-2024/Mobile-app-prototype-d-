$(".mobileMenuHeading").on("click", function() {
    $(this).next(".sectionMenu").slideToggle("fast", function() {
      $(this).prev().html($(this).is(":visible") ? "Скрыть" : "Меню");
    });
  });
  $(".sectionMenu a").click(function(e) {
    $(".mobileMenuHeading").click();
  });
  $(".mobileMenuHeading").click();