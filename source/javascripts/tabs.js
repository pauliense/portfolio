$(function(){

  $(".tab").on("click", function(e){
    // Change active tab


    // remove active class...
    $(".tab").removeClass("active")

    // put active class on this..
    $(this).addClass("active")

    // Hide all tab-content (use class="hidden")

    $(".tab-content").addClass("hidden")


    var target = $(this).data("target");

    $(target).removeClass("hidden");



    // $(this)

    // Show target tab-content (use class="hidden")
  });

});

