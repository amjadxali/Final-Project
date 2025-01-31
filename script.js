document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const portfolioSection = document.getElementById('portfolioSection');

    toggleButton.addEventListener('click', function() {
        if (portfolioSection.style.display === 'none') {
            portfolioSection.style.display = 'block';
        } else {
            portfolioSection.style.display = 'none';
        }
    });
});