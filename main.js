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


var selectedChannel = null;

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
    document.getElementById('inputArea').style.display = 'flex';
}

document.getElementById('addToFave').addEventListener('click', favoritize);
function favoritize() {
    if(selectedChannel == null) {
        return;
    }
    else{
        if(selectedChannel.favorite == false) {
            selectedChannel.favorite = true;
        }
        else if(selectedChannel.favorite == true) {
            selectedChannel.favorite = false;
        }
    }
    updateHeader(selectedChannel);
    displayChannels();
}


function updateHeader(headerForChannel) {
    document.getElementById('chosenChat').innerHTML = headerForChannel.name;
    
    document.getElementById('addToFave').innerHTML = headerForChannel.favorite ? 'favorite' : 'favorite_border';
}

function sendMessage() {
    var messageText = document.getElementById('messageInput').value;
    if (messageText.trim() === '') return;

    let currentTime = new Date();

    let messageString = '<div class="chatBlock mine"><p class="chatLog mine">' + messageText + '</p></div><p class="dateLog mine">' + parseDate(currentTime) + '</p>'

    const chatAreaU = document.getElementById('chatArea');

    chatAreaU.insertAdjacentHTML('beforeend', messageString);

    var sentMe = 'Josh Estrada';
    var sentTimeMe = currentTime;
    var channelID = selectedChannel.id; 
    var textMe = messageText;

    selectedChannel.messages.push(new Message(sentMe, sentTimeMe, channelID, true, textMe));
    displayChannels();

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
                                    <p class="dateLog">${parseDate(sentTime)}</p>`
            }
            else {
                var blockToPrint =  `<div class="chatBlock mine">
                                        <p class="chatLog mine">${text}</p>
                                    </div>
                                    <p class="dateLog mine">${parseDate(sentTime)}</p>`
            }

            
            
            chatArea.insertAdjacentHTML('beforeend', blockToPrint);
        }
    )
}

function parseDate (date24) {
    const now = new Date();
    now_hours = now.getHours();
    now_minutes = now.getMinutes();
    now_seconds = now.getSeconds();
    now_milliseconds = now.getMilliseconds();
    recentMidnight = (now_hours * 60 * 60 * 1000) + (now_minutes * 60 * 1000) + (now_seconds * 1000) + now_milliseconds;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const hours = date24.getHours() % 12;
    const hours_suffix = date24.getHours() < 12 ? "AM" : "PM";
    const minutes = date24.getMinutes() < 10 ? `0${date24.getMinutes()}` : date24.getMinutes();
    if (date24.getTime() < recentMidnight) {
        return `${days[date24.getDay()]}, ${hours}:${minutes} ${hours_suffix}`;
    }
    else {
        return `${days[date24.getDay()]}, ${hours}:${minutes} ${hours_suffix}`; 
    }
}