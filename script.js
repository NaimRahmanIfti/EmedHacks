function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    var input = document.getElementById('chat-input').value.trim();
    if (input) {
        var messageContainer = document.createElement('div');
        messageContainer.innerText = input;
        document.querySelector('.chat-messages').appendChild(messageContainer);
        document.getElementById('chat-input').value = ''; // Clear input after sending
    }
}
