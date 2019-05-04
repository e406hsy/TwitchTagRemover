
document.addEventListener("DOMContentLoaded", function (){
	chrome.tabs.executeScript({file:"script.js"}, function (){
			chrome.tabs.executeScript({code:"myFunc();"}, function (){});
	});
	chrome.storage.sync.get(function (data) {
		var removed_tag = data.removed_tag;
		document.getElementById("removed_tag").value = removed_tag
		chrome.tabs.executeScript({code:"removed_tag_string = \""+removed_tag_string+"\";"}, function (){});
	});
	/*
	document.getElementById("removed_tag").addEventListener("change", function(){
		removed_tag_string = document.getElementById("removed_tag").value;
		chrome.storage.sync.set({
			"removed_tag":removed_tag_string
		});
		chrome.tabs.executeScript({code:"removed_tag_string = \""+removed_tag_string+"\";"}, function (){
			chrome.tabs.executeScript({code:"myFunc();"}, function (){});
		});
	});*/
	document.getElementById("update").addEventListener("click", function (){
		removed_tag_string = document.getElementById("removed_tag").value;
		chrome.storage.sync.set({
			"removed_tag":removed_tag_string
		});
		chrome.tabs.executeScript({code:"removed_tag_string = \""+removed_tag_string+"\";"}, function (){
			chrome.tabs.executeScript({code:"myFunc();"}, function (){});
		});
	});
});