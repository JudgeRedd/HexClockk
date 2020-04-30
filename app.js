$(document).ready(function() {
    updateClock()
    setInterval(updateClock, 1000);
})

$('body').dblclick(function() {
    var elem = document.documentElement; 
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
        }
})

function updateClock() {

    var dt = new Date();
    var hrs = unFuckTime(dt.getHours());
    var mins = unFuckTime(dt.getMinutes());
    var secs = unFuckTime(dt.getSeconds());

    var hex = getSexy(hrs, mins, secs)
    var althex = getKinky(getSexy(hrs, mins, secs), 0.8)

    $('.clock--time').text(hrs + ":" + mins + ":" + secs);

    $('body').css('background-color', hex)
    $('.clock--time, .giticon').css('color', althex)
    $('.clock--time').lettering();
    
    $('span[class^=char]').css('text-shadow', '0px 3px 0px ' + getKinky(getSexy(hrs, mins, secs), 1.5) + ', 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.2), 0px 34px 30px rgba(0,0,0,0.4)')
}

function unFuckTime(x) {
    if (x < 10) {
        return x = '0' + x;
    }
    else {
        return x;
    }
}

function getSexy(h, m, s) {
    return '#' + h + m + s
}

function getKinky(hex, lum) {

	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

