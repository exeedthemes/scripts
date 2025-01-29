        let adUrls = [
            "https://example1.com",  // Replace with your ad URL 1
            "https://example2.com"   // Replace with your ad URL 2
        ];
        let interval = 10000; // 10 seconds
        let adIndex = 0;

        function openPopUnder() {
            let newWin = window.open(adUrls[adIndex], "_blank");
            if (newWin) {
                newWin.blur();
                window.focus();
            }
            adIndex = (adIndex + 1) % adUrls.length; // Alternate between URLs
        }

        document.addEventListener("click", () => {
            setInterval(openPopUnder, interval);
        }, { once: true }); // Ensures the event is attached only once
