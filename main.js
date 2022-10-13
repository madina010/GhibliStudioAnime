const cards = document.querySelectorAll('.memory-card');

let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = false;

let i = 1;

    function flipCard() {
        console.log(this);
        this.classList.add('flip');

        if (lockBoard) return;
        this.classList.add('flip');

        if (this === firstCard) return;
        this.classList.add('flip');

       if (!hasFlipCard) {
        hasFlipCard = true;
        firstCard = this;

        return;
       }

       secondCard = this;
       hasFlipCard = false;

        checkForMatch();
    }


function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
        i++;

        if (i > 6) {
            let conf = false;
            conf = confirm('jkth');
            if (conf == true) document.body.className = "jkjm";
            else document.body.className = "jkjm1"
        }
        
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEvenListener('click', flipCard);
    secondCard.removeEvenListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        //lockBoard = false;
        resetBoard();
    }, 500);
}

function resetBoard() {
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}) ();


cards.forEach(cards => cards.addEventListener('click', flipCard));

