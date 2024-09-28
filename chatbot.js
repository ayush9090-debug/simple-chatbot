// Function to display messages on the screen
function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
}

// Event listener for the Send button
document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        // Display user message on the chat window
        displayMessage(userInput, 'user-message');

        

        // Clear the input field
        document.getElementById('user-input').value = '';
    }
});
