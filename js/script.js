const checkbox = document.querySelector('.switch__checkbox');
const slider = document.querySelector('.switch__slider');


checkbox.addEventListener('change', handleSwitch);
slider.addEventListener('keydown', handleSwichWithKeyboard);

function setPricingMonthly() {
    document.querySelectorAll('.price--monthly').forEach(element => element.style.display='flex');
    document.querySelectorAll('.price--annually').forEach(element => element.style.display='none');
}

function setPricingAnnually() {
    document.querySelectorAll('.price--monthly').forEach(element => element.style.display='none');
    document.querySelectorAll('.price--annually').forEach(element => element.style.display='flex');
}

function handleSwitch() {
    if (checkbox.checked) {
        setPricingAnnually()
    } else {
        setPricingMonthly()
    }
    
    slider.setAttribute('aria-checked', checkbox.checked);
}

function handleSwichWithKeyboard(event) {
    // Enter or Space
    if (event.keyCode === 13 || event.keyCode === 32) {
        checkbox.checked = !checkbox.checked

        handleSwitch();
    }
}

// initial state of swich when page is reload
checkbox.checked = false;
