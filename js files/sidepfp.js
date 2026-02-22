document.addEventListener('DOMContentLoaded', () => {
    const pfpImg = document.getElementById('side-pfp');
    if (!pfpImg) return;

    const user = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

    if (user && user.username && user.pfp) {
        pfpImg.src = user.pfp;
        pfpImg.style.display = '';
        pfpImg.addEventListener('click', () => {
            // Always go to the settings page in the public folder
            if (window.location.pathname.includes('/public/')) {
                window.location.href = './11_Settings.html';
            } else {
                window.location.href = './public/11_Settings.html';
            }
        });
    } else {
        // Hide the side pfp if not signed up/logged in
        pfpImg.style.display = 'none';
    }
});