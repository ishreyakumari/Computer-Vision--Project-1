// Enhanced JavaScript for Shadow Detection Tutorial

// Set active navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Quiz functionality
function checkQuiz() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('quizResult');
    
    if (!form || !resultDiv) return;
    
    let score = 0;
    let total = 2;
    
    // Check question 1
    const q1Answer = form.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'LAB') {
        score++;
    }
    
    // Check question 2
    const q2Answer = form.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'LightingSensitive') {
        score++;
    }
    
    // Display results
    const percentage = Math.round((score / total) * 100);
    let resultClass = score === total ? 'correct' : 'incorrect';
    let message = '';
    
    if (score === total) {
        message = `🎉 Perfect! You got ${score}/${total} questions correct (${percentage}%)!`;
    } else if (score > 0) {
        message = `👍 Good try! You got ${score}/${total} questions correct (${percentage}%). Review the methods section for more details.`;
    } else {
        message = `📚 You got ${score}/${total} questions correct (${percentage}%). Don't worry, review the materials and try again!`;
    }
    
    resultDiv.innerHTML = `<div class="result ${resultClass}">${message}</div>`;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Demo image switcher
function switchDemoImage(imageName) {
    const demoImg = document.getElementById('demo-img');
    if (demoImg) {
        demoImg.src = `assets/images/${imageName}`;
        demoImg.style.opacity = '0';
        setTimeout(() => {
            demoImg.style.opacity = '1';
        }, 150);
    }
}

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

