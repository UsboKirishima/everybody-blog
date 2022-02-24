//All posts
const posts = [
    { id: 0, author: 'System', post: 'This is the first post!' },
    { id: 1, author: 'UsboKirishima', post: 'Hello, I\'m usbo, i like to code! Search me on discord: usbo#8613' },
    { id: 2, author: 'Thebigbot', post: 'Hello! I am thebigbot, I am an Italian Developer. (Github: https://github.com/Thebigbot0000)' },
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
