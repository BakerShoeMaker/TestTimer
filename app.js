
window.onload = function() {
    console.log("hello world");

    startTimer();

}
function startTimer(){


    // var timer = new Timer();
    // timer.start({countdown: true, startValues: {seconds: 30}});
    // //timer.start({countdown: 'seconds', startValues: {seconds: 60}});
    // $('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
    //
    // timer.addEventListener('secondsUpdated', function (e) {
    //     $('#startValuesAndTargetExample .values').html(timer.getTimeValues().toString());
    //     $('#startValuesAndTargetExample .progress_bar').html($('#startValuesAndTargetExample .progress_bar').html() + '.');
    // });
    //
    // timer.addEventListener('targetAchieved', function (e) {
    //     $('#startValuesAndTargetExample .progress_bar').html('COMPLETE!!');
    // });

    //----------------------------------------------------------
    var g = 300;
    var timer = new Timer();
    $('.startButton').click(function () {
        timer.start();
        //timer.start({countdown: true, startValues: {seconds: g}});
    });
    $('#chronoExample .pauseButton').click(function () {
        timer.pause();
    });
    $('#chronoExample .stopButton').click(function () {
        timer.stop();
    });
    $('#chronoExample .resetButton').click(function () {
        timer.reset();
    });

    timer.addEventListener('secondsUpdated', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('started', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });
    timer.addEventListener('reset', function (e) {
        $('#chronoExample .values').html(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function (e) {
        console.log("THE EVENT IS COMPLETE!!!!!!!");
    });
    //--------------------------------------------------------------------------
}