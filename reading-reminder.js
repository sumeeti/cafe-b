document.addEventListener("DOMContentLoaded", function () {
    const reminderPopup = document.getElementById("reminder-popup");
    const closeReminder = document.getElementById("close-reminder");
    const setReminderBtn = document.getElementById("set-reminder");

    // Function to show the popup
    function showReminder() {
        reminderPopup.style.display = "block";
    }

    // Close popup when clicking the close button
    closeReminder.addEventListener("click", function () {
        reminderPopup.style.display = "none";
    });

    // Set a reminder (For now, just a simple alert to simulate functionality)
    setReminderBtn.addEventListener("click", function () {
        alert("Reminder set! We will remind you to continue reading.");
        reminderPopup.style.display = "none";
    });

    // Simulating a reminder after 5 seconds (You can change this logic)
    setTimeout(showReminder, 5000);
});
