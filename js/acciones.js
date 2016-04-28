// JavaScript Document
$(document).ready(function(e) {
    
	document.addEventListener('device', function(){
		$('#btnvibrar').on('tap', function() {
			navigator.notification.vibrate(2000);
		});
	});
});
