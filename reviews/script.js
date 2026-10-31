const card = document.getElementById('card');
const img = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');
const prevBtn = document.getElementById('prev-btn');
const randomBtn = document.getElementById('random-btn');
const nextBtn = document.getElementById('next-btn');

let reviews = [
    {
        id: 1,
        name: 'John Doe',
        job: 'Web Developer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        job: 'Graphic Designer',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        job: 'Project Manager',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        id: 4,
        name: 'Emily Davis',
        job: 'UX/UI Designer',
        text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 5,
        name: 'Guilherme Souza',
        job: 'Front-End Developer',
        text: 'Gostei bastante do curso, mas acredito que poderia ter mais exemplos práticos.'
    }
];

let currentItem = 4;

let showReview = () => {
    const item = reviews[currentItem];
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
};

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showReview();
});

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showReview();
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview();
});

window.addEventListener('DOMContentLoaded', () => {
    showReview();
});