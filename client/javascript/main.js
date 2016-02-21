$(document).on('ready', function() {
    var interval;
    var video = new Video('testTitle', $('#mainVideo').attr('src'))


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


    $('form').on('submit', function(e) {
        e.preventDefault();
        var text = $('#annotationText').val().trim();
        var time = getCurrentTime($('#mainVideo'));
        var annotation = createAnnotation(text, time);
        video.addAnnotation(annotation);
        video.displayAnnotation($('.message'));
    });




    // *** Helpers for scoped interval *** //

    function seek() {
        interval = setInterval(function() {
            moveSeeker($('#mainVideo'), $('#seekingTracker'));
        }, 500);
    };

    function clear() {
        return clearInterval(interval);
    };

});




