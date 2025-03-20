document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded');
});
document.addEventListener('DOMContentLoaded', function() {
    
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach(badge => {
        const tech = badge.textContent.toLowerCase().trim();
        badge.classList.add(tech);
    });
    
   
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
   
    setTimeout(() => {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
            }, index * 100);
        });
    }, 300);
    
   
    document.querySelector('.nav-links a').classList.add('active');
});