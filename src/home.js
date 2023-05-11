import { getCaracteres ,getCaracter } from "./services/getData.js";

const container = document.querySelector('#characters')

const loader = document.getElementById('lds-ring')

const  caracterList = async (page = 1) => {
    loader.style.display = 'grid'

    const resultados  = await getCaracteres(page)

    loader.style.display = 'none'

    resultados.forEach(character => {
        const article = document.createElement('article')
        article.setAttribute('class' , 'character')
        article.innerHTML = `
                        <img src="${character.image}" alt="">
                        <h2>${character.name}</h2>
                        <div>
                            <p>${character.species}</p>
                            <p class="${character.status.toLowerCase()}"></p>
                        </div>
                        <a href="/#/${character.id}">Ver Detalle</a>
        `;
        container.appendChild(article)
    });
}

caracterList