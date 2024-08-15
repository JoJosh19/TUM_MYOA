let chNum = 4;

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
        function addHTMLString_1 (channel, index) {
            if(channel.messages.length > 0) {
                channel.lastSentTime = channel.messages[channel.messages.length - 1].sentTime;
            }
        }
    )

    const rec = new Date();
    channels.sort((ch1, ch2) => (rec - ch1.lastSentTime) - (rec - ch2.lastSentTime));

    channels.forEach(
        function addHTMLString_2 (channel, index) {
            const currentChannelHTMLString = `<li id="${channel.id}" class="channel" onclick="switchChannel(${index})">${channel.name}<span class="dateLastActive">${parseDate(channel.lastSentTime)}</span></li>`;            
            if (channel.favorite) {
                favoritesList.insertAdjacentHTML('beforeend', currentChannelHTMLString);
            } 
            else {
                regularList.insertAdjacentHTML('beforeend', currentChannelHTMLString);
            }
        }
    )
}

function showPop() {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('addChPop').showPopover();
}
function hidePop() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('addChPop').hidePopover();
}

function addChannel() {
    var channelName = document.getElementById('channelInput').value;
    if (channelName.trim() === '') return;
    var nowCh = new Date();
    chNum = chNum + 1;
    channels.push(new Channel(`channel_${chNum}`, channelName, false, nowCh));
    displayChannels();
    document.getElementById('channelInput').value = "";
}