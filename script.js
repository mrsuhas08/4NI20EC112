// Get references to elements
const navLinks = document.querySelectorAll('nav a');
const section = document.querySelector('main section');

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        section.innerHTML = `You clicked on ${link.textContent} link.`;
    });
});