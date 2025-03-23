function sendMessage() {
    const message = document.getElementById("message").value;
    const chatWindow = document.getElementById("chat-window");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    chatWindow.appendChild(newMessage);
    document.getElementById("message").value = "";
}
