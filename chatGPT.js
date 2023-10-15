// JavaScript code for chat functionality
function sendMessage() {
  var message = document.getElementById("chatInput").value;
  // Code to send message to the backend and receive the response from Chat GPT

  // This is just a placeholder code to display the response on the webpage
  document.getElementById("chatOutput").innerHTML += "<p><strong>User:</strong> " + message + "</p>";
  document.getElementById("chatOutput").innerHTML += "<p><strong>Chat GPT:</strong> " + "Sống sao cho giống con người tí đi" + "</p>";
  document.getElementById("chatInput").value = "";
}
