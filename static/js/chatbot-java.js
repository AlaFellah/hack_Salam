function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return; // Prevent empty messages

    // Create user message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    // Auto-scroll chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get bot response
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerText = botResponse;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Simple bot responses
function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes("hello")) return "Hi there! How can I assist you?";
    if (input.includes("how are you")) return "I'm just a bot, but I'm doing great!";
    if (input.includes("your name")) return "I'm your friendly chatbot!";
    if (input.includes("bye")) return "Goodbye! Have a great day!";
    
    return "I'm not sure I understand. Can you rephrase?";
}
