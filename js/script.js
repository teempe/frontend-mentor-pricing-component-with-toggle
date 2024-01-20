const checkbox = document.querySelector('.switch__checkbox');

checkbox.addEventListener('change', handleSwitch);

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
}

// initial state of swich when page is reload
checkbox.checked = false;
