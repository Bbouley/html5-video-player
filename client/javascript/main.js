$(document).on('ready', function() {
    var interval;
    var interval2;
    var video = new Video('testTitle', $('#mainVideo').attr('src'))


    $('#play').on('click', function() {
        $('#mainVideo').get(0).play();
        seek(interval);
        annotationIntStart();
    });


    $('#pause').on('click', function() {
        $('#mainVideo').get(0).pause();
        clear(interval);
        annotationIntClear()
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
        $('#annotationText').val('')
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

    function annotationIntStart() {
        var wrapperEl = $('.annotationHolder');
        var videoEl = $('#mainVideo');
        interval2 = setInterval(function() {
             $('p').remove();
            video.displayAnnotation(wrapperEl, videoEl);
        }, 500);
    };

    function annotationIntClear() {
        return clearInterval(interval2)
    };

});




