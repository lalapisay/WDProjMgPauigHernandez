document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login');
    if (!form) return;


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const raw = localStorage.getItem('theuser'); //checks to see if the user is in the local storage
    if (!raw) {
        alert('No users found. Please sign up first.');
        return;
    }

    let users;
    try {
        users = JSON.parse(raw);
    } catch (e) {
        console.error('Stored user data is invalid', e);
        alert('User data corrupted. Please sign up again.');
        return;
    } // the thing in the local storage isn't valid JSON so the user has to sign up again

    let found = null;
    if (Array.isArray(users)) {//checks to see if the thingy in local storage is an array or an object #thankyouw3schools
        found = users.find(user => user.username === username && user.password === password); // checks if username and password matches
    } else if (users && typeof users === 'object') {
        if (users.username === username && users.password === password) found = users; // checks if username and password matches
    }  

    if (found) {
        console.log('Login successful!!1 welcome back gng');
        localStorage.setItem('loggedInUser', JSON.stringify(found));
        localStorage.setItem("loggedInUser", "true");
        window.location.href = '../index.html';
    } else {
        alert('r u even real gng?!!1? u gotta sign up first'); //the user isn't in the local storage :(
        window.location.href = './10_SignUp.html';
    }
});});
