(function($) {
    "use strict";

    $( document ).on( "ready", function(){

        var $counter = $('#counter');

        cordova.plugins.barcodeScanner.scan(
          function (result) {
                $counter.text( result.text );
              alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
          }, 
          function (error) {
              alert("Scanning failed: " + error);
          }
        );

/*
        var $counter = $('#counter');
        $counter.text( 'I wanna be a billionaire!');

        $.get( 'http://192.168.1.40:4000/counter', {} )
            .done(function ( data ) {
                // console.log('should have gotten data');
                // console.log( data.counter );
                $counter.html( data.counter );
            })
            .fail( function() {
                // console.log('screwed up!');
            });
    });

*/

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);

