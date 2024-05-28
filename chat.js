// chat.js
const socket = io('192.168.50.79:3000');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');

function sendMessage() {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        socket.emit('chat message', messageText);
        messageInput.value = '';
    }
}

socket.on('chat message', function(msg) {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
