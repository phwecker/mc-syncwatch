# mc-syncwatch

This is a sample on how to create synchronized playback using VideoJS and Azure SignalR Service as the communiation channel. It is based on the azure SignalR Service Chat example.

You need to deploy the Azure Functions code and then host the HTML on e.g. Azure Storage, or run the entire thing locally in VSCode for testing.

The HTML source has the location of two sample videos used on the VideoJS demo page.

# Functionality

You can start a number of client windows and provide the channel name (any unique string will do). The channel name will define which windows will be grouped and synched, so if you open four windows, two using "channelA" and two using "channelB", all windows using "channelA" will be in one sync group, and so on.

During startup it will ask you also for a URL to the API, this is where you are runnign the functions app, eitehr URL to Azure or your local instance running.

Implemented commands :

- src::<link to the video> - thsi will set the video source
- play - this will initiate play (if will automatically add the timecode fo the initiators player and sync all other players to it)
- pause - this will initiate pause
- sync::time - will sync the timecode fo the initiator to all clients
- sync::src - will sync the source to all clients

# Good to know

- once a client is started (api URL and channel name is provided) you need to interact with the window (e.g. click the message field, etc.) to activate it for incoming events.
- when you sync timing that is far away from the previous play position, it is good to pause the playback before syncing and then give the clients time to navigate to the new position and fetch the video data, otherwise you might have an offset across the players. in any case, if you submit a play command they will sync again.

# Required Config

- Create a SignlaR Sevice in Azure
- Provide the Connect String in the functions settings of in local.settings (if executed locally)
