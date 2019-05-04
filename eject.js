
document.addEventListener("DOMContentLoaded", function (){
	chrome.tabs.executeScript({file:"script.js"}, function (){});
	chrome.storage.sync.get(function (data) {
		var removed_tag = data.removed_tag;
		document.getElementById("removed_tag").value = removed_tag
	});
	document.getElementById("removed_tag").addEventListener("change", function(){
		removed_tag_string = document.getElementById("removed_tag").value;
		removed_tag_list = removed_tag_string.split(' ');
		chrome.storage.sync.set({
			"removed_tag":removed_tag_string
		});
		chrome.tabs.executeScript({code:"removed_tag_string = \""+removed_tag_string+"\";"}, function (){
			chrome.tabs.executeScript({code:"myFunc();"}, function (){});
		});
	});
});