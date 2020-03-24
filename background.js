// Launcher script for Chrome Apps in the Chrome Web Store.
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("index.html", {
		id: "mainWindow",
		innerBounds: {
			width: 780,
			height: 520
		},
		minWidth: 780,
		minHeight: 520,
		resizable: false
	});
});