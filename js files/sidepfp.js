document.addEventListener('DOMContentLoaded', () => {
    const pfpImg = document.getElementById('side-pfp');
    if (!pfpImg) return;

    function readStoredUser(key) {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch {
            return null;
        }
    }

    const user = readStoredUser('loggedInUser') || readStoredUser('theuser');

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