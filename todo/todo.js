// This code runs when the page loads
$(function() {

  $("a").on("click", function(event) {
    var parentOfThumbnail = $(this.parentNode.parentNode.parentNode)
    console.log(parentOfThumbnail)
    parentOfThumbnail.remove()
  });

})
