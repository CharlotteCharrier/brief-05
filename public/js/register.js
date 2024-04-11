window.addEventListener('load', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.location.href = '/'
    })
})