document.addEventListener("DOMContentLoaded", function () {
    const discussionPosts = document.getElementById("discussion-posts");
    const replyInput = document.getElementById("reply-input");
    const postReplyBtn = document.getElementById("post-reply");

    // Sample posts (Replace with backend fetch logic)
    const posts = [
        { username: "Alice", message: "What’s your favorite book and why?" },
        { username: "Bob", message: "I absolutely love ‘Pride and Prejudice’! The character development is amazing." }
    ];

    function loadPosts() {
        discussionPosts.innerHTML = "";
        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<strong>${post.username}:</strong> ${post.message}`;
            discussionPosts.appendChild(postDiv);
        });
    }

    postReplyBtn.addEventListener("click", function () {
        const replyText = replyInput.value.trim();
        if (replyText !== "") {
            posts.push({ username: "You", message: replyText });
            replyInput.value = "";
            loadPosts();
        }
    });

    loadPosts(); // Initial load of posts
});
