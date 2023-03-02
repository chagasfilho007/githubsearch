import axios from 'axios'

const BASE_URL = 'https://api.github.com'

function searchUsersByName(name) {
    return axios.get(`${BASE_URL}/search/users?q=${name}&page=1`)
}

function findUserByLogin(login) {
    return axios.get(`${BASE_URL}/users/${login}`)
}

function findReposByLogin(login) {
    return axios.get(`${BASE_URL}/users/${login}/repos`)
}

export {searchUsersByName, findUserByLogin, findReposByLogin}