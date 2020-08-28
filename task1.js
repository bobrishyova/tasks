// 1. You are injecting JavaScript into a page you got from the internet and you want to change 
// the behavior of Window.open, how can you do it via the injected script?

// In the page, there are a dynamic number of movie elements, that uses JW player, 
// and you want to change the existing play behavior to be "jump 5 seconds ahead and play" 
// for all of the videos. How can this be done? 

function loadVideoByUrlWithSize(elementId, videoUrl, videoThumbnail, width, height) {
	jwplayer(elementId).setup({
		file: videoUrl,
		type: 'flv',
		image: videoThumbnail,
		width,
		height,
	})
	jwplayer(elementId).seek(5)
 }

// Is there anything that a JW player developer can do to his JavaScript code to block such injections?

let maxPlayPosition = 0
let seeking = false
jwplayer().onTime((event) => {
	if (!seeking) {
		maxPlayPosition = Math.max(event.position, maxPlayPosition)
	}
}).onPlaylistItem(() => {
	maxPlayPosition = 0 
}).onSeek((event) => {
	if (!seeking) {
		if (event.offset > maxPlayPosition) {
			seeking = true;
			setTimeout(() => {
				jwplayer().seek(maxPlayPosition)
			}, 100)
		}
	} else seeking = false
})

// How will your answer be different if the browser default player is used?