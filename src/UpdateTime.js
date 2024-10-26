

export default function updateTime(timeZone) {

    function getClockDate(timeZone) {
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const formatter = new Intl.DateTimeFormat([], options);
        const dateTimeParts = formatter.formatToParts(new Date());
    
        // Create a new date object based on the formatted parts
        const hours = parseInt(dateTimeParts.find(part => part.type === 'hour').value, 10);
        const minutes = parseInt(dateTimeParts.find(part => part.type === 'minute').value, 10);
        const seconds = parseInt(dateTimeParts.find(part => part.type === 'second').value, 10);
    
        const clockDate = new Date();
        clockDate.setHours(hours);
        clockDate.setMinutes(minutes);
        clockDate.setSeconds(seconds);
        
        return clockDate;
    }

    const clockDate = getClockDate(timeZone);

    const now = new Date();
    const hours = String(clockDate.getHours()).padStart(2, '0');
    const minutes = String(clockDate.getMinutes()).padStart(2, '0');
    const seconds = String(clockDate.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = currentTime;
}