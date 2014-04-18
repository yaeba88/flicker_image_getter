// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {
	$('#searchButton').on('click', function(keyword){
		$('#resultArea').children().remove();
		var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&jsoncallback=drawImg&tags=' + $('#keyword').val();
		var script = $('<script/>').attr({src: url});
		$('head').append(script);
	});
}

function drawImg(result) {
	var bossan_url = 'http://netyougo.com/wp-content/uploads/2011/11/001154.jpg';

	for(var i = 0; i<result.items.length; i++) {
		var pic = document.createElement('img');
		var random = Math.floor(Math.random() * 50);

		// if(random == 0) pic.src = bossan_url;
		// else pic.src = result.items[i].media.m;
		pic.src = result.items[i].media.m;
		
		$('#resultArea').append(pic);
	}
}
