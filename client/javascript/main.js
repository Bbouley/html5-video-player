$(document).on('ready', function() {
    var interval;
    var interval2;
    var video = new Video('testTitle', $('#mainVideo').attr('src'))
    $('#finalSubmit').hide();


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
        moveSeeker($('#mainVideo'), $('#seekingTracker'));
    });


    $('#submitAnnotation').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('#mainVideo').get(0).pause()
        $('.message').text('Now Click on the video to add your annotation');
         $('#annotationHolder').on('click', function(event) {
            event.preventDefault();
            var locObj = {
                left : event.pageX,
                top : event.pageY
            }
            var text = $('#annotationText').val().trim();
            var time = getCurrentTime($('#mainVideo'));
            video.createAnnotation(text, time, locObj)
            console.log(video);
            $('#annotationText').val('')
            $('.message').text('Now Submit!!');
            $('#finalSubmit').show()
        });
    });

    $('#finalSubmit').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('.message').text('');
        $('#submitAnnotation').show();
        $('#annotationHolder').off('click', function() {
            console.log('holderRemoved');
        });
    });


    $('#seekingBar').on('click', function(e) {
        var currentPixPosition = e.pageX -this.offsetLeft
        percentToTime(currentPixPosition, $('#mainVideo'));
        moveSeeker($('#mainVideo'), $('#seekingTracker'));
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
        var wrapperEl = $('#annotationHolder');
        var videoEl = $('#mainVideo');
        interval2 = setInterval(function() {
             $('p').remove();
            video.displayAnnotation(wrapperEl, videoEl);
        }, 50);
    };

    function annotationIntClear() {
        return clearInterval(interval2)
    };

});




