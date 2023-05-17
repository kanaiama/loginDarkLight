const modeDark = document.getElementById('moon-id');
const modeLight = document.getElementById('sun-id')

modeDark.addEventListener('click', () => {
    const form = document.getElementById('login-form');

    if(modeDark.classList.contains('moon')) {
        form.classList.add('dark');
        form.classList.remove('light')
        return;
    }
})

modeLight.addEventListener('click', () => {
    const form = document.getElementById('login-form');
    
    if(modeLight.classList.contains('sun')) {
        form.classList.add('light')
        form.classList.remove('dark')
        return;
    }

})