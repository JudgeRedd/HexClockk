$(document).ready(function() {
    setInterval(updateClock, 1000);
})

function updateClock() {
    var dt = new Date();

    var hrs = unFuckTime(dt.getHours());
    var mins = unFuckTime(dt.getMinutes());
    var secs = unFuckTime(dt.getSeconds());

    $('.clock--time').text(hrs + ":" + mins + ":" + secs);

    $('.clock--container').css('background-color','#' + hrs + mins + secs)
}

function unFuckTime(x) {
    if (x < 10) {
        return x = '0' + x;
    }
    else {
        return x;
    }
}