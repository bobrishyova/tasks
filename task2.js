// 2. As a web page developer, you want to perform some actions that will be initiated 
// from JavaScript code, like pasting data into the local clipboard, 
// but this action is failing although copy & paste usually works with many sites, can you explain why?

document.ondragstart = noselect
document.onselectstart = noselect
document.oncontextmenu = noselect
function noselect() {
	return false
} 

// или такая блокировка

let disableSelection = (elem) => {
	if (typeof elem.onselectstart !== "undefined") {
		return false
	}
	elem.style.cursor = "default"
}
disableSelection(document.body)

// Can you find a way to make this possible?

// Вся защита заключается в отлавливании событий мыши средствами JavaScript. 
// Можно остановить работу js и попробовать скопировать. 
// Также можно отключить js, или noscript/adblock.

document.ondragstart = select
document.onselectstart = select
document.oncontextmenu = select
select = () => {
	return true
} 