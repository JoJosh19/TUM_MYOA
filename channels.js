function Channel (id, name, favorite, lastSentTime) {
    this.id = id;
    this.name = name;
    this.favorite = favorite;
    this.lastSentTime = lastSentTime;
    this.messages = [];
}

const channels = [
    new Channel("channel_1", "Java Journey Buddies", false, "1:00 PM"),
    new Channel("channel_2", "Estrada Fam", true, "1:00 PM"),
    new Channel("channel_3", "CAPS Consulting", false, "1:00 PM"),
    new Channel("channel_4", "Office of Rep. Presley", false, "1:00 PM")
]

// trying to add "favorites" functionality

function displayChannels() {
    const favoritesList = document.getElementById('favoriteCh');
    const regularList = document.getElementById('regularCh');   
    favoritesList.innerHTML = "";
    regularList.innerHTML = "";

    channels.forEach(
        function addHTMLString (channel, index) {
            const currentChannelHTMLString = `<li id="${channel.id}" class="channel" onclick="switchChannel(${index})">${channel.name}<span class="dateLastActive">${channel.lastSentTime}</span></li>`;

            if (channel.favorite) {
                favoritesList.innerHTML += currentChannelHTMLString;
            } 
            else {
                regularList.innerHTML += currentChannelHTMLString;
            }

        }
    )
}