// Get references to page elements
var $guestFirstName = $("#guest-first-name");
var $guestLastName = $("#guest-last-name");
var $guestEmail = $("#guest-email");
var $guestOrg = $("#guest-org");
var $guestVIP = $("#guest-vip");
var $submitBtn = $("#submit-guest");
var $guestList = $("#guest-list");
var $emailArrayCreated = $("#get-guest-emails");
var $guestEventId = "1";

// The API object contains methods for each kind of request we'll make
var API = {
  saveGuest: function(guest) {
    console.log(guest);
    return $.ajax({
      type: "POST",
      url: "guestlist/api/guests/add",
      data: guest
    });
  },
  getGuest: function() {
    return $.ajax({
      type: "GET",
      url: "api/guestlist/:eventid"
    });
  },
  deleteGuest: function(id) {
    return $.ajax({
      type: "DELETE",
      url: "api/guest/" + id
    });
  },
  sendCheckInEmail: function(id) {
    return $.ajax({
      type: "GET",
      url: "/api/guest/checkin/" + id
    });
  },
  sendInviteEmail: function(email) {
    return $.ajax({
      type: "GET",
      url: "/api/guest/invite/" + email
    });
  }
};

// UPDATE ONCE YINGYING ADDS IDS TO THE EVENT/GUESTS HANDLEBARS PAGE
var refreshGuests = function() {
  API.getGuest().then(function(data) {
    location.reload();
  });
};

// handleFormSubmit is called whenever we submit a new guest
// Save the new guest to the db and refresh the list
var handleFormSubmit = function(guest) {
  console.log("SUBMIT BUTTON CLICKED");
  guest.preventDefault();

  var guest = {
    first_name: $guestFirstName.val().trim(),
    last_name: $guestLastName.val().trim(),
    email: $guestEmail.val().trim(),
    org: $guestOrg.val().trim(),
    vip: $guestVIP.val().trim(),
    EventId: $guestEventId
  };

  if (!guest.email) {
    alert("You must enter an email address");
    return;
  }
  console.log(JSON.stringify(guest, null, 2));

  // TRIGGERs MAILGUN TO SEND EMAIL
  handleSendEmail(guest.email);
  // --------------------------------
  API.saveGuest(guest).then(function() {
    console.log("guest added");
    refreshGuests();
  });

  $guestFirstName.val("");
  $guestLastName.val("");
  $guestEmail.val("");
  $guestOrg.val("");
  $guestVIP.val("1");
};

// handleDeleteBtnClick is called when an guest's delete button is clicked
// Remove the guest detail from the db and refresh the list
// ALSO NEED TO TRIGGER AN EMAIL TO BE SENT TO THE GUEST
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteGuest(idToDelete).then(function() {
    refreshGuests();
  });
};

// pass an array to this function
var handleSendEmail = function(data) {
  console.log("running handleSendEmail function -------");

  // API.sendInviteEmail(data);
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$guestList.on("click", ".delete", handleDeleteBtnClick);
