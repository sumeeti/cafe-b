document.addEventListener("DOMContentLoaded", function () {
    const bookTitleInput = document.getElementById("book-title");
    const totalPagesInput = document.getElementById("total-pages");
    const pagesReadInput = document.getElementById("pages-read");
    const saveProgressBtn = document.getElementById("save-progress");

    const displayBook = document.getElementById("display-book");
    const displayPages = document.getElementById("display-pages");
    const displayTotal = document.getElementById("display-total");
    const progressFill = document.querySelector(".progress-fill");

    // Load saved progress from local storage
    function loadProgress() {
        const savedBook = localStorage.getItem("currentBook");
        const savedPages = localStorage.getItem("pagesRead");
        const savedTotal = localStorage.getItem("totalPages");

        if (savedBook && savedPages && savedTotal) {
            displayBook.textContent = savedBook;
            displayPages.textContent = savedPages;
            displayTotal.textContent = savedTotal;
            updateProgressBar(savedPages, savedTotal);
        }
    }

    // Save progress to local storage
    saveProgressBtn.addEventListener("click", function () {
        const bookTitle = bookTitleInput.value.trim();
        const totalPages = totalPagesInput.value;
        const pagesRead = pagesReadInput.value;

        if (bookTitle === "" || totalPages <= 0 || pagesRead < 0) {
            alert("Please enter valid details.");
            return;
        }

        localStorage.setItem("currentBook", bookTitle);
        localStorage.setItem("totalPages", totalPages);
        localStorage.setItem("pagesRead", pagesRead);

        displayBook.textContent = bookTitle;
        displayPages.textContent = pagesRead;
        displayTotal.textContent = totalPages;
        updateProgressBar(pagesRead, totalPages);
    });

    // Update the progress bar
    function updateProgressBar(pagesRead, totalPages) {
        const progress = (pagesRead / totalPages) * 100;
        progressFill.style.width = progress + "%";
    }

    loadProgress(); // Load progress when page loads
});
