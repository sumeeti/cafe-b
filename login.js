/* Login Page Styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #fbeee6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.login-card {
    background: #fff3e6;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 350px;
}

h2 {
    color: #8b4513;
}

p {
    color: #6b4226;
    font-size: 14px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    text-align: left;
    font-weight: bold;
    color: #8b4513;
}

input {
    padding: 8px;
    border: 1px solid #d4a373;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffaed;
}

button {
    background-color: #d4a373;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #b87333;
}

a {
    color: #8b4513;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}
