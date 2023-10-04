document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".projeto img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Mostra a primeira imagem
    showImage(currentIndex);

    // Inicia a troca automática a cada 3 segundos (3000ms)
    setInterval(nextImage, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#show-or-hide');
    var container = document.querySelector('.container');

    btn.addEventListener('click', function () {
        if (container.style.display === 'block' || container.style.display === '') {
            container.style.display = 'none';
        } else {
            container.style.display = 'block';
            container.style.position = 'fixed';
            container.style.top = '40%';
            container.style.left = '80%';
            container.style.transform = 'translate(-50%, -50%)';
        }
    });
});

