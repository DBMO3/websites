// Open WhatsApp
function openWhatsApp() {
    window.open("https://wa.me/527361033455");
}

function DarkModeToggle() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    darkModeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });
}