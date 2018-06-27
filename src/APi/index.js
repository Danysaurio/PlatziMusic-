import config from './config'
const { apiKey } = config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`; 

export default function getArtist(){
   return fetch(URL)
      //= esto nos devuelve otra promesa
     .then(res => res.json())
     .then(json => json.topartists.artist);
}