var links = document.querySelectorAll('.link');

function addActive() {
    links.forEach(element => {
        element.addEventListener('click', function() {
            removeActive();
            element.classList.add('active');
        })
    })
};

function removeActive() {
    links.forEach(element => {
        element.classList.remove('active');
    })
};

addActive();