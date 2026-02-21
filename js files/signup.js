document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = (document.getElementById('username') || {}).value || '';
        const email = (document.getElementById('email') || {}).value || '';
        const password = (document.getElementById('password') || {}).value || '';
        const confirmPassword = (document.getElementById('confirm_password') || {}).value || '';
        console.log(username, email, password, confirmPassword);

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            alert('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            console.error('Password must be at least 8 characters long');
            alert('Password must be at least 8 characters long');
            return;
        }

        const theuser = {
            username: username,
            email: email,
            password: password,
        };

        localStorage.setItem('theuser', JSON.stringify(theuser));
        alert('Sign up successful');
        //window.location.href = './12_LoginPage.html'; // optional redirect
    });
});
