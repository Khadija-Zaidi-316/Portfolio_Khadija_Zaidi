 // Toggle mobile menu
        const menuToggle = document.getElementById('menuToggle');
        const navbar = document.getElementById('navbar');
        const menuIcon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
                menuToggle.setAttribute('aria-label', 'Close menu');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Open menu');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Open menu');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active link highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');

            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 300)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });

            // If at top of page, highlight home link
            if (window.scrollY < 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('nav a[href="#home"]').classList.add('active');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navbar.contains(event.target) && !menuToggle.contains(event.target) && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Open menu');
            }
        });
    