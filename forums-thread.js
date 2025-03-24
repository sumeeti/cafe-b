document.addEventListener("DOMContentLoaded", function () {
    const forumList = document.getElementById("forum-list");
    const createForumBtn = document.getElementById("create-forum-btn");
    const forumTitleInput = document.getElementById("forum-title");
    const forumDescInput = document.getElementById("forum-description");

    // Sample forums (Replace with database integration later)
    let forums = [
        { title: "Favorite Books", description: "Discuss your favorite books with others!" },
        { title: "Coffee & Reads", description: "What’s your go-to book and coffee combo?" },
        { title: "Writing Corner", description: "Share your stories, poems, and ideas!" }
    ];

    // Function to render forums
    function displayForums() {
        forumList.innerHTML = "";
        forums.forEach((forum, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${forum.title}</strong><p>${forum.description}</p>`;
            li.addEventListener("click", () => openForum(index));
            forumList.appendChild(li);
        });
    }

    // Function to create a new forum
    createForumBtn.addEventListener("click", function () {
        const title = forumTitleInput.value.trim();
        const description = forumDescInput.value.trim();

        if (title && description) {
            forums.push({ title, description });
            displayForums();
            forumTitleInput.value = "";
            forumDescInput.value = "";
        } else {
            alert("Please enter a title and description for the forum.");
        }
    });

    // Function to open a forum (placeholder for actual forum page)
    function openForum(index) {
        alert(`Opening forum: ${forums[index].title}`);
        // Future: Redirect to a detailed forum page
    }

    // Initial display of forums
    displayForums();
});
