$(document).ready(function() {
    $("a").on('click', function(event) {
        $.scrollify.move($(this).attr("href"));
    });
});

$(function() {
    $.scrollify({
      section : ".section-class-name",
      sectionName : "section-name",
      setHeights: true
    });
});
