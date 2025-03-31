//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
    const fontForm = document.getElementById("fontForm");

    // Function to get cookie value
    const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    };

    // Load saved preferences
    const savedFontSize = getCookie('fontsize');
    const savedFontColor = getCookie('fontcolor');

    if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
        fontSizeInput.value = savedFontSize;
    }
    if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        fontColorInput.value = savedFontColor;
    }

    // Save preferences on form submit
    fontForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        document.cookie = `fontsize=${fontSize}; path=/`;
        document.cookie = `fontcolor=${fontColor}; path=/`;

        document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
        document.documentElement.style.setProperty('--fontcolor', fontColor);
    });
});
