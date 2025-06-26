document.addEventListener('DOMContentLoaded', function() {
    
    // --- KODE FOR SCROLL-TO-TOP KNAPP ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Funksjon som kjører når brukeren scroller
    window.onscroll = function() {
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
            event.preventDefault(); // Forhindrer at # legges til i URL-en
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Myk, animert scrolling
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