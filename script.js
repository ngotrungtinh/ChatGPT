function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
  
    if (message !== "") {
      var chatMessages = document.getElementById("chat-messages");
  
      // Create user message element
      var userMessage = document.createElement("div");
      userMessage.className = "chat-message user-message";
      userMessage.innerHTML = message;
      chatMessages.appendChild(userMessage);
  
      // Simulate assistant typing indicator
      var typingIndicator = document.createElement("div");
      typingIndicator.className = "chat-message assistant-message typing-indicator";
      typingIndicator.innerHTML = "<span></span><span></span><span></span>";
      chatMessages.appendChild(typingIndicator);
  
      // Simulate delay before assistant response
      setTimeout(function() {
        // Remove typing indicator
        chatMessages.removeChild(typingIndicator);
  
        // Create assistant message element
        var assistantMessage = document.createElement("div");
        assistantMessage.className = "chat-message assistant-message";
        assistantMessage.innerHTML = "<img src='avatar.jpg' class='assistant-avatar'><span class='assistant-name'>Assistant:</span> This is the assistant's response.";
        chatMessages.appendChild(assistantMessage);
  
        // Scroll to bottom of chat window
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 2000);
  
      // Clear user input
      userInput.value = "";
    }
  }