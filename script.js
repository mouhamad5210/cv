// Vent til hele HTML-dokumentet er lastet før skriptet kjøres
document.addEventListener('DOMContentLoaded', function() {
    
    // Hent de nødvendige HTML-elementene
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const galleryImages = document.querySelectorAll(".gallery img");
    const closeSpan = document.querySelector(".modal .close");

    // Gå gjennom hvert bilde i galleriet og legg til en klikk-lytter
    galleryImages.forEach(img => {
        img.onclick = function() {
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }
    });

    // Funksjon for å lukke modalen
    function closeModal() {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Legg til en klikk-lytter på lukkeknappen (X) for å lukke modalen
    if (closeSpan) {
        closeSpan.onclick = closeModal;
    }
    
    // --- START PÅ ERSTATTET KODE ---
    // Legg til en klikk-lytter på hele vinduet for å feilsøke
    window.onclick = function(event) {
        // Skriver ut informasjon til konsollen for å se hva som blir klikket på
        console.log("Klikket på element:", event.target);
        
        // Sjekker om elementet som ble klikket på er selve modal-bakgrunnen
        if (event.target == modal) {
            console.log("Korrekt! Klikket på modal-bakgrunnen. Lukker modalen.");
            closeModal();
        } else {
            console.log("Feil. Klikket ikke på modal-bakgrunnen.");
        }
    }
    // --- SLUTT PÅ ERSTATTET KODE ---
});