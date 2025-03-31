//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
    const fontForm = document.getElementById("fontForm");

    // Function to get cookie value
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    // Function to set cookie value
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + "; path=/" + expires;
    }

    // Load saved preferences
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
        fontSizeInput.value = savedFontSize;
    }
    if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        fontColorInput.value = savedFontColor;
    }

    // Save preferences on form submit
    fontForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        setCookie("fontsize", fontSize, 7);
        setCookie("fontcolor", font
