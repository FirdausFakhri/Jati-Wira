document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // 1. Mobile Menu Toggle Functionality
    mobileMenu.addEventListener('click', () => {
        // Toggle the 'active' class on both the menu icon and the navigation links
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // 2. Close Mobile Menu when a link is clicked (for smooth scroll)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the menu is active (i.e., on a mobile view)
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
            // Optional: Prevent default hash jump and handle smooth scroll (already handled by CSS scroll-behavior: smooth)
        });
    });

    // 3. Simple Header Class Change on Scroll (for subtle elegance)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.backdropFilter = 'none';
        }
    });

    // script.js (Add this after your existing scroll and menu logic)

// --- 4. Image Gallery Lightbox Functionality ---
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('caption');
const closeModal = document.querySelector('.modal-close');

// Function to open the modal
function openModal(imageSrc, captionText) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalCaption.innerHTML = captionText;
}

// Attach click listeners to all gallery items (assuming you use the 'gallery-item' class)
document.querySelectorAll('.gallery-item').forEach(item => {
    // Note: You must update your index.html to add a 'data-src' and 'data-caption' 
    // to each .gallery-item for this to work properly.
    
    // For now, we'll use the background image URL and the overlay text as a fallback
    // If you update your HTML as recommended below, this part will be more accurate.

    // This is the listener that opens the modal
    item.addEventListener('click', () => {
        // Simple way to extract background image URL and overlay text
        const backgroundStyle = item.style.backgroundImage;
        const imageSrc = backgroundStyle ? backgroundStyle.slice(5, -2) : ''; // Extracts URL from 'url("...")'
        const captionText = item.querySelector('.overlay') ? item.querySelector('.overlay').textContent : 'Security Image';
        
        if (imageSrc) {
            openModal(imageSrc, captionText);
        }
    });
});


// Function to close the modal when 'X' is clicked
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Function to close the modal when the user clicks anywhere outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});