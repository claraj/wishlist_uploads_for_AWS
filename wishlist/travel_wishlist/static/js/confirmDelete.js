
// Get a reference to the delete button on the page
var delete_place_button = document.getElementById('delete_place_btn');

// Add onclick listener. This code will run before the form is submitted
// to the server, so have the opportunity to ask user if they are sure
// If JavaScript form validation was also used, it would go in code like this.
delete_place_button.onclick = function(event) {

  // Show confirm dialog; will have OK and Cancel buttons. Returns
  // false if user clicks Cancel.
  if (!confirm("Are you sure you want to delete this place?")) {
    // Cancels any further event processing, which has the effect of
    // stopping the form being submitted to the server. Place is not deleted.
    event.preventDefault();
  }

}
