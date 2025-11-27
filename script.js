// Détection du système d'exploitation
function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let osName = 'Windows';
    
    if (userAgent.match(/Win/)) osName = 'Windows';
    else if (userAgent.match(/Mac/)) osName = 'macOS';
    else if (userAgent.match(/Linux/)) osName = 'Linux';
    
    return osName;
}

// Afficher le système d'exploitation détecté
window.addEventListener('DOMContentLoaded', function() {
    const detectedOS = document.getElementById('detectedOS');
    detectedOS.textContent = detectOS();
});

// Gestion du téléchargement
function handleDownload() {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fermer la modal
function closeModal() {
    const modal = document.getElementById('downloadModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Télécharger l'application
function downloadApp(os) {
    const downloadUrls = {
        windows: 'https://example.com/download/windows',
        mac: 'https://example.com/download/mac',
        linux: 'https://example.com/download/linux'
    };
    
    // Remplacez les URLs par vos vraies URLs de téléchargement
    const url = downloadUrls[os];
    
    // Tracker l'événement (optionnel, pour Google Analytics, etc.)
    if (window.gtag) {
        gtag('event', 'download', {
            'download_os': os,
            'timestamp': new Date().toISOString()
        });
    }
    
    // Message de confirmation
    alert(`Téléchargement de la version ${os.charAt(0).toUpperCase() + os.slice(1)} en cours...\n\nVeuillez configurer votre URL de téléchargement dans le code JavaScript.`);
    
    // Décommenter pour un vrai téléchargement:
    // window.location.href = url;
    
    closeModal();
}

// Contacter l'équipe commerciale
function contactSales() {
    const email = 'sales@afpmarketing.com';
    const subject = 'Demande d\'information - Plan Entreprise';
    const body = 'Je suis intéressé par le plan Entreprise de Bitrix24 Report Generator.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Fermer la modal en cliquant en dehors
window.addEventListener('click', function(event) {
    const modal = document.getElementById('downloadModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Fermer la modal avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll pour les navigateurs qui ne le supportent pas nativement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Ajouter des effets de parallaxe légers lors du scroll
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-illustration');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
});

// Animation des comptes au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.feature-card, .pricing-card, .benefit-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Gestion du bouton de téléchargement principal
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', handleDownload);
}

console.log('Application Bitrix24 Report Generator - Chargée avec succès');
