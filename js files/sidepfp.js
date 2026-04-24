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

    function saveStoredUser(key, userData) {
        if (!userData || typeof userData !== 'object') return;
        localStorage.setItem(key, JSON.stringify(userData));
    }

    function updateStoredPfp(pfpUrl) {
        if (!pfpUrl) return;

        const keys = ['loggedInUser', 'theuser'];
        keys.forEach((key) => {
            const stored = readStoredUser(key);
            if (stored && stored.username) {
                stored.pfp = pfpUrl;
                saveStoredUser(key, stored);
            }
        });
    }

    function showPfpPopup(imageSrc) {
        if (!imageSrc) return;

        let overlay = document.getElementById('pfp-popup-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'pfp-popup-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '9999';
            overlay.style.cursor = 'pointer';

            const popupImage = document.createElement('img');
            popupImage.id = 'pfp-popup-image';
            popupImage.style.maxWidth = '80%';
            popupImage.style.maxHeight = '80%';
            popupImage.style.border = '4px solid white';
            popupImage.style.borderRadius = '20px';
            overlay.appendChild(popupImage);

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
            });

            document.body.appendChild(overlay);
        }

        const popupImage = document.getElementById('pfp-popup-image');
        popupImage.src = imageSrc;
        overlay.style.display = 'flex';
    }

    const user = readStoredUser('loggedInUser') || readStoredUser('theuser');
    if (user && user.username && user.pfp) {
        pfpImg.src = user.pfp;
        pfpImg.style.display = '';
        pfpImg.addEventListener('click', () => {
            if (window.location.pathname.includes('/public/')) {
                window.location.href = './11_Settings.html';
            } else {
                window.location.href = './public/11_Settings.html';
            }
        });
    } else {
        pfpImg.style.display = 'none';
    }

    const settingsPfp = document.getElementById('pfp');
    const profilePicInput = document.getElementById('profilePicInput');

    if (settingsPfp) {
        settingsPfp.style.cursor = 'pointer';
        if (user && user.pfp) {
            settingsPfp.src = user.pfp;
        }
        settingsPfp.addEventListener('click', () => showPfpPopup(settingsPfp.src));
    }

    if (profilePicInput && settingsPfp) {
        profilePicInput.addEventListener('change', (event) => {
            const file = event.target.files && event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target.result;
                settingsPfp.src = dataUrl;
                pfpImg.src = dataUrl;
                updateStoredPfp(dataUrl);
            };
            reader.readAsDataURL(file);
        });
    }
});