const interestOne = document.querySelector('.interest-one');
const interestTwo = document.querySelector('.interest-two');
const interestThree = document.querySelector('.interest-three');

const shapeOne = document.querySelector('.shape-one');
const shapeTwo = document.querySelector('.shape-two');
const shapeThree = document.querySelector('.shape-three');

const photoText = document.querySelector('.interest-one-text');
const gamingText = document.querySelector('.interest-two-text');
const creatingText = document.querySelector('.interest-three-text');

interestOne.addEventListener('mouseover', function() {
    scale(shapeOne);
    photoText.style = "display: flex;";
});
interestOne.addEventListener('mouseout', function() {
    descale(shapeOne);
    photoText.style = "display: none;";
});

interestTwo.addEventListener('mouseover', function() {
    scale(shapeTwo);
    gamingText.style = "display: flex;";
});
interestTwo.addEventListener('mouseout', function() {
    descale(shapeTwo);
    gamingText.style = "display: none;";
});

interestThree.addEventListener('mouseover', function() {
    scale(shapeThree);
    creatingText.style = "display: flex;";
});
interestThree.addEventListener('mouseout', function() {
    descale(shapeThree);
    creatingText.style = "display: none;";
});

function scale(shape) {
    shape.style = "transform: scale(1.2);";
};

function descale(shape) {
    shape.style = "transform: scale(1);";
};