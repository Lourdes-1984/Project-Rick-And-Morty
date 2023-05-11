const baseURL = 'https://rickandmortyapi.com/api'

const getCaracter = async (id) => {
    const respuesta = await fetch(`${baseURL}/character/${id}`)
    const data = await respuesta.json()
    return data
}

const getCaracteres = async (page) => {
    const respuesta = await fetch(`${baseURL}/character/?page=${page}`)
    const data = await respuesta.json()
    return data;
}
export {getCaracter}
export{getCaracteres}