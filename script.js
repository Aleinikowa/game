let logo = document.getElementById('mainScreenLogo'),
    mainScreenImg = document.getElementById('mainScreenImg'),
    search = document.getElementById('search'),
    child1 = document.getElementById('child1'),
    child2 = document.getElementById('child2'),
    child3 = document.getElementById('child3'),
    mainHeight = document.getElementById('main').offsetHeight,
    btnPrevMainBlock = document.getElementById('main-leftBtn'),
    btnNextMainBlock = document.getElementById('main-rightBtn'),
    mainTrack = document.getElementById('track'),
    position = 0,
    movePosition;

window.onload = () => {
    let sectionWidth = document.getElementById('section').offsetWidth;

    if (sectionWidth > 2000) {
        movePosition = 1500;
    } else  {
        movePosition = 1000;
    }
}

btnNextMainBlock.onclick = () => {
    position += movePosition;
    mainTrack.style.transform = `translateX(-${position}px)`;
    btnPrevMainBlock.disabled = position === 0;
    btnNextMainBlock.disabled = position === (movePosition * 2);
};

btnPrevMainBlock.onclick = () => {
    position -= movePosition;
    mainTrack.style.transform = `translateX(-${position}px)`;
    btnPrevMainBlock.disabled = position === 0;
    btnNextMainBlock.disabled = position === (movePosition * 2);
};


window.addEventListener('scroll', function()  {
    let value = window.scrollY;
    logo.style.top = '-' + value + 'px';
    mainScreenImg.style.top = (value / 2) + 'px';

    if (value >= 100) {
        search.style.backgroundColor = 'rgba(255,255,255,0.2)';
        search.style.borderBottom = '1px solid #dfe2d1';
    }

    if (value === 0) {
        logo.style.top = '20%';
        search.style.backgroundColor = 'rgba(255,255,255,0)';
        search.style.borderBottom = '1px solid rgba(255,255,255,0)';
    }

    if (value > mainHeight / 2) {
        child1.style.animationName = 'slideInleft';
        child2.style.animationName = 'slideInRight';
        child3.style.animationName = 'slideInRight';
    }

})