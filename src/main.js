//All posts (Alphabetic order)
const posts = [
    { id: 0, author: 'UsboKirishima', post: 'This is the first post!' },
];


//Website handler
document.getElementById('body-s').style.background = '#000';
function render() {
    posts.forEach(async ({ id, author, post }) => {
    document.getElementById('posts').innerHTML += `
    <div class="post">
    <h1 id="pp">${author}</h1>
    <h2 id="bb">${post}</h2>
    <hr>
    </div>
    `
    })
}
const themes = document.getElementById('button');
let darkmode = false;
function theme() {
    if(darkmode == false) {
        themes.innerHTML = 'Light';
        darkmode = true;
        document.getElementById('body-s').style.background = '#000';
        document.getElementById('pp').style.color = '#fff';
        document.getElementById('bb').style.color = '#fff';
    } else {
        themes.innerHTML = 'Dark';
        darkmode = false;
        document.getElementById('body-s').style.background = '#fff';
        document.getElementById('pp').style.color = '#000';
        document.getElementById('bb').style.color = '#000';
    }
}