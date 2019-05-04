var removed_tag_string = '';

function myFunc(){
	var channel_partition = document.querySelectorAll('main .tw-tower');	//get channel partition list
	removed_tag = removed_tag_string.split(' ');
	console.log(removed_tag_string);
		
	channel_partition.forEach(function (item, index, array) {				//only work on second list
		if(channel_partition.length == 2 && index == 0)
			return;
		var k;
		for (k =0 ; k<item.childNodes.length; k++) { 						//for each channel
			var subitem = item.childNodes[k];
			var tag_list = subitem.getElementsByTagName("button");
			var i;
			for (i = 0; i<tag_list.length ; i++) {							//for each tag
				tag_name = tag_list[i].getAttribute("data-a-target");

				if (removed_tag.includes(tag_name)){
					item.removeChild(subitem);
					k--;
					break;
				}
			}
		};
	});
}
document.addEventListener("DOMContentLoaded",function(){
	document.addEventListener("keypress", function(){
		myFunc();
	});
	document.addEventListener('wheel', function(){
		myFunc();
	});
	myFunc();
});
	document.addEventListener("keypress", function(){
		myFunc();
	});
	document.addEventListener('wheel', function(){
		myFunc();
	});
	myFunc();