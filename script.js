document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function showSection(sectionToShow) {
        sections.forEach(section => {
            if (section.id === sectionToShow) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            const sectionToShow = panel.getAttribute('data-section');
            showSection(sectionToShow);
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionToShow = link.getAttribute('data-section');
            showSection(sectionToShow);
        });
    });

    // Show the About section by default
    showSection('about');
});
