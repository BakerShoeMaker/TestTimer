
window.onload = function() {
    console.log("hello world");

    startTimer();

}
function startTimer(){

    var timer = new Timer();
    $('#chronoExample .startButton').click(function () {
        timer.start();
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
}