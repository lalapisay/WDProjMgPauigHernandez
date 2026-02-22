document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const DEFAULT_PFP = 'assets/ootuff.png';

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

        

        

        function saveUser(pfpUrl) {
            const theuser = {
                username: username,
                email: email,
                password: password,
                pfp: pfpUrl
            };

            localStorage.setItem('theuser', JSON.stringify(theuser));
            localStorage.setItem('loggedInUser', JSON.stringify(theuser));
            alert('Sign up successful');
            localStorage.setItem("loggedInUser", "true");
            window.location.href = '../index.html'; 
            
        }

        // If there's a file input with id 'pfp' (optional), read it and save as data URL.
        const fileInput = document.getElementById('pfp');
        if (fileInput && fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                const dataUrl = e.target.result;
                saveUser(dataUrl);
            };
            reader.onerror = function () {
                // If reading fails, fall back to default
                saveUser(DEFAULT_PFP);
            };
            reader.readAsDataURL(file);
        } else {
            // No upload provided — use default image path
            saveUser(DEFAULT_PFP);
        }
       
    });
});
