let navToggleElement = document.querySelector('.nav__toggle');
let navDropdownElement = document.querySelector('.nav__list--dropdown');
let faqTogglerBtn = document.querySelectorAll('.faq__toggler');
let faqFooterAnsheet = document.querySelectorAll('.faq__footer');
let faqHeaderQu = document.querySelectorAll('.faq__header')

navToggleElement.addEventListener('click', (e) => {
    e.preventDefault();
    navDropdownElement.classList.toggle("nav__dropdown--active");
    navToggleElement.classList.toggle('nav__toggle-bg');
})

faqTogglerBtn.forEach((faqTogglerElement) => {
    faqTogglerElement.addEventListener('click', () => {
        faqFooterAnsheet.forEach((faqFooterAnsheetElement) => {
            faqFooterAnsheetElement.classList.remove('active-faq');
        })
        faqTogglerElement.closest('.faq__item').classList.toggle('active-faq');
        faqTogglerElement.classList.toggle('faq__toggler__transform');
    })
})  

let createPlanBtn = document.querySelector('.plan__create--btn');
let mainModalElement = document.querySelector('.mainModal');
let modalCloseElement = document.querySelector('.close__pur__button');

createPlanBtn.addEventListener('click', (e) => {
    e.preventDefault();

    mainModalElement.classList.add('active-modal');
})

modalCloseElement.addEventListener('click', (e) => {
    e.preventDefault();

    mainModalElement.classList.remove('active-modal');
})