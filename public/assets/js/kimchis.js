// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-gobbled").on("click", function(event) {
    var id = $(this).data("id");
    var newGobbled = $(this).data("newgobbled");

    var newGobbledState = {
      gobbled: newGobbled
    };

    // Send the PUT request.
    $.ajax("/api/kimchis/" + id, {
      type: "PUT",
      data: newGobbledState
    }).then(
      function() {
        console.log("changed gobble to", newGobbled);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newKimchi = {
      kimchi_name: $("#ca").val().trim(),
      gobbled: $("[name=gobbled]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/kimchis", {
      type: "POST",
      data: newKimchi
    }).then(
      function() {
        console.log("created new kimchi");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-kimchi").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/kimchis/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted kimchi", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
