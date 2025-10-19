const btnsignin = document.getElementById('btn-sign-in');
const btnsignup = document.getElementById('btn-sign-up');
const forms = document.getElementById('forms');
const sidebar = document.getElementById('sidebar');

btnsignin.addEventListener('click', () => {
    changeSignin();
});

btnsignup.addEventListener('click', () => {
    changeSignup();
});

function changeSignin() {
    forms.classList.remove('active');
    sidebar.classList.remove('active');
}

function changeSignup() {
    forms.classList.add('active');
    sidebar.classList.add('active');
}
