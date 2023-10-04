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
