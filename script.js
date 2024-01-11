const dropDownMenu = document.querySelector('.dropdown-menu');
const dropDownOptions = document.querySelector('.dropdown-options');

const serviceOptions = document.querySelector('.service-options');
const serviceOptionsDrop = document.querySelector('.service-options-drop');
const dLinks = document.querySelector('.service-options');

dropDownMenu.addEventListener('click', e => {
    dropDownOptions.classList.toggle('show-menu')
});



serviceOptions.addEventListener('click', () => {
    if (serviceOptions.classList.contains('focus')) {
        serviceOptionsDrop.classList.add('focus');
    }else {
        classList.remove('focus');
    }
    console.log('added')
})


dLinks.addEventListener('click', () => {
    serviceOptionsDrop.classList.toggle('focus');

    console.log('redone')
})









