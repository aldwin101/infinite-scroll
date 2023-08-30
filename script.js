const { api_key } = require("./config");

// API url
const count = 10;
const apiKey = api_key;
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error
    }
}

// On load
getPhotos();