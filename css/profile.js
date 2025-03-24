document.addEventListener("DOMContentLoaded", function() {
    loadProfile();
});

function loadProfile() {
    let username = localStorage.getItem("username") || "John Doe";
    let bio = localStorage.getItem("bio") || "A book lover who enjoys coffee and cozy reads.";
    let profilePic = localStorage.getItem("profilePic") || "default-avatar.png";
    
    document.getElementById("username").textContent = username;
    document.getElementById("bio").textContent = bio;
    document.querySelector(".profile-pic").src = profilePic;
}

function editProfile() {
    window.location.href = "edit-profile.html";
}

function saveProfile() {
    let username = document.getElementById("username").value;
    let bio = document.getElementById("bio").value;
    let profilePicInput = document.getElementById("profile-pic");
    
    if (username) localStorage.setItem("username", username);
    if (bio) localStorage.setItem("bio", bio);
    
    if (profilePicInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem("profilePic", event.target.result);
            window.location.href = "profile.html";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        window.location.href = "profile.html";
    }
}

function cancelEdit() {
    window.location.href = "profile.html";
}
