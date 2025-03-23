let totalPages = 1;
let pagesRead = 0;

const ctx = document.getElementById("progressChart").getContext("2d");
let progressChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Pages Read", "Remaining Pages"],
        datasets: [
            {
                data: [0, 1],
                backgroundColor: ["#4CAF50", "#ddd"],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
});

function updateProgress() {
    let total = parseInt(document.getElementById("totalPages").value) || 1;
    let readToday = parseInt(document.getElementById("pagesRead").value) || 0;

    if (total > 0) {
        totalPages = total;
    }

    pagesRead += readToday;
    if (pagesRead > totalPages) {
        pagesRead = totalPages;
    }

    let remainingPages = totalPages - pagesRead;

    progressChart.data.datasets[0].data = [pagesRead, remainingPages];
    progressChart.update();
}
