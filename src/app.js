import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(error => console.error(error))
}
