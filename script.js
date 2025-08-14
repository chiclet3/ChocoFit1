document.addEventListener("DOMContentLoaded", () => {
    // Animação de fade-in para a imagem principal
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(element);
    });

    // Animação das letras do texto principal
    const introTextElement = document.querySelector('.intro-text p');
    const animatedTextContainer = document.querySelector('.animated-text');

    if (introTextElement && animatedTextContainer) {
        const text = introTextElement.textContent;
        animatedTextContainer.innerHTML = ''; // Limpa o texto original
        text.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter; // Mantém espaços
            span.style.animationDelay = `${index * 0.05}s`;
            animatedTextContainer.appendChild(span);
        });

        const letterSpans = document.querySelectorAll('.animated-text span');
        const observerLetters = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    letterSpans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                        span.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                    });
                    observerLetters.unobserve(animatedTextContainer);
                }
            });
        }, { threshold: 0.5 });

        observerLetters.observe(animatedTextContainer);
    }
});
