let currentPage = 0;
const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");
let isAnimating = false;

function startBook() {
    const intro = document.getElementById("intro");
    const book = document.getElementById("bookContainer");

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        book.style.display = "flex";
        pages[0].style.display = "flex";

        setTimeout(() => {
            pages[0].classList.add("active");
        }, 20);

        updateProgress();
    }, 600);
}

function nextPage() {
    if (isAnimating) return;
    isAnimating = true;

    const current = pages[currentPage];
    current.classList.remove("active");

    setTimeout(() => {
        current.style.display = "none";
        currentPage++;

        if (currentPage < pages.length) {
            const next = pages[currentPage];
            next.style.display = "flex";
            setTimeout(() => {
                next.classList.add("active");
            }, 20);
            updateProgress();
        }

        if (currentPage === pages.length - 1) {
            nextBtn.style.display = "none";
            progressContainer.style.display = "none";
        }

        isAnimating = false;
    }, 400);
}

function updateProgress() {
    // Calculates progress based on the total number of pages
    const percent = (currentPage / (pages.length - 2)) * 100;
    progressBar.style.width = percent + "%";
}

function blowCandles() {
    const blowBtn = document.getElementById("blowBtn");
    const message = document.getElementById("finalMessage");
    const sparklers = document.querySelectorAll(".sparkler");

    // "Extinguish" the stars
    sparklers.forEach(s => s.style.display = "none");

    blowBtn.style.display = "none";

    confetti({
        particleCount: 250,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffccd5']
    });

    message.innerText = "That was just the beginning. I Hope u are .";
}
// If images are loading with incorrect dimensions
function fixImageSizing() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.objectFit = 'cover';
    });
}

// Call after images load
window.addEventListener('load', fixImageSizing);