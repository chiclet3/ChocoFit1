document.addEventListener("DOMContentLoaded", () => {
    // Configura o Intersection Observer para as animações
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleciona os elementos a serem animados
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Aplica o observer em cada elemento
    animatedElements.forEach(element => {
        // Define o estilo inicial para a animação
        element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        observer.observe(element);
    });
});

