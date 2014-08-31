(function($) {
    "use strict";

    $( document ).on( "ready", function(){
        var $counter = $('#counter');
        $counter.text( 'I wanna be a billionaire!');

        $.get( '/counter', {} )
            .done(function ( data ) {
                // console.log('should have gotten data');
                // console.log( data.counter );
                $counter.html( data.counter );
            })
            .fail( function() {
                // console.log('screwed up!');
            });
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);
