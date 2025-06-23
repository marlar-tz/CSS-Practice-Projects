const toggle_btns = document.querySelectorAll('.toggle-btn');
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const listItem = question.closest('.list-item');
        const answer = listItem.querySelector('.answer');
        const button = question.querySelector('button');
        const icon = button.querySelector('img');
        const isOpen = button.getAttribute('data-state') === 'open';

        if (isOpen) {
            answer.style.display = 'none';
            icon.src = './assets/images/icon-plus.svg';
            button.setAttribute('data-state', 'closed');
        } else {
            answer.style.display = 'block';
            icon.src = './assets/images/icon-minus.svg';
            button.setAttribute('data-state', 'open');
        }
    });
});


