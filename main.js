console.log("App is live.");

let selectedChannel = null;

function switchChannel(newSelectedChannel) {
    console.log(newSelectedChannel.name);
    
    document.querySelectorAll('.channel').forEach(
        function removeSelected(channel) {
            channel.classList.remove('selected');
        }
    )

    document.getElementById(newSelectedChannel.id).classList.add('selected');
    selectedChannel = newSelectedChannel;

    updateHeader(selectedChannel);
}

function updateHeader(headerForChannel) {
    document.getElementById('chosenChat').innerHTML = headerForChannel.name;
    
    document.getElementById('addToFave').innerHTML = headerForChannel.favorite ? 'favorite' : 'favorite_border';
}

function sendMessage() {
    var messageText = document.getElementById('messageInput').value;
    if (messageText.trim() === '') return;

    let currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    let messageString = '<div class="chatBlock mine"><p class="chatLog mine">' + messageText + '</p></div><p class="dateLog mine">' + currentTime + '</p>'

    const chatAreaU = document.getElementById('chatArea');

    chatAreaU.insertAdjacentHTML('beforeend', messageString);
    document.getElementById('messageInput').value = "";

    chatAreaU.scrollTop = chatAreaU.scrollHeight;
}