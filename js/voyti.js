document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-btn');
    const menu = document.getElementById('menu');

    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', function() {
            menu.classList.toggle('show-menu');
        });
    }

    const questions = document.querySelectorAll('.questions_inner1 button');
    questions.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Пример генерации уникального кода для клиента
    const clientCodeElem = document.getElementById('clientCode');
    if (clientCodeElem) {
        clientCodeElem.textContent = 'CL' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'