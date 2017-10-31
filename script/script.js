$(document).ready(function() { 
    setTimeout(modalWindow, 500);
	 
});


			function modalWindow() {
    var overlay = $('#overlay');
	var modalWindow = $('.modal_div'); 
    var closeWindow = $('#cancel'); 
	var transition = $('#ok');
    overlay.fadeIn(1000, function(){ 
                 $('#modal_window').css('display', 'block').animate({opacity: 1, top: '20%'}, 2000); 
         });

     closeWindow.click( function(){ 
            modalWindow.animate({opacity: 0, top: '20%'}, 200, function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(1000); 
                 }
             );
     });
	 
	 transition.click(function() {
		 location.href='http://www.google.com/';
	 });
	 
}