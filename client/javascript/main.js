$(document).on('ready', function() {

    $('#play').on('click', function() {
        $('#mainVideo').get(0).play();
    });

    $('#pause').on('click', function() {
        $('#mainVideo').get(0).pause();
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

});





