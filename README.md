Known problems:
Youtube will detect copywrite videos, and stop copywrite songs/videos from playing. If your music suddenly stops playing this is the likely cause.


Build instructions:
1. Clone repo.
2. npm install
3. Create a discord bot. Ensure you give the bot "Server members Intent" and "Message Content Intent"
4. Authenticate the bot. Add it to your server with the administrator privliges, or manually give the bot the correct permissions.
5. paste client ID
6. run: $ node index.js


User instructions:

Copy paste a youtube URL into any text channel on the discord server. The bot will join your channel and start playing the youtube video.
Currently there is no queue function. Posting another youtube URL will stop the current video and start the new video.
