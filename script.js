function toogle() {
    const nav = document.getElementById('nav');
    if (nav.style.display !== 'none') nav.style.display = 'none';
    else nav.style.display = 'flex'
}
let anchor1 = document.getElementsById('hamb');
anchor1.onclick = toogle();
let anchor2 = document.getElementById('hamb1');
anchor2.onclick = toogle();