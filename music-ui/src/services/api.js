import axios from 'axios'

const base = "http://localhost:5001"

const instance = axios.create({
    baseURL: 'http://localhost:5001/',
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'}
});
export const getAlbums = (params)=>{
    return instance.get('/albums', params)
}

export const getArtists = (params)=>{
    return instance.get('/artists', params)
}

export const getSongs = (params)=>{
    return instance.get('/songs', params)
}
