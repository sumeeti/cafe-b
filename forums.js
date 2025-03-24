<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Café Bibliophile Forums</title>
    <link rel="stylesheet" href="forums.css">
</head>
<body>
    <header>
        <h1>Café Bibliophile Forums</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="profile.html">Profile</a>
            <a href="forums.html" class="active">Forums</a>
        </nav>
    </header>

    <main>
        <section class="forum-section">
            <h2>Join a Discussion</h2>
            <ul id="forum-list">
                <!-- Forum threads will be dynamically added here -->
            </ul>
        </section>

        <section class="create-forum">
            <h2>Create a New Discussion</h2>
            <input type="text" id="forum-title" placeholder="Enter forum title">
            <textarea id="forum-description" placeholder="Write a short description"></textarea>
            <button id="create-forum-btn">Create Forum</button>
        </section>
    </main>

    <script src="forums.js"></script>
</body>
</html>
