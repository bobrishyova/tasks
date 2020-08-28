// 3. You developed web pages that are on different domains and each of them is opened 
// in a separate browser tab, how can you share information between these tabs.

// Добавить «mode: ‘cors’» в конфигурацию запроса.


// 4. In a browser there is an option to “open link in new tab”, 
// which opens that tab in the background while the focus remains on the current tab. 
// You need to provide your own custom implementation for that option which has the same behavior 
// (but does some more custom functionally). i.e. open a new tab in the background.

// Нашла код, который не работает с последней версией Chrome. 
// Он позволяет перейти на новую вкладку, но фокус не остаётся у родителя.

const openNewBackgroundTab = (url) => {
    const anchor = document.createElement("a")
    anchor.href = url
    document.body.appendChild(anchor)
    const evt = document.createEvent("MouseEvents")
    evt.initMouseEvent(
      "click", true, true, window, 0, 0, 0, 0, 0,
      true, false, false, false, 0, null
    )
    anchor.dispatchEvent(evt)
  }
  openNewBackgroundTab('https://learn.javascript.ru/popup-windows')