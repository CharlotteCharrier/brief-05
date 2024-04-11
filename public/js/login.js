window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const registerBtn = document.querySelector('button');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); //annule l'événement par défaut du navigateur qui fait recharger la page 
        const { username, password } = Object.fromEntries(new FormData(form)); //new form data extrait les données du formulaire, object.fromEntries transforme le new formData en un objet clé/valeur (grâce au champs name dans le formulaire html, ex ça va lier name avec la valeur passée dans le champs username)

        const user = await fetch(form.action, {
            method: form.method,
            headers: {
                'content-type': 'application/json', //précise que le body qu'on envoie ua serveur contient du json
                'accept': 'application/json'
            },
            body: JSON.stringify({ //transforme les données qu'on veut envoyer dans notre requête en une string json
                username: username,
                password: password
            })
        })
        .then(async response => {
            if(response.ok) {
                return response.json()
            } 
            throw await response.json()
        })
        .catch(err => console.error(err))

        if(user) {
            sessionStorage.setItem('token', user.token) //on met tel utilisateur dans notre navigateur avec la clé 'user'. Valide que pendant une session (dès qu'on ferme le navigateur ça s'efface)
            // localStorage.setItem('user', user.id) // même principe que celui du dessus mais a une date de vie limitée en fonction du navigateur. Tant que c'est encore en marche on peut fermer et rouvrir le navigateur sans tout perdre
            document.location.href ="/" //redirige sur une autre page quand on se connecte
        }
    })

        registerBtn.addEventListener('click', () => {
            document.location.href = '/register.html'
        })
})