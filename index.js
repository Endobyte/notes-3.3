const cardList = document.querySelector('.cardList');

buildBoard();

let score = 0;
let scoreText = document.getElementById('score');
let content = document.getElementById('content');

let interval = setInterval(function() {
    addCard(cardList.children.length + 1) // make it start at 1, not 0
}, 2000);

cardList.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.matches('.cardlist')) {
        return
    }
    if (e.target.classList.contains('active')) {
        score++;
        scoreText.innerHTML = `SCORE: ${score}`;
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    if (e.target.classList.contains('inactive')) {
        score += 2;
        scoreText.innerHTML = `SCORE: ${score}`;
        e.target.remove();
    }
    let children = cardList.children;
    if (children.length < 1) {
        clearInterval(interval);
        scoreText.remove();
        let finalScore = document.createElement('h1');
        finalScore.innerHTML = `Your final score was ${score}!`;
        content.appendChild(finalScore);
        let restartButton = document.createElement('button');
        restartButton.innerHTML = 'Restart';
        content.appendChild(restartButton);
        restartButton.addEventListener('click', function() {
            location.reload();
        })
    }
})

function addCard(value) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}

function buildBoard() {
    for (let i = 0; i < 12; i++) {
        addCard('This is a starter card.');
    }
}