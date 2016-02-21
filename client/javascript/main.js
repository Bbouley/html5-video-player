$(document).on('ready', function() {

    var interval;

    $('#play').on('click', function() {
        $('#mainVideo').get(0).play();
        seek(interval);
    });

    $('#pause').on('click', function() {
        $('#mainVideo').get(0).pause();
        clear(interval);
    });

    $('#volumeUp').on('click', function() {
        if(maxVol($('#mainVideo').get(0).volume) === true) {
            $('.message').text('Volume Is Already At MAX');
        } else {
            $('#mainVideo').get(0).volume += 0.05;
        }
    });

    $('#volumeDown').on('click', function() {
        $('.message').text('');
        if(minVol($('#mainVideo').get(0).volume) === true) {
            $('#mainVideo').get(0).volume = 0;
            $('.message').text('Volume Is Already At MIN');
        } else {
            $('#mainVideo').get(0).volume -= 0.05;
        }
    });

    $('#restart').on('click', function() {
        $('#mainVideo').get(0).currentTime = 0;
        $('#mainVideo').get(0).play();
    });

    // *** Helpers for scoped interval *** //

    function seek() {
        interval = setInterval(function() {
            moveSeeker($('#mainVideo'), $('#seekingTracker'))
            console.log('things');
        }, 500);
    };

    function clear() {
        return clearInterval(interval);
    };

});




