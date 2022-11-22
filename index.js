const prestationsBoxContainer = document.querySelector('.prestations__box--container')
//Boutons
const forfaits = document.querySelector('#forfaits')
const soins = document.querySelector('#soins')
const couleurs = document.querySelector('#couleurs')
const autres = document.querySelector('#autres')



prestationsBoxContainer.innerHTML =
`
<h3>NOS FORFAITS COIFFURE</h3>
    <p class="coiffure-infos">Chez Jane Doe coiffure à Nice, nous respectons vos cheveux et adaptons nos techniques aux diverses textures de cheveux.
        <br>Cheveux fins, épais, bouclés ou lisses, vous trouverez votre bonheur parmis nos diverses prestations.
        <br>Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
    </p>
    <div class="container">
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux courts</p>
                <span></span>
                <p>35€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux mi-longs</p>
            <span></span>
            <p>45€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux longs</p>
            <span></span>
            <p>50€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe Homme</p>
            <span></span>
            <p>25€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe enfant</p>
            <span></span>
            <p>25€</p>
        </div>
    </div>
`

forfaits.addEventListener('click', () => {
    prestationsBoxContainer.innerHTML =
    `
    <h3>NOS FORFAITS COIFFURE</h3>
    <p class="coiffure-infos">Chez Jane Doe coiffure à Nice, nous respectons vos cheveux et adaptons nos techniques aux diverses textures de cheveux.
        <br>Cheveux fins, épais, bouclés ou lisses, vous trouverez votre bonheur parmis nos diverses prestations.
        <br>Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
    </p>
    <div class="container">
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux courts</p>
                <span></span>
                <p>35€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux mi-longs</p>
            <span></span>
            <p>45€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe femme cheveux longs</p>
            <span></span>
            <p>50€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe Homme</p>
            <span></span>
            <p>25€</p>
        </div>
        <div class="prestations__infos">
            <p>Forfait coupe enfant</p>
            <span></span>
            <p>25€</p>
        </div>
    </div>
    `
})

soins.addEventListener('click', () => {
    prestationsBoxContainer.innerHTML =
        `
    <h3>SOINS</h3>
    <div class="container">
                    <div class="prestations__infos">
                        <p>Detox</p>
                        <span></span>
                        <p>10€</p>
                    </div>
                    <div class="prestations__infos">
                        <p>Brillance</p>
                        <span></span>
                        <p>15€</p>
                    </div>
                    <div class="prestations__infos">
                        <p>Régénérant</p>
                        <span></span>
                        <p>10€</p>
                    </div>
                    <div class="prestations__infos">
                    <p>Énergisant</p>
                    <span></span>
                    <p>10€</p>
                </div>
                <div class="prestations__infos">
                <p>Fortifiant</p>
                <span></span>
                <p>10€</p>
            </div>
        </div>
    `
})

couleurs.addEventListener('click', () => {
    prestationsBoxContainer.innerHTML =
        `
                        <h3>COULEURS</h3>
                        <div class="container">
                        <div class="prestations__color">
                            <div class="prestations__infos">
                                <p>Coloration sur cheveux courts</p>
                                <span></span>
                                <p>25€</p>
                            </div>
                            <div class="prestations__infos">
                                <p>Coloration sur cheveux mi-longs</p>
                                <span></span>
                                <p>35€</p>
                            </div>
                            <div class="prestations__infos">
                                <p>Coloration sur cheveux longs</p>
                                <span></span>
                                <p>45€</p>
                            </div>
                            <div class="prestations__infos">
                            <p>Patine à partir de</p>
                            <span></span>
                            <p>15€</p>
                        </div>
                        <div class="prestations__infos">
                        <p>Balayage sur cheveux courts</p>
                        <span></span>
                        <p>50€</p>
                    </div>
                    <div class="prestations__infos">
                    <p>Balayage sur cheveux mi-longs</p>
                    <span></span>
                    <p>60€</p>
                </div>
            </div>
        </div>
    `
})

autres.addEventListener('click', () => {
    prestationsBoxContainer.innerHTML =
        `
    <h3>AUTRES PRESTATIONS</h3>
        <div class="container">
                    <div class="prestations__infos">
                        <p>Coiffure mariage à partir de</p>
                        <span></span>
                        <p>45€</p>
                    </div>
                    <div class="prestations__infos">
                        <p>Coupe bébé jusqu'à 3 ans</p>
                        <span></span>
                        <p>10€</p>
                    </div>
                    <div class="prestations__infos">
                        <p>Lissage brésilien</p>
                        <span></span>
                        <p>80€</p>
                    </div>
                </div>
    `
})

//Flèche pour remonter en haut de page
const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
})