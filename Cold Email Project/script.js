// Function to update the secure token display
function updateSecureTokenDisplay(token) {
  var secureTokenDisplay = document.getElementById("secureTokenDisplay");
  secureTokenDisplay.innerHTML = "*".repeat(token.length - 4) + token.slice(-4);
}

// Function to create a new input field for sender email
function createSenderEmailInput() {
  var senderEmailContainer = document.getElementById("senderEmailsContainer");
  var newSenderEmailInput = document.createElement("div");
  newSenderEmailInput.innerHTML = `
    <div class="inputContainer">
      <label for="senderEmail">Sender Email:</label>
      <input type="email" class="senderEmail" required>
      <button type="button" class="removeInputButton" style="color:white">Remove</button><br>
    </div>
  `;
  senderEmailContainer.appendChild(newSenderEmailInput);
}

// Function to create a new input field for receiver email
function createReceiverEmailInput() {
  var receiverEmailContainer = document.getElementById("receiverEmailsContainer");
  var newReceiverEmailInput = document.createElement("div");
  newReceiverEmailInput.innerHTML = `
    <div class="inputContainer">
      <label for="receiverEmail">Receiver Email:</label>
      <input type="email" class="receiverEmail" required>
      <button type="button" class="removeInputButton" style="color:white">Remove</button><br>
    </div>
  `;
  receiverEmailContainer.appendChild(newReceiverEmailInput);
}

// Function to remove the corresponding input tab
function removeInputTab(element) {
  var parentDiv = element.parentNode;
  parentDiv.parentNode.removeChild(parentDiv);
}

// Retrieve the secure token from local storage or generate a new one
var secureToken = localStorage.getItem("secureToken");
if (!secureToken) {
  secureToken = "00000000-0000-0000-0000-000000000000"; // Default token
  localStorage.setItem("secureToken", secureToken);
}

// Update the secure token display on page load
updateSecureTokenDisplay(secureToken);

// Add event listener to the "Change Secure Token" button
var changeTokenButton = document.getElementById("changeTokenButton");
changeTokenButton.addEventListener('click', function() {
  var newToken = prompt("Enter the new secure token:");
  if (newToken) {
    secureToken = newToken;
    localStorage.setItem("secureToken", secureToken);
    updateSecureTokenDisplay(secureToken);
  }
});

// Add event listener to the "Add Sender Email" button
var addSenderEmailButton = document.getElementById("addSenderEmailButton");
addSenderEmailButton.addEventListener('click', function() {
  createSenderEmailInput();
});

// Add event listener to the "Add Receiver Email" button
var addReceiverEmailButton = document.getElementById("addReceiverEmailButton");
addReceiverEmailButton.addEventListener('click', function() {
  createReceiverEmailInput();
});

// Event delegation to handle "Remove" button clicks
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('removeInputButton')) {
    removeInputTab(event.target);
  }
});

// Add event listener to the email form submit
document.getElementById("emailForm").addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("Clicked on send email");

  var senderEmailInputs = document.getElementsByClassName("senderEmail");
  var receiverEmailInputs = document.getElementsByClassName("receiverEmail");
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (senderEmailInputs.length === 0 || receiverEmailInputs.length === 0) {
    alert("At least one sender email and one receiver email are required!");
    return; // Stop execution if email addresses are empty
  }

  var senderEmails = [];
  var receiverEmails = [];

  for (var i = 0; i < senderEmailInputs.length; i++) {
    var senderEmail = senderEmailInputs[i].value.trim();
    if (senderEmail !== "") {
      senderEmails.push(senderEmail);
    }
  }

  for (var j = 0; j < receiverEmailInputs.length; j++) {
    var receiverEmail = receiverEmailInputs[j].value.trim();
    if (receiverEmail !== "") {
      receiverEmails.push(receiverEmail);
    }
  }

  if (senderEmails.length === 0 || receiverEmails.length === 0) {
    alert("At least one non-empty sender email and one non-empty receiver email are required!");
    return; // Stop execution if email addresses are empty
  }

  var randomSenderEmail = senderEmails[Math.floor(Math.random() * senderEmails.length)];

  for (var k = 0; k < receiverEmails.length; k++) {
    var receiverEmail = receiverEmails[k];

    Email.send({
      SecureToken: secureToken,
      To: receiverEmail,
      From: randomSenderEmail.replace(/"/g, "'"),
      Subject: subject,
      Body: message
    }).then(function(message) {
      alert(message);
    });
  }
});
