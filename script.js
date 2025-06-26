document.addEventListener('DOMContentLoaded', function() {
    
    // --- KODE FOR STICKY NAVIGATION OG SCROLL-TO-TOP ---
    const nav = document.querySelector('.sticky-nav');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Funksjon som kjører når brukeren scroller
    window.onscroll = function() {
        // Logikk for sticky navigation
        if (nav) {
            if (window.pageYOffset > nav.offsetTop) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        
        // Logikk for å vise/skjule "til toppen"-knappen
        if (scrollToTopBtn) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }
    };

    // Funksjon for å scrolle jevnt til toppen når knappen klikkes
    if (scrollToTopBtn) {
        scrollToTopBtn.onclick = function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // --- KODE FOR MODAL/GALLERI PÅ PROSJEKTSIDER ---
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const galleryImages = document.querySelectorAll(".gallery img");
    const closeSpan = document.querySelector(".modal .close");

    galleryImages.forEach(img => {
        img.onclick = function() {
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }
    });

    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    if (closeSpan) {
        closeSpan.onclick = closeModal;
    }
    
    if (modal) {
        modal.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }
    }
});