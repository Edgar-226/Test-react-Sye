import axios from "axios";

var RickAndMortyApi = "https://rickandmortyapi.com/api";


export async function getCharacters() {
    return await axios.get(`${RickAndMortyApi}/character`)
}

export async function getLocation() {
    return await axios.get(`${RickAndMortyApi}/location`)
}

export async function getEpisode() {
    return  await axios.get(`${RickAndMortyApi}/episode`)
} 