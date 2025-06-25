const rating_btns = document.querySelectorAll('.rate-btn');
const submit_btn = document.getElementById('submit-btn');
const rating_result = document.getElementById("selected-rating");
const container = document.getElementById("container");
const thank_container = document.getElementById("thank-container");

let rate = 0;
rating_btns.forEach(rating => {
    rating.addEventListener('click', () => {
        rate = rating.innerHTML;

    });

});
submit_btn.addEventListener('click', () => {
    console.log(`${rate} is clicked`);
    container.style.display = 'none';
    thank_container.style.display = 'flex';
    rating_result.innerText = `You selected ${rate} out of 5`

});