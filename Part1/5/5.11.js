let date = new Date(2012, 1, 20, 3, 12);
console.log(date);


function weekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}


function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { day = 7 }
    return day;
}


function getDateAgo(date, days) {
    let date2 = new Date(date);
    date2.setDate(date.getDate() - days);
    return date2.getDate();
}


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}


function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
}



function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}


function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    }
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' сек. назад';
    }
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}