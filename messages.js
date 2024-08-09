function Message (sender, sentTime, channelID, own, text) {
    this.sender = sender;
    this.sentTime = sentTime;
    this.channelID = channelID;
    this.own = own;
    this.text = text;
}

const messages = [
    new Message("Micah Estrada", new Date('July 22, 2024 13:49:00'), "channel_2", false, "I don't know where it is, Mom."),
    new Message("Melody Estrada", new Date('July 22, 2024 13:56:00'), "channel_2", false, "Did you try checking under your bed? I know I saw a lot of clothes piled up there last night."),
    
    new Message("Josh Estrada", new Date('July 23, 2024 14:37:00'), "channel_1", true, "Help me out!"),


    new Message("Micah Estrada", new Date('July 22, 2024 14:01:00'), "channel_2", false, "It's not theeeere. I already cleaned it up when you asked me hahaha."),
    new Message("John Estrada", new Date('July 22, 2024 14:25:00'), "channel_2", false, "Wasn't your jacket with Kuya when he was filming that one project? Hey Kuya, can you check your cabinets."),
    new Message("Josh Estrada", new Date('July 23, 2024 14:37:00'), "channel_2", true, "Woah woah woah. Wait a minute. Why you all roping me into this? HAHA. Of course I wouldn't have the slightest idea!"),

    new Message("Eric Castillo", new Date('July 23, 2024 14:37:00'), "channel_3", false, "Josh. Where is our Accomplishment Report?"),
    new Message("Josh Estrada", new Date('July 23, 2024 14:37:00'), "channel_3", true, "Will send tonight, Sir."),
    new Message("Eric Castillo", new Date('July 23, 2024 14:37:00'), "channel_3", false, "Ok."),

    new Message("Rep. Presley", new Date('July 23, 2024 14:37:00'), "channel_4", false, "Good work, everyone."),
]

function loadMessagesIntoChannel() {
    messages.forEach(
        function sortMessages (message) {
            
            channels.forEach(
                function findChannel (channel) {
                    if (channel.id == message.channelID) {
                        channel.messages.push(message);
                    } 
                }    
            )

        }
    )
}