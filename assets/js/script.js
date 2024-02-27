// Set the date for the countdown (10 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

// Update the countdown every second
const intervalId = setInterval(() => {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
document.getElementById('remaining').textContent = targetDate;
  

  // If the timer has expired, reset it
  if (timeRemaining < 0) {
    clearInterval(intervalId);
    targetDate.setDate(targetDate.getDate() + 10); // Reset to current date + 10 days
    // You can also perform any other action here when the timer resets
  }
}, 1000); // Update every second

