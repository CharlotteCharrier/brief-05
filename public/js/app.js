window.addEventListener('DOMContentLoaded', async () => {
    const mainElement = document.querySelector('main');
    const logoutBtn = document.querySelector('button');
    const token = sessionStorage.getItem('token');

    if(!token) {
        document.location.href = '/login.html'
        return
    }

    const user = await fetch('/users/current', {
        headers: {
            'Authorization': `${token}`
        }
    })
    .then(async response => {
        if(response.ok) {
            return response.json()
        }
        throw await response.json()
    })
    .catch(err => {
        mainElement.innerText = err.message
    })

    if(user) {
        mainElement.innerText = 'Bonjour ' + user.username
    } else {
        mainElement.innerText = 'Vous n\'êtes pas connecté(e) à un compte'
    } 

    logoutBtn.addEventListener('click', () => {
        sessionStorage.clear();
        document.location.href="/"
    })

    const displayPosts = await fetch('/users/recentposts')
    .then(response => {
        if(response.ok) {
            console.log(response);
        } else {
            console.error('trouve pas les posts');
        }
    })
})