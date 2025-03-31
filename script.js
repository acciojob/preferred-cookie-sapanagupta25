
        document.addEventListener("DOMContentLoaded", function () {
            const fontSizeInput = document.getElementById("fontsize");
            const fontColorInput = document.getElementById("fontcolor");
            const fontForm = document.getElementById("fontForm");

            function getCookie(name) {
                const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                return match ? match[2] : null;
            }

            function setCookie(name, value, days) {
                let expires = "";
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + value + "; path=/" + expires;
            }

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

            fontForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const fontSize = fontSizeInput.value;
                const fontColor = fontColorInput.value;
                setCookie("fontsize", fontSize, 7);
                setCookie("fontcolor", fontColor, 7);
                document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
                document.documentElement.style.setProperty('--fontcolor', fontColor);
            });
        });
   