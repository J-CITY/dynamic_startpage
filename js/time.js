const FORMAT_12 = 0;
const FORMAT_24 = 1;
var timeFormat = FORMAT_24;

function updateTimeAndWall() {
    updateTime();
    setWallpaper();
}

function updateTime() {
    let currentTime = new Date();
    let timeStr = format24(currentTime);
    document.getElementById('time').innerHTML = timeStr;
    var t = setTimeout(updateTime, 500);
}

function format12(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    let preference = localStorage.getItem('secondscb');
    //var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    var strTime = hours + ':' + minutes + 
        (preference === 'true' ? (':' + seconds) : '') + 
        ' ' + ampm;
    return strTime;
}

function format24(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let status = " PM "
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    let preference = localStorage.getItem('secondscb');
    //var strTime = hours + ":" + minutes + ":" + seconds;
    var strTime = hours + ":" + minutes +
        (preference === 'true' ? ':' + seconds : '');
    return strTime;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function onClickTime() {
    timeFormat = !timeFormat;
};




 