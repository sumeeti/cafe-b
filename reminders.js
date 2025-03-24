document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    // Show popup
    popup.style.display = "block";

    // Close popup on button click
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Auto close after 5 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 5000);
});
