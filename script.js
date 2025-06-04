 // Dark Mode Toggle for desktop
        const desktopCheckbox = document.getElementById('checkbox');
        const mobileCheckbox = document.getElementById('mobile-checkbox');

        // Initial setup for dark mode
        document.addEventListener('DOMContentLoaded', () => {
            if (document.body.classList.contains('dark-mode')) {
                desktopCheckbox.checked = true;
                if (mobileCheckbox) {
                    mobileCheckbox.checked = true;
                }
            } else {
                desktopCheckbox.checked = false;
                if (mobileCheckbox) {
                    mobileCheckbox.checked = false;
                }
            }
        });

        desktopCheckbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            if (mobileCheckbox) {
                mobileCheckbox.checked = desktopCheckbox.checked;
            }
        });

        if (mobileCheckbox) {
            mobileCheckbox.addEventListener('change', () => {
                document.body.classList.toggle('dark-mode');
                desktopCheckbox.checked = mobileCheckbox.checked;
            });
        }

        // Hamburger Menu Toggle
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const mobileNav = document.getElementById('mobile-nav');

        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Background Effects JavaScript
        const backgroundEffectsContainer = document.querySelector('.background-effects');

        // Function to create falling characters
        function createFallingCharacter() {
            const chars = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي']; // Basic Arabic alphabet
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            const charElement = document.createElement('span');
            charElement.classList.add('falling-char');
            charElement.textContent = randomChar;

            // Random position across the width of the screen
            const startX = Math.random() * window.innerWidth;
            charElement.style.left = `${startX}px`;

            // Random size and animation duration
            const randomSize = Math.random() * (2.5 - 1.2) + 1.2; // From 1.2em to 2.5em
            charElement.style.fontSize = `${randomSize}em`;
            const randomDuration = Math.random() * (15 - 8) + 8; // From 8s to 15s
            charElement.style.animationDuration = `${randomDuration}s`;
            const randomDelay = Math.random() * 5; // Up to 5s delay
            charElement.style.animationDelay = `${randomDelay}s`;

            // Random horizontal drift
            const randomXOffset = Math.random() * 100 - 50; // -50px to 50px drift
            charElement.style.setProperty('--fall-x-offset', `${randomXOffset}px`);

            // Random color for the characters
            const colors = ['#e74c3c', '#9b59b6', '#5ba3d3', '#f1c40f', '#2ecc71', '#3498db']; // A set of vibrant colors
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            charElement.style.color = randomColor;

            backgroundEffectsContainer.appendChild(charElement);

            // Remove character after animation ends to prevent DOM bloat
            charElement.addEventListener('animationend', () => {
                charElement.remove();
            });
        }

        // Generate a continuous stream of falling characters
        setInterval(createFallingCharacter, 500); // Create a new character every 500ms

        // You can dynamically set initial positions/delays for .glow elements if needed
        // For now, they are hardcoded in CSS with nth-child, which is simpler for a few elements.
