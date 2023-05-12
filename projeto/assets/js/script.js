const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form');

    if(mode.classList.contains('moon')) {
        form.classList.add('dark');
        return;
    }
    if(mode.classList.contains('sun')) {
        form.classList.remove('dark');
        return;
    }
    form.classList.add('light')
    form.classList.remove('dark');
    
})