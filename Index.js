function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];

    document.getElementById('currentTimeUTC').textContent = utcTime;
    document.getElementById('currentDay').textContent = currentDay;
}

updateTime();
setInterval(updateTime, 1000);
