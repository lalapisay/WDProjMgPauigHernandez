document.addEventListener('DOMContentLoaded', () => {
    const signup = document.getElementById('sign_up');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser && signup) {
        signup.style.display = 'none';
    }
});