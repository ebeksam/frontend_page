function updateDateTime() {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    
    dayOfWeekElement.textContent = `${dayOfWeek}`;

    const currentUTCTime = new Date().toUTCString();
    
    utcTimeElement.textContent = `${currentUTCTime}`;
}

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();







