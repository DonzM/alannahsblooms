// create variables of the object elements
const deliveryGuy = document.getElementById('delivery-guy');
const fireHydrant = document.getElementById('fire-hydrant');
const score = document.getElementById('score');
const startGame = document.getElementById('start-game');
const message = document.getElementById('game-message');

function jump() {
    deliveryGuy.classList.add('jump-action');
    setTimeout(() => {
        deliveryGuy.classList.remove('jump-action');
    }, 500);
}

document.addEventListener('keydown', () => {
    jump();
})

//start game when button pressed
function strtGame() {
    fireHydrant.style.animation = "fireHydrant 1.75s infinite";

    //Game loop that checks the position of the Delivery Guy and hydrant in intervals
    setInterval(() => {
        score.innerText++;
        const deliveryGuyTop = parseInt(window.getComputedStyle(deliveryGuy).getPropertyValue('top'));
        const fireHydrantLeft = parseInt(window.getComputedStyle(fireHydrant).getPropertyValue('left'));
        //console.log(deliveryGuyTop);
        console.log(fireHydrantLeft);
        if (fireHydrantLeft < 0 || fireHydrantLeft > 599) {
            fireHydrant.style.display = "none";
s
        } else {
            fireHydrant.style.display = "";
        }

        // collision detection
        if (fireHydrantLeft < 50 && fireHydrantLeft > 0 && deliveryGuyTop > 150) {
            alert("You got a score of " + score.innerText + "\n\n Play Again?");
            location.reload();
            fireHydrant.style.animation = "";
        }
    }, 50);
}