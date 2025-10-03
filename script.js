// Tab Navigation
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetSection = tab.getAttribute('data-section');

        // Remove active class from all tabs and sections
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // Add active class to clicked tab and corresponding section
        tab.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.strength-card, .skill-card, .spec-card, .cert-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add hover effects to contact buttons
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Animate stats on view
const animateStats = () => {
    const statCards = document.querySelectorAll('.stat-card');

    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, index * 100);
    });
};

// Initial setup for stats animation
document.querySelectorAll('.stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Trigger stats animation when about section is active
const aboutSection = document.getElementById('about');
if (aboutSection.classList.contains('active')) {
    setTimeout(animateStats, 300);
}

// Re-trigger animation when about tab is clicked
tabs.forEach(tab => {
    if (tab.getAttribute('data-section') === 'about') {
        tab.addEventListener('click', () => {
            setTimeout(animateStats, 300);
        });
    }
});
// --- WhatsApp Contact Form ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("wName").value.trim();
    const email = document.getElementById("wEmail").value.trim();
    const message = document.getElementById("wMessage").value.trim();

    if (name === "" || message === "") {
      alert("⚠️ Please enter your name and message.");
      return;
    }

    // 📱 HR / Recruiter WhatsApp number (add your number here)
    const phoneNumber = "916374808172"; // Example: 91 + phone (India)

    // 🔗 Create WhatsApp message
    const fullMessage = `Hello, I'm ${name}.\n${email ? "Email: " + email + "\n" : ""}Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    // 🌐 Open WhatsApp
    window.open(url, "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("profilePhoto");
  profileImg.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          profileImg.src = event.target.result;
          localStorage.setItem("myProfilePhoto", event.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // Load saved image (if any)
  const savedPhoto = localStorage.getItem("myProfilePhoto");
  if (savedPhoto) {
    profileImg.src = savedPhoto;
  }
});
