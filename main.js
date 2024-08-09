function init() {
    console.log("App is live.");
    // getChannels();
    // getMessages();
    loadMessagesIntoChannel();
    displayChannels();
    // loadEmojis();
    // sendMessage();

    // console.log(channels[0].messages[0])
    // console.log(channels[1].messages[0])
    // console.log(channels[2].messages[0])
    // console.log(channels[3].messages[0])
}


let selectedChannel = null;

function switchChannel(selectedChannelIndex) {
    const newSelectedChannel = channels[selectedChannelIndex];
    console.log(newSelectedChannel.name);
    
    document.querySelectorAll('.channel').forEach(
        function removeSelected(channel) {
            channel.classList.remove('selected');
        }
    )

    document.getElementById(newSelectedChannel.id).classList.add('selected');
    selectedChannel = newSelectedChannel;

    showMessages(selectedChannel);

    updateHeader(selectedChannel);
}

function updateHeader(headerForChannel) {
    document.getElementById('chosenChat').innerHTML = headerForChannel.name;
    
    document.getElementById('addToFave').innerHTML = headerForChannel.favorite ? 'favorite' : 'favorite_border';
}

function sendMessage() {
    var messageText = document.getElementById('messageInput').value;
    if (messageText.trim() === '') return;

    let currentTime = new Date();

    let messageString = '<div class="chatBlock mine"><p class="chatLog mine">' + messageText + '</p></div><p class="dateLog mine">' + currentTime + '</p>'

    const chatAreaU = document.getElementById('chatArea');

    chatAreaU.insertAdjacentHTML('beforeend', messageString);

    var sentMe = 'Josh Estrada';
    var sentTimeMe = currentTime;
    var channelID = selectedChannel.id; 
    var textMe = messageText;

    selectedChannel.messages.push(new Message(sentMe, sentTimeMe, channelID, true, textMe));

    document.getElementById('messageInput').value = "";

    chatAreaU.scrollTop = chatAreaU.scrollHeight;

    document.getElementById('messageInput').value = "";

    chatAreaU.scrollTop = chatAreaU.scrollHeight;
}

function showMessages (param_selectedChannel) {

    chatArea = document.getElementById('chatArea');
    chatArea.innerHTML = "";
    param_selectedChannel.messages.forEach(
        function loadMessages(message) {
            var sender = message.sender;
            var sentTime = message.sentTime;
            var own = message.own;
            var text = message.text;

            if (own == false) {
                var blockToPrint =  `<div class="chatBlock">
                                        <h3 class="sender">${sender}</h3><p class="chatLog">
                                        <p class="chatLog">${text}</p>
                                    </div>
                                    <p class="dateLog">${sentTime}</p>`
            }
            else {
                var blockToPrint =  `<div class="chatBlock mine">
                                        <p class="chatLog mine">${text}</p>
                                    </div>
                                    <p class="dateLog mine">${sentTime}</p>`
            }

            
            
            chatArea.insertAdjacentHTML('beforeend', blockToPrint);
        }
    )
}

// make parseDate() function to change dates to hour format, as well as include day if from yesterday or longer